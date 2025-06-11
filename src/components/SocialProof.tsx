'use client';

import { motion } from 'framer-motion';

const companies = [
  'BMW', 'Siemens', 'Allianz', 'TUM', 'LMU', 'Google Munich'
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-8">
            Trusted by employees from Munich's top companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company) => (
              <span key={company} className="text-2xl font-semibold text-gray-400">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}