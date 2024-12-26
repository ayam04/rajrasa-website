'use client';

import { motion } from 'framer-motion';
import Logo from "@/public/RajRasaLogo.png";
import BGImage from "@/public/BG.jpg"

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BGImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 text-center text-white">
        <motion.img 
          src={Logo.src}
          alt="RajRasa Logo" 
          className="w-96 h-auto mx-auto mb-6"
          loading="lazy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1 
          className="font-abhaya text-6xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gold">Welcome to </span><span className="text-primary-gold">RajRasa</span>
        </motion.h1>
        <motion.p 
          className="font-abhaya text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Where Heritage Meets Sustainability in the Heart of Rajasthan
        </motion.p>
        <motion.button 
          className="bg-primary-blue text-white px-8 py-3 rounded-full font-abhaya text-lg hover:bg-light-pink transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Make a Reservation
        </motion.button>
      </div>
    </section>
  );
}