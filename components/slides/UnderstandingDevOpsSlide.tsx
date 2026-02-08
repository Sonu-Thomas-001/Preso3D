
import React from 'react';
import { motion, Variants } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const UnderstandingDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
      <span className="text-[#0f172a] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
      <span className="text-[#22c55e] text-xl font-medium mt-1">The DevOps Toolchain</span>
    </div>
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const platformVariants: Variants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 15 } }
  };

  // Fix: Explicitly added 'key' to the props type definition to resolve TS assignment errors when used in .map()
  const ToolBadge = ({ label, color = "bg-white", textColor = "text-slate-700" }: { label: string, color?: string, textColor?: string, key?: React.Key }) => (
    <motion.div
      whileHover={{ scale: 1.1, z: 80, rotateX: -10 }}
      className={`${color} border border-white/30 shadow-lg px-2.5 py-1 rounded-md mb-1 flex items-center gap-1.5 backdrop-blur-md`}
    >
      <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse"></div>
      <span className={`text-[9px] font-black ${textColor} whitespace-nowrap tracking-tight`}>{label}</span>
    </motion.div>
  );

  // Phases mapped clockwise starting from top (PLAN)
  const phases = [
    { label: "PLAN", side: "dev", tools: ["Jira", "Slack"], angle: 270 },
    { label: "CODE", side: "dev", tools: ["Git", "VS Code"], angle: 315 },
    { label: "BUILD", side: "dev", tools: ["Docker", "Maven"], angle: 0 },
    { label: "TEST", side: "dev", tools: ["Selenium"], angle: 45 },
    { label: "RELEASE", side: "ops", tools: ["Jenkins"], angle: 90 },
    { label: "DEPLOY", side: "ops", tools: ["Kubernetes", "AWS"], angle: 135 },
    { label: "OPERATE", side: "ops", tools: ["Ansible", "Terraform"], angle: 180 },
    { label: "MONITOR", side: "ops", tools: ["Grafana", "ELK"], angle: 225 },
  ];

  return (
    <SlideLayout
      title={HeaderTitle}
      titleColor="blue"
      id="06"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col items-center justify-center h-full relative w-full perspective-2000 overflow-visible pb-16">

        <motion.div
          className="relative w-full max-w-4xl h-[480px] flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ transformStyle: 'preserve-3d', rotateX: '12deg' }}
        >
          {/* --- CENTRAL GLOWING CORE --- */}
          <motion.div
            className="absolute z-20 w-36 h-36 rounded-full bg-white shadow-[0_0_60px_rgba(79,70,229,0.15)] flex flex-col items-center justify-center border-4 border-slate-50 overflow-hidden"
            style={{ translateZ: '30px' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            {/* Visual background for the core */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#4f46e5_0%,transparent_70%)]"></div>
            
            <div className="flex -space-x-1.5 mb-1.5 z-10">
                <div className="w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-white shadow-sm"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
            </div>
            <span className="text-lg font-black text-slate-800 tracking-tighter z-10">DEVOPS</span>
            <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 z-10">CORE ENGINE</span>
            
            {/* Spinning inner track */}
            <div className="absolute inset-2 rounded-full border border-dashed border-indigo-100 animate-spin-slow opacity-60"></div>
          </motion.div>

          {/* --- ORBITAL PHASE PLATFORMS --- */}
          {phases.map((phase, i) => {
            const radius = 210; // Comfortable radius to avoid core collision
            const x = Math.cos((phase.angle * Math.PI) / 180) * radius;
            const y = Math.sin((phase.angle * Math.PI) / 180) * (radius * 0.85); // Oval perspective
            const isDev = phase.side === 'dev';

            return (
              <motion.div
                key={i}
                variants={platformVariants}
                className="absolute z-10 flex flex-col items-center"
                style={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`, 
                    transform: 'translate(-50%, -50%)',
                    transformStyle: 'preserve-3d'
                }}
              >
                {/* Tools Floating Above - High Z-Translation for 3D effect */}
                <div className="mb-3 flex flex-col items-center gap-0.5" style={{ transform: 'translateZ(110px)' }}>
                    {phase.tools.map((tool, tIdx) => (
                        <ToolBadge 
                            key={tIdx} 
                            label={tool} 
                            color={isDev ? "bg-indigo-600/95" : "bg-emerald-600/95"} 
                            textColor="text-white" 
                        />
                    ))}
                </div>

                {/* The Pedestal / Platform */}
                <motion.div 
                    whileHover={{ translateZ: 30, scale: 1.15 }}
                    className={`
                        w-24 h-14 rounded-xl shadow-xl flex items-center justify-center border-t-2 transition-all
                        ${isDev 
                            ? 'bg-gradient-to-br from-indigo-50 to-white border-indigo-200' 
                            : 'bg-gradient-to-br from-emerald-50 to-white border-emerald-200'}
                    `}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <span className={`text-[9px] font-black tracking-widest ${isDev ? 'text-indigo-600' : 'text-emerald-600'}`}>
                        {phase.label}
                    </span>
                    {/* Shadow underneath */}
                    <div className="absolute -bottom-3 w-10 h-1.5 bg-black/5 blur-md rounded-full"></div>
                </motion.div>

                {/* Connector Line to Hub - Visual thread */}
                <div className={`absolute top-1/2 left-1/2 w-[1px] h-16 origin-top -z-10 opacity-10 ${isDev ? 'bg-indigo-400' : 'bg-emerald-400'}`}
                     style={{ transform: `rotate(${phase.angle + 90}deg) translateY(-60px)` }}></div>
              </motion.div>
            );
          })}

          {/* Background Ring Visuals */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <circle cx="50%" cy="50%" r="210" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" className="text-slate-300" />
              <circle cx="50%" cy="50%" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-200" />
          </svg>

        </motion.div>

        {/* Minimal Bottom Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-2 flex gap-10 items-center bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/50 shadow-sm"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.4)]"></div>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Development Hemisphere</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Operations Hemisphere</span>
          </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default UnderstandingDevOpsSlide;
