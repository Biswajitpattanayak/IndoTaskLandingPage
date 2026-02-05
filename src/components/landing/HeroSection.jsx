// src/components/landing/HeroSection.jsx
import React from "react";
import { FaStar, FaPlay, FaUserShield, FaCheckCircle, FaSync, FaChartLine, FaUsers } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      
      {/* TOP SECTION - TEXT CONTENT */}
      <div className="w-full px-4">
        <div className="px-16 mx-auto text-center">
          
          {/* Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <FaStar className="mr-2" />
            Trusted by 500+ teams
          </div> */}
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Task Management Made
            <span className="block text-blue-600 mt-2">Simple & Powerful</span>
          </h1>
          
          {/* Description */}
<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
  IndoTask is a smart task management platform built for teams.
  Create tasks, assign them to users, verify completion, and monitor progress
  in real time with full admin control.
</p>

          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700">
              Start Free Trial
            </button>
            
            <button className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-xl border border-gray-300 hover:border-blue-400 flex items-center">
              <FaPlay className="mr-3 text-blue-600" />
              Watch Demo
            </button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FaUserShield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="font-medium">Admin Controls</div>
              <div className="text-sm text-gray-500">Create & assign tasks</div>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FaUsers className="h-6 w-6 text-green-600" />
              </div>
              <div className="font-medium">User Tasks</div>
              <div className="text-sm text-gray-500">Complete & submit</div>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FaCheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div className="font-medium">Verification</div>
              <div className="text-sm text-gray-500">Approve completed tasks</div>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FaSync className="h-6 w-6 text-orange-600" />
              </div>
              <div className="font-medium">Repeat Tasks</div>
              <div className="text-sm text-gray-500">Auto-schedule</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* BOTTOM SECTION - DASHBOARD IMAGE/DEMO */}
{/* BOTTOM SECTION - DASHBOARD IMAGE */}
<div className="w-full -mt-16">
  <div className="max-w-7xl mx-auto">
    <div className="rounded-2xl overflow-hidden">
      <img
        src="/images/taskimg3.png"
        alt="IndoTask Dashboard Preview"
        className="w-full h-[650px] object-contain bg-transparent"
      />
    </div>
  </div>
</div>

    </section>
  );
};

export default HeroSection;