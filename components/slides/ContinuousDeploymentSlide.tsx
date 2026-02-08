import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const ContinuousDeploymentSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Delivery vs Deployment</span>
    </div>
  );

  const PipelineNode = ({ text, color = "bg-blue-500", delay = 0, isManual = false }: any) => (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      className="relative flex flex-col items-center mx-2 z-10"
    >
        <div className={`
            w-20 h-16 rounded-xl shadow-lg border-b-4 border-r-4 border-white/30 backdrop-blur-md
            ${isManual ? 'bg-amber-500' : color} flex items-center justify-center text-center p-1
            group hover:-translate-y-2 transition-transform duration-300
        `}>
            <span className="text-[10px] font-bold text-white leading-tight drop-shadow-sm">{text}</span>
            
            {/* Gloss */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/40 to-transparent pointer-events-none"></div>
            
            {/* Manual Indicator */}
            {isManual && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm z-20" title="Manual Approval">
                    <span className="text-white text-[10px]">✋</span>
                </div>
            )}
        </div>
        {/* Reflection/Shadow */}
        <div className="w-16 h-2 bg-black/20 blur-md rounded-full mt-2 group-hover:scale-75 transition-transform duration-300"></div>
    </motion.div>
  );

  const Connector = ({ active = true, delay = 0 }: any) => (
      <div className="relative w-8 h-2 bg-slate-200/50 rounded-full overflow-hidden self-center -mx-1">
          {active && (
              <motion.div 
                className="absolute inset-0 bg-green-400"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, delay, ease: "linear" }}
              />
          )}
      </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="16"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full justify-center items-center gap-12 perspective-1000">
        
        {/* Continuous Delivery Flow */}
        <div className="w-full bg-slate-50/50 rounded-2xl p-6 border border-slate-200 shadow-inner relative overflow-hidden group">
            <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-20">
                Continuous Delivery
            </div>
            <div className="flex items-center justify-center pt-4">
                <PipelineNode text="Dev" color="bg-indigo-500" delay={0.1} />
                <Connector delay={0.2} />
                <PipelineNode text="App Test" color="bg-blue-500" delay={0.3} />
                <Connector delay={0.4} />
                <PipelineNode text="Integration Test" color="bg-cyan-500" delay={0.5} />
                <Connector delay={0.6} />
                <PipelineNode text="Acceptance Test" color="bg-teal-500" delay={0.7} />
                
                {/* Manual Gate */}
                <div className="flex flex-col items-center mx-2">
                    <div className="text-[9px] font-bold text-red-500 mb-1 animate-pulse">Manual Trigger</div>
                    <div className="w-8 h-1 bg-red-400"></div>
                </div>

                <PipelineNode text="Production" color="bg-emerald-600" delay={0.9} isManual={true} />
            </div>
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-100/30 to-blue-50/0 transform skew-x-12 pointer-events-none"></div>
        </div>

        {/* Continuous Deployment Flow */}
        <div className="w-full bg-slate-50/50 rounded-2xl p-6 border border-slate-200 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-20">
                Continuous Deployment
            </div>
            <div className="flex items-center justify-center pt-4">
                 <PipelineNode text="Dev" color="bg-indigo-500" delay={1.1} />
                <Connector delay={1.2} />
                <PipelineNode text="App Test" color="bg-blue-500" delay={1.3} />
                <Connector delay={1.4} />
                <PipelineNode text="Integration Test" color="bg-cyan-500" delay={1.5} />
                <Connector delay={1.6} />
                <PipelineNode text="Acceptance Test" color="bg-teal-500" delay={1.7} />
                <Connector delay={1.8} />
                <PipelineNode text="Production" color="bg-emerald-600" delay={1.9} />
            </div>
            {/* Automated Banner */}
            <div className="absolute bottom-2 right-4 text-[10px] font-bold text-green-600 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                Fully Automated
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default ContinuousDeploymentSlide;