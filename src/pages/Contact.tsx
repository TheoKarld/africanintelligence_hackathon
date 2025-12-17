import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTourLMS } from "../contexts/TourLMSContext";
import Carousel1 from "@/assets/Carosel_1.jpeg";
import Carousel2 from "@/assets/Carosel_2.jpeg";
import Carousel3 from "@/assets/Carosel_3.jpg";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { API_URL } = useTourLMS();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { image: Carousel1, alt: "Contact Us" },
    { image: Carousel2, alt: "Get in Touch" },
    { image: Carousel3, alt: "Reach Out" },
  ];

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });

        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast({
          title: "Failed to send message",
          description: data.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending contact message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-amber-50/50" : "bg-slate-900"
      }`}
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
              src={slide.image}
              alt={slide.alt}
              className="object-cover w-full h-full"
            />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Have questions or feedback? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-amber-500" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2
                  className={`text-2xl font-bold ${
                    theme === "light" ? "text-amber-800" : "text-amber-500"
                  } mb-6`}
                >
                  Contact Information
                </h2>
                <p
                  className={`${
                    theme === "light" ? "text-slate-600" : "text-white"
                  } mb-8`}
                >
                  Reach out to us through any of these channels. We're here to
                  help you on your learning journey.
                </p>
              </div>

              <div className="space-y-6">
                <div
                  className={`flex items-start space-x-4 p-4 rounded-lg ${
                    theme === "light"
                      ? "bg-white border border-amber-200"
                      : "bg-slate-800 border border-gold-300/20"
                  }`}
                >
                  <Mail
                    className={`h-6 w-6 ${
                      theme === "light" ? "text-amber-600" : "text-amber-500"
                    } flex-shrink-0 mt-1`}
                  />
                  <div>
                    <h3
                      className={`font-semibold ${
                        theme === "light" ? "text-amber-800" : "text-amber-500"
                      } mb-1`}
                    >
                      Email
                    </h3>
                    <p
                      className={`${
                        theme === "light" ? "text-slate-600" : "text-white"
                      }`}
                    >
                      support@africanintelligence.com
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start space-x-4 p-4 rounded-lg ${
                    theme === "light"
                      ? "bg-white border border-amber-200"
                      : "bg-slate-800 border border-gold-300/20"
                  }`}
                >
                  <Phone
                    className={`h-6 w-6 ${
                      theme === "light" ? "text-amber-600" : "text-amber-500"
                    } flex-shrink-0 mt-1`}
                  />
                  <div>
                    <h3
                      className={`font-semibold ${
                        theme === "light" ? "text-amber-800" : "text-amber-500"
                      } mb-1`}
                    >
                      Phone
                    </h3>
                    <p
                      className={`${
                        theme === "light" ? "text-slate-600" : "text-white"
                      }`}
                    >
                      +234 000 000 0000
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start space-x-4 p-4 rounded-lg ${
                    theme === "light"
                      ? "bg-white border border-amber-200"
                      : "bg-slate-800 border border-gold-300/20"
                  }`}
                >
                  <MapPin
                    className={`h-6 w-6 ${
                      theme === "light" ? "text-amber-600" : "text-amber-500"
                    } flex-shrink-0 mt-1`}
                  />
                  <div>
                    <h3
                      className={`font-semibold ${
                        theme === "light" ? "text-amber-800" : "text-amber-500"
                      } mb-1`}
                    >
                      Location
                    </h3>
                    <p
                      className={`${
                        theme === "light" ? "text-slate-600" : "text-white"
                      }`}
                    >
                      African Intelligence HQ
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div
                className={`p-8 rounded-xl shadow-lg ${
                  theme === "light"
                    ? "bg-white border border-amber-200"
                    : "bg-slate-800 border border-gold-300/20"
                }`}
              >
                {isSuccess ? (
                  <div className="text-center py-12">
                    <CheckCircle
                      className={`h-16 w-16 ${
                        theme === "light" ? "text-amber-600" : "text-amber-500"
                      } mx-auto mb-4`}
                    />
                    <h3
                      className={`text-2xl font-bold ${
                        theme === "light" ? "text-amber-800" : "text-amber-500"
                      } mb-2`}
                    >
                      Message Sent!
                    </h3>
                    <p
                      className={`${
                        theme === "light" ? "text-slate-600" : "text-white"
                      } mb-6`}
                    >
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                    <Button
                      onClick={() => navigate("/")}
                      className={`${
                        theme === "light"
                          ? "bg-amber-600 hover:bg-amber-700"
                          : "bg-amber-500 hover:bg-amber-600"
                      } text-white`}
                    >
                      Back to Home
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium ${
                          theme === "light"
                            ? "text-amber-800"
                            : "text-amber-500"
                        } mb-2`}
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`${
                          theme === "light"
                            ? "bg-amber-50 border-amber-200 text-amber-800"
                            : "bg-slate-700 border-slate-600 text-white"
                        } ${errors.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium ${
                          theme === "light"
                            ? "text-amber-800"
                            : "text-amber-500"
                        } mb-2`}
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`${
                          theme === "light"
                            ? "bg-amber-50 border-amber-200 text-amber-800"
                            : "bg-slate-700 border-slate-600 text-white"
                        } ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className={`block text-sm font-medium ${
                          theme === "light"
                            ? "text-amber-800"
                            : "text-amber-500"
                        } mb-2`}
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className={`${
                          theme === "light"
                            ? "bg-amber-50 border-amber-200 text-amber-800"
                            : "bg-slate-700 border-slate-600 text-white"
                        } ${errors.subject ? "border-red-500" : ""}`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium ${
                          theme === "light"
                            ? "text-amber-800"
                            : "text-amber-500"
                        } mb-2`}
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className={`${
                          theme === "light"
                            ? "bg-amber-50 border-amber-200 text-amber-800"
                            : "bg-slate-700 border-slate-600 text-white"
                        } ${errors.message ? "border-red-500" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full ${
                        theme === "light"
                          ? "bg-amber-600 hover:bg-amber-700"
                          : "bg-amber-500 hover:bg-amber-600"
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
