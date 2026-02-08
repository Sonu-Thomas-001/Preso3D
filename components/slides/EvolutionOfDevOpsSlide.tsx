import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const EvolutionOfDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Evolution of DevOps</span>
    </div>
  );

  const cards = [
    {
      title: "The Problem: Silos & Waterfall",
      content: "DevOps evolved as a response to the inefficiencies of traditional software development models, particularly the Waterfall approach, where development and operations teams worked in isolated silos, leading to slow releases and frequent production issues.",
      color: "border-l-red-500",
      bg: "from-red-50 to-white",
      icon: "🛑"
    },
    {
      title: "The Bridge: Agile Methodology",
      content: "The introduction of Agile methodologies improved development speed through iterative delivery but did not fully address operational challenges such as deployment, scalability, and reliability.",
      color: "border-l-orange-500",
      bg: "from-orange-50 to-white",
      icon: "⚡"
    },
    {
      title: "The Solution: DevOps Emerges",
      content: "Around 2007–2009, DevOps emerged by combining Agile principles with Lean practices, automation, and collaboration between Dev and Ops teams. The growth of cloud computing, virtualization, containerization, and configuration management tools further accelerated adoption.",
      color: "border-l-green-500",
      bg: "from-green-50 to-white",
      icon: "🚀"
    },
    {
      title: "The Expansion: DevSecOps & GitOps",
      content: "Over time, DevOps expanded into related practices such as DevSecOps, which integrates security early in the lifecycle, and GitOps, which manages infrastructure and operations through version-controlled code.",
      color: "border-l-blue-500",
      bg: "from-blue-50 to-white",
      icon: "🛡️"
    }
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="07"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center gap-8 pl-4 pr-2">
        
        {/* Timeline Line */}
        <div className="w-1 h-[80%] bg-slate-200 rounded-full relative ml-2">
            <motion.div 
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-400 via-green-400 to-blue-500 rounded-full"
            />
        </div>

        {/* Cards Stack */}
        <div className="flex flex-col justify-between h-full py-2 w-full gap-3">
            {cards.map((card, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className={`relative bg-gradient-to-r ${card.bg} p-4 rounded-r-xl rounded-bl-xl shadow-md border-l-4 ${card.color} w-full flex gap-4 hover:shadow-lg hover:scale-[1.01] transition-all`}
                >
                    {/* Connector Dot */}
                    <div className="absolute -left-[42px] top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-slate-300 rounded-full z-10 shadow-sm group-hover:border-slate-500 transition-colors"></div>

                    <div className="text-3xl bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm shrink-0">
                        {card.icon}
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-slate-800 mb-1">{card.title}</h3>
                        <p className="text-[11px] text-slate-600 leading-snug text-justify">
                            {card.content}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </SlideLayout>
  );
};

export default EvolutionOfDevOpsSlide;