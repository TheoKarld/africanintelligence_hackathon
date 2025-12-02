# Contact Us Feature

## Overview
The Contact Us feature allows users to send messages to the administration team through a form on the website. Messages are stored in the database and optionally sent via email.

## Components

### Frontend
- **Location**: `src/pages/Contact.tsx`
- **Features**:
  - Form with fields: Name, Email, Subject, Message
  - Form validation
  - Success/error notifications
  - Responsive design with dark/light theme support
  - Animations using Framer Motion

### Backend
- **Location**: `server/routes/contactRoutes.js`
- **Endpoints**:
  - `POST /api/contact` - Submit a contact form
  - `GET /api/contact` - Get all contact messages (admin)
  - `PATCH /api/contact/:id/status` - Update message status (admin)

### Routing
- **Frontend Route**: `/contact`
- **Navigation**: Link added to footer in `Index.jsx`

## Configuration

### Email Setup (Optional)
To enable email notifications, add the following to your `.env` file in the `server` directory:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@africanintelligence.com
```

**Note**: If email is not configured, contact messages will still be saved to the database.

### Gmail App Password
If using Gmail:
1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account Settings > Security > 2-Step Verification > App passwords
3. Generate an app password for "Mail"
4. Use this app password in the `EMAIL_PASS` environment variable

## Database Schema

### contacts Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String, // 'unread', 'read', 'responded'
  createdAt: Date,
  updatedAt: Date (optional)
}
```

## Usage

### For Users
1. Navigate to the homepage
2. Scroll to the footer and click "Contact"
3. Fill out the contact form
4. Submit the form
5. Receive confirmation message

### For Administrators
Contact messages can be retrieved using the API:

```javascript
// Get all contact messages
GET /api/contact

// Update message status
PATCH /api/contact/:id/status
Body: { "status": "read" }
```

## Testing

1. Start the server:
   ```bash
   cd server
   npm start
   ```

2. Start the frontend:
   ```bash
   npm run dev
   ```

3. Navigate to `http://localhost:5173/contact`
4. Fill out and submit the form
5. Check the database for the saved message

## Future Enhancements
- Admin dashboard to view and manage contact messages
- Email templates with better styling
- Automated responses
- Spam protection (CAPTCHA)
- File attachments support
