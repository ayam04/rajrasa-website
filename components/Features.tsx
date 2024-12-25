'use client';

import { motion } from 'framer-motion';
import { Utensils, Clock, MapPin } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-16 bg-primary-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Utensils className="w-12 h-12 mx-auto mb-4 text-primary-gold" />
            <h3 className="font-abhaya text-2xl mb-2">Royal Cuisine</h3>
            <p className="font-abhaya">Experience the authentic flavors of royal Rajasthani kitchen</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Clock className="w-12 h-12 mx-auto mb-4 text-primary-gold" />
            <h3 className="font-abhaya text-2xl mb-2">Timings</h3>
            <p className="font-abhaya">Open daily: 12:00 PM - 11:00 PM</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-12 h-12 mx-auto mb-4 text-primary-gold" />
            <h3 className="font-abhaya text-2xl mb-2">Location</h3>
            <p className="font-abhaya">Civil Lines, Jaipur, Rajasthan</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}