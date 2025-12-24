import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Award,
  Cpu,
  CheckCircle2,
  Phone,
  Globe,
  Mail,
  QrCode,
  ArrowLeft,
  Sparkles,
  CircuitBoard,
} from "lucide-react";
import { Link } from "react-router-dom";
import CampusAmbassadorsImg from "@/assets/campus_ambassadors.png";
import AfricanIntelligenceLogo from "@/assets/african_intelligence_logo.png";

const Careers = () => {
  const universities = [
    "University of Jos",
    "Plateau State University",
    "ATBU",
    "Federal Poly Jos",
    "Federal Poly Bauchi",
  ];

  const benefits = [
    {
      icon: <Rocket className="h-8 w-8 text-yellow-500" />,
      title: "Gain Leadership Skills",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Earn Certificates & Rewards",
    },
    {
      icon: <CircuitBoard className="h-8 w-8 text-yellow-500" />,
      title: "Get Hands-on AI Experience",
    },
  ];

  const idealCandidates = [
    "Passionate about AI & technology",
    "Active on campus & social media",
    "Good communicator & team player",
    "Ready to drive innovative programs",
  ];

  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white font-sans selection:bg-purple-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        {/* Header Section */}
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
          >
            <img
              src={AfricanIntelligenceLogo}
              alt="African Intelligence Logo"
              className="h-28 w-28 md:h-32 md:w-32 object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            />
            <div className="text-center md:text-left">
              <h1 className="flex flex-col text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                <span className="text-white">African</span>
                <span className="text-white">Intelligence</span>
              </h1>
              <p className="text-purple-300 font-medium tracking-wide mt-3 text-sm md:text-base border-t border-purple-500/30 pt-2 inline-block md:block">
                AI Workforce & Education Infrastructure for Africa
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-yellow-500" />
              <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-sm">
                Now Recruiting
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-yellow-500" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-8">
              Campus Ambassadors
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:text-base text-purple-200 border-b border-purple-500/30 pb-8 mb-8"
          >
            {universities.map((uni, idx) => (
              <React.Fragment key={uni}>
                <span className="hover:text-white transition-colors cursor-default">
                  {uni}
                </span>
                {idx < universities.length - 1 && (
                  <span className="text-purple-600">|</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </header>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative group mb-16"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={CampusAmbassadorsImg}
              alt="Campus Ambassadors"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center mb-6 relative group-hover:border-yellow-500/50 transition-colors">
                <div className="absolute inset-0 rounded-full bg-yellow-500/10 scale-0 group-hover:scale-110 transition-transform duration-500" />
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-purple-950/20 rounded-3xl border border-white/5 p-8 md:p-12 mb-20 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-purple-600/10 rounded-full blur-[100px] -mr-32 -mt-32" />

          <div className="relative z-10">
            <h4 className="text-2xl font-bold text-yellow-500 mb-8 flex items-center gap-3">
              Ideal Candidates:
              <Sparkles className="h-5 w-5" />
            </h4>
            <ul className="space-y-6">
              {idealCandidates.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-purple-950 transition-all">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-purple-100 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-8">
            <div className="space-y-4">
              <h4 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Apply Now!
              </h4>
              <p className="text-xl text-purple-200 font-medium">
                Be a Leader in AI Education on Your Campus
              </p>
            </div>

            <button className="group relative px-10 py-5 bg-yellow-500 text-purple-950 font-bold rounded-2xl hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1">
              Start Application
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-yellow-500"
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </button>
          </div>
        </div>

        {/* Footer Info Area */}
        <div className="bg-purple-900/30 rounded-3xl border border-white/5 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-yellow-500 mb-8 decoration-yellow-500/30 underline-offset-8 underline">
                How to Apply:
              </h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold">
                    1.
                  </span>
                  <p className="text-lg text-purple-100">
                    Fill out the online application form
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold">
                    2.
                  </span>
                  <p className="text-lg text-purple-100">
                    Participate in a brief interview
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-4 text-purple-300">
                <a
                  href="tel:07073425222"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Phone className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                  07073425222
                </a>
                <a
                  href="https://www.africanintelligence.tech"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Globe className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                  www.africanintelligence.tech
                </a>
                <a
                  href="mailto:Info@africanintelligence.tech"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Mail className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                  Info@africanintelligence.tech
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="p-4 bg-white rounded-3xl relative group cursor-pointer transition-transform hover:scale-105 duration-500">
                <QrCode className="h-40 w-40 text-[#1a0b2e]" />
                <div className="absolute inset-0 bg-yellow-500/10 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="mt-4 text-purple-400 font-medium text-sm">
                Scan to Apply Instantly
              </p>
            </div>
          </div>
        </div>

        {/* Closing Branding */}
        <div className="mt-20 text-center text-purple-500/50 text-xs font-semibold tracking-widest uppercase">
          © {new Date().getFullYear()} African Intelligence • Shaping the Future
        </div>
      </div>
    </div>
  );
};

export default Careers;
