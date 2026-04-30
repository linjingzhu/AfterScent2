/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0, 0, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              className="font-serif text-6xl md:text-8xl leading-[1.1] tracking-tight font-light"
            >
              The Architecture <br /> of Silence.
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-charcoal/70 max-w-lg leading-relaxed"
            >
              A seminal study in spatial negative space and the quiet power of presence. This edition explores the intersection of minimalist design and high-quality editorial content.
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
                Silence is not empty. It is full of answers.
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
                In a world saturated with noise, we cultivate spaces of deep focus. This folio is designed to recede, allowing the written word to emerge as the sole protagonist. We draw inspiration from the tactile experience of high-end print publishing.
              </p>
              <p>
                Every margin, every typographic choice, every moment of whitespace is an intentional invitation to slow down. We publish works that demand reflection, presented in an interface that respects the reader's time and attention.
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
                Jeongsu is a designer and architectural theorist whose work explores the psychological impact of spatial design. With a background in both philosophy and structural engineering, his writing bridges the gap between the physical and the metaphysical.
              </p>
              <p>
                His career has been dedicated to the study of &apos;quiet spaces&apos;—environments that facilitate introspection and clarity in an increasingly loud world. &quot;The Architecture of Silence&quot; is the culmination of a decade spent documenting monastic structures, minimalist homes, and the vast, empty landscapes of the North.
              </p>
              <p>
                Currently based in a remote coastal town in Scandinavia, Jeongsu continues to write on the necessity of restraint in modern life, advocating for a return to craftsmanship, intentionality, and the luxury of focus.
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
