'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import TrustBadges from '@/components/TrustBadges';
import FinalCTA from '@/components/FinalCTA';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [appointmentCount, setAppointmentCount] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      setAppointmentCount(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navigation />
      
      {/* Live Appointment Counter */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-20 right-4 z-40 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2"
      >
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm font-medium">
          {appointmentCount} appointments available now
        </span>
      </motion.div>

      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <Pricing />
      <TrustBadges />
      <FinalCTA />
    </main>
  );
}
