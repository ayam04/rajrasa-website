'use client';

import { motion } from 'framer-motion';
import { RoyalPattern, RoyalBorder } from './ui/RoyalPattern';

export default function About() {
  return (
    <section className="py-16 bg-white relative">
      {/* <RoyalPattern /> */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center relative royal-corner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <RoyalBorder />
          <h2 className="font-abhaya text-5xl mb-6 text-primary-blue royal-divider">Our Story</h2>
          <p className="font-abhaya text-lg leading-relaxed">
            Nestled in the heart of Jaipur, Rajrasa brings you the authentic flavors of Rajasthan in a contemporary setting. Our culinary journey is crafted by Chef Saurabh, who combines traditional recipes with modern techniques to create an unforgettable dining experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}