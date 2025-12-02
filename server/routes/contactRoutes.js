const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { clg } = require('./basics');

// Configure nodemailer transporter
// In production, you should use environment variables for email credentials
const createTransporter = () => {
  // Check if email credentials are configured
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
  return null;
};

// POST /api/contact - Handle contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Store contact message in database
    const db = req.app.locals.db;
    const contactsCollection = db.collection('contacts');

    const contactMessage = {
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
      status: 'unread'
    };

    const result = await contactsCollection.insertOne(contactMessage);
    clg('Contact message saved:', result.insertedId);

    // Try to send email notification if configured
    const transporter = createTransporter();
    if (transporter) {
      try {
        // Email to admin
        const adminMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `
        };

        // Confirmation email to user
        const userMailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Thank you for contacting African Intelligence',
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <p><strong>Your message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p>Best regards,<br>African Intelligence Team</p>
          `
        };

        // Send both emails
        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(userMailOptions)
        ]);

        clg('Contact emails sent successfully');
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error('Error sending contact emails:', emailError);
        clg('Email sending failed, but message was saved to database');
      }
    } else {
      clg('Email not configured. Contact message saved to database only.');
    }

    res.status(200).json({
      success: true,
      message: 'Your message has been received. We will get back to you soon!',
      contactId: result.insertedId
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process your message. Please try again later.'
    });
  }
});

// GET /api/contact - Get all contact messages (admin only)
router.get('/', async (req, res) => {
  try {
    const db = req.app.locals.db;
    const contactsCollection = db.collection('contacts');

    const contacts = await contactsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    res.status(200).json({
      success: true,
      contacts
    });

  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact messages'
    });
  }
});

// PATCH /api/contact/:id/status - Update contact message status (admin only)
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['unread', 'read', 'responded'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be unread, read, or responded'
      });
    }

    const db = req.app.locals.db;
    const contactsCollection = db.collection('contacts');
    const { ObjectId } = require('mongodb');

    const result = await contactsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact message status updated'
    });

  } catch (error) {
    console.error('Error updating contact message status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact message status'
    });
  }
});

module.exports = router;
