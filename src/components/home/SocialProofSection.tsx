import React from "react";
import { motion } from "framer-motion";
import SocialProof1 from "../../assets/social-proof-1.png";
import SocialProof2 from "../../assets/social-proof-2.png";
import SocialProof3 from "../../assets/social-proof-3.png";
import SocialProof4 from "../../assets/social-proof-4.png";

type BaseItem = {
  id: string;
};

type ImageItem = BaseItem & {
  type: "image";
  src: string;
  role: string;
  location: string;
  name: string;
  colorOverlay?: string; // e.g., 'from-green-600/50' or 'from-purple-600/50'
};

type StatItem = BaseItem & {
  type: "stat";
  gradient: string;
  value?: string;
  mainText?: string;
  subText?: string;
  label: string;
};

type Item = ImageItem | StatItem;

type Column =
  | { type: "single"; item: Item }
  | { type: "stacked"; top: Item; bottom: Item };

const SocialProofSection = () => {
  // Portrait content with color overlays matching the reference vibe
  const c1: ImageItem = {
    id: "1",
    type: "image",
    src: SocialProof1,
    name: "Oluwaseun Adeyemi",
    role: "A.I Literacy\nAdvocate",
    location: "Lagos, Nigeria",
    colorOverlay: "from-emerald-900/60",
  };
  const c2: StatItem = {
    id: "2",
    type: "stat",
    gradient: "from-blue-400 to-blue-600",
    value: "$500M+",
    label: "Paid Opportunities",
  };
  const c3: ImageItem = {
    id: "3",
    type: "image",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
    name: "Amara Okeke",
    role: "SWE,\nZinza Tech",
    location: "Lagos, Nigeria",
    colorOverlay: "from-purple-900/60",
  };
  const c4: ImageItem = {
    id: "4",
    type: "image",
    src: SocialProof2,
    name: "Jean-Pierre Kabore",
    role: "Machine Learning\nFellow",
    location: "Kigali, Rwanda",
    colorOverlay: "from-blue-900/60",
  };
  const c5: ImageItem = {
    id: "5",
    type: "image",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    name: "Kwame Asante",
    role: "Frontend Developer,\nSenior Tutor",
    location: "Accra, Ghana",
    colorOverlay: "from-teal-900/60",
  };
  const c6: StatItem = {
    id: "6",
    type: "stat",
    gradient: "from-red-400 to-red-600",
    value: "700K+",
    label: "PhD, MS students onboarded",
  };
  const c7: ImageItem = {
    id: "7",
    type: "image",
    src: SocialProof3,
    name: "Zainab Ibrahim",
    role: "Ethical A.I\nResearcher",
    location: "Nairobi, Kenya",
    colorOverlay: "from-rose-900/60",
  };
  const c8: StatItem = {
    id: "8",
    type: "stat",
    gradient: "from-purple-500 to-indigo-600",
    value: "54",
    label: "Countries",
  };
  const c9: ImageItem = {
    id: "9",
    type: "image",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    name: "Fatima Diop",
    role: "Data Science\nExpert",
    location: "Dakar, Senegal",
    colorOverlay: "from-indigo-900/60",
  };
  const c10: ImageItem = {
    id: "10",
    type: "image",
    src: SocialProof4,
    name: "Chidi Okafor",
    role: "Senior SEO\nConsultant",
    location: "Lagos, Nigeria",
    colorOverlay: "from-amber-900/60",
  };
  const c11: StatItem = {
    id: "11",
    type: "stat",
    gradient: "from-teal-400 to-teal-600",
    value: "98%",
    label: "Community Trust",
  };
  const c12: ImageItem = {
    id: "12",
    type: "image",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    name: "Moussa Traoré",
    role: "Backend\nDeveloper",
    location: "Bamako, Mali",
    colorOverlay: "from-cyan-900/60",
  };
  const c13: ImageItem = {
    id: "13",
    type: "image",
    src: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800",
    name: "Nneka Williams",
    role: "UX Design\nLead",
    location: "Johannesburg, SA",
    colorOverlay: "from-fuchsia-900/60",
  };

  const baseColumns: Column[] = [
    { type: "single", item: c1 },
    { type: "stacked", top: c2, bottom: c3 },
    { type: "single", item: c4 },
    { type: "stacked", top: c5, bottom: c6 },
    { type: "single", item: c7 },
    { type: "stacked", top: c8, bottom: c9 },
    { type: "single", item: c10 },
    { type: "stacked", top: c11, bottom: c12 },
    { type: "single", item: c13 },
  ];

  const columns = [...baseColumns, ...baseColumns];

  const Card = ({
    item,
    className = "",
  }: {
    item: Item;
    className?: string;
  }) => (
    <div
      className={`relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${className}`}
    >
      {item.type === "image" ? (
        <>
          <img
            src={item.src}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Default Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

          {/* Dynamic Color Gradient Overlay (at the bottom) */}
          {item.colorOverlay && (
            <div
              className={`absolute inset-0 bg-gradient-to-t ${item.colorOverlay} via-transparent to-transparent opacity-80`}
            />
          )}

          <div className="absolute bottom-5 left-5 text-white z-10 w-[85%]">
            <div className="bg-white/20 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wider mb-2 inline-block">
              {item.location}
            </div>
            <h4 className="text-sm font-medium opacity-80 mb-0.5">
              {item.name}
            </h4>
            <h3 className="text-lg font-bold leading-tight whitespace-pre-line drop-shadow-md">
              {item.role}
            </h3>
          </div>
        </>
      ) : (
        <div
          className={`w-full h-full bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-end text-white relative`}
        >
          <div className="absolute top-0 right-0 p-16 bg-white/10 rounded-full blur-2xl -mr-8 -mt-8 mix-blend-overlay"></div>

          {item.value && (
            <h3 className="text-4xl font-bold tracking-tighter mb-1 relative z-10">
              {item.value}
            </h3>
          )}

          {item.mainText && (
            <h3 className="text-2xl font-bold leading-tight mb-2 relative z-10">
              {item.mainText}
            </h3>
          )}

          <p className="text-sm font-medium opacity-90 relative z-10">
            {item.label}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-24 bg-gray-50 overflow-hidden font-sans">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Trusted by Africa's Tech Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join a network of innovators shaping the future of the continent.
          </motion.p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 pl-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 120,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            width: "fit-content",
            willChange: "transform",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          {columns.map((col, idx) => (
            <div
              key={idx}
              className="shrink-0"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {col.type === "single" ? (
                <Card
                  item={col.item}
                  className="w-[280px] h-[400px] rounded-[24px] shadow-lg"
                />
              ) : (
                <div className="flex flex-col gap-5 w-[280px] h-[400px]">
                  <Card
                    item={col.top}
                    className="flex-1 rounded-[24px] shadow-lg"
                  />
                  <Card
                    item={col.bottom}
                    className="h-[220px] rounded-[24px] shadow-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
