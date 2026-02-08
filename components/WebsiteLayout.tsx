import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PageType = 'home' | 'features' | 'about' | 'docs' | 'roadmap';

interface WebsiteLayoutProps {
  children: React.ReactNode;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenDeck: () => void;
}

const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children, currentPage, onNavigate, onOpenDeck }) => {
  
  const navLinks: { id: PageType; label: string }[] = [
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'Vision' },
    { id: 'docs', label: 'Docs' },
    { id: 'roadmap', label: 'Roadmap' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden flex flex-col">
      
      {/* Cinematic Background Noise/Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.03),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0B0C10]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           {/* Logo */}
           <div 
             className="flex items-center gap-3 cursor-pointer group" 
             onClick={() => onNavigate('home')}
           >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-indigo-500 rounded-lg blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-8 h-8 bg-gradient-to-br from-slate-800 to-black rounded-lg border border-white/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Preso<span className="text-indigo-400">3D</span></span>
           </div>

           {/* Links */}
           <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    currentPage === link.id 
                      ? 'text-white bg-white/5 border border-white/5' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
           </div>

           {/* CTA */}
           <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden sm:block text-slate-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <button 
                onClick={onOpenDeck}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] border border-indigo-400/20"
              >
                Launch Demo
              </button>
           </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-20 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Modern Cinematic Footer */}
      <footer className="relative pt-24 pb-12 bg-[#030304] border-t border-white/5 overflow-hidden z-10">
         {/* Top Glow Divider */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-[2px]"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
               
               {/* Left: Brand & Vision */}
               <div className="lg:col-span-4 flex flex-col items-start">
                  <div 
                    className="flex items-center gap-3 mb-6 cursor-pointer group" 
                    onClick={() => onNavigate('home')}
                  >
                     <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-slate-800 to-black rounded-lg border border-white/10 shadow-lg group-hover:border-indigo-500/30 transition-colors">
                        <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.8)]"></div>
                     </div>
                     <span className="font-bold text-xl text-white tracking-tight">Preso<span className="text-indigo-400">3D</span></span>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8 font-light">
                     PowerPoint is for information.<br/>
                     <span className="text-slate-100 font-medium">Preso3D is for impact.</span>
                  </p>

                  <div className="flex gap-4">
                     {['twitter', 'github', 'linkedin'].map((icon, i) => (
                        <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-white/5">
                           <div className="w-4 h-4 bg-current opacity-80" style={{ maskImage: `url(https://simpleicons.org/icons/${icon}.svg)`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(https://simpleicons.org/icons/${icon}.svg)`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }}></div>
                        </a>
                     ))}
                  </div>
               </div>

               {/* Middle: Navigation Grid */}
               <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div>
                     <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Product</h4>
                     <ul className="space-y-3 text-sm text-slate-500">
                        {['Features', 'Demo', 'Roadmap', 'Themes'].map(item => (
                           <li key={item} className="hover:text-cyan-400 cursor-pointer transition-colors" onClick={() => item === 'Roadmap' ? onNavigate('roadmap') : onNavigate('features')}>{item}</li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Developers</h4>
                     <ul className="space-y-3 text-sm text-slate-500">
                        {['Documentation', 'GitHub', 'API', 'Components'].map(item => (
                           <li key={item} className="hover:text-cyan-400 cursor-pointer transition-colors" onClick={() => onNavigate('docs')}>{item}</li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Company</h4>
                     <ul className="space-y-3 text-sm text-slate-500">
                        {['About', 'Vision', 'License MIT'].map(item => (
                           <li key={item} className="hover:text-cyan-400 cursor-pointer transition-colors" onClick={() => onNavigate('about')}>{item}</li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Right: Newsletter/CTA */}
               <div className="lg:col-span-3">
                  <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Join the builders</h4>
                  <div className="flex gap-2 mb-6">
                     <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 w-full transition-colors placeholder:text-slate-600" 
                     />
                     <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 rounded-lg transition-colors flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                     </button>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/5">
                     <div className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                     </div>
                     <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Systems Operational</span>
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
               <p>&copy; 2024 Preso3D Inc. Open Source under MIT.</p>
               <div className="flex gap-8">
                  <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-slate-400 transition-colors">Cookie Settings</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default WebsiteLayout;