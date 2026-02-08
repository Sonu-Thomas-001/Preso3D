import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const DevOpsModelSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">DevOps Operating Model</span>
    </div>
  );

  // Reusable Arrow Block Component
  const ProcessBlock = ({ text, type = 'default', direction = 'right', delay = 0 }: any) => {
      const isRight = direction === 'right';
      
      // Colors based on diagram
      let bgClass = "bg-white";
      let textClass = "text-slate-800";
      
      if (type === 'blue') {
          bgClass = "bg-cyan-300"; // Release
      } else if (type === 'green') {
          bgClass = "bg-lime-300"; // Plan
      }

      return (
        <motion.div
            initial={{ opacity: 0, scale: 0, x: isRight ? -20 : 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay, type: "spring", stiffness: 200 }}
            className="relative w-28 h-12 flex items-center justify-center filter drop-shadow-lg mx-1"
        >
            <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full overflow-visible">
                <path 
                    d={isRight 
                        ? "M 0 0 L 85 0 L 100 25 L 85 50 L 0 50 L 15 25 Z" 
                        : "M 100 0 L 15 0 L 0 25 L 15 50 L 100 50 L 85 25 Z"
                    }
                    className={`${bgClass} stroke-slate-700`}
                    strokeWidth="2"
                    fill="currentColor"
                />
            </svg>
            <span className={`relative z-10 text-[10px] font-black uppercase tracking-wider ${textClass}`}>
                {text}
            </span>
        </motion.div>
      );
  };

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="20"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center perspective-1000 overflow-visible relative">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <motion.div 
            className="relative w-[900px] h-[450px]"
            initial={{ rotateX: 10, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            
            {/* --- LEFT: DEV STATION --- */}
            <motion.div 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-36 bg-white rounded-2xl shadow-2xl border-2 border-slate-200 flex flex-col items-center justify-center z-20 group"
                style={{ transform: 'translateZ(20px)' }}
                whileHover={{ scale: 1.05, translateZ: 40 }}
            >
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">💻</div>
                <div className="w-full h-1 bg-slate-100 my-2"></div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Dev Environment</div>
                <div className="text-sm font-black text-indigo-700 mt-1">YOUR COMPUTER</div>
                {/* 3D Depth Effect */}
                <div className="absolute -bottom-2 w-[90%] h-2 bg-slate-400/50 blur-md rounded-full"></div>
            </motion.div>

            {/* --- RIGHT: CUSTOMERS --- */}
            <motion.div 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-36 bg-white rounded-2xl shadow-2xl border-2 border-slate-200 flex flex-col items-center justify-center z-20 group"
                style={{ transform: 'translateZ(20px)' }}
                whileHover={{ scale: 1.05, translateZ: 40 }}
            >
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🌍</div>
                <div className="w-full h-1 bg-slate-100 my-2"></div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Production</div>
                <div className="text-sm font-black text-green-700 mt-1">CUSTOMERS</div>
                 {/* 3D Depth Effect */}
                 <div className="absolute -bottom-2 w-[90%] h-2 bg-slate-400/50 blur-md rounded-full"></div>
            </motion.div>


            {/* --- CENTER PIPELINES --- */}
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-12 pointer-events-none">
                
                {/* Top: Delivery Pipeline (Build -> Test -> Release) */}
                <div className="relative">
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -top-8 w-full text-center text-xs font-bold text-slate-400 italic"
                    >
                        Delivery Pipeline
                     </motion.div>
                     
                     <div className="flex items-center space-x-[-15px] z-10" style={{ transform: 'translateZ(30px)' }}>
                        <ProcessBlock text="BUILD" type="default" direction="right" delay={0.6} />
                        <ProcessBlock text="TEST" type="default" direction="right" delay={0.7} />
                        <ProcessBlock text="RELEASE" type="blue" direction="right" delay={0.8} />
                     </div>
                </div>


                {/* Bottom: Feedback Loop (Plan <- Monitor) */}
                <div className="relative">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute -bottom-8 w-full text-center text-xs font-bold text-slate-400 italic"
                    >
                        Feedback Loop
                     </motion.div>

                    <div className="flex items-center space-x-[-15px] z-10 flex-row-reverse" style={{ transform: 'translateZ(30px)' }}>
                        <ProcessBlock text="MONITOR" type="default" direction="left" delay={1.1} />
                        <ProcessBlock text="PLAN" type="green" direction="left" delay={1.2} />
                    </div>
                </div>

            </div>

        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default DevOpsModelSlide;