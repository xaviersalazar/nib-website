import React from "react";
import { motion } from "framer-motion";
import { Download, Microscope } from "lucide-react";

// The Nib brand mark, ported from the app's onboarding screen (NibLogoMark):
// a four-point sparkle star inside a hairline ring, encircled by a dashed
// "orbit" that drifts slowly (360° over 44s), rendered in ink so it sits on
// the light masthead the same way it does in the app.
const NibLogoMark = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 text-black"
  >
    {/* Outer dashed orbit — drifts slowly, matching the app mark */}
    <motion.circle
      cx="50"
      cy="50"
      r="49.1"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeDasharray="0.6 5.2"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 44, ease: "linear", repeat: Infinity }}
    />

    {/* Inner hairline ring */}
    <circle cx="50" cy="50" r="33.8" stroke="currentColor" strokeWidth="1.4" />

    {/* Four-point sparkle star */}
    <path
      d="M 50 29 Q 53.54 46.46 71 50 Q 53.54 53.54 50 71 Q 46.46 53.54 29 50 Q 46.46 46.46 50 29 Z"
      fill="currentColor"
    />
  </svg>
);

const FactCard = () => {
  return (
    <motion.div
      className="bg-white rounded-[20px] p-5 max-w-[280px] sm:max-w-[320px] w-full mx-auto relative text-left shadow-sm"
      whileHover={{ y: -4, transition: { duration: 0.6, ease: "easeOut" } }}
    >
      <div className="mb-2 sm:mb-3">
        <Microscope
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B66D8]"
          strokeWidth={1.5}
        />
      </div>

      <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2 text-[#3B66D8] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
        <span className="text-[12px] leading-none">•</span>
        <span>Biology</span>
      </div>

      <h2 className="text-base sm:text-lg font-serif text-black leading-tight mb-2 sm:mb-3 tracking-tight font-bold">
        Octopuses have three hearts.
      </h2>

      <p className="text-black/70 text-[11px] sm:text-xs leading-relaxed">
        Two hearts pump blood exclusively to the gills, while a larger systemic
        heart circulates it to the rest of the body. Interestingly, the systemic
        heart stops beating when an octopus swims, which is why they prefer
        crawling.
      </p>
    </motion.div>
  );
};

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="h-[100dvh] w-full flex flex-col relative font-sans overflow-hidden bg-[#F7F7F5]">
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"
        initial={{ x: "-50%", y: "-50%", backgroundColor: "#6465A8" }}
        animate={{
          scale: [1, 1.15, 0.9, 1],
          x: ["-50%", "-45%", "-55%", "-50%"],
          y: ["-50%", "-55%", "-45%", "-50%"],
          opacity: [0.3, 0.45, 0.35, 0.3],
          // Cross-fade through Nib's onboarding topic tones — the same curated
          // path used by OnboardingAura in the app: cosmos, deep ocean, warm
          // history, lavender mind, terracotta food, violet music.
          backgroundColor: [
            "#6465A8", // Space — dusty indigo
            "#489090", // Ocean Life — seafoam teal
            "#B8945A", // History — warm amber
            "#7878C0", // Psychology — lavender
            "#B87850", // Food — terracotta
            "#8868B8", // Music — muted purple
            "#6465A8", // back to Space for a seamless loop
          ],
        }}
        transition={{
          scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          // ~3.6s per tone, matching the app's onboarding cycle cadence.
          backgroundColor: { duration: 21.6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Centered Main Content Wrapper */}
      <div className="flex-1 w-full flex flex-col items-center justify-center px-4 sm:px-6 relative z-10 pb-6 sm:pb-8">
        {/* Header / Masthead */}
        <motion.header
          className="w-full flex flex-col items-center mb-4 sm:mb-6 shrink-0"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* App icon — cascades into place with the same spring as onboarding */}
          <motion.div
            className="mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.15, delay: 0.1 }}
          >
            <NibLogoMark />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-black mb-2 sm:mb-3">
            Nib
          </h1>

          {/* Accent rule — a short solid ink capsule, as in onboarding */}
          <div className="w-11 h-1 rounded-full bg-black mb-2 sm:mb-3"></div>

          <p className="font-serif italic text-sm sm:text-base lg:text-lg text-black/60">
            Feed your curiosity
          </p>
        </motion.header>

        {/* Main Content */}
        <main className="w-full max-w-4xl flex flex-col items-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col items-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-black leading-tight tracking-tight mb-6 sm:mb-8"
            >
              One fascinating thing.
              <br />
              Every day.
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="w-full flex justify-center mb-5 sm:mb-6 lg:mb-8"
            >
              <FactCard />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-[11px] sm:text-xs lg:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
              Download on the App Store
            </motion.button>
          </motion.div>
        </main>
      </div>

      {/* Absolute Footer */}
      <motion.footer
        className="absolute bottom-4 sm:bottom-6 left-0 right-0 w-full text-center z-20 text-[9px] sm:text-[10px] lg:text-xs text-black/30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        © {new Date().getFullYear()} Nib. All rights reserved.
      </motion.footer>
    </div>
  );
}

export default App;
