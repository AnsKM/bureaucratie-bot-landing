'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "€0",
      description: "Get started with basic monitoring",
      features: [
        { text: "Monitor 1 appointment type", included: true },
        { text: "Email notifications", included: true },
        { text: "Manual booking required", included: true },
        { text: "Auto-booking", included: false },
        { text: "Document scanner", included: false },
        { text: "Priority notifications", included: false }
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Premium",
      price: "€9.99",
      period: "/month",
      description: "Everything you need to skip the queue",
      features: [
        { text: "Monitor unlimited appointments", included: true },
        { text: "Instant push notifications", included: true },
        { text: "Auto-booking while you sleep", included: true },
        { text: "Document scanner with OCR", included: true },
        { text: "Priority notification (30s faster)", included: true },
        { text: "Calendar integration", included: true }
      ],
      cta: "Start 7-Day Free Trial",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Save months of waiting for less than a coffee
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare: Relocation services charge €500-2000 for appointment help
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-blue-600 shadow-xl' : 'shadow-sm'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-medium transition ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Cancel anytime. No questions asked. 30-day money-back guarantee.
          </p>
        </motion.div>
      </div>
    </section>
  );
}