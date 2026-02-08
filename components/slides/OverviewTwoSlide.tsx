import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const OverviewTwoSlide: React.FC<Props> = ({ isPresenting }) => {
  return (
    <SlideLayout 
      title="Overview" 
      titleColor="green"
      id="03"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col gap-6 h-full justify-center pb-8">
        
        {/* Card 1: VCS */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
             className="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-orange-500 flex gap-6 items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            <div className="bg-orange-50 p-4 rounded-xl shrink-0 border border-orange-100">
                 <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Version Control Systems (VCS)</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Version Control Systems (VCS) are fundamental to DevOps as they manage and track changes to source code, configuration files, and infrastructure definitions, enabling collaboration among teams through branching, merging, version history, rollback capabilities, and seamless integration with CI/CD pipelines, with tools like Git serving as a single source of truth for modern software projects.
                </p>
            </div>
        </motion.div>

        {/* Card 2: Virtualization vs Containerization */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-blue-500 flex gap-6 items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
             <div className="bg-blue-50 p-4 rounded-xl shrink-0 border border-blue-100">
                 <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Virtualization & Containerization</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Virtualization and containerization are key infrastructure technologies in DevOps, where virtualization uses hypervisors to run multiple virtual machines with separate operating systems on shared hardware, offering strong isolation but higher resource overhead, whereas containerization packages applications and their dependencies into lightweight containers that share the host operating system kernel, providing faster startup, better resource efficiency, improved portability, and making containers ideal for microservices and cloud-native application deployment.
                </p>
            </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default OverviewTwoSlide;