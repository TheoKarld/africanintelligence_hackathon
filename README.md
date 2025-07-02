
# African Intelligence LMS - API Documentation

## Project info


## How can I edit this code?

There are several ways of editing your application.


**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Node.js/Express (Backend)
- MongoDB (Database)
- Socket.IO (Real-time communication)

---

# API Documentation

## Base URL
```
Production: https://africanapi.karldworld.xyz/api
Development: http://localhost:7000/api
```

## Authentication
All protected routes require the `x-auth-token` header with a valid JWT token obtained from login.

---

## Authentication Module (`/api/auth`)

### User Registration
**POST** `/api/auth/register`

**Payload:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student", // "student", "facilitator", "admin"
  "phone": "+1234567890" // optional
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### User Login
**POST** `/api/auth/login`

**Payload:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student",
    "enrolledCourses": ["course_id_1", "course_id_2"]
  }
}
```

### Get Current User
**GET** `/api/auth/me`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "student",
  "enrolledCourses": ["course_id_1"],
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---

## Course Management Module (`/api/courses`)

### Get All Published Courses
**GET** `/api/courses`

**Query Parameters:**
- `search` (optional): Search term for course title/description
- `category` (optional): Filter by category
- `page` (optional): Page number for pagination
- `limit` (optional): Number of courses per page

**Response:**
```json
{
  "courses": [
    {
      "_id": "course_id",
      "key": "course-unique-key",
      "title": "Introduction to Agriculture",
      "description": "Learn the basics of modern agriculture",
      "category": "Agriculture",
      "facilitator": "facilitator_id",
      "facilitatorName": "Dr. Smith",
      "status": "published",
      "enrolled": 25,
      "rating": 4.5,
      "duration": "6 weeks",
      "modules": [
        {
          "_id": "module_id",
          "title": "Module 1: Soil Science",
          "description": "Understanding soil composition",
          "order": 1,
          "content": [
            {
              "_id": "content_id",
              "title": "Soil Types",
              "type": "video",
              "url": "video_url",
              "duration": 15
            }
          ]
        }
      ],
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalCourses": 50,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Get Course by ID
**GET** `/api/courses/:courseId`

**Response:**
```json
{
  "_id": "course_id",
  "key": "course-unique-key",
  "title": "Introduction to Agriculture",
  "description": "Learn the basics of modern agriculture",
  "category": "Agriculture",
  "facilitator": "facilitator_id",
  "facilitatorName": "Dr. Smith",
  "status": "published",
  "enrolled": 25,
  "rating": 4.5,
  "duration": "6 weeks",
  "modules": [
    {
      "_id": "module_id",
      "title": "Module 1: Soil Science",
      "description": "Understanding soil composition",
      "order": 1,
      "content": [
        {
          "_id": "content_id",
          "title": "Soil Types",
          "type": "video",
          "url": "video_url",
          "duration": 15
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "What are the main soil types?",
            "options": ["Clay", "Sand", "Loam", "All of the above"],
            "correctAnswer": 3
          }
        ]
      }
    }
  ],
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### Create New Course
**POST** `/api/courses`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Payload:**
```json
{
  "title": "Introduction to Agriculture",
  "description": "Learn the basics of modern agriculture",
  "category": "Agriculture",
  "duration": "6 weeks",
  "status": "draft", // "draft" or "published"
  "modules": [
    {
      "title": "Module 1: Soil Science",
      "description": "Understanding soil composition",
      "order": 1,
      "content": [
        {
          "title": "Soil Types",
          "type": "video",
          "url": "video_url",
          "duration": 15
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "What are the main soil types?",
            "options": ["Clay", "Sand", "Loam", "All of the above"],
            "correctAnswer": 3
          }
        ]
      }
    }
  ]
}
```

**Response:**
```json
{
  "message": "Course created successfully",
  "course": {
    "_id": "course_id",
    "key": "course-unique-key",
    "title": "Introduction to Agriculture",
    "facilitator": "facilitator_id",
    "status": "draft",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Update Course
**PUT** `/api/courses/:courseId`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Payload:** Same as create course payload

**Response:**
```json
{
  "message": "Course updated successfully",
  "course": {
    "_id": "course_id",
    "title": "Updated Course Title",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Rate Course
**POST** `/api/courses/:courseId/rate`

**Headers:** `x-auth-token: jwt_token`

**Payload:**
```json
{
  "rating": 5,
  "comment": "Excellent course!"
}
```

**Response:**
```json
{
  "message": "Rating submitted successfully",
  "averageRating": 4.7,
  "totalRatings": 15
}
```

### Get Course Ratings
**GET** `/api/courses/:courseId/ratings`

**Response:**
```json
{
  "ratings": [
    {
      "_id": "rating_id",
      "studentId": "student_id",
      "studentName": "John Doe",
      "rating": 5,
      "comment": "Excellent course!",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "averageRating": 4.7,
  "totalRatings": 15
}
```

---

## Student/Learner Module (`/api/learner`)

### Get Enrolled Courses
**GET** `/api/learner/courses`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "enrolledCourses": [
    {
      "_id": "course_id",
      "title": "Introduction to Agriculture",
      "facilitatorName": "Dr. Smith",
      "progress": 65,
      "lastAccessed": "2024-01-01T00:00:00.000Z",
      "moduleProgress": [
        {
          "moduleId": "module_id",
          "completed": true,
          "completedAt": "2024-01-01T00:00:00.000Z"
        }
      ]
    }
  ]
}
```

### Get Course with Progress
**GET** `/api/learner/courses/:courseId`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "course": {
    "_id": "course_id",
    "title": "Introduction to Agriculture",
    "modules": [
      {
        "_id": "module_id",
        "title": "Module 1: Soil Science",
        "content": [
          {
            "_id": "content_id",
            "title": "Soil Types",
            "type": "video",
            "completed": true
          }
        ]
      }
    ]
  },
  "progress": 65,
  "moduleProgress": [
    {
      "moduleId": "module_id",
      "completed": true,
      "completedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Enroll in Course
**POST** `/api/learner/courses/:courseId/enroll`

**Headers:** `x-auth-token: jwt_token`

**Payload:**
```json
{
  "courseId": "course_id"
}
```

**Response:**
```json
{
  "message": "Successfully enrolled in course",
  "enrollment": {
    "_id": "enrollment_id",
    "studentId": "student_id",
    "courseId": "course_id",
    "enrolledAt": "2024-01-01T00:00:00.000Z",
    "progress": 0
  }
}
```

### Update Course Progress
**PUT** `/api/learner/courses/:courseId/progress`

**Headers:** `x-auth-token: jwt_token`

**Payload:**
```json
{
  "moduleId": "module_id",
  "contentId": "content_id",
  "completed": true
}
```

**Response:**
```json
{
  "message": "Progress updated successfully",
  "progress": 75,
  "moduleProgress": [
    {
      "moduleId": "module_id",
      "completed": true,
      "completedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Track Video Watch Time
**POST** `/api/learner/courses/:courseId/watch-time`

**Headers:** `x-auth-token: jwt_token`

**Payload:**
```json
{
  "moduleId": "module_id",
  "contentId": "content_id",
  "watchTime": 300,
  "duration": 900
}
```

**Response:**
```json
{
  "message": "Watch time tracked successfully",
  "watchedPercentage": 33.3
}
```

### Get Learning Stats
**GET** `/api/learner/stats`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "totalCourses": 5,
  "completedCourses": 2,
  "inProgressCourses": 3,
  "totalWatchTime": 1200,
  "averageProgress": 45.5,
  "achievements": [
    {
      "title": "First Course Completed",
      "description": "Completed your first course",
      "earnedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Check Enrollment Status
**GET** `/api/learner/courses/:courseId/status`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "isEnrolled": true,
  "enrollmentDate": "2024-01-01T00:00:00.000Z",
  "progress": 65
}
```

---

## Facilitator Module (`/api/facilitator`)

### Get Facilitator Dashboard Stats
**GET** `/api/facilitator/dashboard`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Response:**
```json
{
  "totalCourses": 10,
  "activeCourses": 7,
  "draftCourses": 3,
  "totalStudents": 150,
  "totalEnrollments": 200,
  "averageRating": 4.5,
  "recentActivity": [
    {
      "type": "enrollment",
      "courseName": "Introduction to Agriculture",
      "studentName": "John Doe",
      "timestamp": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Get All Facilitator Courses
**GET** `/api/facilitator/courses`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Response:**
```json
{
  "courses": [
    {
      "_id": "course_id",
      "title": "Introduction to Agriculture",
      "status": "published",
      "enrolled": 25,
      "rating": 4.5,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "lastUpdated": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Get Draft Courses
**GET** `/api/facilitator/courses/drafts`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Response:**
```json
{
  "draftCourses": [
    {
      "_id": "course_id",
      "title": "Advanced Agriculture Techniques",
      "status": "draft",
      "progress": 75,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Move Course to Draft
**POST** `/api/facilitator/courses/draft/:courseId`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Response:**
```json
{
  "message": "Course moved to draft successfully",
  "course": {
    "_id": "course_id",
    "status": "draft"
  }
}
```

### Delete Course
**DELETE** `/api/facilitator/courses/:courseId`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Response:**
```json
{
  "message": "Course deleted successfully"
}
```

### Get Course Students
**GET** `/api/facilitator/courses/:courseId/students`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Response:**
```json
{
  "students": [
    {
      "_id": "student_id",
      "name": "John Doe",
      "email": "john@example.com",
      "enrolledAt": "2024-01-01T00:00:00.000Z",
      "progress": 65,
      "lastActive": "2024-01-01T00:00:00.000Z"
    }
  ],
  "totalStudents": 25
}
```

### Get Course Analytics
**GET** `/api/facilitator/courses/:courseId/analytics`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Response:**
```json
{
  "courseId": "course_id",
  "title": "Introduction to Agriculture",
  "totalEnrollments": 25,
  "completionRate": 60,
  "averageProgress": 45.5,
  "averageRating": 4.5,
  "moduleAnalytics": [
    {
      "moduleId": "module_id",
      "title": "Module 1: Soil Science",
      "completionRate": 80,
      "averageTimeSpent": 1200
    }
  ],
  "enrollmentTrends": [
    {
      "date": "2024-01-01",
      "enrollments": 3
    }
  ]
}
```

### Get All Enrolled Students
**GET** `/api/facilitator/students`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Response:**
```json
{
  "students": [
    {
      "_id": "student_id",
      "name": "John Doe",
      "email": "john@example.com",
      "enrolledCourses": [
        {
          "courseId": "course_id",
          "courseTitle": "Introduction to Agriculture",
          "progress": 65
        }
      ],
      "totalProgress": 45.5
    }
  ],
  "totalStudents": 150
}
```

---

## Forum Module (`/api/forum`)

### Get Community Forum Posts
**GET** `/api/forum/community`

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Posts per page
- `category` (optional): Filter by category

**Response:**
```json
{
  "posts": [
    {
      "_id": "post_id",
      "title": "Best practices for organic farming",
      "content": "I've been practicing organic farming for 5 years...",
      "author": {
        "_id": "author_id",
        "name": "John Farmer",
        "avatar": "avatar_url"
      },
      "category": "Agriculture",
      "likes": 15,
      "comments": 8,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "lastActivity": "2024-01-01T00:00:00.000Z"
    }
  ],
  "totalPages": 10,
  "currentPage": 1,
  "totalPosts": 100
}
```

### Get Course Forum Posts
**GET** `/api/forum/course/:courseId`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "posts": [
    {
      "_id": "post_id",
      "title": "Question about Module 2",
      "content": "I'm having trouble understanding...",
      "author": {
        "_id": "author_id",
        "name": "Student Name",
        "avatar": "avatar_url"
      },
      "courseId": "course_id",
      "likes": 5,
      "comments": 3,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "totalPosts": 25
}
```

### Get Single Forum Post
**GET** `/api/forum/:postId`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "_id": "post_id",
  "title": "Best practices for organic farming",
  "content": "I've been practicing organic farming for 5 years...",
  "author": {
    "_id": "author_id",
    "name": "John Farmer",
    "avatar": "avatar_url"
  },
  "courseId": "course_id",
  "likes": 15,
  "likedBy": ["user_id_1", "user_id_2"],
  "comments": [
    {
      "_id": "comment_id",
      "content": "Great insights! Thanks for sharing.",
      "author": {
        "_id": "commenter_id",
        "name": "Jane Doe"
      },
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### Create Forum Post
**POST** `/api/forum`

**Headers:** `x-auth-token: jwt_token`

**Payload:**
```json
{
  "title": "Best practices for organic farming",
  "content": "I've been practicing organic farming for 5 years...",
  "category": "Agriculture",
  "courseId": "course_id", // optional - for course-specific posts
  "tags": ["organic", "farming", "tips"]
}
```

**Response:**
```json
{
  "message": "Post created successfully",
  "post": {
    "_id": "post_id",
    "title": "Best practices for organic farming",
    "author": "author_id",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Delete Forum Post
**DELETE** `/api/forum/:postId`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "message": "Post deleted successfully"
}
```

### Add Comment to Post
**POST** `/api/forum/:postId/comments`

**Headers:** `x-auth-token: jwt_token`

**Payload:**
```json
{
  "content": "Great insights! Thanks for sharing."
}
```

**Response:**
```json
{
  "message": "Comment added successfully",
  "comment": {
    "_id": "comment_id",
    "content": "Great insights! Thanks for sharing.",
    "author": "author_id",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Delete Comment
**DELETE** `/api/forum/:postId/comments/:commentId`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "message": "Comment deleted successfully"
}
```

### Like/Unlike Post
**POST** `/api/forum/:postId/like`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "message": "Post liked successfully",
  "likes": 16,
  "isLiked": true
}
```

---

## File Upload Module (`/api/upload`)

### Upload Single File
**POST** `/api/upload`

**Headers:** `Content-Type: multipart/form-data`

**Form Data:**
- `file`: File to upload
- `fileType`: "document" | "image" | "video" | "audio"
- `userId` (optional): User ID for organization
- `xfileUrl` (optional): Previous file URL to replace

**Response:**
```json
{
  "success": true,
  "fileUrl": "https://storage.googleapis.com/bucket/file.pdf",
  "url": "https://storage.googleapis.com/bucket/file.pdf",
  "filename": "documents/2024-01-01-file.pdf",
  "type": "document",
  "size": 1024000
}
```

### Upload Multiple Files
**POST** `/api/upload/multiple`

**Headers:** `Content-Type: multipart/form-data`

**Form Data:**
- `files`: Array of files to upload
- `fileType`: "document" | "image" | "video" | "audio"
- `userId` (optional): User ID for organization

**Response:**
```json
[
  {
    "url": "https://storage.googleapis.com/bucket/file1.pdf",
    "filename": "documents/2024-01-01-file1.pdf",
    "originalname": "file1.pdf",
    "type": "document",
    "size": 1024000
  },
  {
    "url": "https://storage.googleapis.com/bucket/file2.pdf",
    "filename": "documents/2024-01-01-file2.pdf",
    "originalname": "file2.pdf",
    "type": "document",
    "size": 2048000
  }
]
```

### Delete File
**DELETE** `/api/upload/delete`

**Payload:**
```json
{
  "fileUrl": "https://storage.googleapis.com/bucket/file.pdf"
}
```

**Response:**
```json
{
  "success": true,
  "message": "File deleted successfully"
}
```

---

## Notification Module (`/api/notifications`)

### Get User Notifications
**GET** `/api/notifications`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "notifications": [
    {
      "_id": "notification_id",
      "title": "New Course Available",
      "message": "A new course has been published",
      "type": "course_update",
      "read": false,
      "data": {
        "courseId": "course_id",
        "url": "/student/courses/course_id"
      },
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Mark Notification as Read
**PUT** `/api/notifications/:notificationId/read`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "message": "Notification marked as read"
}
```

### Mark All Notifications as Read
**PUT** `/api/notifications/read-all`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "message": "All notifications marked as read",
  "count": 5
}
```

### Register Push Subscription
**POST** `/api/notifications/register`

**Headers:** `x-auth-token: jwt_token`

**Payload:**
```json
{
  "subscription": {
    "endpoint": "https://fcm.googleapis.com/fcm/send/...",
    "keys": {
      "p256dh": "key_data",
      "auth": "auth_data"
    }
  }
}
```

**Response:**
```json
{
  "message": "Subscription registered successfully"
}
```

### Subscribe to Course Notifications
**POST** `/api/notifications/subscribe/course/:courseId`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "message": "Successfully subscribed to course notifications"
}
```

### Get VAPID Public Key
**GET** `/api/notifications/vapidPublicKey`

**Response:**
```json
{
  "publicKey": "vapid_public_key_here"
}
```

---

## Chat Module (`/api/chat`)

### Get User Chats
**GET** `/api/chat`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "chats": [
    {
      "_id": "chat_id",
      "participants": [
        {
          "_id": "user_id",
          "name": "John Doe",
          "avatar": "avatar_url"
        }
      ],
      "lastMessage": {
        "content": "Hello there!",
        "timestamp": "2024-01-01T00:00:00.000Z",
        "sender": "user_id"
      },
      "unreadCount": 2
    }
  ]
}
```

### Get Chat Messages
**GET** `/api/chat/:chatId`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "messages": [
    {
      "_id": "message_id",
      "content": "Hello there!",
      "sender": {
        "_id": "sender_id",
        "name": "John Doe"
      },
      "timestamp": "2024-01-01T00:00:00.000Z",
      "read": true
    }
  ]
}
```

### Create New Chat
**POST** `/api/chat`

**Headers:** `x-auth-token: jwt_token`

**Payload:**
```json
{
  "participantId": "user_id"
}
```

**Response:**
```json
{
  "message": "Chat created successfully",
  "chat": {
    "_id": "chat_id",
    "participants": ["user_id_1", "user_id_2"],
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Send Message
**POST** `/api/chat/:chatId/messages`

**Headers:** `x-auth-token: jwt_token`

**Payload:**
```json
{
  "content": "Hello there!"
}
```

**Response:**
```json
{
  "message": "Message sent successfully",
  "messageData": {
    "_id": "message_id",
    "content": "Hello there!",
    "sender": "sender_id",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

### Get Available Users for Chat
**GET** `/api/chat/users/available`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "users": [
    {
      "_id": "user_id",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": "facilitator",
      "avatar": "avatar_url"
    }
  ]
}
```

---

## Resource Management Module (`/api/resources`)

### Get All Resources
**GET** `/api/resources`

**Headers:** `x-auth-token: jwt_token`

**Query Parameters:**
- `search` (optional): Search term
- `category` (optional): Filter by category
- `type` (optional): Filter by resource type
- `limit` (optional): Number of resources per page
- `skip` (optional): Number of resources to skip

**Response:**
```json
{
  "resources": [
    {
      "_id": "resource_id",
      "title": "Agriculture Best Practices Guide",
      "description": "Comprehensive guide for modern farming",
      "type": "document",
      "category": "Agriculture",
      "fileUrl": "https://storage.googleapis.com/bucket/guide.pdf",
      "author": "author_id",
      "tags": ["farming", "guide", "best-practices"],
      "views": 150,
      "downloads": 45,
      "status": "published",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "total": 100
}
```

### Get Resource by ID
**GET** `/api/resources/:resourceId`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "_id": "resource_id",
  "title": "Agriculture Best Practices Guide",
  "description": "Comprehensive guide for modern farming",
  "type": "document",
  "category": "Agriculture",
  "fileUrl": "https://storage.googleapis.com/bucket/guide.pdf",
  "author": {
    "_id": "author_id",
    "name": "Dr. Smith"
  },
  "tags": ["farming", "guide", "best-practices"],
  "views": 151,
  "downloads": 45,
  "status": "published",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### Download Resource
**POST** `/api/resources/:resourceId/download`

**Headers:** `x-auth-token: jwt_token`

**Response:**
```json
{
  "message": "Download tracked",
  "downloadUrl": "https://storage.googleapis.com/bucket/guide.pdf"
}
```

---

## Admin Module (`/api/admin`)

### Get All Resources (Admin)
**GET** `/api/admin/resources`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Query Parameters:**
- `search` (optional): Search term
- `category` (optional): Filter by category
- `status` (optional): Filter by status
- `type` (optional): Filter by type
- `limit` (optional): Results per page
- `skip` (optional): Results to skip

**Response:**
```json
{
  "resources": [
    {
      "_id": "resource_id",
      "title": "Agriculture Guide",
      "status": "published",
      "category": "Agriculture",
      "type": "document",
      "views": 150,
      "downloads": 45,
      "author": "author_id",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "total": 100
}
```

### Create Resource (Admin)
**POST** `/api/admin/resources`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Payload:**
```json
{
  "title": "Agriculture Best Practices Guide",
  "description": "Comprehensive guide for modern farming",
  "type": "document",
  "category": "Agriculture",
  "fileUrl": "https://storage.googleapis.com/bucket/guide.pdf",
  "tags": ["farming", "guide", "best-practices"],
  "status": "published"
}
```

**Response:**
```json
{
  "message": "Resource created successfully",
  "resource": {
    "_id": "resource_id",
    "title": "Agriculture Best Practices Guide",
    "author": "author_id",
    "status": "published",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Update Resource (Admin)
**PUT** `/api/admin/resources/:resourceId`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Payload:** Same as create resource payload

**Response:**
```json
{
  "message": "Resource updated successfully",
  "resource": {
    "_id": "resource_id",
    "title": "Updated Resource Title",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Delete Resource (Admin)
**DELETE** `/api/admin/resources/:resourceId`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Response:**
```json
{
  "message": "Resource deleted successfully"
}
```

### Get Resource Categories
**GET** `/api/admin/resource-categories`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Response:**
```json
{
  "categories": [
    {
      "_id": "category_id",
      "name": "Agriculture",
      "description": "Agricultural resources and guides",
      "resourceCount": 25,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Create Resource Category
**POST** `/api/admin/resource-categories`

**Headers:** `x-auth-token: jwt_token` (Facilitator role required)

**Payload:**
```json
{
  "name": "Agriculture",
  "description": "Agricultural resources and guides"
}
```

**Response:**
```json
{
  "message": "Category created successfully",
  "category": {
    "_id": "category_id",
    "name": "Agriculture",
    "description": "Agricultural resources and guides",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "message": "Validation error message",
  "errors": ["Field is required", "Invalid format"]
}
```

### 401 Unauthorized
```json
{
  "message": "No token provided" | "Invalid token"
}
```

### 403 Forbidden
```json
{
  "message": "Access denied. Insufficient permissions."
}
```

### 404 Not Found
```json
{
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Server error"
}
```

---

## WebSocket Events

The application uses Socket.IO for real-time communication:

### Client to Server Events:
- `user_connected`: User joins the socket connection
- `join_course`: Join a course room for updates
- `join_forum`: Join a forum room for live discussions
- `private_message`: Send private message to another user
- `course_message`: Send message in course forum
- `forum_message`: Send message in community forum

### Server to Client Events:
- `user_status`: User online/offline status updates
- `course_update`: Real-time course content updates
- `forum_update`: New forum posts and comments
- `private_message`: Receive private messages
- `notification`: Real-time notifications
- `enrollment_update`: Course enrollment changes

---

## Authentication Notes

- JWT tokens expire after 24 hours
- Tokens should be included in the `x-auth-token` header
- Role-based access control is implemented for protected routes
- Password hashing uses bcrypt with salt rounds of 10

## Database Collections

- `users`: User accounts and profiles
- `courses`: Course content and metadata
- `enrollments`: Student course enrollments
- `forum_posts`: Forum discussions
- `notifications`: User notifications
- `chats`: Private messaging
- `resources`: Learning resources
- `resource_categories`: Resource categorization
- `push_subscriptions`: Web push notification subscriptions
- `learningChats`: AI learning assistant conversations (AI endpoints excluded)

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- Authentication endpoints: 5 requests per 15 minutes
- General API endpoints: 100 requests per 15 minutes
- File upload endpoints: 10 requests per 15 minutes

## File Upload Limits

- Maximum file size: 100MB
- Supported file types: PDF, DOC, DOCX, PPT, PPTX, MP4, AVI, MP3, WAV, JPG, PNG, GIF
- Files are stored in Google Cloud Storage
- File URLs are returned for direct access