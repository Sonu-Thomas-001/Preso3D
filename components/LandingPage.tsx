import React from 'react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  onOpenDeck: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpenDeck }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
           <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">Preso<span className="text-indigo-600">3D</span></span>
           </div>
           <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
              <a href="#projects" className="hover:text-indigo-600 transition-colors">Templates</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
           </div>
           <button className="px-5 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20">
              Get Started
           </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-8 uppercase tracking-widest"
            >
               <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
               v2.0 is live
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6 max-w-4xl"
            >
               Presentations that <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">Pop. Literally.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed"
            >
               Transform static decks into immersive, cinematic 3D experiences. 
               Built for the modern web, powered by React & Framer Motion.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
               <button onClick={onOpenDeck} className="px-8 py-4 bg-indigo-600 text-white text-lg font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30 flex items-center gap-2 group">
                  View Demo Deck
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </button>
               <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 text-lg font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Watch Video
               </button>
            </motion.div>
         </div>

         {/* 3D Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Tilted Cards visual */}
            <motion.div 
               animate={{ rotateY: 360, rotateX: 360 }}
               transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
               className="absolute top-20 right-20 w-32 h-32 border-4 border-slate-200/50 rounded-xl opacity-20"
            />
         </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white relative border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Recent Projects</h2>
                  <p className="text-slate-500">Pick up where you left off or start something new.</p>
               </div>
               <a href="#" className="text-indigo-600 font-bold hover:underline hidden md:block">View all projects -></a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               
               {/* Project Card 1: DevOps (Main) */}
               <motion.div 
                  onClick={onOpenDeck}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
               >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                     {/* Thumbnail Content Simulation */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 group-hover:scale-105 transition-transform duration-700">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-4 shadow-lg flex items-center justify-center text-white">
                           <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                        </div>
                        <h3 className="text-2xl font-black text-white tracking-tight mb-1">MASTERING<br/>DevOps</h3>
                        <p className="text-slate-400 text-sm">SDLC & Automation Guide</p>
                     </div>
                     
                     {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-indigo-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                        <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                           Open Presentation
                        </button>
                     </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                     <div>
                        <h4 className="font-bold text-slate-800">DevOps Foundations</h4>
                        <p className="text-xs text-slate-500">Edited 2 mins ago</p>
                     </div>
                     <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                     </div>
                  </div>
               </motion.div>

               {/* Project Card 2: Placeholder */}
               <motion.div whileHover={{ y: -8 }} className="group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                  <div className="aspect-[4/3] bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center">
                     <div className="text-center">
                        <div className="w-12 h-12 bg-slate-200 rounded-full mx-auto mb-3 flex items-center justify-center text-slate-400">
                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        </div>
                        <span className="font-bold text-slate-400">New Project</span>
                     </div>
                  </div>
                  <div className="mt-4">
                     <h4 className="font-bold text-slate-400">Create New Deck</h4>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-black text-slate-900 mb-4">Built for Impact</h2>
                  <p className="text-slate-500 max-w-2xl mx-auto">Everything you need to create stunning presentations without touching design software.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      { icon: "🎨", title: "Cinematic Transitions", text: "Physics-based animations that make every slide change feel like a movie scene." },
                      { icon: "🧊", title: "True 3D Parallax", text: "Elements react to mouse movement, creating tangible depth and immersion." },
                      { icon: "⚡", title: "Lightning Fast", text: "Built on React and Framer Motion for 60fps performance on any device." }
                  ].map((feat, i) => (
                      <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
                          <div className="text-4xl mb-4">{feat.icon}</div>
                          <h3 className="text-xl font-bold text-slate-800 mb-2">{feat.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{feat.text}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-50 text-sm">
            <p>&copy; 2024 Preso3D Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white">Privacy</a>
               <a href="#" className="hover:text-white">Terms</a>
               <a href="#" className="hover:text-white">Contact</a>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default LandingPage;