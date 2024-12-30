'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-primary-blue overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/Gallery/v1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-abhaya text-2xl text-white mb-2">Traditional Cooking</h3>
              <p className="font-abhaya text-primary-gold">Ancient recipes preserved</p>
            </div>
          </div>

          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/Gallery/v2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-abhaya text-2xl text-white mb-2">Artful Plating</h3>
              <p className="font-abhaya text-primary-gold">Where tradition meets elegance</p>
            </div>
          </div>

          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/Gallery/v3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-abhaya text-2xl text-white mb-2">Royal Ambiance</h3>
              <p className="font-abhaya text-primary-gold">Dine like royalty</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}