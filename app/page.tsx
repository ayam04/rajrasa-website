'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
// import Features from '@/components/Features';
// import Delicacies from '@/components/Delicacies';
import ChefSection from '@/components/ChefSection';
import VenueDetails from '@/components/VenueDetails';
import VideoSection from '@/components/VideoSection';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import BG from '@/public/SectionBg.jpg'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${BG.src})` }}
        />
        <About />
        <Gallery />
      </div>
      <VideoSection />
      {/* <Features /> */}
      {/* <Delicacies /> */}
      <ChefSection />
      <Testimonials />
      <VenueDetails />
    </main>
  );
}