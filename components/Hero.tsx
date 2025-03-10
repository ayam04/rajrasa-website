'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from "@/public/RajRasaLogo.png";
import BGImage from "@/public/BG.jpg";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(2);
  const [name, setName] = useState('');
  const [showFallback, setShowFallback] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleReservation = () => {
    const message = `Hello! I would like to make a reservation at RajRasa:\n\nName: ${name}\nDate: ${date}\nNumber of people: ${people}`;
    const phoneNumber = '919799905867';
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    const windowRef = window.open(whatsappUrl, '_blank');
    
    if (!windowRef || windowRef.closed || typeof windowRef.closed === 'undefined') {
      setShowFallback(true);
      navigator.clipboard.writeText(message).then(() => {
        alert('Message copied to clipboard! You can paste it in WhatsApp.');
      });
    } else {
      setIsOpen(false);
    }
  };

  const handleFallbackClick = () => {
    const message = `Hello! I would like to make a reservation at RajRasa:\n\nName: ${name}\nDate: ${date}\nNumber of people: ${people}`;
    const phoneNumber = '919799905867';
    
    const alternativeUrls = [
      `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
      `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    ];
    
    for (const url of alternativeUrls) {
      try {
        window.location.href = url;
        break;
      } catch (error) {
        console.log('Trying next WhatsApp URL...');
      }
    }
    
    setIsOpen(false);
    setShowFallback(false);
  };

  return (
    <section className="h-screen relative flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BGImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      <div className="relative z-20 text-center text-white">
        <motion.img 
          src={Logo.src}
          alt="RajRasa Logo" 
          className="w-96 h-auto mx-auto mb-6"
          loading="lazy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1 
          className="font-abhaya text-6xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gold">Welcome to </span>
          <span className="text-primary-gold">RajRasa</span>
        </motion.h1>
        <motion.p 
          className="font-abhaya text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Where Heritage Meets Sustainability in the Heart of Rajasthan
        </motion.p>
        <motion.button 
          className="bg-primary-blue text-white px-8 py-3 rounded-full font-abhaya text-lg hover:bg-light-pink transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
        >
          Make a Reservation
        </motion.button>
      </div>

      {/* Vertical Navbar for Desktop */}
      {contentLoaded && (
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 z-30 md:flex items-center hidden">
          <nav className="flex flex-col space-y-8 text-2xl font-abhaya mr-6">
            <a href="/menu" className="text-white hover:text-primary-gold transition duration-300" onClick={() => setIsMenuOpen(false)}>Menu</a>
            <a href="#about" className="text-white hover:text-primary-gold transition duration-300">About</a>
            <a href="#chef" className="text-white hover:text-primary-gold transition duration-300">Chef</a>
            <a href="#venue" className="text-white hover:text-primary-gold transition duration-300">Venue</a>
            <a href="#gallery" className="text-white hover:text-primary-gold transition duration-300">Gallery</a>
            <a href="#testimonials" className="text-white hover:text-primary-gold transition duration-300">Testimonials</a>
            <a href="#contact" className="text-white hover:text-primary-gold transition duration-300">Contact</a>
          </nav>
          <div className="h-64 w-px bg-white opacity-50" /> {/* Adjusted vertical line */}
        </div>
      )}

      {/* Hamburger Menu for Mobile */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="fixed right-5 top-5 z-50 text-white focus:outline-none md:hidden"
        aria-label="Toggle menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Full-Screen Navbar for Mobile */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="font-abhaya fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center p-4 md:hidden"
        >
          <nav className="flex flex-col space-y-6 text-white text-2xl">
            <a href="/menu" className="text-white hover:text-primary-gold transition duration-300" onClick={() => setIsMenuOpen(false)}>Menu</a>
            <a href="#about" className="hover:text-primary-gold transition duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#chef" className="hover:text-primary-gold transition duration-300" onClick={() => setIsMenuOpen(false)}>Chef</a>
            <a href="#venue" className="hover:text-primary-gold transition duration-300" onClick={() => setIsMenuOpen(false)}>Venue</a>
            <a href="#gallery" className="hover:text-primary-gold transition duration-300" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#testimonials" className="hover:text-primary-gold transition duration-300" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="hover:text-primary-gold transition duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </motion.div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 font-abhaya">Book Your Table</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-light transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 placeholder-gray-400"
                />
              </div>

              {/* Date Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Number of People Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Number of People
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={people}
                    onChange={(e) => setPeople(Number(e.target.value))}
                    min={1}
                    max={20}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                    Max 20
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              {!showFallback ? (
                <button
                  onClick={handleReservation}
                  disabled={!date || !people || !name}
                  className="w-full bg-primary-blue text-white py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] font-medium text-lg shadow-md"
                >
                  Confirm Reservation
                </button>
              ) : (
                <div className="space-y-4">
                  <button
                    onClick={handleFallbackClick}
                    className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-medium text-lg shadow-md"
                  >
                    Open WhatsApp
                  </button>
                  <p className="text-sm text-gray-600 text-center">
                    If WhatsApp doesn't open automatically, you can manually message us at +91 97999 05867
                  </p>
                </div>
              )}
              
              {/* Note */}
              <p className="text-center text-sm text-gray-500 mt-4">
                You will be redirected to WhatsApp to confirm your reservation
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

