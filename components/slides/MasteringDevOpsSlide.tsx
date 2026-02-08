import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const MasteringDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  return (
    <SlideLayout 
      title={null}
      id="intro"
      isPresenting={isPresenting}
      noContentPadding={true}
      hideHeader={true}
      hideFooter={true}
      backgroundClass="bg-slate-900"
    >
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center perspective-1000">
        
        {/* Background Image with Parallax */}
        <motion.div 
           className="absolute inset-0 z-0"
           initial={{ scale: 1.1 }}
           animate={{ scale: 1.2 }}
           transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
           style={{ translateZ: -20 }}
        >
             <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-indigo-900/50 mix-blend-multiply" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center preserve-3d">
            
            {/* Logo Mark */}
            <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                style={{ translateZ: 50 }}
                className="mb-8 relative"
            >
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-2xl flex items-center justify-center border border-white/20 transform rotate-12 group">
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transform -rotate-12 group-hover:scale-110 transition-transform duration-500">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                     </svg>
                </div>
                 {/* Decor circles */}
                 <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-blue-500 blur-xl opacity-60 animate-pulse"></div>
                 <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-purple-500 blur-xl opacity-60 animate-pulse delay-75"></div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ translateZ: 80 }}
              className="flex flex-col items-center"
            >
                <h2 className="text-indigo-400 font-bold tracking-[0.3em] text-sm md:text-base uppercase mb-2 drop-shadow-lg">
                    Software Development Life Cycle
                </h2>
                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl mb-2">
                    MASTERING
                </h1>
                <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-tighter drop-shadow-2xl">
                    DevOps
                </h1>
            </motion.div>
            
            {/* Divider */}
            <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-32 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-8"
            />

            {/* Footer Text */}
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{ translateZ: 40 }}
                className="text-slate-400 text-sm md:text-lg max-w-lg leading-relaxed font-medium"
            >
                Bridging the gap between <span className="text-blue-300">Development</span> and <span className="text-purple-300">Operations</span> for faster, reliable software delivery.
            </motion.p>
        </div>

      </div>
    </SlideLayout>
  );
};

export default MasteringDevOpsSlide;