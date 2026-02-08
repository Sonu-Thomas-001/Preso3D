import React from 'react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  onOpenDeck: () => void;
  onNavigate: (page: any) => void;
}

// Reusable Icon Components (using SVGs)
const Icons = {
  Layers: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
  Motion: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
  Screen: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>,
  Code: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Zap: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  Box: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
  ArrowRight: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
  Check: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
  Terminal: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
  Performance: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m12 18 5 5"/><path d="m12 18-5 5"/><path d="M12 14v4"/><path d="M12 14 7 9"/><path d="M12 14l5-5"/><path d="M22 12h-4"/><path d="M6 12H2"/></svg>
};

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const LandingPage: React.FC<LandingPageProps> = ({ onOpenDeck, onNavigate }) => {
  return (
    <div className="bg-[#0B0C10] text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* 1. Cinematic Hero */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-xs font-medium mb-8 backdrop-blur-sm"
               >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  v2.0 is Live
               </motion.div>

               <motion.h1 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
               >
                  PowerPoint is for info.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Preso3D is for impact.</span>
               </motion.h1>

               <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed"
               >
                  The cinematic, developer-first presentation platform. 
                  Transform static decks into immersive spatial experiences using the tech stack you already know.
               </motion.p>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap gap-4 mb-12"
               >
                  <motion.button 
                    onClick={onOpenDeck} 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold rounded-lg transition-all shadow-[0_0_30px_rgba(8,145,178,0.3)] hover:shadow-[0_0_40px_rgba(8,145,178,0.5)] border border-cyan-400/20"
                  >
                     Try Live Demo
                  </motion.button>
                  <motion.a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-lg font-bold rounded-lg transition-all backdrop-blur-md flex items-center gap-2"
                  >
                     <Icons.Code className="w-5 h-5" />
                     View GitHub
                  </motion.a>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="flex gap-8 text-sm text-slate-500 font-medium"
               >
                  <div className="flex items-center gap-2"><Icons.Check className="w-4 h-4 text-cyan-500" /> Parallax Depth</div>
                  <div className="flex items-center gap-2"><Icons.Check className="w-4 h-4 text-cyan-500" /> React Components</div>
                  <div className="flex items-center gap-2"><Icons.Check className="w-4 h-4 text-cyan-500" /> 60fps Motion</div>
               </motion.div>
            </div>

            {/* Right Visual - 3D Perspective Deck */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
               animate={{ opacity: 1, scale: 1, rotateY: -10 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="relative h-[500px] w-full perspective-1000 hidden lg:block"
            >
               <motion.div 
                  animate={{ rotateY: [-10, -15, -10], rotateX: [5, 0, 5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full h-full relative"
               >
                  {/* Card 1 (Back) */}
                  <motion.div 
                    className="absolute top-0 right-0 w-[400px] h-[250px] bg-slate-800 rounded-xl border border-slate-700 shadow-2xl opacity-60"
                    style={{ transform: 'translateZ(-100px) translateX(50px) translateY(50px)' }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  />
                  {/* Card 2 (Middle) */}
                  <motion.div 
                    className="absolute top-10 right-10 w-[400px] h-[250px] bg-slate-800 rounded-xl border border-slate-600 shadow-2xl opacity-80"
                    style={{ transform: 'translateZ(-50px) translateX(25px) translateY(25px)' }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                  />
                  {/* Card 3 (Front Main) */}
                  <motion.div 
                    className="absolute top-20 right-20 w-[450px] h-[300px] bg-gradient-to-br from-slate-900 to-black rounded-xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col overflow-hidden"
                    style={{ transform: 'translateZ(0px)' }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 7, repeat: Infinity }}
                  >
                      <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 p-6 flex flex-col justify-center items-center relative">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
                          <div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 border border-cyan-500/50 text-cyan-400">
                              <Icons.Layers className="w-8 h-8" />
                          </div>
                          <div className="h-2 w-32 bg-slate-700 rounded-full mb-2"></div>
                          <div className="h-2 w-20 bg-slate-800 rounded-full"></div>
                      </div>
                  </motion.div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 right-[-20px] p-3 rounded-lg bg-slate-900 border border-slate-700 shadow-xl flex items-center gap-3"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                      <div className="w-8 h-8 rounded bg-violet-500/20 flex items-center justify-center text-violet-400"><Icons.Zap className="w-4 h-4"/></div>
                      <div className="text-xs font-bold text-slate-300">Physics Enabled</div>
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </section>

      {/* 2. Product Overview */}
      <section className="py-24 border-t border-white/5 bg-[#08090C]">
         <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
                {[
                    { icon: Icons.Layers, title: "Parallax Depth Engine", desc: "Slides react to cursor movement, creating a tangible sense of spatial immersion." },
                    { icon: Icons.Motion, title: "Physics-Based Transitions", desc: "Silky smooth navigation powered by spring physics instead of linear tweens." },
                    { icon: Icons.Screen, title: "Immersive Mode", desc: "Distraction-free fullscreen storytelling that keeps the audience focused." }
                ].map((item, i) => (
                    <motion.div 
                        key={i} 
                        variants={cardVariants}
                        className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all group"
                        whileHover={{ y: -5 }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
         </div>
      </section>

      {/* 3. Interactive Showcase (Mock) */}
      <section className="py-32 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-16"
              >
                The Interface
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative aspect-video bg-slate-900 rounded-lg border border-slate-800 shadow-2xl flex flex-col overflow-hidden group perspective-1000"
              >
                  <div className="flex-1 relative flex items-center justify-center bg-[radial-gradient(circle_at_center,#1e293b_0%,#0f172a_100%)]">
                      <div className="text-center">
                          <motion.h1 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-black text-white mb-2 tracking-tighter"
                          >
                            Big Ideas
                          </motion.h1>
                          <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-slate-500"
                          >
                            Deserve big canvases.
                          </motion.p>
                      </div>
                      
                      {/* Overlay UI Controls */}
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="text-xs text-slate-400 font-mono flex items-center gap-1"><span className="border border-slate-600 rounded px-1">←</span> Prev</span>
                          <span className="text-xs text-slate-400 font-mono border-l border-slate-700 pl-4 flex items-center gap-1">Next <span className="border border-slate-600 rounded px-1">→</span></span>
                      </div>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 4. Modular Architecture */}
      <section className="py-24 bg-[#050608]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] perspective-1000 flex items-center justify-center"
              >
                  <motion.div 
                    className="relative w-64 h-80 transform-style-3d rotate-y-12 rotate-x-6"
                    initial={{ rotateY: 0 }}
                    whileInView={{ rotateY: 12 }}
                    transition={{ duration: 1 }}
                  >
                      <motion.div 
                        initial={{ translateZ: 0 }}
                        whileInView={{ translateZ: -40 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute inset-0 bg-slate-800 border border-slate-600 rounded-xl flex items-center justify-center opacity-40"
                      >
                        Background
                      </motion.div>
                      <motion.div 
                        initial={{ translateZ: 0 }}
                        whileInView={{ translateZ: -20 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute inset-0 bg-slate-800 border border-slate-600 rounded-xl flex items-center justify-center opacity-70"
                      >
                        Layout
                      </motion.div>
                      <motion.div 
                        initial={{ translateZ: 0 }}
                        whileInView={{ translateZ: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="absolute inset-0 bg-slate-900 border border-cyan-500 rounded-xl flex items-center justify-center shadow-xl"
                      >
                          <span className="font-bold text-white">Content</span>
                      </motion.div>
                      <motion.div 
                        initial={{ translateZ: 0, opacity: 0 }}
                        whileInView={{ translateZ: 40, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-xl"
                      />
                  </motion.div>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                  <motion.h2 variants={cardVariants} className="text-3xl font-bold text-white mb-6">Modular by Design</motion.h2>
                  <motion.p variants={cardVariants} className="text-slate-400 mb-8 leading-relaxed">
                      Preso3D treats every slide as an isolated React component. This means you can use state, effects, and any NPM package directly within your presentation layer.
                  </motion.p>
                  <ul className="space-y-4">
                      {[
                          "Component-Based Slide Architecture",
                          "Responsive Layout System (Tailwind)",
                          "Intelligent Cursor Tracking",
                          "Keyboard & Touch Controls"
                      ].map((feat, i) => (
                          <motion.li key={i} variants={cardVariants} className="flex items-center gap-3 text-slate-300">
                              <div className="w-6 h-6 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 border border-cyan-800">
                                  <Icons.Check className="w-3 h-3" />
                              </div>
                              {feat}
                          </motion.li>
                      ))}
                  </ul>
              </motion.div>
          </div>
      </section>

      {/* 5. Developer Experience */}
      <section className="py-32 relative bg-[#0B0C10]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white mb-4">Engineering First</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">Built on the modern stack you love. No proprietary formats, just code.</p>
              </div>

              <motion.div 
                className="grid md:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                  {[
                      { icon: Icons.Code, title: "React 19", desc: "Concurrent rendering ready." },
                      { icon: Icons.Motion, title: "Framer Motion", desc: "Production-grade physics." },
                      { icon: Icons.Box, title: "Tailwind CSS", desc: "Utility-first styling." },
                      { icon: Icons.Performance, title: "CSS3D Engine", desc: "Hardware accelerated." }
                  ].map((card, i) => (
                      <motion.div 
                        key={i} 
                        variants={cardVariants}
                        className="bg-[#111] p-6 rounded-xl border border-white/10 hover:border-violet-500/50 transition-colors"
                        whileHover={{ y: -5 }}
                      >
                          <div className="text-violet-400 mb-4"><card.icon className="w-8 h-8" /></div>
                          <h3 className="font-bold text-white mb-1">{card.title}</h3>
                          <p className="text-sm text-slate-500">{card.desc}</p>
                      </motion.div>
                  ))}
              </motion.div>

              {/* Code Snippet Visual */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="mt-16 max-w-3xl mx-auto bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono text-sm"
              >
                  <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-white/5">
                      <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                      </div>
                      <span className="ml-4 text-xs text-slate-500">MySlide.tsx</span>
                  </div>
                  <div className="p-6 text-slate-300">
                      <p><span className="text-pink-400">export const</span> <span className="text-yellow-200">IntroSlide</span> = () ={'>'} (</p>
                      <p className="pl-4">{'<'}<span className="text-green-400">SlideLayout</span> id=<span className="text-orange-300">"01"</span>{'>'}</p>
                      <p className="pl-8">{'<'}<span className="text-green-400">motion.h1</span></p>
                      <p className="pl-12"><span className="text-blue-300">initial</span>={'{'}{'{'} y: 20 {'}'}{'}'}</p>
                      <p className="pl-12"><span className="text-blue-300">animate</span>={'{'}{'{'} y: 0 {'}'}{'}'}</p>
                      <p className="pl-8">{'>'}</p>
                      <p className="pl-12">Hello World</p>
                      <p className="pl-8">{'</'}<span className="text-green-400">motion.h1</span>{'>'}</p>
                      <p className="pl-4">{'</'}<span className="text-green-400">SlideLayout</span>{'>'}</p>
                      <p>);</p>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 6. How it Works */}
      <section className="py-24 bg-[#08090C] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-center relative gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
               <motion.div 
                 initial={{ scaleX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 transition={{ duration: 1, ease: "easeInOut" }}
                 className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-900 to-transparent origin-left"
               />
               {[
                  { title: "Build", icon: Icons.Code, sub: "Create Components" },
                  { title: "Animate", icon: Icons.Motion, sub: "Add Physics" },
                  { title: "Present", icon: Icons.Screen, sub: "Launch Deck" }
               ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    variants={cardVariants}
                    className="relative z-10 flex flex-col items-center text-center bg-[#08090C] p-4"
                  >
                     <div className="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.1)] mb-4">
                        <step.icon className="w-8 h-8" />
                     </div>
                     <h3 className="text-lg font-bold text-white">{step.title}</h3>
                     <p className="text-sm text-slate-500">{step.sub}</p>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* 7. Performance Philosophy */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
              >
                  <h2 className="text-3xl font-bold text-white mb-6">Lightweight & Accessible</h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                      Unlike WebGL-heavy canvas presentations, Preso3D uses standard DOM elements transformed with CSS3D. This ensures your text remains selectable, accessible to screen readers, and indexable by search engines.
                  </p>
                  <div className="flex gap-8">
                      <div>
                          <div className="text-3xl font-bold text-white mb-1">15kb</div>
                          <div className="text-xs text-slate-500 uppercase tracking-widest">Gzipped Core</div>
                      </div>
                      <div>
                          <div className="text-3xl font-bold text-white mb-1">100%</div>
                          <div className="text-xs text-slate-500 uppercase tracking-widest">SEO Friendly</div>
                      </div>
                  </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#111] p-8 rounded-2xl border border-white/5"
              >
                  <h4 className="text-sm font-bold text-white uppercase mb-6 tracking-widest border-b border-white/10 pb-4">Rendering Strategy</h4>
                  <div className="flex justify-between items-center mb-4">
                      <span className="text-slate-400 text-sm">Preso3D (DOM + CSS)</span>
                      <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-green-500"
                          />
                      </div>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">WebGL Canvas</span>
                      <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "25%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-full bg-red-500"
                          />
                      </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-4 italic text-right">Battery usage & Accessibility score</p>
              </motion.div>
          </div>
      </section>

      {/* 8. Roadmap */}
      <section className="py-24 bg-[#050608]">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Future Horizons</h2>
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                  {['Visual Editor', 'Cloud Sync', 'Asset Library', 'Export to PDF', 'Themes'].map((item, i) => (
                      <motion.div 
                        key={i} 
                        variants={cardVariants}
                        className="p-4 rounded-lg bg-white/[0.03] border border-white/5 text-center hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all cursor-default"
                        whileHover={{ y: -5 }}
                      >
                          <div className="w-2 h-2 rounded-full bg-cyan-500 mx-auto mb-3 opacity-50"></div>
                          <span className="text-sm font-medium text-slate-300">{item}</span>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>

      {/* 9. Vision */}
      <section className="py-40 px-6 text-center bg-gradient-to-b from-[#0B0C10] to-[#000]">
          <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight"
              >
                  "Slides are no longer static.<br/>
                  They are <span className="text-cyan-400">spatial experiences</span>."
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-slate-500 font-light"
              >
                The medium is the message. Upgrade your medium.
              </motion.p>
          </div>
      </section>

      {/* 10. CTA */}
      <section className="py-32 relative overflow-hidden text-center px-6">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none"></div>
         <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-white tracking-tight mb-8"
            >
               Turn Slides Into Experiences.
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
               <motion.button 
                 onClick={onOpenDeck} 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-10 py-4 bg-white text-black text-lg font-bold rounded-lg shadow-xl"
               >
                  Start Building
               </motion.button>
               <motion.button 
                 onClick={() => onNavigate('docs')} 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-10 py-4 bg-black text-white border border-white/20 text-lg font-bold rounded-lg hover:bg-white/10 transition-all"
               >
                  Explore Docs
               </motion.button>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default LandingPage;