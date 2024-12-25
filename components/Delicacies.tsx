'use client';

import { motion } from 'framer-motion';

const dishes = [
  {
    name: "Dal Baati Churma",
    description: "Traditional Rajasthani dish with lentils, baked wheat balls, and sweetened cereal",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46"
  },
  {
    name: "Laal Maas",
    description: "Fiery red mutton curry, a royal Rajasthani delicacy",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754"
  },
  {
    name: "Ker Sangri",
    description: "Desert beans and berries in traditional spices",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814"
  }
];

export default function Delicacies() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-abhaya text-center text-primary-blue mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Signature Dishes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-64 relative">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-abhaya text-2xl mb-2 text-primary-blue">{dish.name}</h3>
                <p className="font-abhaya text-dark-gray">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}