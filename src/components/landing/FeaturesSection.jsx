// // src/components/landing/FeaturesSection.jsx
// import React from "react";
// import { Users2, ListChecks, BarChart3 } from "lucide-react";

// const features = [
//   {
//     icon: Users2,
//     title: "Employee lists",
//     desc: "Group tasks by people or stores and see status at a glance.",
//   },
//   {
//     icon: ListChecks,
//     title: "Templates",
//     desc: "Create once: Daily Open/Close, Display Reset, Service Ticket, and more.",
//   },
//   {
//     icon: BarChart3,
//     title: "KPIs & SLAs",
//     desc: "Auto-track overdue, completion rate, and time-to-verify with alerts.",
//   },
// ];

// export default function FeaturesSection() {
//   return (
//     <section id="features" className="max-w-7xl mx-auto py-10">
//       {/* Heading */}
//       <div className="text-center max-w-2xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Everything your team needs
//         </h2>
//         <p className="mt-3 text-gray-500">
//           From assigning work to verifying and closing the loop—optimized for fast-moving stores.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="mt-10 grid gap-6 md:grid-cols-3">
//         {features.map((f, i) => {
//           const Icon = f.icon;
//           return (
//             <div
//               key={i}
//               className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
//             >
//               {/* Icon */}
//               <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center">
//                 <Icon className="h-5 w-5 text-blue-600" />
//               </div>

//               {/* Title */}
//               <h3 className="mt-4 text-lg font-semibold text-gray-900">
//                 {f.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-2 text-sm text-gray-500">
//                 {f.desc}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


// src/components/landing/FeaturesSection.jsx
import {
  FaTasks,
  FaUsers,
  FaUserShield,
  FaCheckDouble,
  FaEye,
  FaSyncAlt,
} from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: FaTasks,
      title: "Task Management",
      desc: "Create, assign, and track tasks with clear ownership and deadlines.",
      ring: "from-blue-500 to-indigo-500",
      bg: "bg-blue-50",
      color: "text-blue-600",
    },
    {
      icon: FaUsers,
      title: "Team Collaboration",
      desc: "Keep employees and managers aligned with shared task views.",
      ring: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      color: "text-purple-600",
    },
    {
      icon: FaCheckDouble,
      title: "Task Verification",
      desc: "Verify work before completion to maintain accountability.",
      ring: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
      color: "text-green-600",
    },
    {
      icon: FaEye,
      title: "Manager Visibility",
      desc: "Monitor progress, delays, and team performance in real time.",
      ring: "from-yellow-500 to-orange-500",
      bg: "bg-yellow-50",
      color: "text-yellow-600",
    },
    {
      icon: FaUserShield,
      title: "Admin Control",
      desc: "Manage users, permissions, and workflows from one place.",
      ring: "from-red-500 to-rose-500",
      bg: "bg-red-50",
      color: "text-red-600",
    },
    {
      icon: FaSyncAlt,
      title: "Recurring Tasks",
      desc: "Automate daily, weekly, or monthly tasks effortlessly.",
      ring: "from-indigo-500 to-cyan-500",
      bg: "bg-indigo-50",
      color: "text-indigo-600",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto mb-16">
      <div className="w-full max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            Features
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Discover IndoTask key features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            IndoTask helps teams stay organized, accountable, and productive
            with simple yet powerful task workflows.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border rounded-2xl p-8 text-center
                           shadow-sm hover:shadow-xl transition-all duration-300
                           hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.ring} opacity-20`}
                  />
                  <div
                    className={`relative w-full h-full rounded-full ${item.bg}
                                flex items-center justify-center`}
                  >
                    <Icon className={`text-xl ${item.color}`} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}




