# Contact Us Feature - Flow Diagram

## User Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER JOURNEY                             │
└─────────────────────────────────────────────────────────────────┘

1. User visits homepage (/)
   │
   ├─→ Scrolls to footer
   │
   └─→ Clicks "Contact" link
       │
       ▼
2. Navigates to /contact
   │
   ├─→ Views Contact page with form
   │
   └─→ Sees contact information (email, phone, location)
       │
       ▼
3. Fills out form
   │
   ├─→ Name: [User enters name]
   ├─→ Email: [User enters email]
   ├─→ Subject: [User enters subject]
   └─→ Message: [User enters message]
       │
       ▼
4. Clicks "Send Message" button
   │
   ├─→ Frontend validates form
   │   ├─→ If invalid: Shows error messages
   │   └─→ If valid: Continues
   │
   ▼
5. Form submission
   │
   ├─→ POST request to /api/contact
   │
   ▼
6. Backend processing
   │
   ├─→ Validates data
   ├─→ Saves to MongoDB (contacts collection)
   ├─→ Sends emails (if configured)
   │   ├─→ Admin notification email
   │   └─→ User confirmation email
   │
   ▼
7. Success response
   │
   ├─→ Shows success message
   ├─→ Displays "Message Sent!" confirmation
   └─→ Option to return to homepage
```

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      FRONTEND (React)                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Contact.tsx                                            │    │
│  │  ┌──────────────────────────────────────────────────┐  │    │
│  │  │  - Form State Management                         │  │    │
│  │  │  - Validation Logic                              │  │    │
│  │  │  - API Call (fetch)                              │  │    │
│  │  │  - Toast Notifications                           │  │    │
│  │  │  - Theme Support (light/dark)                    │  │    │
│  │  └──────────────────────────────────────────────────┘  │    │
│  │                                                          │    │
│  │  Components Used:                                       │    │
│  │  - Input (Shadcn)                                       │    │
│  │  - Textarea (Shadcn)                                    │    │
│  │  - Button (Shadcn)                                      │    │
│  │  - motion (Framer Motion)                               │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                  │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           │ HTTP POST /api/contact
                           │ { name, email, subject, message }
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND (Node.js/Express)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  server.js                                              │    │
│  │  ┌──────────────────────────────────────────────────┐  │    │
│  │  │  app.use('/api/contact', contactRoutes)          │  │    │
│  │  └──────────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────────┘    │
│                           │                                      │
│                           ▼                                      │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  routes/contactRoutes.js                                │    │
│  │  ┌──────────────────────────────────────────────────┐  │    │
│  │  │  POST /api/contact                               │  │    │
│  │  │  ├─→ Validate input                              │  │    │
│  │  │  ├─→ Save to database                            │  │    │
│  │  │  ├─→ Send emails (optional)                      │  │    │
│  │  │  └─→ Return response                             │  │    │
│  │  │                                                   │  │    │
│  │  │  GET /api/contact (admin)                        │  │    │
│  │  │  └─→ Retrieve all messages                       │  │    │
│  │  │                                                   │  │    │
│  │  │  PATCH /api/contact/:id/status (admin)           │  │    │
│  │  │  └─→ Update message status                       │  │    │
│  │  └──────────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────────┘    │
│                           │                                      │
└───────────────────────────┼──────────────────────────────────────┘
                            │
                ┌───────────┴───────────┐
                │                       │
                ▼                       ▼
    ┌─────────────────────┐  ┌──────────────────────┐
    │   MongoDB           │  │   Nodemailer         │
    │   (Database)        │  │   (Email Service)    │
    ├─────────────────────┤  ├──────────────────────┤
    │                     │  │                      │
    │  contacts {         │  │  ├─→ Admin Email    │
    │    _id,             │  │  └─→ User Email     │
    │    name,            │  │                      │
    │    email,           │  │  (Optional)          │
    │    subject,         │  │                      │
    │    message,         │  │                      │
    │    status,          │  │                      │
    │    createdAt        │  │                      │
    │  }                  │  │                      │
    └─────────────────────┘  └──────────────────────┘
```

## Data Flow

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  User    │────▶│ Frontend │────▶│ Backend  │────▶│ Database │
│  Input   │     │ Validate │     │ Process  │     │  Store   │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
                                        │
                                        ├─────────────┐
                                        ▼             ▼
                                  ┌──────────┐  ┌──────────┐
                                  │  Admin   │  │   User   │
                                  │  Email   │  │  Email   │
                                  └──────────┘  └──────────┘
```

## API Endpoints

```
POST /api/contact
├─ Request Body:
│  {
│    "name": "John Doe",
│    "email": "john@example.com",
│    "subject": "Question about courses",
│    "message": "I would like to know more..."
│  }
│
└─ Response:
   {
     "success": true,
     "message": "Your message has been received...",
     "contactId": "507f1f77bcf86cd799439011"
   }

GET /api/contact (Admin only)
└─ Response:
   {
     "success": true,
     "contacts": [
       {
         "_id": "...",
         "name": "John Doe",
         "email": "john@example.com",
         "subject": "...",
         "message": "...",
         "status": "unread",
         "createdAt": "2025-11-25T10:00:00Z"
       }
     ]
   }

PATCH /api/contact/:id/status (Admin only)
├─ Request Body:
│  {
│    "status": "read"  // or "unread", "responded"
│  }
│
└─ Response:
   {
     "success": true,
     "message": "Contact message status updated"
   }
```

## Email Flow (Optional)

```
When email is configured:

1. Contact form submitted
   │
   ▼
2. Message saved to database
   │
   ▼
3. Email service triggered
   │
   ├─→ Admin Notification Email
   │   ├─ To: admin@africanintelligence.com
   │   ├─ Subject: "New Contact Form Submission: [subject]"
   │   └─ Body: User details + message
   │
   └─→ User Confirmation Email
       ├─ To: [user's email]
       ├─ Subject: "Thank you for contacting African Intelligence"
       └─ Body: Confirmation message + copy of their message
```

## Error Handling

```
┌─────────────────────────────────────────────────────────────┐
│                    Error Scenarios                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Frontend Validation Errors:                                │
│  ├─→ Empty fields → "Field is required"                     │
│  ├─→ Invalid email → "Please enter a valid email"           │
│  └─→ Short message → "Message must be at least 10 chars"    │
│                                                              │
│  Backend Errors:                                             │
│  ├─→ Missing fields → 400 "All fields are required"         │
│  ├─→ Invalid email → 400 "Invalid email format"             │
│  ├─→ Database error → 500 "Failed to process message"       │
│  └─→ Email error → Logged but doesn't fail request          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```
