'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  "https://images.unsplash.com/photo-1587314168485-3236d6710814",
  "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf",
  "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46",
  "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d",
  "https://images.unsplash.com/photo-1545247181-516773cae754",
  "https://images.unsplash.com/photo-1567529684892-09290a1b2d05",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
];

export default function Gallery() {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    setLoadedImages(images);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-abhaya text-5xl text-primary-blue royal-divider mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loadedImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square group overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}