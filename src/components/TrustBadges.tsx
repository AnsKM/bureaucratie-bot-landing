'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, RefreshCw, Users } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "GDPR Compliant",
      description: "Your data is protected under EU law"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "No Password Storage",
      description: "We never store your KVR credentials"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "30-Day Guarantee",
      description: "Full refund if not satisfied"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Help available in English"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}