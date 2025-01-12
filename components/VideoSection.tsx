'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const videos = [
    {
      src: "/Gallery/v1.mp4",
      title: "Traditional Cooking",
      subtitle: "Ancient recipes preserved"
    },
    {
      src: "/Gallery/v2.mp4",
      title: "Artful Plating",
      subtitle: "Where tradition meets elegance"
    },
    {
      src: "/Gallery/v3.mp4",
      title: "Royal Ambiance",
      subtitle: "Dine like royalty"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-primary-blue overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Desktop Grid Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <div key={index} className="relative h-[600px] rounded-lg overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-abhaya text-2xl text-white mb-2">{video.title}</h3>
                <p className="font-abhaya text-primary-gold">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile Swipe Layout */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 pb-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="snap-center shrink-0 first:pl-4 last:pr-4 w-[300px] h-[400px]"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-abhaya text-2xl text-white mb-2">{video.title}</h3>
                  <p className="font-abhaya text-primary-gold">{video.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}