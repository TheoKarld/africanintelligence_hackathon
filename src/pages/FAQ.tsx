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
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel1 from "@/assets/Carosel_1.jpeg";
import Carousel2 from "@/assets/Carosel_2.jpeg";
import Carousel3 from "@/assets/Carosel_3.jpg";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left transition-all duration-300 group"
      >
        <h3
          className={`text-xl font-bold pr-8 transition-colors duration-300 ${
            isOpen ? "text-red-600" : "text-gray-900"
          }`}
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            className={`h-6 w-6 transition-colors duration-300 ${
              isOpen ? "text-red-600" : "text-gray-400"
            } group-hover:text-red-600`}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-gray-700 leading-relaxed text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
      <section className="py-24 bg-white min-h-[60vh]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-24">
            {/* General */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-12 tracking-tight">
                General
              </h2>
              <div className="border-t border-gray-100">
                <FAQItem
                  question="What is African Intelligence?"
                  answer={
                    <>
                      <p>
                        African Intelligence is an AI-powered Education
                        Intelligence Platform built for Africa’s realities. We
                        combine adaptive AI learning, local language support,
                        offline-first technology, and teacher tools to deliver
                        affordable, scalable, and inclusive education across
                        schools, vocational centers, and communities.
                      </p>
                      <p className="mt-4 font-semibold text-red-600">
                        We are not just an LMS—we are the operating system for
                        AI-driven learning and human capital development in
                        Africa.
                      </p>
                    </>
                  }
                />
                <FAQItem
                  question="Who is African Intelligence for?"
                  answer={
                    <>
                      <p className="mb-4">African Intelligence serves:</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">●</span> Students
                          preparing for WAEC, NECO, and tertiary education
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">●</span> Artisans
                          and jobseekers acquiring digital skills
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">●</span> Teachers
                          using AI to plan lessons faster
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">●</span> Schools
                          needing modern, low-cost platforms
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">●</span>{" "}
                          Governments delivering large-scale upskilling
                        </li>
                      </ul>
                    </>
                  }
                />
                <FAQItem
                  question="What problem are you solving?"
                  answer={
                    <>
                      <p className="mb-4">
                        Africa has over 100 million learners without access to
                        quality, personalized education due to:
                      </p>
                      <ul className="space-y-2 text-gray-700 mb-6 bg-red-50/50 p-4 rounded-xl border border-red-100">
                        <li>● Language barriers</li>
                        <li>● Poor internet connectivity</li>
                        <li>● High student-teacher ratios</li>
                        <li>● Expensive or foreign-focused EdTech tools</li>
                      </ul>
                      <p>
                        African Intelligence solves this by delivering
                        AI-powered learning that works offline, supports local
                        languages, and adapts to each learner—at a price
                        families and institutions can afford.
                      </p>
                    </>
                  }
                />
              </div>
            </div>

            {/* Product & Technology */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-12 tracking-tight">
                Product & Technology
              </h2>
              <div className="border-t border-gray-100">
                <FAQItem
                  question="Is African Intelligence just another LMS?"
                  answer={
                    <>
                      <p className="mb-4">
                        No. Traditional LMS platforms focus on content hosting.
                        African Intelligence focuses on learning outcomes.
                      </p>
                      <p className="font-semibold mb-3 text-red-600 underline underline-offset-4 decoration-2">
                        We provide:
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600" />{" "}
                          AI-generated adaptive assessments
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600" />{" "}
                          Voice-to-text learning in local languages
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600" />{" "}
                          Offline and low-bandwidth AI agents
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600" />{" "}
                          AI lesson planning and grading
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600" />{" "}
                          Real-time analytics
                        </li>
                      </ul>
                    </>
                  }
                />
                <FAQItem
                  question="What languages does the platform support?"
                  answer={
                    <p>
                      We currently support English and Nigerian Pidgin, with
                      Hausa, Yoruba, and Igbo voice-to-text modules being rolled
                      out. Our goal is to support African languages at scale,
                      making learning truly inclusive.
                    </p>
                  }
                />
                <FAQItem
                  question="How is AI used on the platform?"
                  answer={
                    <ul className="space-y-2 text-gray-700">
                      <li>● Personalized learning paths</li>
                      <li>● Adaptive quizzes and exam prep</li>
                      <li>● Instant feedback for students</li>
                      <li>● Automated lesson plans for teachers</li>
                      <li>● Semantic search and AI chat assistants</li>
                      <li>● Learning analytics for governments</li>
                    </ul>
                  }
                />
              </div>
            </div>

            {/* Learners & Parents */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-12 tracking-tight">
                Learners & Parents
              </h2>
              <div className="border-t border-gray-100">
                <FAQItem
                  question="How does African Intelligence help students pass WAEC/NECO?"
                  answer={
                    <div className="space-y-4">
                      <p>
                        Students receive personalized practice questions,
                        instant explanations in simple language, and study plans
                        that focus on weak areas.
                      </p>
                      <p className="p-4 bg-gray-900 text-white rounded-xl italic text-base border-l-4 border-red-600">
                        "Our pilots show 20%+ improvement in learning outcomes
                        when students use AI-guided revision consistently."
                      </p>
                    </div>
                  }
                />
                <FAQItem
                  question="Can students learn in their mother tongue?"
                  answer="Yes. Students can learn using voice-based explanations and simplified language, reducing the barrier caused by “big grammar” and unfamiliar terminology."
                />
                <FAQItem
                  question="How much does it cost?"
                  answer={
                    <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                      <p className="font-bold text-red-600 mb-4">
                        Affordable Freemium Model:
                      </p>
                      <ul className="space-y-2">
                        <li>
                          ● Students & parents:{" "}
                          <span className="font-bold">Free</span>
                        </li>
                        <li>
                          ● Schools & institutions:{" "}
                          <span className="font-bold text-gray-900">
                            ₦500–₦1,000
                          </span>{" "}
                          per student/month
                        </li>
                      </ul>
                    </div>
                  }
                />
              </div>
            </div>

            {/* Teachers & Facilitators */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-12 tracking-tight">
                Teachers & Facilitators
              </h2>
              <div className="border-t border-gray-100">
                <FAQItem
                  question="How does African Intelligence help teachers?"
                  answer="Teachers use AI to generate lesson plans in seconds, create quizzes automatically, and track student progress. This frees them to focus on mentorship, not paperwork."
                />
                <FAQItem
                  question="What is the Facilitator Program?"
                  answer="The Facilitator Program empowers youth and educators to become bridges between AI tools and learners. Facilitators gain digital skills, income opportunities, and recognition as local AI leaders."
                />
              </div>
            </div>

            {/* Impact & Traction */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-12 tracking-tight">
                Impact & Traction
              </h2>
              <div className="border-t border-gray-100">
                <FAQItem
                  question="Is African Intelligence already in use?"
                  answer={
                    <ul className="space-y-2">
                      <li>● Piloted with Mount Carmel Christian School, Jos</li>
                      <li>● 3,200+ learners across Plateau and Kaduna</li>
                      <li>● 15+ teachers onboarded</li>
                      <li className="font-black text-red-600 pt-2">
                        We are live—not theoretical.
                      </li>
                    </ul>
                  }
                />
                <FAQItem
                  question="Who supports African Intelligence?"
                  answer="Our work aligns with the missions of EU, GIZ, OACPS, and BMZ. We collaborate with institutions committed to youth, education, and digital development."
                />
              </div>
            </div>

            {/* Vision & Future */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-12 tracking-tight">
                Vision & Future
              </h2>
              <div className="border-t border-gray-100">
                <FAQItem
                  question="What is your long-term vision?"
                  answer={
                    <p className="text-2xl font-bold text-gray-900 leading-snug">
                      To become Africa’s{" "}
                      <span className="text-red-600">
                        National AI Education Infrastructure
                      </span>
                      —the operating system powering learning and workforce
                      readiness across the continent.
                    </p>
                  }
                />
                <FAQItem
                  question="How can I get involved?"
                  answer={
                    <div className="space-y-6">
                      <p>
                        You can sign up as a learner or parent, partner as a
                        school, join as a facilitator, or collaborate as a
                        donor.
                      </p>
                      <div className="text-3xl font-black text-red-600 leading-tight">
                        Let’s turn education from a debit alert into a credit
                        alert.
                      </div>
                    </div>
                  }
                />
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
