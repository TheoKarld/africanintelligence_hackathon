import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  BookOpen,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import Carousel1 from "@/assets/Carosel_1.jpeg";
import Carousel2 from "@/assets/Carosel_2.jpeg";
import Carousel3 from "@/assets/Carosel_3.jpg";

const FAQ = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: Carousel1,
      title: "Frequently Asked Questions (FAQ)",
      description:
        "Everything you need to know about African Intelligence and how we are transforming education across the continent.",
    },
    {
      image: Carousel2,
      title: "Your Knowledge Hub",
      description:
        "Get instant answers about our AI-powered features, local language support, and teacher tools.",
    },
    {
      image: Carousel3,
      title: "Empowering Your Journey",
      description:
        "Discover how we are building Africa's National AI Education Infrastructure together.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Cpu className="h-8 w-8 text-red-600 mr-2" />
            <span className="font-bold text-xl text-gray-900">
              AFRICAN INTELLIGENCE
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Sign In
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => navigate("/register")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden text-center">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
              <motion.div
                className="text-white max-w-4xl"
                initial={{ y: 30, opacity: 0 }}
                animate={currentSlide === index ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200">
                  {slide.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-red-500 w-8" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-16">
            {/* General */}
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8 pb-2 border-b-2 border-red-50">
                General
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    What is African Intelligence?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    African Intelligence is an AI-powered Education Intelligence
                    Platform built for Africa’s realities. We combine adaptive
                    AI learning, local language support, offline-first
                    technology, and teacher tools to deliver affordable,
                    scalable, and inclusive education across schools, vocational
                    centers, and communities.
                  </p>
                  <p className="text-gray-700 mt-4 font-medium">
                    We are not just an LMS—we are the operating system for
                    AI-driven learning and human capital development in Africa.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Who is African Intelligence for?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    African Intelligence serves:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      ● Students preparing for WAEC, NECO, and tertiary
                      education
                    </li>
                    <li>
                      ● Artisans and jobseekers acquiring digital and
                      future-ready skills
                    </li>
                    <li>
                      ● Teachers and facilitators using AI to plan lessons and
                      assessments faster
                    </li>
                    <li>
                      ● Schools and institutions needing a modern, low-cost
                      learning platform
                    </li>
                    <li>
                      ● Governments, NGOs, and donors delivering large-scale
                      upskilling programs
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    What problem are you solving?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Africa has over 100 million learners without access to
                    quality, personalized education due to:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>● Language barriers</li>
                    <li>● Poor internet connectivity</li>
                    <li>● High student-teacher ratios</li>
                    <li>● Expensive or foreign-focused EdTech tools</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    African Intelligence solves this by delivering AI-powered
                    learning that works offline, supports local languages, and
                    adapts to each learner—at a price families and institutions
                    can afford.
                  </p>
                </div>
              </div>
            </div>

            {/* Product & Technology */}
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8 pb-2 border-b-2 border-red-50">
                Product & Technology
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Is African Intelligence just another LMS?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    No. Traditional LMS platforms focus on content hosting.
                    African Intelligence focuses on learning outcomes.
                  </p>
                  <p className="text-gray-700 mb-2">We provide:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>● AI-generated adaptive assessments</li>
                    <li>● Voice-to-text learning in local languages</li>
                    <li>● Offline and low-bandwidth AI agents</li>
                    <li>● AI lesson planning and grading for teachers</li>
                    <li>● Real-time analytics and learner intelligence</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    This makes African Intelligence an Education Intelligence
                    Platform, not a content library.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    What languages does the platform support?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We currently support English and Nigerian Pidgin, with
                    Hausa, Yoruba, and Igbo voice-to-text modules being rolled
                    out.
                  </p>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Our long-term goal is to support African languages at scale,
                    making learning truly inclusive.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    How is AI used on the platform?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    AI powers:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>● Personalized learning paths</li>
                    <li>● Adaptive quizzes and exam prep</li>
                    <li>● Instant feedback for students</li>
                    <li>
                      ● Automated lesson plans and assessments for teachers
                    </li>
                    <li>● Semantic search and AI chat assistants</li>
                    <li>
                      ● Learning analytics for institutions and governments
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    AI is used to support humans, not replace teachers.
                  </p>
                </div>
              </div>
            </div>

            {/* Learners & Parents */}
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8 pb-2 border-b-2 border-red-50">
                Learners & Parents
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    How does African Intelligence help students pass WAEC/NECO?
                  </h3>
                  <p className="text-gray-700 mb-4">Students receive:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>● Personalized practice questions</li>
                    <li>● Instant explanations in simple language</li>
                    <li>● Adaptive difficulty based on performance</li>
                    <li>● Study plans that focus on weak areas</li>
                  </ul>
                  <p className="text-gray-700 italic">
                    Our pilots show 20%+ improvement in learning outcomes when
                    students use AI-guided revision consistently.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Can students learn in their mother tongue?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. Students can learn using voice-based explanations and
                    simplified language, reducing the barrier caused by “big
                    grammar” and unfamiliar terminology.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    How much does it cost?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We operate an affordable freemium model:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>● Students & parents: free</li>
                    <li>
                      ● Schools & institutions: ₦500–₦1,000 per student/month
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    This is less than the cost of private tutoring or data-heavy
                    platforms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Is African Intelligence safe for children?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Yes. We prioritize:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>● Secure data handling</li>
                    <li>● Child-safe AI interactions</li>
                    <li>● School-controlled learning environments</li>
                    <li>● Privacy-first design</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We comply with education and data protection best practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Teachers & Facilitators */}
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8 pb-2 border-b-2 border-red-50">
                Teachers & Facilitators
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    How does African Intelligence help teachers?
                  </h3>
                  <p className="text-gray-700 mb-4">Teachers use AI to:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>● Generate lesson plans in seconds</li>
                    <li>● Create quizzes and assessments automatically</li>
                    <li>● Track student progress in real time</li>
                    <li>● Reduce administrative workload</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    This frees teachers to focus on mentorship and engagement,
                    not paperwork.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Do teachers need advanced tech skills?
                  </h3>
                  <p className="text-gray-700">
                    No. African Intelligence is mobile-first and simple to use,
                    designed for teachers with varying levels of digital
                    literacy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    What is the Facilitator Program?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The Facilitator Program empowers youth and educators to
                    become bridges between AI tools and learners in their
                    communities.
                  </p>
                  <p className="text-gray-700 mb-2">Facilitators gain:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>● EdTech and AI experience</li>
                    <li>● Career-ready digital skills</li>
                    <li>● Income opportunities</li>
                    <li>● Recognition as local AI education leaders</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Schools, Institutions & Government */}
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8 pb-2 border-b-2 border-red-50">
                Schools, Institutions & Government
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Why should schools adopt African Intelligence?
                  </h3>
                  <p className="text-gray-700 mb-4">Schools benefit from:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>● A ready-to-deploy AI learning platform</li>
                    <li>● Local language support</li>
                    <li>● Teacher productivity tools</li>
                    <li>● Learning analytics and reporting</li>
                    <li>● Lower costs than traditional LMS platforms</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We integrate seamlessly into existing school systems.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Can African Intelligence support government programs like
                    3MTT or NELFUND?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Yes. African Intelligence is designed to act as national
                    digital learning infrastructure, supporting:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>● Large-scale upskilling programs</li>
                    <li>● Offline learning delivery</li>
                    <li>● Skill tracking and certification</li>
                    <li>● Curriculum-to-employment pipelines</li>
                  </ul>
                  <p className="text-gray-700">
                    We are actively engaging with education and labor
                    stakeholders.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Can the platform be white-labeled?
                  </h3>
                  <p className="text-gray-700">
                    Yes. State governments, institutions, and training programs
                    can deploy white-labeled versions customized to their needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact & Traction */}
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8 pb-2 border-b-2 border-red-50">
                Impact & Traction
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Is African Intelligence already in use?
                  </h3>
                  <p className="text-gray-700 mb-4">Yes.</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>● Launched beta in early 2024</li>
                    <li>● Piloted with Mount Carmel Christian School, Jos</li>
                    <li>● 3,200+ learners across Plateau and Kaduna</li>
                    <li>● 15+ teachers onboarded</li>
                    <li>● Active B2B and B2C users</li>
                  </ul>
                  <p className="font-semibold text-gray-900">
                    We are live—not theoretical.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Who supports African Intelligence?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our work aligns with the missions of:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>● EU, GIZ, OACPS, BMZ</li>
                    <li>● Education and innovation stakeholders</li>
                    <li>● African and global AI research communities</li>
                  </ul>
                  <p className="text-gray-700">
                    We collaborate with institutions committed to youth,
                    education, and digital development.
                  </p>
                </div>
              </div>
            </div>

            {/* Business & Sustainability */}
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8 pb-2 border-b-2 border-red-50">
                Business & Sustainability
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    How does African Intelligence make money?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our revenue streams include:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>● Student subscriptions</li>
                    <li>● Institutional SaaS licensing</li>
                    <li>● Enterprise training partnerships</li>
                    <li>● Education analytics and insights</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    This ensures long-term sustainability, not grant dependency.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Is the company profitable?
                  </h3>
                  <p className="text-gray-700">
                    Not yet. We are reinvesting revenue into:
                  </p>
                  <ul className="space-y-2 text-gray-700 mt-4">
                    <li>● Product development</li>
                    <li>● Language expansion</li>
                    <li>● User growth</li>
                  </ul>
                  <p className="text-gray-700 mt-4 italic">
                    Our gross margins exceed 70%, supporting strong long-term
                    economics.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision & Future */}
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8 pb-2 border-b-2 border-red-50">
                Vision & Future
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    What is your long-term vision?
                  </h3>
                  <p className="text-gray-900 font-semibold mb-2">To become:</p>
                  <p className="text-gray-700 leading-relaxed">
                    Africa’s National AI Education Infrastructure
                  </p>
                  <p className="text-gray-700 mt-2">
                    The operating system powering learning, upskilling, and
                    workforce readiness across the continent.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Why now?</h3>
                  <p className="text-gray-700 mb-2">Because:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>● Smartphones are everywhere</li>
                    <li>● Youth unemployment is rising</li>
                    <li>● Governments are investing in digital skills</li>
                    <li>● AI has reached a tipping point</li>
                  </ul>
                  <p className="text-gray-700 mt-4 font-medium uppercase tracking-wider">
                    Africa cannot afford to miss this wave.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    How can I get involved?
                  </h3>
                  <p className="text-gray-700 mb-4">You can:</p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>● Sign up as a learner or parent</li>
                    <li>● Partner as a school or institution</li>
                    <li>● Join as a facilitator</li>
                    <li>● Collaborate as a government or donor partner</li>
                  </ul>
                  <p className="text-red-600 font-bold text-lg">
                    Let’s turn education from a debit alert into a credit alert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            We're here to help. Reach out to our team for more information.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="bg-white text-red-600 hover:bg-gray-100 px-8"
          >
            Contact Support
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <Cpu className="h-6 w-6 text-red-500 mr-2" />
                <span className="font-bold text-xl uppercase">
                  African Intelligence
                </span>
              </div>
              <p className="text-gray-400">
                Empowering Africa through education, innovation, and technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Courses</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Mobile Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-gray-400 hover:text-white transition-colors font-bold text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.facebook.com/people/Bold-N-B-Creators/100093620440645/?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/results?search_query=B%26B+CREATORS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Youtube className="h-5 w-5" /> YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/B_BCreators"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" /> X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/authwall?trk=bf&trkInfo=bf&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fbold-beautiful-creators%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/b_bcreators/?igsh=ZDJsbGk3dGp6eDQ1#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://creativetechafrica.blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <BookOpen className="h-5 w-5" /> Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} African Intelligence LMS. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
