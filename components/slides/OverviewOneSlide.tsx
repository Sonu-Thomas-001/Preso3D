import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const OverviewOneSlide: React.FC<Props> = ({ isPresenting }) => {
  return (
    <SlideLayout 
      title="Overview" 
      titleColor="green"
      id="02"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col gap-6 h-full justify-center pb-8">
        {/* Card 1: DevOps Definition */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-indigo-500 flex gap-6 items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            <div className="bg-indigo-50 p-4 rounded-xl shrink-0 border border-indigo-100">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">DevOps Definition</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    DevOps is a set of practices, cultural values, and automation tools that integrates software development and IT operations to enable faster, reliable, and continuous software delivery, and within the Software Development Life Cycle (SDLC), DevOps plays a vital role by embedding automation, collaboration, monitoring, and feedback across all phases including planning, coding, building, testing, deployment, operations, and maintenance, thereby reducing silos, minimizing manual errors, and improving release frequency and stability.
                </p>
            </div>
        </motion.div>

        {/* Card 2: Agile and DevOps */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-teal-500 flex gap-6 items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
             <div className="bg-teal-50 p-4 rounded-xl shrink-0 border border-teal-100">
                <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </div>
            <div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">Agile and DevOps</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Agile and DevOps are closely aligned methodologies where Agile focuses on iterative development, customer feedback, and rapid adaptation through short development cycles, while DevOps extends Agile principles beyond development into deployment and operations by enabling continuous integration, continuous delivery, and real-time monitoring, resulting in end-to-end agility and faster value delivery.
                </p>
            </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default OverviewOneSlide;