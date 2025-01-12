'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SocialFollow() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setSubscriptionStatus('Thank you for subscribing to our newsletter!');
    setEmail('');
    setTimeout(() => setSubscriptionStatus(null), 5000);
  };

  return (
    <section className="py-10 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h3 className="font-abhaya text-3xl text-primary-blue mb-6">Stay Connected</h3>
          <p className="text-gray-600 mb-8">Follow us on social media and subscribe to our newsletter for the latest updates and culinary inspirations.</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a 
              href="https://www.instagram.com/rajrasajaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:text-primary-gold transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={32} className="text-pink-400" />
              <span className="sr-only">Instagram</span>
            </motion.a>
            <motion.a 
              href="mailto:rajrasa303@gmail.com"
              className="text-primary-blue hover:text-primary-gold transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={32} className="text-red-500" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="min-w-xs"
            />
            <Button 
              type="submit" 
              className="bg-primary-gold hover:bg-primary-gold/90 text-white cursor-pointer"
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          {subscriptionStatus && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 text-green-600"
            >
              {subscriptionStatus}
            </motion.p>
          )}
        </motion.div>
        
        <footer className="text-center mt-10">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} RajRasa. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}

