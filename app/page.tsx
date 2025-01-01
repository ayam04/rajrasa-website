'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import ChefSection from '@/components/ChefSection';
import VenueDetails from '@/components/VenueDetails';
import VideoSection from '@/components/VideoSection';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import SocialFollow from '@/components/Socials';
import AboutBG from '@/public/AboutBG.jpg'
import BG from '@/public/SectionBg.jpg'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${AboutBG.src})`, 
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <About />
      </div>
      <ChefSection />
      <VideoSection />
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${BG.src})` }}
        />
        <Gallery />
        <Testimonials />
      </div>
      <VenueDetails />
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${BG.src})` }}
        />
        <SocialFollow />
      </div>
    </main>
  );
}