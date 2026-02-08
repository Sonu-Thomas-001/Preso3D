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
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const toolGroupVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  const ToolBadge = ({ label, color = "bg-slate-100", textColor = "text-slate-700", icon }: { label: React.ReactNode, color?: string, textColor?: string, icon?: React.ReactNode }) => (
    <div className={`flex items-center gap-2 ${color} border border-slate-200/50 shadow-sm px-2.5 py-1.5 rounded-lg mb-1.5 hover:scale-105 hover:shadow-md transition-all cursor-default min-w-max`}>
      {icon}
      <span className={`text-[11px] font-bold ${textColor} whitespace-nowrap`}>{label}</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="blue"
      id="06"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col items-center justify-center h-full relative w-full perspective-1000">
        
        <motion.div 
          className="relative w-[1000px] h-[550px] scale-[0.7] md:scale-[0.8] lg:scale-[0.9]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ transformStyle: 'preserve-3d' }}
        >
            
            {/* --- SVG DIAGRAM LAYER --- */}
            <svg viewBox="0 0 1000 550" className="absolute top-0 left-0 w-full h-full overflow-visible z-0" style={{ transform: 'translateZ(0px)' }}>
                <defs>
                    <linearGradient id="devGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <linearGradient id="opsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4ade80" />
                        <stop offset="100%" stopColor="#16a34a" />
                    </linearGradient>
                    <filter id="glowShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.25"/>
                    </filter>
                    <marker id="connectorDot" markerWidth="8" markerHeight="8" refX="4" refY="4">
                         <circle cx="4" cy="4" r="2" fill="#94a3b8" />
                    </marker>
                </defs>

                {/* 
                   Infinity Loop Construction 
                   Center Point: 500, 275
                   Left Loop Center approx: 250, 275
                   Right Loop Center approx: 750, 275
                */}

                {/* LEFT LOOP (Navy) - Counter-Clockwise */}
                {/* Starts from Center(500,275), goes Up-Left -> Far-Left -> Bottom-Left -> Center */}
                <path 
                    d="M 500 275 
                       C 450 125, 200 125, 150 275
                       C 200 425, 450 425, 500 275"
                    fill="none"
                    stroke="url(#devGradient)"
                    strokeWidth="90"
                    strokeLinecap="butt"
                    filter="url(#glowShadow)"
                />

                {/* RIGHT LOOP (Green) - Clockwise */}
                {/* Starts from Center(500,275), goes Up-Right -> Far-Right -> Bottom-Right -> Center */}
                <path 
                    d="M 500 275 
                       C 550 125, 800 125, 850 275
                       C 800 425, 550 425, 500 275"
                    fill="none"
                    stroke="url(#opsGradient)"
                    strokeWidth="90"
                    strokeLinecap="butt"
                    filter="url(#glowShadow)"
                />
                
                {/* Dashed Center Line for Flow */}
                <path 
                    d="M 500 275 
                       C 450 125, 200 125, 150 275
                       C 200 425, 450 425, 500 275"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="10,10"
                    strokeOpacity="0.2"
                />
                 <path 
                    d="M 500 275 
                       C 550 125, 800 125, 850 275
                       C 800 425, 550 425, 500 275"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="10,10"
                    strokeOpacity="0.3"
                />

                {/* Direction Arrows on Path */}
                {/* Dev Top */}
                <polygon points="325,160 315,170 335,170" fill="white" transform="rotate(-40 325 160)" opacity="0.8"/>
                {/* Dev Bottom */}
                <polygon points="325,390 315,400 335,400" fill="white" transform="rotate(-140 325 390)" opacity="0.8"/>
                
                {/* Ops Top */}
                <polygon points="675,160 665,170 685,170" fill="white" transform="rotate(40 675 160)" opacity="0.8"/>
                {/* Ops Bottom */}
                <polygon points="675,390 665,400 685,400" fill="white" transform="rotate(140 675 390)" opacity="0.8"/>

                {/* PHASE TEXT LABELS */}
                {/* 1 Plan - Top Right of Left Loop */}
                <text x="390" y="190" fill="#cbd5e1" fontSize="22" fontWeight="800" textAnchor="middle" transform="rotate(-30 390 190)">plan</text>
                {/* 2 Code - Top Left of Left Loop */}
                <text x="240" y="160" fill="white" fontSize="26" fontWeight="800" textAnchor="middle" transform="rotate(0 240 160)">code</text>
                {/* 3 Build - Far Left */}
                <text x="130" y="285" fill="#cbd5e1" fontSize="22" fontWeight="800" textAnchor="middle" transform="rotate(-90 130 285)">build</text>
                {/* 4 Test - Bottom Left */}
                <text x="240" y="405" fill="#cbd5e1" fontSize="24" fontWeight="800" textAnchor="middle" transform="rotate(0 240 405)">test</text>

                {/* 5 Release - Start of Right Loop (Top/Center) - actually usually center crossing, placing near start of green */}
                <text x="500" y="280" fill="#064e3b" fontSize="20" fontWeight="800" textAnchor="middle" transform="rotate(-45 500 280)">release</text>
                
                {/* 6 Deploy - Top Right */}
                <text x="610" y="190" fill="#064e3b" fontSize="22" fontWeight="800" textAnchor="middle" transform="rotate(30 610 190)">deploy</text>
                {/* 7 Operate - Far Right */}
                <text x="870" y="285" fill="#064e3b" fontSize="22" fontWeight="800" textAnchor="middle" transform="rotate(90 870 285)">operate</text>
                {/* 8 Monitor - Bottom Right */}
                <text x="650" y="410" fill="#064e3b" fontSize="24" fontWeight="800" textAnchor="middle" transform="rotate(-15 650 410)">monitor</text>

                {/* Connector Lines from Tools to Path */}
                {/* Plan */}
                <line x1="390" y1="150" x2="420" y2="80" stroke="#94a3b8" strokeWidth="1.5" />
                {/* Code */}
                <line x1="240" y1="120" x2="200" y2="60" stroke="#94a3b8" strokeWidth="1.5" />
                {/* Build */}
                <line x1="90" y1="275" x2="40" y2="275" stroke="#94a3b8" strokeWidth="1.5" />
                {/* Test */}
                <line x1="240" y1="440" x2="240" y2="480" stroke="#94a3b8" strokeWidth="1.5" />
                
                {/* Release - Jenkins is center bottom usually */}
                <line x1="500" y1="320" x2="500" y2="400" stroke="#94a3b8" strokeWidth="1.5" />

                {/* Deploy */}
                <line x1="610" y1="150" x2="650" y2="80" stroke="#94a3b8" strokeWidth="1.5" />
                {/* Operate */}
                <line x1="910" y1="275" x2="950" y2="275" stroke="#94a3b8" strokeWidth="1.5" />
                {/* Monitor */}
                <line x1="650" y1="440" x2="700" y2="480" stroke="#94a3b8" strokeWidth="1.5" />

            </svg>

            {/* --- NUMBER BADGES --- */}
            {/* 1 Plan */}
            <div className="absolute top-[160px] left-[400px] w-6 h-6 rounded-full bg-slate-200 border-2 border-slate-600 flex items-center justify-center text-[10px] font-bold z-20 shadow-lg" style={{transform: 'translateZ(20px)'}}>1</div>
            {/* 2 Code */}
            <div className="absolute top-[120px] left-[200px] w-6 h-6 rounded-full bg-slate-200 border-2 border-slate-600 flex items-center justify-center text-[10px] font-bold z-20 shadow-lg" style={{transform: 'translateZ(20px)'}}>2</div>
            {/* 3 Build */}
            <div className="absolute top-[265px] left-[90px] w-6 h-6 rounded-full bg-slate-200 border-2 border-slate-600 flex items-center justify-center text-[10px] font-bold z-20 shadow-lg" style={{transform: 'translateZ(20px)'}}>3</div>
            {/* 4 Test */}
            <div className="absolute top-[410px] left-[260px] w-6 h-6 rounded-full bg-slate-200 border-2 border-slate-600 flex items-center justify-center text-[10px] font-bold z-20 shadow-lg" style={{transform: 'translateZ(20px)'}}>4</div>
            
            {/* 5 Release */}
            <div className="absolute top-[280px] left-[480px] w-6 h-6 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center text-[10px] font-bold text-green-800 z-20 shadow-lg" style={{transform: 'translateZ(20px)'}}>5</div>
            {/* 6 Deploy */}
            <div className="absolute top-[130px] right-[370px] w-6 h-6 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center text-[10px] font-bold text-green-800 z-20 shadow-lg" style={{transform: 'translateZ(20px)'}}>6</div>
            {/* 7 Operate */}
            <div className="absolute top-[265px] right-[90px] w-6 h-6 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center text-[10px] font-bold text-green-800 z-20 shadow-lg" style={{transform: 'translateZ(20px)'}}>7</div>
            {/* 8 Monitor */}
            <div className="absolute top-[410px] right-[310px] w-6 h-6 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center text-[10px] font-bold text-green-800 z-20 shadow-lg" style={{transform: 'translateZ(20px)'}}>8</div>

            {/* --- CENTER BIG LABELS --- */}
            <div className="absolute left-[260px] top-[225px] z-10 pointer-events-none">
                <h2 className="text-6xl font-black text-white/20 tracking-tighter drop-shadow-sm select-none">Dev</h2>
            </div>
             <div className="absolute right-[260px] top-[225px] z-10 pointer-events-none">
                <h2 className="text-6xl font-black text-[#14532d]/20 tracking-tighter drop-shadow-sm select-none">Ops</h2>
            </div>


            {/* --- FLOATING TOOL CLUSTERS --- */}

            {/* 1. PLAN (Top Center Left) */}
            <motion.div variants={toolGroupVariants} className="absolute top-[10px] left-[400px] z-30" style={{transform: 'translateZ(40px)'}}>
                 <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                        <ToolBadge label="Jira" color="bg-blue-600" textColor="text-white" />
                        <ToolBadge label="Confluence" color="bg-blue-500" textColor="text-white" />
                    </div>
                    <div className="flex gap-2 justify-center">
                         <ToolBadge label="Trello" color="bg-blue-400" textColor="text-white" />
                         <ToolBadge label="Excel" color="bg-green-600" textColor="text-white" />
                    </div>
                </div>
            </motion.div>

            {/* 2. CODE (Top Left) */}
            <motion.div variants={toolGroupVariants} className="absolute top-[0px] left-[50px] z-30" style={{transform: 'translateZ(40px)'}}>
                <div className="flex flex-col items-end gap-1">
                    <div className="flex gap-2">
                        <ToolBadge label="VS Code" color="bg-blue-500" textColor="text-white" />
                        <ToolBadge label="IntelliJ" color="bg-purple-600" textColor="text-white" />
                    </div>
                    <div className="flex gap-2">
                        <ToolBadge label="Git" color="bg-red-500" textColor="text-white" />
                        <ToolBadge label="GitHub" color="bg-slate-900" textColor="text-white" />
                        <ToolBadge label="GitLab" color="bg-orange-500" textColor="text-white" />
                    </div>
                </div>
            </motion.div>

            {/* 3. BUILD (Far Left) */}
             <motion.div variants={toolGroupVariants} className="absolute bottom-[200px] left-[-70px] z-30" style={{transform: 'translateZ(40px)'}}>
                 <div className="flex flex-col items-end gap-1">
                     <div className="text-3xl font-black text-slate-800 tracking-tighter">Maven</div>
                     <div className="flex gap-2">
                         <ToolBadge label="Gradle" color="bg-green-700" textColor="text-white" />
                         <ToolBadge label="Ant" color="bg-purple-200" textColor="text-purple-900" />
                     </div>
                 </div>
            </motion.div>

            {/* 4. TEST (Bottom Left) */}
            <motion.div variants={toolGroupVariants} className="absolute bottom-[-30px] left-[150px] z-30" style={{transform: 'translateZ(40px)'}}>
                 <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200 shadow-xl flex flex-col gap-1 items-center">
                    <span className="text-xs font-bold text-slate-600">Selenium, JUnit</span>
                    <span className="text-xs font-bold text-blue-600 underline decoration-blue-300 decoration-2">Stress Testing</span>
                    <ToolBadge label="SonarQube" color="bg-blue-400" textColor="text-white" />
                 </div>
            </motion.div>

            {/* 5. RELEASE (Center Bottom) */}
            <motion.div variants={toolGroupVariants} className="absolute bottom-[20px] left-[450px] z-30 flex flex-col items-center" style={{transform: 'translateZ(50px)'}}>
                <div className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 flex items-center justify-center w-16 h-16 mb-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg" alt="Jenkins" className="w-12 h-12" />
                </div>
                <div className="bg-slate-800 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">Jenkins</div>
                <div className="flex gap-1 mt-2">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                </div>
            </motion.div>

            {/* 6. DEPLOY (Top Right) */}
            <motion.div variants={toolGroupVariants} className="absolute top-[0px] right-[40px] z-30" style={{transform: 'translateZ(40px)'}}>
                 <div className="flex flex-col items-start gap-1">
                    <div className="flex gap-3 mb-1 items-baseline">
                         <span className="text-orange-500 font-black text-xl">puppet</span>
                         <span className="text-orange-500 font-black text-xl">CHEF</span>
                    </div>
                    <div className="flex gap-2">
                        <ToolBadge label="Docker" color="bg-blue-500" textColor="text-white" />
                        <ToolBadge label="Kubernetes" color="bg-blue-600" textColor="text-white" />
                    </div>
                 </div>
            </motion.div>

            {/* 7. OPERATE (Far Right) */}
            <motion.div variants={toolGroupVariants} className="absolute bottom-[200px] right-[-70px] z-30" style={{transform: 'translateZ(40px)'}}>
                 <div className="flex flex-col items-start gap-2">
                     <div className="flex items-center gap-2 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">
                        <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-[8px] font-bold">TF</div>
                        <span className="font-bold text-slate-700 text-xs">Terraform</span>
                     </div>
                      <div className="flex items-center gap-2 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-[8px] font-bold">A</div>
                        <span className="font-bold text-slate-700 text-xs">Ansible</span>
                     </div>
                 </div>
            </motion.div>

            {/* 8. MONITOR (Bottom Right) */}
            <motion.div variants={toolGroupVariants} className="absolute bottom-[-30px] right-[180px] z-30" style={{transform: 'translateZ(40px)'}}>
                 <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200 shadow-xl flex flex-col gap-2 items-center">
                    <div className="flex gap-2 items-center">
                        <span className="text-xs font-bold text-slate-700">Nagios</span>
                        <div className="bg-[#f97316] text-white text-[9px] px-2 py-0.5 rounded font-bold">Grafana</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-xs font-bold text-slate-700">Splunk</span>
                        <span className="text-xs font-bold text-slate-700">Datadog</span>
                    </div>
                 </div>
            </motion.div>

        </motion.div>
        
      </div>
    </SlideLayout>
  );
};

export default UnderstandingDevOpsSlide;