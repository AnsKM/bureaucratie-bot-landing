'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Bell, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6"
            >
              <Bell className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                5,000+ expats already skip the queue
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Skip the Munich Bureaucracy Queue.{' '}
              <span className="gradient-text">Forever.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Get KVR appointments in minutes, not months. Our smart notification system alerts you instantly when slots open.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition flex items-center justify-center gap-2 text-lg font-medium shadow-lg hover:shadow-xl">
                Start Free 7-Day Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition flex items-center justify-center gap-2 text-lg font-medium border border-gray-200">
                See How It Works
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Setup in 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>No credit card required</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Phone mockup showing app interface */}
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="bg-blue-600 text-white p-4 text-center">
                      <p className="font-medium">Appointment Found!</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="font-semibold text-green-800">KVR Munich</p>
                        <p className="text-green-600">Tomorrow, 10:30 AM</p>
                        <p className="text-sm text-green-600 mt-2">Anmeldung Service</p>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 bg-white rounded-2xl shadow-lg p-4"
              >
                <p className="text-sm font-medium text-gray-700">Appointment in 3 days</p>
                <p className="text-xs text-gray-500">vs. 3 months average wait</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-lg p-4"
              >
                <p className="text-sm font-medium text-gray-700">24/7 Monitoring</p>
                <p className="text-xs text-gray-500">Never miss a slot</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="800" height="800" viewBox="0 0 800 800">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}