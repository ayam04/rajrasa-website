'use client';

import { motion } from 'framer-motion';
import { Leaf, Crown, History, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Crown,
      title: "Heritage Cuisine",
      description: "Authentic recipes from royal kitchens of Rajasthan"
    },
    {
      icon: History,
      title: "Timeless Traditions",
      description: "Preserving forgotten recipes and culinary techniques"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Eco-friendly practices and locally sourced ingredients"
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Led by Dr. Chef Saurabh's culinary expertise"
    }
  ];

  return (
    <section className="py-16 bg-primary-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary-gold" />
              <h3 className="font-abhaya text-2xl mb-2">{feature.title}</h3>
              <p className="font-abhaya">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}