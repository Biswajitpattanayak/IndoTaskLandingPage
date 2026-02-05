// // src/components/landing/Footer.jsx
// import React from "react";
// import { 
//   FaTasks, 
//   FaCheckCircle, 
//   FaUsers,
//   FaClock,
//   FaCalendarAlt,
//   FaBell,
//   FaMobileAlt,
//   FaEnvelope
// } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     "Task Features": [
//       { name: "Task Creation", href: "#" },
//       { name: "Assignment", href: "#" },
//       { name: "Verification", href: "#" },
//       { name: "Repeating Tasks", href: "#" },
//       { name: "Priority Levels", href: "#" }
//     ],
//     "Team Roles": [
//       { name: "Admin Dashboard", href: "#" },
//       { name: "User Tasks", href: "#" },
//       { name: "Manager View", href: "#" },
//       { name: "Team Analytics", href: "#" },
//       { name: "Role Permissions", href: "#" }
//     ],
//     "Industries": [
//       { name: "Retail Stores", href: "#" },
//       { name: "Service Teams", href: "#" },
//       { name: "Manufacturing", href: "#" },
//       { name: "Healthcare", href: "#" },
//       { name: "Education", href: "#" }
//     ],
//     "Support": [
//       { name: "Help Center", href: "#" },
//       { name: "Contact Support", href: "#" },
//       { name: "API Documentation", href: "#" },
//       { name: "System Status", href: "#" },
//       { name: "Community", href: "#" }
//     ]
//   };

//   return (
//     <footer className="bg-gray-900 text-white pt-14 pb-8 w-full">

//       {/* Top Feature Icons */}
//       <div className="mb-14 px-8">
//         <h3 className="text-center text-2xl font-bold mb-8">
//           Everything You Need for Task Management
//         </h3>

//         <div className="flex flex-wrap justify-center gap-10">
//           {[
//             { icon: FaCheckCircle, title: "Task Verification", desc: "Admin approval workflow" },
//             { icon: FaUsers, title: "Team Management", desc: "Assign & track tasks" },
//             { icon: FaClock, title: "Deadline Tracking", desc: "Never miss a task" },
//             { icon: FaCalendarAlt, title: "Repeat Tasks", desc: "Auto-schedule work" },
//             { icon: FaBell, title: "Smart Alerts", desc: "WhatsApp & email alerts" },
//             { icon: FaMobileAlt, title: "Mobile Access", desc: "Manage on the go" }
//           ].map((item, i) => (
//             <div key={i} className="text-center w-40">
//               <div className="h-12 w-12 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3">
//                 <item.icon className="text-blue-400 text-lg" />
//               </div>
//               <div className="font-medium text-sm">{item.title}</div>
//               <div className="text-gray-400 text-xs mt-1">{item.desc}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="flex flex-col lg:flex-row items-center mb-12 px-8">

//         {/* Logo + Description (CENTERED FIX) */}
//         <div className="flex flex-col items-center text-center lg:text-left lg:items-start px-16">
//           <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
//             <div className="h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center">
//               <FaTasks className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-xl font-bold">IndoTask</h2>
//               <p className="text-blue-300 text-sm">Task Management for Teams</p>
//             </div>
//           </div>

//           <p className="text-gray-400 mb-6 max-w-sm">
//             Simplify task management with admin controls, employee assignments,
//             verification workflows, and intelligent scheduling.
//           </p>

//           <div className="flex items-center gap-3 justify-center lg:justify-start">
//             <FaEnvelope className="text-blue-400" />
//             <span className="text-gray-400">support@indotask.com</span>
//           </div>
//         </div>

//         {/* Footer Links */}
//         <div className="lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-10">
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <div key={category} className="w-40">
//               <h3 className="font-semibold mb-4">{category}</h3>
//               <ul className="space-y-2">
//                 {links.map((link, i) => (
//                   <li key={i}>
//                     <a
//                       href={link.href}
//                       className="text-gray-400 hover:text-white transition text-sm"
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="pt-6 border-t border-gray-800 px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="text-gray-400 text-sm">
//             © {currentYear} IndoTask. All rights reserved.
//           </div>

//           <div className="flex gap-6">
//             {["Privacy", "Terms", "Cookies", "Security"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-gray-400 hover:text-white text-sm"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;




import { Images } from "lucide-react";
import React from "react";
import {
  FaTasks,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 w-full">

      {/* TOP SECTION */}
      <div className="w-full max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-1 mb-5">
              <div className="h-11 w-11 flex items-center justify-center">
                {/* <FaTasks className="text-white text-lg" /> */}
                <img src="images/onlylogo.png" alt="IndoTask Logo" className="h-6 w-6" />
              </div>
              <h2 className="text-white text-2xl font-semibold">
                IndoTask
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              IndoTask helps teams assign, track, and verify daily tasks
              with clarity. Built for stores, field teams, and growing
              organizations.
            </p>

            <div className="flex items-center gap-2 mt-5 text-sm">
              <FaEnvelope className="text-blue-400" />
              <span>support@indotask.com</span>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-14">
            <div>
              <h3 className="text-white font-medium mb-5">Product</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white cursor-pointer">Tasks</li>
                <li className="hover:text-white cursor-pointer">Employees</li>
                <li className="hover:text-white cursor-pointer">Verification</li>
                <li className="hover:text-white cursor-pointer">Reports</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-5">Company</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
                <li className="hover:text-white cursor-pointer">Privacy</li>
                <li className="hover:text-white cursor-pointer">Terms</li>
              </ul>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-white font-medium mb-5">Connect</h3>

            <p className="text-sm text-gray-400 mb-6 max-w-sm">
              Follow IndoTask for updates, product improvements,
              and feature announcements.
            </p>

            <div className="flex items-center gap-6 text-2xl">
              <FaGithub className="hover:text-white transition cursor-pointer" />
              <FaLinkedin className="hover:text-white transition cursor-pointer" />
              <FaTwitter className="hover:text-white transition cursor-pointer" />
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 w-full mx-w-7xl mx-auto">
        <div className="w-full max-w-7xl mx-auto
                        flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} IndoTask. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Simple • Accountable • Team-Focused
          </p>
        </div>
      </div>

    </footer>
  );
}
