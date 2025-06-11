'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Users, Clock } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Munich adds 50,000 new residents yearly.
            <br />
            <span className="text-blue-200">Don't compete for appointments.</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join the thousands of expats who never waste time refreshing appointment pages. 
            Get your first appointment in days, not months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg font-medium">
              Start Free 7-Day Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition flex items-center justify-center gap-2 text-lg font-medium">
              Download the App
              <Smartphone className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-8 h-8 mx-auto mb-3" />
              <p className="text-2xl font-bold">5,000+</p>
              <p className="text-blue-200">Happy expats</p>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <p className="text-2xl font-bold">3 days</p>
              <p className="text-blue-200">Average wait time</p>
            </div>
            <div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-2xl font-bold">95%</p>
                <p className="text-blue-200">Success rate</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="mt-20 pt-12 border-t border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BürokratieBot</h3>
              <p className="text-blue-200">Making Munich bureaucracy bearable, one appointment at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-500 text-center text-blue-200">
            <p>&copy; 2025 BürokratieBot. Made with ❤️ for Munich expats.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}