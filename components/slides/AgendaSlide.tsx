import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const AgendaSlide: React.FC<Props> = ({ isPresenting }) => {
  const items = [
    { 
      title: "Definition of DevOps & its Role", 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      title: "Agile and DevOps", 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    { 
      title: "Version Control Systems", 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      )
    },
    { 
      title: "Virtualization vs Containerization", 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <SlideLayout 
      title="Agenda" 
      titleColor="green"
      id="01"
      isPresenting={isPresenting}
      backgroundClass="bg-slate-50"
    >
      <div className="w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-4 gap-6 w-full px-4 h-[85%]">
             {items.map((item, index) => (
                <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1, type: "spring", stiffness: 60, damping: 12 }}
                   whileHover={{ y: -10, transition: { duration: 0.2 } }}
                   className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative flex flex-col justify-between overflow-hidden group cursor-pointer"
                >
                   {/* Top: Icon Box */}
                   <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                      {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                   </div>

                   {/* Bottom: Content */}
                   <div className="relative z-10 mt-auto mb-2">
                      {/* Accent Line */}
                      <div className="w-12 h-1.5 bg-blue-500 rounded-full mb-6"></div>
                      
                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-extrabold text-slate-800 leading-tight pr-4">
                         {item.title}
                      </h3>
                   </div>

                   {/* Giant Number Background */}
                   <div className="absolute -bottom-10 -right-6 text-[12rem] font-bold text-slate-50 opacity-80 select-none group-hover:text-blue-50 transition-colors duration-300 leading-none z-0">
                      {index + 1}
                   </div>
                </motion.div>
             ))}
          </div>
      </div>
    </SlideLayout>
  );
};

export default AgendaSlide;