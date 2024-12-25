'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Food Critic",
    text: "The Dal Baati Churma here is absolutely divine. Authentic Rajasthani flavors that transport you to the royal kitchens.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Rajat Mehta",
    role: "Food Blogger",
    text: "Chef Saurabh's innovative take on traditional recipes is remarkable. The ambiance perfectly complements the royal dining experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Aisha Khan",
    role: "Restaurant Reviewer",
    text: "Every dish tells a story of Rajasthan's rich culinary heritage. The presentation is as royal as the taste.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
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