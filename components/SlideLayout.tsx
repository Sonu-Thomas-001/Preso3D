import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SlideLayoutProps {
  title: React.ReactNode; 
  subtitle?: string; 
  titleColor?: 'blue' | 'green';
  id?: string;
  isPresenting?: boolean;
  children: React.ReactNode;
  noContentPadding?: boolean;
  hideHeader?: boolean;
  hideFooter?: boolean;
  backgroundClass?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.4 }
  }
};

const PresoLogo = () => (
  <div className="flex items-center gap-3 select-none group cursor-pointer">
    {/* Animated 3D Icon */}
    <div className="relative w-9 h-9">
      {/* Back Layer (Shadow) */}
      <div className="absolute inset-0 bg-indigo-600 rounded-lg rotate-12 opacity-10 group-hover:rotate-[20deg] group-hover:scale-90 transition-all duration-500 ease-out"></div>
      
      {/* Middle Layer */}
      <div className="absolute inset-0 bg-indigo-600 rounded-lg rotate-6 opacity-30 group-hover:rotate-[10deg] group-hover:scale-95 transition-all duration-500 ease-out"></div>
      
      {/* Front Layer (Main) */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg shadow-lg shadow-indigo-200 flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300 ease-out z-10 border border-indigo-500/20">
         {/* Isometric Stack Icon */}
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-md">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
         </svg>
      </div>
    </div>
    
    {/* Brand Text */}
    <div className="flex flex-col justify-center">
       <span className="font-extrabold text-slate-700 tracking-tight text-lg leading-none group-hover:text-indigo-900 transition-colors">
         Preso<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">3D</span>
       </span>
       <span className="text-[9px] font-semibold text-slate-400 tracking-widest uppercase mt-0.5 ml-0.5">Interactive Deck</span>
    </div>
  </div>
);

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  title, 
  subtitle,
  titleColor = 'green',
  id, 
  isPresenting = false, 
  children,
  noContentPadding = false,
  hideHeader = false,
  hideFooter = false,
  backgroundClass = 'bg-white'
}) => {
  const titleColorClass = titleColor === 'blue' ? 'text-[#00529b]' : 'text-[#46c256]';

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`w-full h-full relative overflow-hidden flex flex-col ${backgroundClass} ${
        isPresenting ? 'rounded-none shadow-none' : 'rounded-xl border border-gray-200 shadow-2xl'
      }`}
    >
      {/* --- Header --- */}
      {!hideHeader && (
        <div className="px-8 pt-6 pb-2 flex justify-between items-start shrink-0 z-20 bg-transparent">
          <div className="flex flex-col">
            <motion.div variants={itemVariants} className={`text-3xl font-bold tracking-tight ${titleColorClass}`}>
              {title}
            </motion.div>
            {subtitle && (
              <motion.div variants={itemVariants} className="text-lg text-slate-500 font-medium mt-1">
                {subtitle}
              </motion.div>
            )}
          </div>
          
          <motion.div variants={itemVariants}>
            <PresoLogo />
          </motion.div>
        </div>
      )}

      {/* --- Content Area --- */}
      <div className={`flex-grow relative z-10 overflow-hidden flex flex-col ${noContentPadding ? '' : 'px-12 py-4'}`}>
         <motion.div variants={itemVariants} className="h-full w-full">
             {children}
         </motion.div>
      </div>

      {/* --- Footer --- */}
      {!hideFooter && (
        <motion.div 
            variants={itemVariants} 
            className="h-8 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between px-6 text-[10px] font-medium tracking-wide shrink-0 z-20 relative"
        >
            <div className="flex items-center gap-2 text-indigo-600">
               <span className="font-semibold">Powered by Preso3D</span>
               <span className="text-indigo-400 mx-1">|</span>
               <span className="font-mono text-indigo-600/80">github.com/Sonu-Thomas-001/</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
               {id && <span>Slide {id}</span>}
            </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SlideLayout;