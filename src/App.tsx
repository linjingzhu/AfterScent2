/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const fadeIn = {
  initial: { opacity: 0.01, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.2, 0, 0, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-paper overflow-x-hidden selection:bg-clay/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-center items-center">
          <div className="font-serif text-xl tracking-[0.2em] font-light uppercase">
            After Scent
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto min-h-[90vh] flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex-1 space-y-10"
          >
            <motion.h1 
              variants={fadeIn}
              className="font-serif text-6xl md:text-9xl leading-[1.1] tracking-tight font-light"
            >
              MAHEUN
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-charcoal/70 max-w-lg leading-relaxed whitespace-pre-line"
            >
              <span className="block font-serif italic text-2xl text-charcoal mb-4">
                A Quiet Anatomy of Life After Forty
              </span>
              A reflective guide to examining the self, one question at a time.
              Maheun explores love, work, solitude, money, creation, and the quiet standards
              by which a life becomes truly one’s own.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: -15 }}
            transition={{ duration: 1.5, ease: [0.2, 0, 0, 1] }}
            className="flex-1 perspective-1000 hidden md:flex justify-center"
          >
            <div className="relative w-[340px] h-[510px] transform-gpu hover:rotate-y-0 transition-transform duration-700">
              <img 
                src="/regenerated_image_1777553415143.png" 
                alt="Book Cover" 
                className="w-full h-full object-cover book-shadow grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
            </div>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-parchment/30 py-32 px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-clay">The Philosophy</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                The life we built begins to ask who built it.
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 text-charcoal/80 leading-relaxed"
            >
              <p>
                There comes a season when achievement loses its volume, and the soul begins to speak in quieter tones. Forty is such a season—not an ending, but a clearing. A place where the past stands beside us, not to accuse, but to be understood.
              </p>
              <p>
                Maheun gathers questions for that clearing. It invites the reader to look again at love, work, solitude, desire, money, memory, and the invisible standards by which a life becomes one’s own.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-32 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="w-full md:w-1/2 aspect-[4/5] bg-parchment"
          >
            <img 
              src="/regenerated_image_1777553413458.png" 
              alt="Jeongsu" 
              className="w-full h-full object-cover grayscale brightness-105 hover:brightness-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 space-y-8"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-clay">Meet the Author</span>
            <h2 className="font-serif text-5xl font-light">Jeongsu</h2>
            <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed">
              <p>
                Jeongsu is a game designer and systems planner who explores how the inner life of a person and the world around them are structured. Moving across game design, 3D graphics, writing, and philosophical reflection, he is interested in transforming invisible emotions and life’s questions into meaningful experiences.
              </p>
              <p>
                His work begins with a central question: “In what kind of world does a person change?” Centered on action RPGs and interactive storytelling, he seeks to create experiences where players do more than simply consume entertainment—they are invited to reconsider their choices, desires, wounds, and relationships. At the same time, he continues to experiment with new forms of expression at the boundary between technology and art, systems and emotion, reality and imagination.
              </p>
              <p>
                His writing is a personal map for those who wish to reexamine life after forty. It asks whether we have lived well, what standards should guide us forward, and what we should hold onto among love and work, money and creation, solitude and growth. Jeongsu sees life as a world of its own, and continues to record it in order to build that world with greater depth and strength.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-charcoal/5 pt-24 pb-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="font-serif text-sm tracking-[0.3em] uppercase opacity-40">
            After Scent
          </div>

          <div className="text-[10px] tracking-[0.1em] text-charcoal/30 uppercase text-center md:text-right">
            © 2024 After Scent. The written word persists.
          </div>
        </div>
      </footer>
    </div>
  );
}
