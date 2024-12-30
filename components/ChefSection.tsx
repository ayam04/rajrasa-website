'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Scroll, Plane, ChefHat, Trophy, Award, Medal, Tv } from 'lucide-react';

export default function ChefSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            <h2 className="text-4xl md:text-6xl font-abhaya mb-4 text-shadow bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Celebrity Chef
              <span className="block mt-2 text-primary-gold">(Dr.) Saurabh Sharma</span>
            </h2>
            
            <div className="font-abhaya text-lg leading-relaxed space-y-6">
              <motion.p 
                className="italic text-lg md:text-2xl text-pink-200 border-l-4 border-pink-200 pl-2 md:pl-4"
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
                  <p className="leading-relaxed text-sm md:text-base">
                    A Chef, Author, TV Show Host, Culinary Mentor & Humanitarian, Chef (Dr.) Saurabh Sharma is a celebrated culinary expert and educator renowned for promoting Rajasthani cuisine on global platforms, including as a <span className="font-bold text-pink-200 inline items-center gap-1">
                      <Plane className="w-4 h-4 inline" /> Food Traveller
                    </span>.
                  </p>
                </div>
                
                <div className="flex items-center gap-2 md:gap-4 mt-2">
                  <p className="leading-relaxed text-sm md:text-base">
                    With over 17 years of experience, he has hosted the popular <span className="font-bold text-pink-200 inline items-center gap-1">
                      <Tv className="w-4 h-4 inline" /> TV show "Rajasthani Rasoi"
                    </span> on FoodXp, served as a <span className="font-bold text-pink-200 inline items-center gap-1">
                      <Trophy className="w-4 h-4 inline" /> jury member for MasterChef India
                    </span>, and conducted live cooking demonstrations at prestigious events like Bharat Parv.
                  </p>
                  {/* <motion.div
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
                          className="w-8 h-8 text-yellow-300 filter drop-shadow-lg"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm">
                        Ambassador of Taste
                      </div>
                    </div>
                  </motion.div> */}
                </div>
                
                <div className="flex items-start gap-4 mt-4">
                  {/* <motion.div
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
                          className="w-8 h-8 text-yellow-300 filter drop-shadow-lg"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm">
                        Ph.D. in Culinary Heritage
                      </div>
                    </div>
                  </motion.div> */}
                  <p className="leading-relaxed text-sm md:text-base">
                    A prolific <span className="font-bold text-pink-200 inline items-center gap-1">
                      <Scroll className="w-4 h-4 inline" /> researcher
                    </span> and author, Dr. Sharma holds a Ph.D. in Rajasthani culinary heritage and has published 22+ research papers, securing patents and copyrights in the culinary arts.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  <p className="leading-relaxed text-sm md:text-base">
                    He has received numerous accolades, including the <span className="font-bold text-pink-200 inline items-center gap-1">
                      <Award className="w-4 h-4 inline" /> Ambassador of Taste
                    </span> award and a <span className="font-bold text-pink-200 inline items-center gap-1">
                      <Medal className="w-4 h-4 inline" /> Gold Medal
                    </span> from a Gastronomy organization in Greece. As a culinary mentor, he fosters future culinary talents.
                  </p>
                  {/* <motion.div
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
                        <Medal 
                          className="w-8 h-8 text-yellow-300 filter drop-shadow-lg"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm">
                        Gold
                      </div>
                    </div>
                  </motion.div> */}
                </div>
                
                <div className="flex items-start gap-4 mt-4">
                {/* <motion.div
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
                        <ChefHat 
                          className="w-8 h-8 text-yellow-300 filter drop-shadow-lg"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm">
                        Master Chef
                      </div>
                    </div>
                  </motion.div> */}
                  <p className="leading-relaxed text-sm md:text-base">
                    He is also the co-founder of <span className="font-bold text-pink-200 inline items-center gap-1">
                      <ChefHat className="w-4 h-4 inline" /> 'Master Chef Rajasthan'
                    </span> and a pioneer in millet promotion under the Prime Minister's Millet Mission. His passion lies in blending heritage, sustainability, and innovation in every culinary endeavor.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative h-[300px] md:h-[600px] flex justify-center"
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
                  className="absolute top-0 left-1/5 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-2xl border-2 border-white/20"
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