'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center relative royal-corner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-abhaya text-5xl mb-6 text-primary-blue royal-divider">Our Philosophy</h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-8" />
          <div className="space-y-6">
            <p className="font-abhaya text-xl leading-relaxed">
              RAJRASA, derived from Sanskrit 'रस' (rasa), embodies the essence of royal Rajasthani cuisine. In ancient Vedic literature, rasa signifies not just taste, but the very essence of consciousness and self-luminous awareness.
            </p>
            <p className="font-abhaya text-xl leading-relaxed">
              Under the guidance of Dr. Chef Saurabh, we bring you a culinary journey through the rich heritage of Rajasthan, where each dish tells a story of tradition, sustainability, and royal craftsmanship.
            </p>
            <p className="font-abhaya text-xl leading-relaxed">
              Our commitment extends beyond cuisine to embrace sustainable practices, supporting local farmers, and preserving forgotten recipes of Rajasthan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}