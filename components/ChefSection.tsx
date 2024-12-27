'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BookOpen, Star, Globe2, Crown, Scroll, Wheat } from 'lucide-react';

export default function ChefSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const milestones = [
    {
      icon: BookOpen,
      text: "Ph.D. in Culinary Heritage",
      color: "text-yellow-300",
    },
    {
      icon: Star,
      text: "Ambassador of Taste",
      color: "text-yellow-300",
    },
    {
      icon: Globe2,
      text: "International Recognition",
      color: "text-yellow-300",
    },
    {
      icon: Crown,
      text: "Culinary Excellence",
      color: "text-yellow-300",
    },
    {
      icon: Scroll,
      text: "22+ Research Papers",
      color: "text-yellow-300",
    },
    {
      icon: Wheat,
      text: "Millet Innovation",
      color: "text-yellow-300",
    }
  ];

  const images = [
    {
      src: "Gallery/chef1.jpg",
      alt: "Kitchen preparation"
    },
    {
      src: "Gallery/chef2.jpg",
      alt: "Plating"
    },
    {
      src: "Gallery/chef3.jpg",
      alt: "Final presentation"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const iconAnimation = {
    initial: { 
      opacity: 0, 
      scale: 0.5
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  return (
    <section className="py-16 bg-primary-blue text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-6xl font-abhaya mb-8 text-shadow bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              The Culinary Maestro:
              <span className="block mt-2 text-primary-gold">Dr. Saurabh Sharma</span>
            </h2>
            
            <div className="font-abhaya text-lg leading-relaxed space-y-6">
              <motion.p 
                className="italic text-2xl text-pink-200 border-l-4 border-pink-200 pl-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                "My passion for preserving and promoting Rajasthani culinary heritage has been the driving force behind my journey"
              </motion.p>
              
              <motion.div 
                className="prose prose-lg prose-invert"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    variants={iconAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex-shrink-0 mt-1"
                  >
                    <div className="group relative">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.8, type: "spring" }}
                      >
                        <Crown 
                          className={`w-8 h-8 ${milestones[3].color} filter drop-shadow-lg`}
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm">
                        {milestones[3].text}
                      </div>
                    </div>
                  </motion.div>
                  <p className="leading-relaxed">
                    In the grand theater of gastronomy, <span className="text-pink-200">Chef (Dr.) Saurabh Sharma</span> stands as a beacon of culinary excellence. A virtuoso who masterfully orchestrates the symphony of flavors that is Rajasthani cuisine, bringing its rich heritage to the global stage.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  <p className="leading-relaxed">
                    With <span className="text-pink-200">over 17 years</span> of culinary artistry, he's graced television screens as the charismatic host of "Rajasthani Rasoi" on FoodXp and brought his discerning palate to MasterChef India as a distinguished jury member.
                  </p>
                  <motion.div
                    variants={iconAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex-shrink-0"
                  >
                    <div className="group relative">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.8, type: "spring" }}
                      >
                        <Star 
                          className={`w-8 h-8 ${milestones[1].color} filter drop-shadow-lg`}
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm">
                        {milestones[1].text}
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex items-start gap-4 mt-4">
                  <motion.div
                    variants={iconAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex-shrink-0 mt-1"
                  >
                    <div className="group relative">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.8, type: "spring" }}
                      >
                        <BookOpen 
                          className={`w-8 h-8 ${milestones[0].color} filter drop-shadow-lg`}
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm">
                        {milestones[0].text}
                      </div>
                    </div>
                  </motion.div>
                  <p className="leading-relaxed">
                    His scholarly pursuit of culinary excellence has yielded a Ph.D. in Rajasthani culinary heritage, <span className="text-pink-200">22+ illuminating research papers</span>, and numerous innovations protected by patents. His contributions have earned him the prestigious Ambassador of Taste award and a coveted Gold Medal from Greece's elite gastronomy circle.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  <p className="leading-relaxed">
                    As the co-architect of 'Master Chef Rajasthan' and a champion of the Prime Minister's Millet Mission, he continues to paint on the canvas of culinary innovation while honoring the brushstrokes of tradition.
                  </p>
                  <motion.div
                    variants={iconAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex-shrink-0"
                  >
                    <div className="group relative">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.8, type: "spring" }}
                      >
                        <Wheat 
                          className={`w-8 h-8 ${milestones[5].color} filter drop-shadow-lg`}
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm">
                        {milestones[5].text}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {images.map((image, index) => {
              const offset = index - currentImageIndex;
              return (
                <motion.div 
                  key={index}
                  className="absolute top-0 right-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-2xl border-2 border-white/20"
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ 
                    opacity: offset >= 0 ? 1 : 0,
                    scale: 1 - (offset * 0.05),
                    x: offset * 40,
                    y: offset * 40,
                    zIndex: images.length - offset,
                    rotateZ: offset * 2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

