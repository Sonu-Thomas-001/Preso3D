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

  // 3D Isometric Platform for Endpoints
  const EndpointPlatform = ({ icon, label, subLabel, color, delay }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      className="relative group cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{ translateZ: 20 }}
    >
        {/* Base Plinth */}
        <div className={`w-36 h-28 rounded-2xl bg-gradient-to-br ${color} shadow-2xl border border-white/40 backdrop-blur-sm relative flex flex-col items-center justify-center z-20`}>
            <div className="text-4xl mb-2 drop-shadow-md transform group-hover:scale-110 transition-transform duration-500">{icon}</div>
            <div className="text-[9px] font-bold text-white/80 uppercase tracking-widest">{label}</div>
            <div className="text-xs font-black text-white mt-0.5">{subLabel}</div>
            
            {/* Reflection Shine */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Shadow/Glow underneath */}
        <div className={`absolute -bottom-8 left-0 right-0 h-8 bg-black/20 blur-xl rounded-[100%] transition-all duration-500 group-hover:bg-${color.split('-')[1]}-500/40`}></div>
    </motion.div>
  );

  // Clean Process Node
  const ProcessNode = ({ text, type, index }: any) => {
    // Delivery (Top) vs Feedback (Bottom) styling
    const isDelivery = type === 'delivery';
    const bgClass = isDelivery 
        ? "bg-gradient-to-b from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-900" 
        : "bg-gradient-to-b from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-900";
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (index * 0.15), type: "spring", stiffness: 100 }}
            className={`
                relative w-32 h-16 rounded-xl border ${bgClass} shadow-lg 
                flex items-center justify-center font-bold text-sm tracking-wide z-10
                group hover:scale-105 transition-transform duration-300
            `}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {text}
            
            {/* Subtle Shine */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/60 to-transparent pointer-events-none"></div>
            
            {/* Connector Dot (Visual Anchor) */}
            <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${isDelivery ? 'bg-cyan-300' : 'bg-emerald-300'} opacity-50`}></div>
            <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 ${isDelivery ? 'bg-cyan-200' : 'bg-emerald-200'} opacity-30`}></div>
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
        
        {/* 3D Scene Container */}
        <motion.div 
            className="relative w-full max-w-6xl h-[500px] flex items-center justify-between px-12"
            initial={{ rotateX: 5 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 1 }}
            style={{ transformStyle: 'preserve-3d' }}
        >

            {/* --- LEFT: DEV STATION --- */}
            <div className="flex flex-col items-center justify-center h-full z-30">
                <EndpointPlatform 
                    icon="💻" 
                    label="Dev Environment" 
                    subLabel="YOUR COMPUTER" 
                    color="from-slate-700 to-slate-900"
                    delay={0.2}
                />
            </div>


            {/* --- MIDDLE: THE LOOP --- */}
            <div className="flex-grow flex flex-col justify-center gap-20 relative px-4 h-full">
                
                {/* 1. Delivery Pipeline (Left -> Right) */}
                <div className="relative flex flex-col items-center">
                     {/* Label */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.4 }}
                        className="text-xs font-black text-cyan-600 uppercase tracking-[0.2em] mb-6 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-cyan-100 shadow-sm z-20"
                    >
                        Delivery Pipeline
                    </motion.div>
                    
                    <div className="flex gap-8 items-center relative">
                        {/* The Flow Line (BELOW Boxes) */}
                        <div className="absolute -bottom-6 left-2 right-2 h-1.5 bg-cyan-100 rounded-full overflow-hidden z-0">
                            {/* Animated Pulse */}
                            <motion.div 
                                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"
                                animate={{ x: ["-100%", "400%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        {/* Arrows on the line */}
                         <div className="absolute -bottom-[29px] left-1/3 text-cyan-300 text-xs">➤</div>
                         <div className="absolute -bottom-[29px] left-2/3 text-cyan-300 text-xs">➤</div>


                        <ProcessNode text="BUILD" type="delivery" index={0} />
                        <ProcessNode text="TEST" type="delivery" index={1} />
                        <ProcessNode text="RELEASE" type="delivery" index={2} />
                    </div>
                </div>

                {/* 2. Feedback Loop (Right -> Left) */}
                <div className="relative flex flex-col items-center">
                    {/* Label */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.8 }}
                        className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em] mb-6 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-emerald-100 shadow-sm z-20"
                    >
                        Feedback Loop
                    </motion.div>

                    <div className="flex gap-8 items-center relative flex-row-reverse">
                         {/* The Flow Line (BELOW Boxes) */}
                         <div className="absolute -bottom-6 left-2 right-2 h-1.5 bg-emerald-100 rounded-full overflow-hidden z-0">
                            {/* Animated Pulse (Reverse Direction visually) */}
                            <motion.div 
                                className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-transparent via-emerald-400 to-transparent opacity-80"
                                animate={{ x: ["100%", "-400%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
                            />
                        </div>

                        {/* Arrows on the line */}
                         <div className="absolute -bottom-[29px] left-1/2 text-emerald-300 text-xs rotate-180">➤</div>

                        <ProcessNode text="MONITOR" type="feedback" index={3} />
                        <ProcessNode text="PLAN" type="feedback" index={4} />
                    </div>
                </div>

            </div>


            {/* --- RIGHT: CUSTOMERS --- */}
            <div className="flex flex-col items-center justify-center h-full z-30">
                <EndpointPlatform 
                    icon="🌍" 
                    label="Production" 
                    subLabel="CUSTOMERS" 
                    color="from-blue-600 to-indigo-700"
                    delay={0.3}
                />
            </div>

        </motion.div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)]"></div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default DevOpsModelSlide;