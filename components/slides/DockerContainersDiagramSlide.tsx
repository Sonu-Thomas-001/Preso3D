import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const DockerContainersDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Docker Architecture</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="43"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex flex-col items-center justify-center perspective-2000 relative pb-12">
        
        {/* 3D Stack Container */}
        <motion.div 
            className="relative w-[600px] h-[520px] flex flex-col justify-center items-center"
            initial={{ rotateX: 20, rotateY: 0 }}
            animate={{ rotateX: 15, rotateY: -5 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            
            {/* 4. Containers Layer (Floating Light Blocks) */}
            <div className="w-[92%] flex justify-between gap-6 mb-14 relative z-40 px-2" style={{ transform: 'translateZ(160px)' }}>
                {['A', 'B', 'C'].map((label, i) => (
                    <motion.div 
                        key={i}
                        className="flex-1 flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.6 + (i * 0.1), type: "spring" }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                         {/* Container Box */}
                         <div className="w-full h-32 bg-white/98 backdrop-blur-md border-2 border-blue-200 rounded-2xl shadow-2xl flex flex-col items-center justify-center relative group">
                            <span className="text-[10px] font-black text-slate-400 absolute top-3 uppercase tracking-[0.1em]">Container {i+1}</span>
                            
                            <div className="w-20 h-10 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center mb-2 shadow-sm mt-4">
                                <span className="text-xs font-black text-blue-600">App {label}</span>
                            </div>
                            
                            <div className="w-20 h-7 bg-slate-100 border border-slate-200 rounded-md flex items-center justify-center">
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Bins/Libs</span>
                            </div>

                            {/* 3D Side Detail */}
                            <div className="absolute -right-1.5 top-1.5 h-full w-1.5 bg-slate-200 transform skew-y-12 origin-top-left rounded-r-sm"></div>
                         </div>
                    </motion.div>
                ))}
            </div>

            {/* 3. Docker Engine Layer */}
            <motion.div 
                className="w-[88%] h-20 bg-blue-600 rounded-2xl shadow-xl border-b-4 border-blue-800 flex items-center justify-center relative z-30 mb-10"
                style={{ transform: 'translateZ(100px)' }}
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }}
            >
                 <div className="flex items-center gap-4">
                     <span className="text-4xl drop-shadow-xl filter saturate-150">🐳</span>
                     <div className="text-white font-black tracking-[0.15em] uppercase text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Docker Engine</div>
                 </div>
                 {/* 3D Depth Faces */}
                 <div className="absolute -right-3 top-2 h-full w-3 bg-blue-800 rounded-r-lg transform skew-y-[15deg] origin-top-left border-l border-white/10 shadow-lg"></div>
            </motion.div>

            {/* 2. Host OS Layer */}
            <motion.div 
                className="w-[94%] h-16 bg-orange-500 rounded-2xl shadow-lg border-b-4 border-orange-700 flex items-center justify-center relative z-20 mb-10"
                style={{ transform: 'translateZ(50px)' }}
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
            >
                 <div className="text-white font-black tracking-[0.2em] uppercase text-sm drop-shadow-[0_2px_3px_rgba(0,0,0,0.2)]">Host Operating System</div>
                 <div className="absolute -right-3 top-2 h-full w-3 bg-orange-700 rounded-r-lg transform skew-y-[15deg] origin-top-left border-l border-white/10 shadow-md"></div>
            </motion.div>

            {/* 1. Infrastructure (Base) */}
            <motion.div 
                className="w-full h-20 bg-[#0f172a] rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-b-8 border-black flex items-center justify-center relative z-10"
                style={{ transform: 'translateZ(0px)' }}
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }}
            >
                <div className="text-slate-300 font-black tracking-[0.5em] uppercase text-lg drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">Infrastructure</div>
                 {/* 3D Side Face */}
                <div className="absolute -right-4 top-2 h-full w-4 bg-black rounded-r-xl transform skew-y-[15deg] origin-top-left border-l border-white/5 shadow-2xl"></div>
            </motion.div>
            
            {/* Visual connector lines to emphasize shared kernel */}
            <div className="absolute top-[260px] w-[88%] h-20 border-t-2 border-dashed border-blue-400/30 rounded-t-[100%] pointer-events-none" style={{transform: 'translateZ(75px)'}}></div>

        </motion.div>

        {/* Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 -z-10">
            <div className="w-[800px] h-[400px] bg-blue-500 blur-[180px] rounded-full" />
        </div>

      </div>
    </SlideLayout>
  );
};

export default DockerContainersDiagramSlide;