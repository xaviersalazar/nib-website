import React from 'react';
import { motion } from 'framer-motion';
import { Download, Microscope } from 'lucide-react';

const FactCard = () => {
  return (
    <motion.div 
      className="bg-white rounded-[20px] p-5 max-w-[280px] sm:max-w-[320px] w-full mx-auto relative text-left shadow-sm"
      whileHover={{ y: -4, transition: { duration: 0.6, ease: "easeOut" } }}
    >
      <div className="mb-2 sm:mb-3">
        <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B66D8]" strokeWidth={1.5} />
      </div>
      
      <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2 text-[#3B66D8] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
        <span className="text-[12px] leading-none">•</span>
        <span>Biology</span>
      </div>
      
      <h2 className="text-base sm:text-lg font-serif text-black leading-tight mb-2 sm:mb-3 tracking-tight font-bold">
        Octopuses have three hearts.
      </h2>
      
      <p className="text-black/70 text-[11px] sm:text-xs leading-relaxed">
        Two hearts pump blood exclusively to the gills, while a larger systemic heart circulates it to the rest of the body. Interestingly, the systemic heart stops beating when an octopus swims, which is why they prefer crawling.
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
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="h-[100dvh] w-full flex flex-col relative font-sans overflow-hidden bg-[#F7F7F5]">
      
      {/* Subtle ambient background aura colored blue for BIOLOGY category */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-[#3B66D8] blur-[80px] sm:blur-[120px] pointer-events-none"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-tight text-black mb-1 sm:mb-2">Nib</h1>
          <div className="flex items-center gap-2 sm:gap-4 text-[9px] sm:text-xs lg:text-sm tracking-widest text-black/40 uppercase">
            <span>Today I Learned</span>
          </div>
          <div className="w-8 sm:w-12 h-px bg-black/10 mt-3 sm:mt-4"></div>
        </motion.header>

        {/* Main Content */}
        <main className="w-full max-w-4xl flex flex-col items-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col items-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-black leading-tight tracking-tight mb-2 sm:mb-3">
              One fascinating thing.<br/>Every day.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-xs sm:text-sm md:text-base text-black/60 mb-6 sm:mb-8 max-w-[260px] sm:max-w-sm lg:max-w-md leading-relaxed">
              A calm, premium curiosity engine. Come for one fact. Stay for five.
            </motion.p>
            
            <motion.div variants={itemVariants} className="w-full flex justify-center mb-5 sm:mb-6 lg:mb-8">
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
  )
}

export default App;
