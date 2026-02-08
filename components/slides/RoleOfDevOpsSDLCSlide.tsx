import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const RoleOfDevOpsSDLCSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Role in SDLC: Planning</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="19"
      isPresenting={isPresenting}
    >
      <div className="flex h-full gap-8 perspective-1000 items-center">
        
        {/* Left: Introduction & Details */}
        <div className="w-5/12 flex flex-col gap-6 z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-l-4 border-[#46c256] p-4 rounded-r-xl"
            >
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    DevOps transforms the SDLC from isolated linear steps into a continuous, collaborative loop.
                </p>
            </motion.div>

            <div className="flex flex-col gap-4">
                 <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="bg-[#46c256] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                    Planning Phase
                 </h3>
                 
                 <div className="pl-4 border-l-2 border-slate-200 space-y-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-1">Collaboration</div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                             Define requirements with stakeholders, Dev, Ops, and Security teams to align goals early.
                        </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-1">Tooling</div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                             Use tools like Jira or Azure Boards for backlog management and sprint planning.
                        </p>
                    </div>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-1">Example</div>
                        <p className="text-xs text-slate-600 leading-relaxed italic">
                             Identifying scalability needs for a new e-commerce feature before a single line of code is written.
                        </p>
                    </div>
                 </div>
            </div>
        </div>

        {/* Right: 3D Phase Visualization */}
        <div className="w-7/12 h-full flex items-center justify-center relative">
             <motion.div 
                className="relative w-full h-[400px]"
                initial={{ rotateY: -15, rotateX: 10 }}
                animate={{ rotateY: -5, rotateX: 5 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
             >
                {/* Base Platform */}
                <div className="absolute bottom-0 w-full h-full bg-slate-50/50 rounded-3xl transform rotate-x-60 border border-slate-200"></div>

                {/* 3D Steps representing phases */}
                
                {/* Step 1: Planning (Highlighted) */}
                <motion.div 
                    className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-2xl shadow-2xl border-t-8 border-[#46c256] flex flex-col items-center justify-center group"
                    style={{ transform: 'translateZ(60px)' }}
                    whileHover={{ translateZ: 80, transition: { duration: 0.2 } }}
                >
                    <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">📋</div>
                    <span className="font-bold text-slate-700">PLAN</span>
                    <div className="absolute -bottom-10 w-full h-10 bg-slate-200/50 blur-lg rounded-full"></div>
                </motion.div>

                {/* Step 2: Code (Receded) */}
                <div 
                    className="absolute bottom-20 left-40 w-32 h-32 bg-slate-100 rounded-2xl shadow-lg border-t-4 border-slate-300 flex flex-col items-center justify-center opacity-60"
                    style={{ transform: 'translateZ(40px)' }}
                >
                     <span className="font-bold text-slate-400">CODE</span>
                </div>

                {/* Step 3: Build (Receded) */}
                <div 
                    className="absolute bottom-32 left-64 w-24 h-24 bg-slate-100 rounded-2xl shadow-lg border-t-4 border-slate-300 flex flex-col items-center justify-center opacity-40"
                    style={{ transform: 'translateZ(20px)' }}
                >
                     <span className="font-bold text-slate-400 text-xs">BUILD</span>
                </div>

                {/* Connecting Path */}
                <svg className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(50px)' }}>
                    <path d="M 130 250 Q 200 220 250 180" stroke="#46c256" strokeWidth="4" fill="none" strokeDasharray="8 4" />
                    <circle cx="130" cy="250" r="4" fill="#46c256" />
                </svg>

                {/* Floating Blueprint Icon */}
                <motion.div 
                    className="absolute top-10 right-10 bg-blue-600 text-white p-4 rounded-full shadow-lg z-20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ transform: 'translateZ(100px)' }}
                >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </motion.div>

             </motion.div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default RoleOfDevOpsSDLCSlide;