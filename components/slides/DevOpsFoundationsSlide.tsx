import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const DevOpsFoundationsSlide: React.FC<Props> = ({ isPresenting }) => {
  
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Definition of DevOps</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="04"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center gap-6 relative z-10 pb-2 overflow-hidden">
        
        {/* Left Column: Text Cards */}
        <div className="w-[65%] flex flex-col gap-2 justify-center h-full">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-100 shadow-md relative overflow-hidden group hover:bg-white transition-colors shrink-1 flex flex-col justify-center"
             >
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#46c256] to-emerald-600"></div>
                 <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-[#46c256] transition-colors">The Core Concept</h3>
                 <p className="text-[10px] md:text-xs lg:text-sm text-slate-600 leading-snug text-justify">
                    DevOps is a cultural, organizational, and technical approach that unifies software development (Dev) and IT operations (Ops) to improve collaboration, automate processes, and enable continuous delivery of high-quality software.
                 </p>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-100 shadow-md relative overflow-hidden group hover:bg-white transition-colors shrink-1 flex flex-col justify-center"
             >
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                 <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">Beyond Toolsets</h3>
                 <p className="text-[10px] md:text-xs lg:text-sm text-slate-600 leading-snug text-justify">
                    Rather than being only a toolset, DevOps emphasizes shared responsibility, rapid feedback, and end-to-end ownership of applications. Core practices include continuous integration and continuous delivery/deployment (CI/CD), infrastructure as code, configuration management, automated testing, continuous monitoring, and incident response.
                 </p>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-100 shadow-md relative overflow-hidden group hover:bg-white transition-colors shrink-1 flex flex-col justify-center"
             >
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 to-fuchsia-600"></div>
                 <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-purple-600 transition-colors">Primary Goals</h3>
                 <p className="text-[10px] md:text-xs lg:text-sm text-slate-600 leading-snug text-justify">
                    The primary goal of DevOps is to shorten development cycles, increase deployment frequency, and ensure system reliability and scalability.
                 </p>
             </motion.div>
        </div>

        {/* Right Column: Illustration with depth */}
        <div className="w-[35%] h-full flex items-center justify-center relative">
             {/* Abstract Background Shapes */}
             <div className="absolute w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-50 -top-10 -right-10 animate-pulse"></div>
             <div className="absolute w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50 bottom-0 left-0 animate-pulse delay-700"></div>

             <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative z-10 w-full max-w-[280px]"
             >
                 <div className="bg-white p-2 rounded-2xl shadow-xl border-4 border-slate-50 transform rotate-3 group hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="https://img.freepik.com/free-vector/programmer-working-flat-style_52683-15041.jpg?w=740&t=st=1708804000~exp=1708804600~hmac=def"
                        alt="DevOps Engineer"
                        className="w-full h-auto rounded-xl object-cover"
                    />
                 </div>
                 {/* Floating Badges */}
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-4 -right-2 bg-white py-1 px-3 rounded-lg shadow-lg border border-slate-100 flex items-center gap-2"
                 >
                    <span className="text-lg">🚀</span>
                    <div className="flex flex-col">
                        <span className="text-[8px] text-slate-400 font-bold uppercase">Speed</span>
                        <span className="text-[9px] font-bold text-slate-800">Deployment</span>
                    </div>
                 </motion.div>
             </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default DevOpsFoundationsSlide;