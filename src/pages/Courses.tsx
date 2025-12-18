import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Cpu, Search, Filter } from "lucide-react";
import Carousel1 from "@/assets/Carosel_1.jpeg";
import Carousel2 from "@/assets/Carosel_2.jpeg";
import Carousel3 from "@/assets/Carosel_3.jpg";

const Courses = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: Carousel1,
      title: "Explore Our Courses",
      description:
        "Discover world-class AI and technology courses tailored for the African context.",
    },
    {
      image: Carousel2,
      title: "Master AI Skills",
      description:
        "Learn from industry experts and academic professionals at the forefront of innovation.",
    },
    {
      image: Carousel3,
      title: "Shape the Future",
      description:
        "Join thousands of learners building Africa's digital infrastructure through education.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Mock data extended from Index.tsx
  const allCourses = [
    {
      id: 1,
      title: "African AI: Foundations and Applications",
      instructor: "Dr. Nnamdi Azikiwe",
      image:
        "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      students: 600,
      category: "AI & ML",
    },
    {
      id: 2,
      title: "Machine Learning for African Development",
      instructor: "Prof. Amina Mohammed",
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      students: 750,
      category: "Data Science",
    },
    {
      id: 3,
      title: "Data Science: African Case Studies",
      instructor: "Dr. Kofi Annan",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      students: 520,
      category: "Data Science",
    },
    {
      id: 4,
      title: "Python for Data Analysis",
      instructor: "Sarah Johnson",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      students: 430,
      category: "Programming",
    },
    {
      id: 5,
      title: "Natural Language Processing in Local Languages",
      instructor: "Kwame Nkrumah",
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      students: 310,
      category: "AI & ML",
    },
    {
      id: 6,
      title: "Computer Vision for Agriculture",
      instructor: "Dr. Wangari Maathai",
      image:
        "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      students: 280,
      category: "AI & ML",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
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
                animate={
                  currentSlide === index
                    ? { y: 0, opacity: 1 }
                    : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
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

      {/* Search and Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                    {course.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    by {course.instructor}
                  </p>

                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-medium">{course.rating}</span>
                        <span className="text-gray-400 text-sm">
                          ({course.students})
                        </span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => navigate("/login")}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} African Intelligence LMS. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
