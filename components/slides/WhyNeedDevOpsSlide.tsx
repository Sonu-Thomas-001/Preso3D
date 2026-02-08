import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const WhyNeedDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Why Organizations Need DevOps</span>
    </div>
  );

  const benefits = [
    {
      title: "Faster Time-to-Market",
      desc: "DevOps enables faster time-to-market by automating build, test, and deployment pipelines, reducing manual effort and deployment errors.",
      icon: "⚡",
      color: "bg-amber-50 border-amber-200"
    },
    {
      title: "Quality & Reliability",
      desc: "It improves software quality and reliability through continuous testing, monitoring, and feedback loops, allowing teams to detect and resolve issues early.",
      icon: "💎",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Collaboration & Culture",
      desc: "DevOps also enhances collaboration and accountability by breaking down silos and promoting shared ownership across teams.",
      icon: "🤝",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Scalability & Resilience",
      desc: "Additionally, DevOps supports scalability, cost optimization, and resilience through cloud-native architectures and automation, helping organizations deliver efficiently.",
      icon: "📈",
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="09"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2">
        <p className="text-sm text-slate-600 font-medium mb-6 text-center max-w-4xl mx-auto">
            Organizations need DevOps to remain competitive in fast-changing digital markets where <span className="text-blue-600 font-bold">rapid innovation</span> and <span className="text-green-600 font-bold">high system availability</span> are critical.
        </p>

        <div className="grid grid-cols-2 gap-6 h-full pb-4">
            {benefits.map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-2xl border p-5 flex flex-col shadow-sm hover:shadow-md transition-shadow ${item.color} relative overflow-hidden group`}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                    
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-xl">
                            {item.icon}
                        </div>
                        <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                    </div>
                    
                    <p className="text-[11px] md:text-xs text-slate-700 leading-relaxed text-justify relative z-10">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default WhyNeedDevOpsSlide;