'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      image: "/testimonials/sarah.jpg",
      content: "Got my Anmeldung appointment in 4 days instead of waiting 3 months. This app is a lifesaver for any expat in Munich.",
      rating: 5,
      highlight: "4 days vs 3 months"
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager at BMW",
      image: "/testimonials/marcus.jpg",
      content: "The auto-booking feature is incredible. I was asleep when my visa extension appointment opened up - woke up to a confirmation!",
      rating: 5,
      highlight: "Booked while sleeping"
    },
    {
      name: "Emma Thompson",
      role: "Consultant at McKinsey",
      image: "/testimonials/emma.jpg",
      content: "Worth every cent. I calculated I saved 40+ hours of refreshing appointment pages. The document scanner is genius.",
      rating: 5,
      highlight: "40 hours saved"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join 5,000+ expats who never wait in line
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who escaped Munich's bureaucracy nightmare
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-6">
                {testimonial.highlight}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Rated 4.9/5 from 2,341 reviews</p>
          <div className="flex justify-center gap-8">
            <span className="text-gray-400">App Store ★★★★★</span>
            <span className="text-gray-400">Google Play ★★★★★</span>
            <span className="text-gray-400">Trustpilot ★★★★★</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}