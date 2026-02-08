import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const DevOpsEngineerRoleSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">DevOps Engineer Role</span>
    </div>
  );

  const roles = [
    { text: "Specifications & Docs", icon: "📝", color: "border-blue-400 bg-blue-50 text-blue-800" },
    { text: "Infrastructure Mgmt", icon: "🏗️", color: "border-indigo-400 bg-indigo-50 text-indigo-800" },
    { text: "Performance Monitoring", icon: "📊", color: "border-green-400 bg-green-50 text-green-800" },
    { text: "Cloud Deployment", icon: "☁️", color: "border-sky-400 bg-sky-50 text-sky-800" },
    { text: "CI/CD Automation", icon: "⚙️", color: "border-purple-400 bg-purple-50 text-purple-800" },
    { text: "DevOps Culture", icon: "🧠", color: "border-rose-400 bg-rose-50 text-rose-800" },
  ];

  // Using a viewbox coordinate system of 0-600 for the SVG
  const center = 300;
  const radius = 220; // Radius for the SVG lines end
  
  // Calculate radius in percentage relative to the container size
  // 220 / 600 = 0.3666... => 36.6%
  const radiusPercent = 36.6; 

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="10"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center relative perspective-1000 overflow-visible">
        
        {/* Main Container - Reduced size to prevent clipping on standard 1080p screens when scaled */}
        <motion.div 
            className="relative w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] flex items-center justify-center"
            initial={{ rotateX: 10, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Background Radial Glow */}
            <div className="absolute inset-0 rounded-full opacity-40 blur-3xl pointer-events-none" 
                 style={{ background: 'radial-gradient(circle, rgba(74, 222, 128, 0.2) 0%, transparent 70%)', transform: 'translateZ(-40px)' }}></div>

            {/* SVG Layer for Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 600 600" style={{ transform: 'translateZ(-10px)' }}>
                {roles.map((_, i) => {
                     const angle = (i * 2 * Math.PI) / roles.length - Math.PI / 2;
                     const x = center + Math.cos(angle) * radius;
                     const y = center + Math.sin(angle) * radius;
                     return (
                         <motion.line 
                            key={i} 
                            x1={center} y1={center} 
                            x2={x} y2={y} 
                            stroke="#cbd5e1" 
                            strokeWidth="2" 
                            strokeDasharray="6 6"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
                         />
                     );
                })}
                {/* Outer Ring Dashed */}
                 <circle cx={center} cy={center} r={radius} fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="8 8" opacity="0.6" />
            </svg>

             {/* Center Hub */}
             <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                className="absolute z-20 w-[28%] h-[28%] bg-white rounded-full shadow-2xl border-4 border-white flex flex-col items-center justify-center"
                style={{ transform: 'translateZ(30px)' }}
             >
                <div className="text-4xl md:text-5xl mb-1 z-10">👨‍💻</div>
                <div className="text-[0.6rem] md:text-[0.7rem] font-black text-slate-800 uppercase tracking-widest z-10 text-center leading-tight mt-1">DevOps<br/>Engineer</div>
                
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full border border-slate-100"></div>
                <div className="absolute -inset-2 border border-slate-200/50 rounded-full animate-pulse"></div>
             </motion.div>

             {/* Satellite Cards */}
             {roles.map((role, i) => {
                 const angle = (i * 2 * Math.PI) / roles.length - Math.PI / 2;
                 // Calculate percentage offsets from center (50%, 50%)
                 const top = 50 + Math.sin(angle) * radiusPercent;
                 const left = 50 + Math.cos(angle) * radiusPercent;

                 return (
                    <motion.div
                        key={i}
                        className="absolute z-30 flex items-center justify-center"
                        style={{ 
                            top: `${top}%`, 
                            left: `${left}%`,
                            transform: 'translateZ(20px)', 
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + (i * 0.1), type: "spring", stiffness: 120 }}
                    >
                        {/* Inner Centering Wrapper */}
                        <div className="transform -translate-x-1/2 -translate-y-1/2">
                            <div className={`
                                relative flex flex-col items-center justify-center 
                                w-28 h-16 md:w-36 md:h-20 
                                bg-white/95 backdrop-blur-md rounded-xl shadow-lg border-l-4 ${role.color}
                                hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group 
                            `}>
                                 <div className="absolute -top-3 md:-top-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-sm md:text-lg group-hover:-translate-y-1 transition-transform z-10">
                                    {role.icon}
                                 </div>
                                 <span className="text-[9px] md:text-[10px] font-bold text-slate-700 text-center leading-tight px-2 mt-2 group-hover:text-black transition-colors">
                                    {role.text}
                                 </span>
                            </div>
                        </div>
                    </motion.div>
                 );
             })}

        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default DevOpsEngineerRoleSlide;