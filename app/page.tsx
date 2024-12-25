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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Gallery />
      <VideoSection />
      {/* <Features /> */}
      {/* <Delicacies /> */}
      <ChefSection />
      <Testimonials />
      <VenueDetails />
    </main>
  );
}