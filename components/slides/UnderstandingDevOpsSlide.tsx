import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const UnderstandingDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
      <span className="text-[#0f172a] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
      <span className="text-[#22c55e] text-xl font-medium mt-1">The DevOps Lifecycle Flow</span>
    </div>
  );

  return (
    <SlideLayout
      title={HeaderTitle}
      titleColor="blue"
      id="06"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col items-center justify-center h-full relative w-full perspective-2500 overflow-visible pb-8">
        
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
           <div className="absolute left-[0%] w-[50%] h-[600px] bg-blue-400 blur-[160px] rounded-full" />
           <div className="absolute right-[0%] w-[50%] h-[600px] bg-emerald-400 blur-[160px] rounded-full" />
        </div>

        <div className="relative w-full max-w-7xl h-full flex items-center justify-center gap-6 px-2">
          
          {/* --- LEFT SIDE: DEVELOPMENT CYCLE --- */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="w-[18%] h-fit bg-white/70 backdrop-blur-xl border border-white p-5 rounded-[2rem] shadow-2xl z-20"
            style={{ transform: 'rotateY(15deg) translateZ(40px)' }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-lg shadow-lg border border-indigo-400/30">💻</div>
              <h4 className="font-black text-indigo-900 uppercase tracking-tighter text-[11px]">Dev Side</h4>
            </div>
            <div className="space-y-2.5">
                <p className="text-[10px] text-slate-600 font-semibold leading-relaxed">
                    Iterative creation involving planning, coding, and automated verification.
                </p>
                <div className="flex flex-wrap gap-1">
                    {['Plan', 'Code', 'Build', 'Test'].map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-[8px] font-black text-indigo-500 uppercase">{tag}</span>
                    ))}
                </div>
            </div>
          </motion.div>

          {/* --- CENTER: THE INFINITY LOOP SECTION --- */}
          <motion.div 
            className="relative w-[68%] h-[540px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85, rotateX: 5 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.2 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* FLOATING BADGE: Positioned way above the box/image */}
            <motion.div 
                animate={{ y: [0, -12, 0], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-8 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-100 flex items-center gap-4 z-50 whitespace-nowrap"
            >
                <div className="flex gap-1.5 items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse delay-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]"></div>
                </div>
                <span className="text-slate-900 font-black text-[13px] uppercase tracking-[0.4em] drop-shadow-sm">Continuous Loop</span>
            </motion.div>

            {/* 3D Floating Glass Plate */}
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02, translateZ: 60 }}
              className="relative w-full h-full bg-white/20 backdrop-blur-md border border-white/90 rounded-[4rem] shadow-[0_60px_150px_rgba(0,0,0,0.2)] overflow-hidden flex items-center justify-center group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Diagram Image Area */}
              <div className="p-8 w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/10 via-transparent to-emerald-100/10 opacity-40"></div>
                  
                  <img 
                    src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Preso%203D/devops%20loops.png" 
                    alt="DevOps Infinity Flow"
                    className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-105"
                  />
              </div>

              {/* Internal Light Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </motion.div>

            {/* Depth Perspective Shadow */}
            <div className="absolute -bottom-16 w-[95%] h-20 bg-indigo-950/10 blur-[80px] rounded-[100%] pointer-events-none"></div>
          </motion.div>

          {/* --- RIGHT SIDE: OPERATIONS CYCLE --- */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="w-[18%] h-fit bg-white/70 backdrop-blur-xl border border-white p-5 rounded-[2rem] shadow-2xl z-20"
            style={{ transform: 'rotateY(-15deg) translateZ(40px)' }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-lg shadow-lg border border-emerald-400/30">🚀</div>
              <h4 className="font-black text-emerald-900 uppercase tracking-tighter text-[11px]">Ops Side</h4>
            </div>
            <div className="space-y-2.5">
                <p className="text-[10px] text-slate-600 font-semibold leading-relaxed">
                    Managing release stability, deployment scaling, and health monitoring.
                </p>
                <div className="flex flex-wrap gap-1">
                    {['Release', 'Deploy', 'Operate', 'Monitor'].map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 text-[8px] font-black text-emerald-500 uppercase">{tag}</span>
                    ))}
                </div>
            </div>
          </motion.div>

        </div>

        {/* Interaction Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.4em]">Spatial Exploration Active</span>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default UnderstandingDevOpsSlide;