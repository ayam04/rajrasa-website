'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function VenueDetails() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590846406792-0adc7f938f1d')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-abhaya text-5xl text-primary-blue mb-4">Visit Us</h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary-gold mt-1" />
              <div>
                <h3 className="font-abhaya text-2xl text-primary-blue mb-2">Location</h3>
                <p className="font-abhaya text-dark-gray">
                  42, Civil Lines, Near Statue Circle<br />
                  Jaipur, Rajasthan 302006
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-primary-gold mt-1" />
              <div>
                <h3 className="font-abhaya text-2xl text-primary-blue mb-2">Hours</h3>
                <p className="font-abhaya text-dark-gray">
                  Lunch: 12:00 PM - 3:30 PM<br />
                  Dinner: 7:00 PM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary-gold mt-1" />
              <div>
                <h3 className="font-abhaya text-2xl text-primary-blue mb-2">Contact</h3>
                <p className="font-abhaya text-dark-gray">
                  +91 141 234 5678<br />
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary-gold mt-1" />
              <div>
                <h3 className="font-abhaya text-2xl text-primary-blue mb-2">Email</h3>
                <p className="font-abhaya text-dark-gray">
                  reservations@rajrasa.com<br />
                  info@rajrasa.com
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d" 
                alt="Rajrasa Dining Area"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-blue rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-gold rounded-lg -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}