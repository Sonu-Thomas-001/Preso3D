import React from 'react';
import { motion } from 'framer-motion';

interface UIOverlayProps {
  currentIndex: number;
  totalSlides: number;
  onNext: (e: React.MouseEvent) => void;
  onPrev: (e: React.MouseEvent) => void;
  onPresent: () => void;
  onExit?: () => void;
}

const UIOverlay: React.FC<UIOverlayProps> = ({
  currentIndex,
  totalSlides,
  onNext,
  onPrev,
  onPresent,
  onExit
}) => {
  return (
    <>
      {/* --- Top Navigation Bar --- */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="absolute top-6 left-0 right-0 flex justify-center z-50 pointer-events-none"
      >
        <div className="bg-white/90 backdrop-blur-md shadow-lg border border-white/50 rounded-full px-2 py-1.5 flex items-center gap-4 pointer-events-auto" onClick={(e) => e.stopPropagation()}>
          
          {/* Home / Exit Button */}
          {onExit && (
             <button onClick={onExit} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors border-r border-slate-100 mr-1" title="Back to Dashboard">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
             </button>
          )}

          <button onClick={onPrev} className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center text-gray-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <span className="text-xs font-semibold text-gray-500 font-mono tracking-wider">
            {currentIndex + 1} <span className="text-gray-300">/</span> {totalSlides}
          </span>

          <button onClick={onNext} className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center text-gray-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </motion.div>

      {/* --- Floating Action Button (Present) --- */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="absolute bottom-8 right-8 z-50 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onPresent}
          className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-500/30 w-16 h-16 rounded-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
          title="Start Presentation"
        >
           <svg className="ml-1 w-8 h-8 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
           </svg>
        </button>
      </motion.div>
    </>
  );
};

export default UIOverlay;