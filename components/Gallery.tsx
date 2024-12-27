'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const images = [
  "Gallery/1.jpg",
  "Gallery/4.jpg",
  "Gallery/7.jpg",
  "Gallery/3.jpg",
  "Gallery/5.jpg",
  "Gallery/6.jpg",
  "Gallery/2.jpg",
  "Gallery/8.jpg",
  "Gallery/9.jpg"
].map(url => `${url}?auto=format,compress&q=75&w=800`);

export default function Gallery() {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const storedImages = sessionStorage.getItem('loadedGalleryImages');
    if (storedImages) {
      setLoadedImages(JSON.parse(storedImages));
    } else {
      setLoadedImages(images);
      sessionStorage.setItem('loadedGalleryImages', JSON.stringify(images));
    }
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-abhaya text-5xl text-primary-blue royal-divider mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto" />
        </motion.div>

        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-auto hidden md:grid">
          {loadedImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden rounded-lg max-w-[400px] mx-auto w-full"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 pb-6">
          {loadedImages.map((image, index) => (
            <div
              key={image}
              className="snap-center shrink-0 first:pl-4 last:pr-4"
            >
              <div className="relative w-[300px] aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="300px"
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

