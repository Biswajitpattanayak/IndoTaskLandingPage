// src/components/landing/PricingSection.jsx
import React, { useState } from "react";
import { FaCheckCircle, FaStar, FaRocket, FaCrown } from "react-icons/fa";

const PricingSection = () => {
  const [billingAnnual, setBillingAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      tagline: "For small teams",
      price: 0,
      period: "forever",
      perks: ["3 team members", "Basic checklists", "Email support", "100 tasks/month"],
      cta: "Start free",
      icon: <FaStar className="h-5 w-5 text-blue-500" />,
      color: "blue"
    },
    {
      name: "Pro",
      tagline: "Most popular",
      price: billingAnnual ? 199 : 249,
      period: "month",
      perks: ["Unlimited members", "Admin controls", "WhatsApp alerts", "Unlimited tasks", "Repeat tasks", "Export data"],
      highlighted: true,
      cta: "Start 14-day trial",
      icon: <FaRocket className="h-5 w-5 text-purple-500" />,
      color: "purple"
    },
    {
      name: "Enterprise",
      tagline: "For large teams",
      price: billingAnnual ? 499 : 599,
      period: "month",
      perks: ["HQ dashboard", "SLA & escalations", "API access", "SSO login", "Priority support", "Custom workflows"],
      cta: "Contact sales",
      icon: <FaCrown className="h-5 w-5 text-orange-500" />,
      color: "orange"
    },
  ];

  return (
    <section className="py-10 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-4">
          {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
            No credit card required
          </div> */}
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          
          <p className="text-gray-600 max-w-lg mx-auto">
            Start free, upgrade as you grow. Cancel anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingAnnual(false)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !billingAnnual 
                  ? 'bg-white text-blue-600 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingAnnual(true)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingAnnual 
                  ? 'bg-white text-blue-600 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly <span className="text-green-600 ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border ${
                plan.highlighted 
                  ? 'border-blue-500 shadow-xl transform hover:scale-[1.02] transition-transform' 
                  : 'border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
              } p-5 md:p-6 relative overflow-hidden`}
            >
              {/* Highlighted Plan Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              )}

              {/* Popular Badge */}
              {/* {plan.highlighted && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                    Most Popular
                  </div>
                </div>
              )} */}

              {/* Plan Icon & Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br from-${plan.color}-50 to-white border border-${plan.color}-100 flex items-center justify-center`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg md:text-xl">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.tagline}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">₹{plan.price}</span>
                  {plan.period !== "forever" && (
                    <span className="text-gray-500 ml-2">/month</span>
                  )}
                </div>
                {plan.period === "forever" ? (
                  <p className="text-gray-500 text-sm mt-1">Free forever</p>
                ) : billingAnnual ? (
                  <p className="text-green-600 text-sm mt-1">Save ₹600 yearly</p>
                ) : null}
              </div>

              {/* Features */}
              <div className="mb-6 md:mb-8">
                <ul className="space-y-3">
                  {plan.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:shadow-lg'
                    : plan.price === 0
                    ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    : 'border-2 border-blue-500 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {plan.cta}
              </button>

              {/* Starter Plan Note */}
              {plan.price === 0 && (
                <p className="text-center text-xs text-gray-500 mt-3">
                  No credit card required
                </p>
              )}
            </div>
          ))}
        </div>

        {/* All Plans Include */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="h-4 w-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="h-4 w-4 text-green-500" />
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;