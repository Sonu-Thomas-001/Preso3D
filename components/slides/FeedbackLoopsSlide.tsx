import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const FeedbackLoopsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Feedback Loops</span>
    </div>
  );

  const points = [
    { 
      text: "Feedback loops ensure that information flows continuously and rapidly between systems, teams, and stakeholders.",
      pos: "top-4 left-4 md:top-10 md:left-10",
      align: "items-start",
      delay: 0
    },
    { 
      text: "Feedback can come from automated test results, monitoring and logging systems, user behavior analytics, and incident reports.",
      pos: "top-4 right-4 md:top-10 md:right-10",
      align: "items-end",
      delay: 0.1
    },
    { 
      text: "Fast and actionable feedback enables teams to detect issues early, understand root causes, and make informed improvements.",
      pos: "bottom-4 left-4 md:bottom-10 md:left-10",
      align: "items-start",
      delay: 0.2
    },
    { 
      text: "Strong feedback loops support continuous learning, allowing organizations to adapt quickly and enhance product quality.",
      pos: "bottom-4 right-4 md:bottom-10 md:right-10",
      align: "items-end",
      delay: 0.3
    }
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="18"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
        
        {/* Central Animation Hub */}
        <div className="relative w-[300px] h-[300px] flex items-center justify-center z-10">
            
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>

            {/* Rotating Rings */}
            <motion.div 
                className="absolute inset-0 rounded-full border-[24px] border-slate-50 border-t-blue-400 border-b-green-400 shadow-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            />
            <motion.div 
                className="absolute inset-4 rounded-full border-[12px] border-white border-l-purple-300 border-r-indigo-300 opacity-80"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            />

            {/* Center Content */}
            <div className="absolute inset-0 m-auto w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center z-20 border-4 border-slate-50">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-2 shadow-lg">
                    🔄
                </div>
                <div className="text-[10px] font-black text-slate-700 uppercase tracking-widest text-center leading-tight">
                    Continuous<br/>Improvement
                </div>
            </div>

            {/* Orbiting Particles */}
             <motion.div 
                className="absolute inset-[-20px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            >
                <div className="absolute top-0 left-1/2 w-6 h-6 bg-white rounded-full shadow-md border-4 border-blue-500 z-30"></div>
            </motion.div>
        </div>

        {/* Distributed Cards Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
             {points.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + item.delay }}
                    className={`absolute ${item.pos} w-[280px] md:w-[320px] pointer-events-auto flex flex-col ${item.align}`}
                >
                    {/* Card */}
                    <div className="bg-white p-5 rounded-2xl shadow-xl border border-slate-100 relative group hover:scale-105 transition-transform duration-300">
                        <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-6 text-justify">
                            {item.text}
                        </p>
                        
                        {/* Connecting Line Visual (pointing towards center roughly) */}
                        <div className={`
                            absolute w-8 h-0.5 bg-blue-200 
                            ${item.align === 'items-start' ? '-right-8 top-1/2' : '-left-8 top-1/2'}
                            hidden md:block opacity-50
                        `}></div>
                    </div>
                </motion.div>
             ))}
        </div>

        {/* Background Connecting Arcs (Decorative) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
             <circle cx="50%" cy="50%" r="250" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="10 10" />
             <circle cx="50%" cy="50%" r="350" fill="none" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
        </svg>

      </div>
    </SlideLayout>
  );
};

export default FeedbackLoopsSlide;