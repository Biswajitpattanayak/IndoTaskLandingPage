// src/components/landing/CTASection.jsx
import React from "react";
import { FaCheckCircle, FaArrowRight, FaRocket } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="w-full px-4">
      <div className="w-full max-w-7xl mx-auto px-16">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg">
          
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <FaRocket className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Start your free trial today
            </h3>
            <p className="text-gray-600">
              Join 500+ teams already using IndoTask
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              placeholder="you@company.com"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
            />
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
              Get Started Free
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;