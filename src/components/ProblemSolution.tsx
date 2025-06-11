'use client';

import { motion } from 'framer-motion';
import { X, Check, Clock, Globe, FileX, Smartphone } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "3-month wait times",
      description: "Refreshing appointment pages daily"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "German-only forms",
      description: "Google Translate confusion"
    },
    {
      icon: <FileX className="w-6 h-6" />,
      title: "Missing documents",
      description: "Wasted trips to offices"
    }
  ];

  const solutions = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "Appointments in days",
      description: "Auto-booking when slots open"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "English interface",
      description: "Professional translations included"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Document checklist",
      description: "Never miss required papers"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Munich bureaucracy is broken. We fixed it.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop wasting months of your life waiting for appointments. Let technology do the waiting for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <X className="w-8 h-8 text-red-500" />
              Without BürokratieBot
            </h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4 p-4 bg-red-50 rounded-lg">
                  <div className="text-red-600">{problem.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{problem.title}</h4>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Check className="w-8 h-8 text-green-500" />
              With BürokratieBot
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="text-green-600">{solution.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{solution.title}</h4>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}