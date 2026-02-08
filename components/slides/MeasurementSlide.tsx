import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const MeasurementSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Measurement & Metrics</span>
    </div>
  );

  const points = [
    "Measurement in DevOps involves collecting and analyzing metrics to evaluate the performance, reliability, and efficiency of software delivery and operations.",
    "Commonly tracked metrics include deployment frequency, lead time for changes, change failure rate, mean time to detect (MTTD), and mean time to recover (MTTR).",
    "By measuring both technical and business outcomes, organizations gain visibility into system behavior and process effectiveness.",
    "Data-driven insights help teams identify bottlenecks, optimize workflows, improve system stability, and align technical performance with business goals."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="17"
      isPresenting={isPresenting}
    >
      <div className="flex h-full gap-8 items-center perspective-1000">
        
        {/* Left: Text Cards in 3D Stack */}
        <div className="w-1/2 flex flex-col gap-4 z-10">
            {points.map((text, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -50, rotateY: 20 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="bg-white/80 backdrop-blur-md p-4 rounded-xl border-l-4 border-[#46c256] shadow-sm hover:shadow-lg hover:translate-x-2 transition-all"
                >
                    <p className="text-xs text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Right: 3D Analytics Dashboard */}
        <motion.div 
            className="w-1/2 h-[90%] relative"
            initial={{ rotateY: -20, rotateX: 10, scale: 0.9 }}
            animate={{ rotateY: -10, rotateX: 5, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
             {/* Main Dashboard Panel */}
             <div className="absolute inset-0 bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col p-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
                    <span className="text-xs font-mono text-green-400">SYSTEM_METRICS_V2.0</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-2 gap-4 h-full">
                    {/* Metric 1: Deployment Freq */}
                    <div className="bg-slate-800 rounded-lg p-3 relative overflow-hidden group">
                        <span className="text-[10px] text-slate-400">Deployment Freq</span>
                        <div className="text-2xl font-bold text-white mt-1">12/day</div>
                        <div className="absolute bottom-0 left-0 right-0 h-8 flex items-end gap-1 px-2 pb-2">
                             {[40, 60, 45, 80, 70, 90, 60].map((h, i) => (
                                 <motion.div 
                                    key={i} 
                                    className="flex-1 bg-green-500/80 rounded-t-sm" 
                                    initial={{ height: 0 }} 
                                    animate={{ height: `${h}%` }} 
                                    transition={{ delay: 1 + i*0.1 }} 
                                 />
                             ))}
                        </div>
                    </div>

                    {/* Metric 2: MTTR */}
                    <div className="bg-slate-800 rounded-lg p-3 relative overflow-hidden">
                        <span className="text-[10px] text-slate-400">Mean Time To Recover</span>
                        <div className="text-2xl font-bold text-blue-400 mt-1">12m</div>
                         {/* Circle Chart */}
                         <div className="absolute right-2 top-2 w-10 h-10 rounded-full border-4 border-slate-700 border-t-blue-500 animate-spin-slow"></div>
                    </div>

                    {/* Metric 3: Lead Time */}
                    <div className="bg-slate-800 rounded-lg p-3 col-span-2">
                        <span className="text-[10px] text-slate-400">Lead Time for Changes</span>
                        <div className="flex items-center gap-4 mt-2">
                            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-purple-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: '75%' }}
                                    transition={{ duration: 2 }}
                                />
                            </div>
                            <span className="text-xs text-purple-300 font-mono">4h 20m</span>
                        </div>
                    </div>
                </div>
             </div>

             {/* Floating Elements */}
             <motion.div 
                className="absolute -right-4 -top-4 bg-white p-3 rounded-lg shadow-xl border border-slate-200 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ transform: 'translateZ(40px)' }}
             >
                <div className="text-xs font-bold text-slate-800">Change Failure Rate</div>
                <div className="text-xl font-bold text-red-500">0.05% <span className="text-[10px] text-slate-400">▼</span></div>
             </motion.div>

        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default MeasurementSlide;