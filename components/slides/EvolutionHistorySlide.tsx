import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const EvolutionHistorySlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Evolution History</span>
    </div>
  );

  const timelineEvents = [
    { year: "2009-2010", title: "Siloed Development", desc: "Waterfall model, Dev & Ops isolated, manual deployments.", color: "bg-slate-500" },
    { year: "2010-2012", title: "Agile Development", desc: "Iterative development, customer feedback, faster dev cycles.", color: "bg-orange-500" },
    { year: "2012-2015", title: "CI & Deployment", desc: "Automated builds, CI tools, early containerization.", color: "bg-blue-500" },
    { year: "2015-2018", title: "Testing & Monitoring", desc: "Automated testing suites, real-time monitoring, feedback loops.", color: "bg-purple-500" },
    { year: "2018-2020", title: "SRE Reliability", desc: "Focus on reliability, SLAs/SLOs, scalability, automation.", color: "bg-pink-500" },
    { year: "2020+", title: "DevSecOps & AI", desc: "Security as code, shift-left security, AI/ML in DevOps.", color: "bg-green-500" },
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="08"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        
        {/* Central Glowing Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "linear" }}
                className="h-full bg-gradient-to-r from-slate-300 via-blue-400 to-green-500"
             />
        </div>

        <div className="flex justify-between w-full relative z-10 px-2 h-64 items-center">
            {timelineEvents.map((event, index) => {
                const isTop = index % 2 === 0;
                return (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: isTop ? -50 : 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                        className="flex flex-col items-center w-1/6 relative group"
                    >
                        {/* Year Badge on Line */}
                        <div className={`w-8 h-8 rounded-full ${event.color} border-4 border-white shadow-md z-20 flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                             <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        {/* Content Card */}
                        <div className={`absolute ${isTop ? 'bottom-10' : 'top-10'} w-[140px] flex flex-col items-center`}>
                            {/* Vertical Connector */}
                            <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: 40 }}
                                transition={{ delay: index * 0.2 + 0.3 }}
                                className={`w-0.5 bg-slate-300 absolute left-1/2 -translate-x-1/2 ${isTop ? 'top-full' : 'bottom-full'}`}
                            />

                            {/* Card Body */}
                            <div className={`bg-white/90 backdrop-blur-md p-3 rounded-xl border border-slate-100 shadow-xl text-center hover:-translate-y-1 transition-transform duration-300 w-full ${isTop ? 'mb-2' : 'mt-2'}`}>
                                <span className={`inline-block px-2 py-0.5 rounded-md text-[9px] font-bold text-white mb-2 ${event.color} shadow-sm`}>
                                    {event.year}
                                </span>
                                <h4 className="text-[10px] font-bold text-slate-800 mb-1 leading-tight">{event.title}</h4>
                                <p className="text-[9px] text-slate-500 leading-snug">{event.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>

      </div>
    </SlideLayout>
  );
};

export default EvolutionHistorySlide;