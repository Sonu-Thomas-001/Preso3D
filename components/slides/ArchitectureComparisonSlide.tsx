import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const ArchitectureComparisonSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Architecture Comparison</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="45"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center justify-center gap-20 perspective-1000 px-8">
        
        {/* LEFT: VM TOWER */}
        <motion.div 
            className="w-[400px] h-[450px] relative"
            initial={{ rotateY: 15 }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <h3 className="text-center font-black text-slate-800 mb-6 text-xl drop-shadow-sm">Virtual Machines</h3>
            
            {/* Stack */}
            <div className="flex flex-col gap-1 w-full h-full justify-end">
                {/* Apps Row */}
                <div className="flex gap-2 justify-center mb-1">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex flex-col w-24">
                            <div className="bg-green-100 border border-green-300 p-2 text-[10px] font-black text-center rounded-t text-green-900">App {i}</div>
                            <div className="bg-green-50 border border-green-200 p-2 text-[10px] text-center font-medium text-green-800">Bins/Libs</div>
                            {/* Guest OS - The Heavy Part */}
                            <div className="bg-slate-300 border border-slate-400 p-3 text-[10px] font-black text-center text-slate-900 shadow-inner">Guest OS</div>
                        </div>
                    ))}
                </div>

                {/* Hypervisor */}
                <div className="w-full bg-slate-700 text-white p-3 text-center font-black text-sm rounded shadow-lg transform translate-z-10 uppercase tracking-widest">
                    Hypervisor
                </div>

                {/* Host OS */}
                <div className="w-full bg-blue-600 text-white p-3 text-center font-black text-sm rounded shadow-lg uppercase tracking-wide">
                    Host Operating System
                </div>

                {/* Hardware */}
                <div className="w-full bg-slate-900 text-slate-200 p-4 text-center font-black text-sm rounded-b-xl shadow-2xl border-t border-slate-700 uppercase tracking-[0.2em]">
                    Server Hardware
                </div>
            </div>
            
            {/* "Heavy" Badge - Repositioned to mirror Lightweight badge */}
            <motion.div 
                className="absolute top-1/4 -left-6 bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-black -rotate-12 shadow-[0_10px_20px_rgba(220,38,38,0.3)] z-50 border border-red-400"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                HEAVYWEIGHT
            </motion.div>
        </motion.div>

        {/* VS Divider */}
        <div className="h-full w-px bg-slate-200 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-slate-100 rounded-full p-3 font-black text-slate-400 text-2xl shadow-xl z-50">VS</div>
        </div>

        {/* RIGHT: DOCKER TOWER */}
        <motion.div 
            className="w-[400px] h-[450px] relative"
            initial={{ rotateY: -15 }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <h3 className="text-center font-black text-slate-800 mb-6 text-xl drop-shadow-sm">Containers</h3>
            
            {/* Stack */}
            <div className="flex flex-col gap-1 w-full h-full justify-end">
                {/* Apps Row - Floating higher due to no Guest OS */}
                <div className="flex gap-4 justify-center mb-8 relative">
                     {/* Visual Gap to show lightweight nature */}
                     <div className="absolute -bottom-8 w-full text-center text-[11px] text-blue-600 font-black uppercase tracking-tighter bg-blue-50/50 py-1 rounded-full border border-blue-100/50">
                        No Guest OS Overhead
                     </div>

                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex flex-col w-24 shadow-xl">
                            <div className="bg-blue-100 border border-blue-300 p-2 text-[10px] font-black text-center rounded-t text-blue-900">App {i}</div>
                            <div className="bg-blue-50 border border-blue-200 p-2 text-[10px] text-center font-medium rounded-b text-blue-800">Bins/Libs</div>
                        </div>
                    ))}
                </div>

                {/* Docker Engine */}
                <div className="w-full bg-blue-500 text-white p-3 text-center font-black text-sm rounded shadow-lg flex items-center justify-center gap-2 uppercase tracking-wide">
                    <span className="text-lg">🐳</span> Docker Engine
                </div>

                {/* Host OS */}
                <div className="w-full bg-blue-600 text-white p-3 text-center font-black text-sm rounded shadow-lg uppercase tracking-wide">
                    Host Operating System
                </div>

                {/* Hardware */}
                <div className="w-full bg-slate-900 text-slate-200 p-4 text-center font-black text-sm rounded-b-xl shadow-2xl border-t border-slate-700 uppercase tracking-[0.2em]">
                    Server Hardware
                </div>
            </div>

            {/* "Light" Badge */}
            <motion.div 
                className="absolute top-1/3 -right-6 bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-black rotate-12 shadow-[0_10px_20px_rgba(5,150,105,0.3)] z-50 border border-emerald-400"
                 animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
                LIGHTWEIGHT
            </motion.div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default ArchitectureComparisonSlide;