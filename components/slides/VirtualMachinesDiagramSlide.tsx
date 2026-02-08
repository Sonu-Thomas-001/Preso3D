import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const VirtualMachinesDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Virtual Machine Architecture</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="41"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex flex-col items-center justify-center perspective-2000 relative pb-12">
        
        {/* 3D Stack Container */}
        <motion.div 
            className="relative w-full max-w-2xl h-[500px] flex flex-col items-center"
            initial={{ rotateX: 20, rotateY: -10 }}
            animate={{ rotateX: 15, rotateY: 5 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            
            {/* 4. VMs Layer (Floating at the top) */}
            <div className="w-[90%] flex justify-between gap-6 mb-12 relative z-40 px-2" style={{ transform: 'translateZ(120px)' }}>
                {[1, 2, 3].map((num, i) => (
                    <motion.div 
                        key={i}
                        className="flex-1 flex flex-col shadow-2xl"
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.6 + (i * 0.1), type: "spring" }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                         {/* App */}
                         <div className="h-14 bg-white border border-slate-100 rounded-t-xl flex items-center justify-center relative z-50">
                            <span className="text-xs font-black text-slate-800 tracking-tighter">VM {num} APP</span>
                            {/* 3D Details */}
                            <div className="absolute -right-1 top-1 h-full w-1 bg-slate-100 transform skew-y-12 origin-top-left"></div>
                         </div>

                         {/* Guest OS (Heavy) */}
                         <div className="h-20 bg-slate-200 border-x border-b border-slate-300 rounded-b-xl flex items-center justify-center relative group">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Guest OS</span>
                            {/* 3D Details */}
                            <div className="absolute -right-1 top-0 h-full w-1 bg-slate-300 transform skew-y-12 origin-top-left"></div>
                         </div>
                    </motion.div>
                ))}
            </div>

            {/* 3. Hypervisor Layer */}
            <motion.div 
                className="w-[85%] h-16 bg-[#22c55e] rounded-2xl shadow-xl border-b-4 border-[#16a34a] flex items-center justify-center relative z-30 mb-6"
                style={{ transform: 'translateZ(80px)' }}
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }}
            >
                 <div className="text-white font-black tracking-[0.2em] uppercase text-sm drop-shadow-md">Hypervisor</div>
                 <div className="absolute -right-3 top-2 h-full w-3 bg-[#16a34a] rounded-r-lg transform skew-y-[15deg] origin-top-left border-l border-white/20"></div>
            </motion.div>

            {/* 2. Host OS Layer */}
            <motion.div 
                className="w-[92%] h-16 bg-[#2563eb] rounded-2xl shadow-xl border-b-4 border-[#1d4ed8] flex items-center justify-center relative z-20 mb-6"
                style={{ transform: 'translateZ(40px)' }}
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
            >
                 <div className="text-white font-black tracking-[0.2em] uppercase text-sm drop-shadow-md">Host Operating System</div>
                 <div className="absolute -right-3 top-2 h-full w-3 bg-[#1d4ed8] rounded-r-lg transform skew-y-[15deg] origin-top-left border-l border-white/20"></div>
            </motion.div>

            {/* 1. Host Hardware (Base) */}
            <motion.div 
                className="w-full h-20 bg-[#1e293b] rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.4)] border-b-8 border-slate-950 flex items-center justify-center relative z-10"
                style={{ transform: 'translateZ(0px)' }}
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }}
            >
                <div className="text-slate-400 font-black tracking-[0.4em] uppercase text-lg">Host Hardware</div>
                {/* Side Faces for 3D depth */}
                <div className="absolute -right-4 top-2 h-full w-4 bg-[#0f172a] rounded-r-xl transform skew-y-[15deg] origin-top-left border-l border-white/5"></div>
            </motion.div>

            {/* Float-by Labels on the Right */}
            <div className="absolute -right-48 h-full flex flex-col justify-around py-8 pointer-events-none">
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
                    className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase text-slate-500 shadow-lg border border-slate-100 tracking-widest w-36 text-center"
                 >
                    Virtual Machines
                 </motion.div>
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
                    className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase text-slate-500 shadow-lg border border-slate-100 tracking-widest w-36 text-center"
                 >
                    Software Layer
                 </motion.div>
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }}
                    className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase text-slate-500 shadow-lg border border-slate-100 tracking-widest w-36 text-center"
                 >
                    Hardware Level
                 </motion.div>
            </div>

        </motion.div>

        {/* Backdrop Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 -z-10">
            <div className="w-[800px] h-[400px] bg-blue-400 blur-[180px] rounded-full" />
        </div>

      </div>
    </SlideLayout>
  );
};

export default VirtualMachinesDiagramSlide;