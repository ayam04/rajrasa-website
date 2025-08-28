'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import FooterImg from "@/public/Place.jpg"

export default function VenueDetails() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${FooterImg.src})` }}
      />
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-abhaya text-4xl text-primary-blue mb-2">Location</h3>
                <p className="font-abhaya text-dark-gray text-xl lg:text-2xl">
                  RajRasa, S-19, 20, 21, Nagar Nigam Colony<br />
                  Nr. Jorawar Singh Gate, Jaipur, Rajasthan 302002
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-primary-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-abhaya text-4xl text-primary-blue mb-2">Hours</h3>
                <p className="font-abhaya text-dark-gray text-xl lg:text-2xl">
                  Lunch: 12:00 PM - 3:30 PM<br />
                  Dinner: 7:00 PM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-abhaya text-4xl text-primary-blue mb-2">Contact</h3>
                <p className="font-abhaya text-dark-gray text-xl lg:text-2xl">
                  +91 9799905867<br />
                  +91 8306888689
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-abhaya text-4xl text-primary-blue mb-2">Email</h3>
                <p className="font-abhaya text-dark-gray text-xl lg:text-2xl">
                  rajrasa303@gmail.com<br />
                  {/* info@rajrasa.com */}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:col-span-2 h-[600px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.2032150037803!2d75.83708022854049!3d26.941146598533326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db100057c979b%3A0x5a5f7132d5483e8a!2sRajRasa%20by%20Chef%20Saurabh!5e0!3m2!1sen!2sin!4v1735576113544!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-blue rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-gold rounded-lg -z-10 opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:hidden"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src={FooterImg.src} 
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
