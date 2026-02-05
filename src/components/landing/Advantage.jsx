import React from "react";
import { 
  FaTasks, 
  FaUsersCog, 
  FaBolt 
} from "react-icons/fa";

export default function Advantage() {
  return (
    <section className="w-full max-w-7xl mx-auto bg-white py-16">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-14">
        <div>
          {/* <p className="text-blue-600 text-sm font-semibold uppercase mb-2">
            Advantage
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            The ultimate solution <br /> for any task workflow
          </h2>
        </div>

        <button className="self-start bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          Explore More
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
          <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <FaTasks className="text-blue-600 text-lg" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Seamless Task Setup
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Create tasks in seconds with priorities, due dates, 
            and repeat rules—organized automatically for your team.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
          <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
            <FaUsersCog className="text-purple-600 text-lg" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Role-Based Control
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Assign tasks to employees, managers, or stores with 
            admin verification and full visibility across teams.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
          <div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center mb-4">
            <FaBolt className="text-orange-500 text-lg" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Fast Execution & Tracking
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Track progress in real time, verify completion instantly,
            and keep everyone aligned without delays.
          </p>
        </div>

      </div>
    </section>
  );
}



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