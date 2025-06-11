'use client';

import { motion } from 'framer-motion';
import { Bell, Zap, Scan, Calendar, Globe, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "24/7 appointment checking across all Munich offices. Get notified the second a slot opens.",
      highlight: "Checks every 5 minutes"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto-Booking",
      description: "Sleep while we book. Our bot fills forms and secures appointments automatically.",
      highlight: "Books in < 10 seconds"
    },
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Document Scanner",
      description: "OCR technology reads German documents. Instant English translation included.",
      highlight: "99% accuracy"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "AI predicts best times for appointment releases. Higher success rate.",
      highlight: "3x better odds"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Office Support",
      description: "Monitor KVR, Bürgerbüro, and Führerscheinstelle simultaneously.",
      highlight: "All offices covered"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "GDPR compliant. We never store your KVR passwords.",
      highlight: "Bank-level encryption"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to beat the bureaucracy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've automated every painful part of German administrative appointments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <span className="text-sm font-medium text-blue-600">
                {feature.highlight}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            See it in action
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Watch how BürokratieBot found and booked an Anmeldung appointment in just 3 days
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            Watch 2-minute demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}