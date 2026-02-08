import React from 'react';
import { motion } from 'framer-motion';

// Minimal Icon Components
const Icons = {
  Lightbulb: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.4 1.5-3.8 0-3.9-3.1-7-7-7S4 3.9 4 7.8c0 1.4.5 2.8 1.5 3.8.8.8 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>,
  Layers: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
  Code: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Zap: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  User: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  ArrowRight: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
  Layout: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
  Github: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
  Globe: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
};

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#0B0C10] text-slate-300 font-sans selection:bg-indigo-500/30 overflow-hidden">
      
      {/* 1. Cinematic Intro Header */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
         {/* Background Atmospheric Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 pointer-events-none"></div>

         <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[1.1]"
            >
               Preso3D is redefining how <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">ideas are presented</span> on the web.
            </motion.h1>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
               We transform static slides into immersive spatial experiences. By leveraging motion, depth, and modern web technologies, we enable creators to tell stories that are not just seen, but felt.
            </motion.p>
         </div>
      </section>

      {/* 2. The Vision */}
      <section className="py-24 px-6 border-y border-white/5 bg-[#0D0E12]">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Pillars */}
            <motion.div 
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-2 gap-6"
            >
               {[
                  { icon: Icons.Layers, title: "Spatial Storytelling", desc: "Depth that adds context." },
                  { icon: Icons.Code, title: "Developer First", desc: "Built with React & TS." },
                  { icon: Icons.Zap, title: "Cinematic Motion", desc: "Fluid, physics-based." },
                  { icon: Icons.Layout, title: "Performance", desc: "Native DOM rendering." }
               ].map((item, i) => (
                  <motion.div 
                     key={i} 
                     variants={fadeUp}
                     className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                  >
                     <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5" />
                     </div>
                     <h3 className="text-white font-bold mb-1">{item.title}</h3>
                     <p className="text-sm text-slate-500">{item.desc}</p>
                  </motion.div>
               ))}
            </motion.div>

            {/* Right Narrative */}
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUp}
               className="flex flex-col gap-6 lg:pt-8"
            >
               <h2 className="text-3xl font-bold text-white tracking-tight">Breaking the 4:3 Ratio</h2>
               <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
                  <p>
                     For decades, presentations have been trapped in static rectangles. The web has evolved into a dynamic, interactive medium, yet our primary tool for sharing ideas—the slide deck—has remained stuck in the past.
                  </p>
                  <p>
                     Preso3D merges high-fidelity design with engineering precision. We believe that a presentation should function like a modern web application: responsive, accessible, and infinitely extensible.
                  </p>
                  <p>
                     It’s not just about looking better; it’s about communicating with clarity and impact.
                  </p>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 3. Founder Story */}
      <section className="py-32 px-6 relative">
         <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
               
               {/* Left: Image Placeholder */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="lg:col-span-5 relative"
               >
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 relative overflow-hidden border border-white/10 shadow-2xl group">
                     {/* Placeholder Abstract Graphic representing Founder/Dev */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-indigo-500 rounded-full blur-[100px] opacity-50 group-hover:opacity-70 transition-opacity"></div>
                        <svg className="w-24 h-24 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                     </div>
                     
                     <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-xl font-bold">Sonu Thomas</h3>
                        <p className="text-indigo-400 text-sm font-medium">Founder & Lead Engineer</p>
                     </div>
                  </div>
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 border border-indigo-500/20 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
               </motion.div>

               {/* Right: Narrative */}
               <motion.div 
                  className="lg:col-span-7 pl-0 lg:pl-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
               >
                  <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6">
                     <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                     Founder Spotlight
                  </motion.div>
                  
                  <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white mb-6 tracking-tight">
                     Blending Code, Design, and Storytelling.
                  </motion.h2>
                  
                  <motion.div variants={fadeUp} className="prose prose-invert prose-lg text-slate-400 leading-relaxed mb-8">
                     <p>
                        Preso3D was born from a simple frustration: why do developers build futuristic web apps but present them with archaic tools?
                     </p>
                     <p>
                        As a software engineer and product builder, Sonu Thomas saw an opportunity to bridge the gap. Combining deep expertise in modern UI systems with a passion for immersive experiences, he architected Preso3D to be the presentation tool for the builders of tomorrow.
                     </p>
                  </motion.div>

                  <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                     {['Web Development', 'Product Design', 'Motion UI', 'AI Systems'].map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:border-indigo-500/50 transition-colors cursor-default">
                           {tag}
                        </span>
                     ))}
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-10 flex gap-4">
                     <a href="https://sonuthomas.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors group">
                        View Portfolio <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </a>
                  </motion.div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 4. Design Philosophy */}
      <section className="py-32 bg-[#050608] relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_60%)]"></div>
         
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
            >
               <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                  "Slides are not documents."
               </motion.h2>
               <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600 tracking-tighter mb-16">
                  "They are experiences."
               </motion.h2>

               <motion.div 
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 gap-8 text-left"
               >
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                     <div className="text-indigo-400 mb-4"><Icons.Layers className="w-8 h-8" /></div>
                     <h4 className="text-xl font-bold text-white mb-2">Native DOM</h4>
                     <p className="text-slate-400 text-sm">We reject heavy 3D canvas engines for standard content. HTML guarantees accessibility and SEO.</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                     <div className="text-cyan-400 mb-4"><Icons.Zap className="w-8 h-8" /></div>
                     <h4 className="text-xl font-bold text-white mb-2">Purposeful Motion</h4>
                     <p className="text-slate-400 text-sm">Animation is not decoration. It is information. Transitions guide the eye and explain relationships.</p>
                  </div>
               </motion.div>
            </motion.div>
         </div>
      </section>

      {/* 5. Technology */}
      <section className="py-24 px-6 border-t border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-white mb-4">Engineering Culture</h2>
               <p className="text-slate-400">Built on the stack that powers the modern web.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {[
                  { name: "React 19", icon: "⚛️", desc: "Component architecture." },
                  { name: "Framer Motion", icon: "🎞️", desc: "Physics-based animation." },
                  { name: "Tailwind CSS", icon: "🎨", desc: "Utility-first styling." },
                  { name: "TypeScript", icon: "🛡️", desc: "Type-safe reliability." }
               ].map((tech, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-8 bg-[#111] rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all group">
                     <span className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{tech.icon}</span>
                     <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                     <p className="text-xs text-slate-500">{tech.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Mission */}
      <section className="py-32 px-6 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
               Building the future of presentations for the <span className="text-indigo-400">spatial web</span>.
            </h2>
            <p className="text-xl text-slate-400 font-light">
               Preso3D is not just a tool—it is a platform for creators, developers, and innovators who want their ideas to feel alive.
            </p>
         </div>
      </section>

      {/* 7. Timeline */}
      <section className="py-20 px-6 border-t border-white/5 bg-[#0D0E12]">
         <div className="max-w-5xl mx-auto">
            <div className="relative">
               {/* Line */}
               <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block"></div>
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                     { year: "2023", title: "Concept", desc: "The idea of cinematic web slides." },
                     { year: "Q1 2024", title: "Engine", desc: "Development of Parallax Core." },
                     { year: "Q3 2024", title: "Alpha", desc: "Modular component system." },
                     { year: "Now", title: "Launch", desc: "Open Source Release." }
                  ].map((item, i) => (
                     <div key={i} className="relative md:text-center group">
                        <div className="w-4 h-4 bg-[#0D0E12] border-2 border-indigo-500 rounded-full absolute top-1/2 left-0 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 z-10 hidden md:block group-hover:scale-150 transition-transform"></div>
                        <div className="md:pt-12">
                           <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-2">{item.year}</span>
                           <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                           <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 8. CTA */}
      <section className="py-32 px-6 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none"></div>
         
         <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-5xl font-bold text-white tracking-tight mb-10">
               Join the next generation.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="px-8 py-4 bg-white text-black text-lg font-bold rounded-lg hover:scale-105 transition-transform shadow-xl">
                  Explore Preso3D
               </button>
               <a href="https://github.com" target="_blank" rel="noreferrer" className="px-8 py-4 bg-black text-white border border-white/20 text-lg font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Icons.Github className="w-5 h-5" /> View on GitHub
               </a>
            </div>
         </div>
      </section>

    </div>
  );
};

export default AboutPage;