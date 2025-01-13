'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-transparent" />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://www.google.com/search?client=mobilesearchapp&sca_esv=85709b99cef60822&channel=iss&cs=0&hl=en_GB&rlz=1MDAPLA_en-GBIN1129IN1129&v=346.1.704810410&sxsrf=ADLYWIISlrRNvKKqQ1dpiN_m0nfujE6jPQ:1735828278110&q=rajrasa+by+chef+saurabh+jaipur+reviews&uds=ADvngMgriHOxltqf7w4LVYG8L5BR3R4EiD99okGKST-Sul3ZdWft43wSC14yD3lzVAA9OXoywwXsjnhy0_0g2R0fnkX4TiOfNjVoXHfT53YssEpWfnfok4LBvBH__6uVF8ZiLAL8BOuAG3fL7C6TIokpFoxkcr4m3rmXYG8yiZgBJN-tZKKxupnk_e4YryZigRfrE6KChqWj60cmM4YP3bilaJu54gybqbNoWZ5xxNBrewcOo3Z_qOysCHRWpi2Jb8mFJmbKkyiNrmHdbGIGEFOXdHKouheWoETRsRL0UDxK5H9F2_sY1VL0vR6TyMUdzRqg0aUi31p6m-pxlc5Sr1T2sysGGZ55MoJBX3IO4GZpNhjfC80u0wwVq9QTpOwE4DhuC7zj44JhF8GTwZbk7RV4gSqSVMugYK1pMvUv8EdGhV22-Gn87M4TQmW8PvbOFwBecVLemkpz&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7i1w-vEFjO9-6zJHagSlKmWjeCZxgQZc35UMNRxO7nXucLDXZqy47iyVu8mxyy2qjXj1Bzo1cdH56WMHNheZyyC9XdEEzUc6R1fXMRB4cLwQ7tM4Bg%3D%3D&sa=X&ved=2ahUKEwi-kaGfoNeKAxVlyzgGHdTUOrUQk8gLegQIJRAB&ictx=1&biw=432&bih=837&dpr=2.5#ebo=3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-primary-gold text-white rounded-lg hover:bg-primary-gold/90 transition-colors duration-200 font-abhaya text-lg"
          >
            View More Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}