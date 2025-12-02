# Quick Start Guide - Contact Us Feature

## 🚀 Quick Test (5 Minutes)

### Step 1: Start the Backend Server
```bash
cd server
npm start
```

Expected output:
```
Connected to MongoDB
Server running on port 8080
```

### Step 2: Start the Frontend (New Terminal)
```bash
# From the project root
npm run dev
```

Expected output:
```
VITE v5.x.x ready in xxx ms
➜ Local: http://localhost:5173/
```

### Step 3: Test the Contact Form

1. **Open your browser**: Navigate to `http://localhost:5173/`

2. **Go to Contact page**:
   - Scroll to the bottom of the homepage
   - Click the "Contact" link in the footer
   - OR directly visit: `http://localhost:5173/contact`

3. **Fill out the form**:
   ```
   Name: Test User
   Email: test@example.com
   Subject: Testing Contact Form
   Message: This is a test message to verify the contact form is working correctly.
   ```

4. **Submit the form**:
   - Click "Send Message" button
   - Wait for the success message
   - You should see "Message Sent!" confirmation

5. **Verify in Database**:
   ```bash
   # Connect to MongoDB (in a new terminal)
   mongosh
   
   # Switch to your database
   use lms
   
   # View the contact message
   db.contacts.find().pretty()
   ```

   You should see your message with:
   - name: "Test User"
   - email: "test@example.com"
   - subject: "Testing Contact Form"
   - message: "This is a test message..."
   - status: "unread"
   - createdAt: [timestamp]

## 📧 Optional: Test Email Notifications

### Step 1: Configure Email (Gmail Example)

1. **Enable 2FA on your Google account**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated password

3. **Create `.env` file in `server` directory**:
   ```env
   # Copy from .env.example
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password-here
   ADMIN_EMAIL=admin@africanintelligence.com
   ```

4. **Restart the server**:
   ```bash
   # Stop the server (Ctrl+C)
   # Start it again
   npm start
   ```

### Step 2: Test Email Sending

1. Submit another contact form
2. Check both email inboxes:
   - **Admin email**: Should receive notification with user's message
   - **User email**: Should receive confirmation email

## 🧪 Test Different Scenarios

### Test 1: Form Validation
Try submitting the form with:
- ❌ Empty fields → Should show "Field is required"
- ❌ Invalid email (e.g., "test@test") → Should show "Please enter a valid email"
- ❌ Short message (< 10 chars) → Should show "Message must be at least 10 characters"

### Test 2: Success Flow
- ✅ Fill all fields correctly
- ✅ Submit form
- ✅ See success message
- ✅ Verify database entry

### Test 3: Theme Support
- 🌞 Test in light mode
- 🌙 Test in dark mode (toggle theme in app)
- Both should look good and be readable

### Test 4: Responsive Design
- 📱 Test on mobile view (resize browser)
- 💻 Test on desktop view
- 📊 Test on tablet view

## 🔍 Troubleshooting

### Issue: Server won't start
**Error**: "Cannot find module './routes/contactRoutes'"
**Solution**: Make sure all route wrapper files exist:
```bash
cd server/routes
ls *Routes.js
# Should show: authRoutes.js, courseRoutes.js, etc.
```

### Issue: Form submission fails
**Error**: "Failed to send message"
**Check**:
1. Is the backend server running?
2. Check browser console for errors (F12)
3. Check server terminal for error messages
4. Verify MongoDB is running

### Issue: Email not sending
**Note**: This is expected if email is not configured!
**Check**:
1. Is `.env` file created in `server` directory?
2. Are email credentials correct?
3. Check server logs for email errors
4. Message should still be saved to database

### Issue: Database connection error
**Error**: "Error connecting to MongoDB"
**Solution**:
1. Make sure MongoDB is running:
   ```bash
   # Check if MongoDB is running
   mongosh
   ```
2. Check `MONGO_URI` in `.env` or use default:
   ```env
   MONGO_URI=mongodb://localhost:27017/lms
   ```

## 📊 Verify Success

### ✅ Checklist
- [ ] Backend server starts without errors
- [ ] Frontend loads at http://localhost:5173
- [ ] Can navigate to /contact page
- [ ] Contact form displays correctly
- [ ] Form validation works (try invalid inputs)
- [ ] Form submission succeeds
- [ ] Success message appears
- [ ] Message saved in MongoDB
- [ ] (Optional) Emails sent successfully

### 🎯 Expected Results

**Frontend**:
- Beautiful contact form with amber/slate theme
- Smooth animations
- Clear error messages
- Success confirmation screen

**Backend**:
- Message saved in `contacts` collection
- Status: "unread"
- All fields populated correctly
- Timestamp recorded

**Database Query**:
```javascript
db.contacts.findOne({email: "test@example.com"})
```

Should return:
```javascript
{
  _id: ObjectId("..."),
  name: "Test User",
  email: "test@example.com",
  subject: "Testing Contact Form",
  message: "This is a test message...",
  status: "unread",
  createdAt: ISODate("2025-11-25T...")
}
```

## 🎉 Success!

If all checks pass, the Contact Us feature is working correctly!

## 📚 Next Steps

1. **Customize**: Update contact information in `Contact.tsx`
2. **Email**: Configure email notifications for production
3. **Admin Panel**: Build interface to view/manage messages
4. **Analytics**: Track form submissions
5. **Enhancements**: Add CAPTCHA, file uploads, etc.

## 🆘 Need Help?

Check the documentation:
- `CONTACT_FEATURE.md` - Complete feature documentation
- `IMPLEMENTATION_SUMMARY.md` - Implementation details
- `CONTACT_FLOW_DIAGRAM.md` - Visual flow diagrams

Or check the code:
- Frontend: `src/pages/Contact.tsx`
- Backend: `server/routes/contactRoutes.js`
- Server: `server/server.js`
