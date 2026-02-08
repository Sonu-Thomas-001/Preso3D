import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const ContainersDefinitionSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Containers Defined</span>
    </div>
  );

  const modules = [
    {
      id: "MOD-01",
      title: "Encapsulation Logic",
      text: "Containerization packages applications and their dependencies into lightweight containers that run on a container engine such as Docker and share the host operating system kernel. Unlike VMs, containers do not require a full guest OS, making them smaller, faster to start, and more resource-efficient.",
      color: "blue"
    },
    {
      id: "MOD-02",
      title: "Isolation Paradigm",
      text: "Containers focus on application-level isolation rather than hardware-level isolation, which improves portability and consistency across environments.",
      color: "emerald"
    },
    {
      id: "MOD-03",
      title: "Standardized Runtime",
      text: "Example: A Java-based microservice is packaged into a Docker container with its runtime and libraries, allowing it to run identically on a developer’s laptop, a test server, or a cloud production cluster without configuration changes.",
      color: "indigo"
    }
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="42"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center gap-12 px-4 perspective-2000 relative">
        
        {/* Left Column: Precision Registry Modules */}
        <div className="w-1/2 h-full flex flex-col justify-center relative z-20 gap-4">
            
            {modules.map((mod, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                    className="relative group"
                >
                    {/* Modular Container */}
                    <div className="bg-slate-900/5 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 shadow-sm group-hover:bg-white group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-500 overflow-hidden">
                        
                        {/* 3D Side Accent */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-emerald-500' : 'bg-indigo-500'} opacity-80`} />
                        
                        {/* Meta Header */}
                        <div className="flex justify-between items-center mb-2.5">
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-[9px] font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                    {mod.id}
                                </span>
                                <h3 className="font-black text-slate-800 text-[11px] uppercase tracking-widest">
                                    {mod.title}
                                </h3>
                            </div>
                            {/* Animated Pulse Dot */}
                            <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-emerald-500' : 'bg-indigo-500'} animate-pulse shadow-[0_0_8px_currentColor]`} />
                        </div>

                        {/* Content Text */}
                        <p className="text-[12px] text-slate-600 leading-relaxed text-justify font-medium pl-1">
                            {mod.text}
                        </p>

                        {/* Visual Logic Bracket (Bottom Right) */}
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-slate-300 opacity-40 group-hover:border-blue-400 transition-colors" />
                    </div>
                </motion.div>
            ))}
            
            {/* System Status Readout Footer */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-4 flex items-center justify-between px-2"
            >
                <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-3 bg-blue-500/20 rounded-full" />)}
                    </div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Deployment Ready</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                    LATENCY: <span className="text-emerald-500 font-bold">MINIMAL</span>
                </div>
            </motion.div>
        </div>

        {/* Right Column: 3D Tech-Crate Visualization (Maintained) */}
        <div className="w-1/2 h-full flex items-center justify-center relative perspective-2500">
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-64 h-64 bg-blue-400 blur-[120px] rounded-full" />
            </div>

            <motion.div 
                className="relative w-72 h-80 flex items-center justify-center"
                initial={{ rotateY: -30, rotateX: 20 }}
                animate={{ rotateY: 30, rotateX: 10 }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Glass Shell */}
                <motion.div 
                    className="absolute w-56 h-64 bg-blue-500/10 backdrop-blur-sm border-[3px] border-blue-400/50 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                    style={{ transform: 'translateZ(0px)' }}
                >
                    <div className="absolute inset-0 flex justify-around px-4 pointer-events-none">
                        {[1,2,3,4].map(i => <div key={i} className="w-1 h-full bg-blue-400/20" />)}
                    </div>
                </motion.div>

                {/* Exploded Layers */}
                <motion.div 
                    className="absolute w-44 h-12 bg-slate-800/90 rounded-xl border border-slate-600 flex items-center justify-center shadow-xl"
                    style={{ transform: 'translateY(60px) translateZ(40px)' }}
                    animate={{ y: [60, 55, 60] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Shared Libs</span>
                </motion.div>

                <motion.div 
                    className="absolute w-44 h-12 bg-blue-900/90 rounded-xl border border-blue-500 flex items-center justify-center shadow-xl"
                    style={{ transform: 'translateY(0px) translateZ(80px)' }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <span className="text-[9px] font-black text-blue-300 uppercase tracking-[0.2em]">Binaries</span>
                </motion.div>

                <motion.div 
                    className="absolute w-44 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl border border-blue-300 flex flex-col items-center justify-center shadow-2xl"
                    style={{ transform: 'translateY(-70px) translateZ(120px)' }}
                    animate={{ y: [-70, -80, -70] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="text-2xl mb-1">⚛️</div>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">App Code</span>
                </motion.div>

                {/* Status Badge */}
                <motion.div 
                    className="absolute -right-20 top-0 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-2xl border border-blue-100 flex items-center gap-3 z-50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    style={{ transform: 'translateZ(180px)' }}
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Status</span>
                        <span className="text-[9px] font-bold text-blue-600 uppercase">Lightweight</span>
                    </div>
                </motion.div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ transform: 'translateZ(20px)' }}>
                    <motion.path 
                        d="M 50 50 Q 150 150 250 50" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="1" 
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, -20] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </motion.div>

            <div className="absolute bottom-12 w-48 h-8 bg-black/10 blur-2xl rounded-full" />
        </div>

      </div>
    </SlideLayout>
  );
};

export default ContainersDefinitionSlide;