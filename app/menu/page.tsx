'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "@/public/RajRasaLogo.png";
import Image from 'next/image';
import { X } from 'lucide-react';
import BG from '@/public/SectionBg.jpg'

export default function MenuPage() {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const menus = [
    {
      title: "Set Menu",
      file: "/menus/Rajrasa Menu.pdf",
      description: "Curated multi-course dining experiences"
    },
    {
      title: "À La Carte Menu",
      file: "/menus/Rajrasa Mini Meals Menu + A La Carte.pdf",
      description: "Explore our extensive selection of individual dishes"
    }
  ];

  return (
    <main className="min-h-screen relative p-4">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${BG.src})` }}
          />
      <div className="max-w-6xl mx-auto z-30">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4 sm:mb-8"
        >
          <Image
            src={Logo}
            alt="RajRasa Logo"
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Menu Selection */}
        {!selectedMenu && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-12 relative z-10 h-full flex-col justify-center items-center"
          >
            {menus.map((menu, index) => (
              <motion.div
                key={menu.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                onClick={() => setSelectedMenu(menu.file)}
                className="bg-white/100 p-4 sm:p-8 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow border-2 border-primary-gold/20 group relative text-center"
              >
                <h2 className="text-2xl sm:text-3xl font-abhaya text-primary-blue mb-2 sm:mb-4 group-hover:text-primary-gold transition-colors">
                  {menu.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 font-abhaya">{menu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* PDF Viewer */}
        <AnimatePresence>
          {selectedMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 bg-black/80 z-50 p-2 sm:p-4 md:p-8"
            >
              <button
                onClick={() => setSelectedMenu(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-primary-gold transition-colors"
              >
                <X size={24} className="sm:w-8 sm:h-8" />
              </button>
              <div className="h-full w-full max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
                <object
                  data={selectedMenu}
                  type="application/pdf"
                  className="w-full h-full"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <p>Your browser does not support PDFs. 
                    <a href={selectedMenu} target="_blank" rel="noopener noreferrer" 
                       className="text-primary-gold hover:underline ml-1">
                      Click here to download the PDF
                    </a>
                  </p>
                </object>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
} 