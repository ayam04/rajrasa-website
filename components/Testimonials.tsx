'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import BG from '@/public/SectionBg.jpg';

const testimonials = [
  {
    name: "Anoop Shekhawat",
    role: "Customer",
    text: "It's a must-visit place, and as a tourism professional, I highly recommend it to anyone who loves Rajasthani cuisine. Kudos to Chef Saurabh, Chef Prateek, and the entire team!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Chef Rahul Wali",
    role: "Renowned Chef",
    text: "If anyone looking to have true traditional flavours of Rajasthan in Jaipur, let me tell you RAJRASA is the only destination for you.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Ankit Kashmiri",
    role: "Customer",
    text: "The restaurants interiors and architectural style gives a perfect ambience to the food being served. If you are in Jaipur, as a culinary enthusiast don't miss out on this one.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${BG.src})` }}
        />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-light-pink/10 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-abhaya text-5xl text-primary-blue mb-4">What Our Guests Say</h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-light-pink/10 rounded-bl-full" />
              <div className="flex items-center mb-6">
                <span className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-xl font-bold text-primary-blue mr-4">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <h3 className="font-abhaya text-xl text-primary-blue">{testimonial.name}</h3>
                  <p className="font-abhaya text-sm text-primary-gold">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-gold fill-current" />
                ))}
              </div>
              <p className="font-abhaya text-dark-gray">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}