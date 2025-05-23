
export const forumCategories = [
  {
    id: 1,
    name: "General Discussion",
    description: "General topics related to smart tourism and hospitality",
    icon: "MessageSquare"
  },
  {
    id: 2,
    name: "Technology Trends",
    description: "Discussions on the latest technology in tourism",
    icon: "Cpu"
  },
  {
    id: 3,
    name: "AI in Hospitality",
    description: "Artificial intelligence applications in hospitality",
    icon: "Brain"
  },
  {
    id: 4,
    name: "Virtual Reality",
    description: "VR applications in tourism marketing",
    icon: "Headset"
  },
  {
    id: 5,
    name: "Data Analytics",
    description: "Using data to enhance tourism services",
    icon: "BarChart"
  },
  {
    id: 6,
    name: "Sustainable Tourism",
    description: "Discussions on eco-friendly tourism practices",
    icon: "Leaf"
  },
  {
    id: 7,
    name: "Job Opportunities",
    description: "Career discussions and job postings",
    icon: "Briefcase"
  },
  {
    id: 8,
    name: "Course Help",
    description: "Questions and assistance with courses",
    icon: "HelpCircle"
  }
];

export const forumTopics = [
  {
    id: 1,
    title: "How will AI transform guest experiences in the future?",
    author: "Maria Johnson",
    authorRole: "Student",
    date: "2023-06-15",
    replies: 8,
    views: 245,
    category: "AI in Hospitality",
    content: "I've been studying the AI-Powered Customer Experience course and I'm curious about everyone's thoughts on how AI will continue to transform guest experiences in hotels and resorts over the next 5-10 years. What innovations do you think will have the biggest impact?",
    isFeatured: true,
    comments: [
      {
        id: 101,
        author: "Dr. Michael Chen",
        authorRole: "Facilitator",
        date: "2023-06-15",
        content: "Great question, Maria! I believe personalized recommendations and predictive services will become standard. AI will predict guest needs before they even express them, from room temperature preferences to activity recommendations tailored to real-time weather and guest mood analysis."
      },
      {
        id: 102,
        author: "James Wilson",
        authorRole: "Student",
        date: "2023-06-16",
        content: "I think voice-activated room controls will become much more sophisticated. Instead of simple commands, we'll have natural conversations with our room's AI, which will learn our preferences over time."
      }
    ]
  },
  {
    id: 2,
    title: "Best VR tools for creating virtual hotel tours",
    author: "Alex Thompson",
    authorRole: "Student",
    date: "2023-06-10",
    replies: 12,
    views: 310,
    category: "Virtual Reality",
    content: "I'm working on a project to create virtual tours for some of the hotels in Plateau State. Has anyone had experience with different VR creation tools? I'm trying to decide between Matterport, 3DVista, and some other options. What would you recommend for a beginner with a moderate budget?",
    isFeatured: false,
    comments: [
      {
        id: 201,
        author: "Emma Rodriguez",
        authorRole: "Facilitator",
        date: "2023-06-10",
        content: "Hi Alex, I've used both Matterport and 3DVista extensively. For beginners, I'd recommend starting with Matterport because of its user-friendly interface and good support. The basic package is reasonably priced and sufficient for hotel tours. Feel free to message me if you need specific guidance!"
      }
    ]
  },
  {
    id: 3,
    title: "Implementing contactless check-in systems in small hotels",
    author: "Samuel Adebayo",
    authorRole: "Student",
    date: "2023-06-08",
    replies: 15,
    views: 287,
    category: "Technology Trends",
    content: "I'm a small hotel owner in Jos and I'm looking to implement a contactless check-in system after learning about it in the Smart Hotel Management course. My hotel has only 15 rooms, and I'm concerned about the cost-effectiveness. Has anyone implemented such a system in a smaller property? What solutions worked for you?",
    isFeatured: true,
    comments: [
      {
        id: 301,
        author: "Lisa Anderson",
        authorRole: "Facilitator",
        date: "2023-06-08",
        content: "Samuel, for smaller properties I recommend cloud-based solutions like Cloudbeds or Little Hotelier. They offer contactless check-in modules that are quite affordable for small properties. The ROI comes quickly through staff time savings and improved guest satisfaction. I've helped several small hotels in Nigeria implement these systems successfully."
      },
      {
        id: 302,
        author: "Mercy Okonkwo",
        authorRole: "Student",
        date: "2023-06-09",
        content: "I implemented a QR code-based system in my 12-room guesthouse in Kaduna last year. It cost about ₦150,000 to set up, but has already paid for itself. Guests love the convenience, and it's reduced our front desk staffing needs. Happy to share more details if you're interested."
      }
    ]
  },
  {
    id: 4,
    title: "Data privacy concerns in smart tourism applications",
    author: "Priya Sharma",
    authorRole: "Student",
    date: "2023-06-05",
    replies: 9,
    views: 198,
    category: "Data Analytics",
    content: "I'm currently taking the Cybersecurity & Data Privacy course, and I'm concerned about how we balance the collection of guest data for personalization while respecting privacy regulations. With Nigeria's data protection regulations evolving, what specific steps should tourism businesses in Plateau State take to ensure compliance?",
    isFeatured: false,
    comments: [
      {
        id: 401,
        author: "Dr. Kevin Smith",
        authorRole: "Facilitator",
        date: "2023-06-05",
        content: "This is a critical question, Priya. Nigeria's Data Protection Regulation (NDPR) requires explicit consent for data collection. I recommend implementing clear opt-in procedures, creating comprehensive privacy policies, and establishing data retention schedules. Also, consider conducting regular data protection impact assessments. In next week's module, we'll be covering this topic in detail with specific examples relevant to Plateau State."
      }
    ]
  },
  {
    id: 5,
    title: "Showcasing Plateau State's cultural heritage through AR",
    author: "Daniel Musa",
    authorRole: "Student",
    date: "2023-06-01",
    replies: 18,
    views: 342,
    category: "Virtual Reality",
    content: "I'm working on a project to showcase the rich cultural heritage of Plateau State using augmented reality. Specifically, I want to create AR experiences for the National Museum in Jos and some key historical sites. Has anyone worked on similar projects? What AR development platforms would you recommend for cultural heritage applications?",
    isFeatured: true,
    comments: [
      {
        id: 501,
        author: "Prof. James Wilson",
        authorRole: "Facilitator",
        date: "2023-06-02",
        content: "Daniel, this sounds like a fantastic project! For cultural heritage applications, I've had success with Unity + Vuforia for more complex experiences and ARCore (Android) or ARKit (iOS) for simpler implementations. Consider creating 3D models of artifacts that visitors can 'place' in their environment, or historical overlays that show how sites looked in the past when viewed through a smartphone. The Jos Museum has such rich collections that would benefit tremendously from AR interpretation."
      },
      {
        id: 502,
        author: "Fatima Ibrahim",
        authorRole: "Student",
        date: "2023-06-03",
        content: "I did something similar for the Argungu Fishing Festival in Kebbi State. We used Artivive, which is relatively easy for beginners and has good documentation. It allowed us to bring historical photos to life when visitors scanned them. I'd be happy to collaborate if you're interested."
      }
    ]
  }
];
