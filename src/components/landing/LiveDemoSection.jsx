import React, { useState } from "react";
import { FaChartPie, FaClock, FaCheckCircle, FaUserCheck } from "react-icons/fa";

const LiveDemoSection = () => {
  const [activeTab, setActiveTab] = useState("store");

  const demoTeams = [
    {
      name: "store",
      tasks: [
        { title: "Update shelf lighting", pr: "Medium", due: "Overdue" },
        { title: "Stock count LEDs", pr: "Low", due: "Tomorrow" },
      ],
    },
    {
      name: "kanhu",
      tasks: [
        { title: "Vendor follow-up", pr: "Medium", due: "Overdue" },
        { title: "Create display", pr: "High", due: "Today" },
      ],
    },
    {
      name: "dj",
      tasks: [
        { title: "Service ticket #2458", pr: "Low", due: "Overdue" },
        { title: "Replace drivers", pr: "Medium", due: "This week" },
      ],
    },
  ];

  const activeTeam = demoTeams.find(t => t.name === activeTab);

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Live task overview
            </h2>
            <p className="text-gray-600 mt-3 max-w-lg">
              Track daily progress in real-time. See what’s pending,
              completed, and waiting for verification at a glance.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white border rounded-xl p-6">
                <h4 className="font-medium text-gray-900 mb-4">Today</h4>

                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-lg bg-yellow-100 flex items-center justify-center">
                        <FaClock className="text-yellow-600" />
                      </div>
                      <span className="text-3xl font-bold">18</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Pending</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-lg bg-green-100 flex items-center justify-center">
                        <FaCheckCircle className="text-green-600" />
                      </div>
                      <span className="text-3xl font-bold">3</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Completed</p>
                  </div>
                </div>
              </div>

              {/* PIE */}
              <div className="bg-white border rounded-xl p-6 flex flex-col items-center justify-center">
                <h4 className="font-medium text-gray-900 mb-4">
                  Task breakdown
                </h4>

                <div className="relative w-32 h-32">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "conic-gradient(#fbbf24 0% 70%, #34d399 70% 100%)"
                    }}
                  />
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                    <FaChartPie className="text-gray-400 text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – MINI BOARD */}
          <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

            {/* HEADER */}
            <div className="px-6 py-4 border-b">
              <h3 className="font-semibold text-gray-900">
                Mini task board
              </h3>
              <p className="text-sm text-gray-500">
                Switch teams to preview task flow
              </p>
            </div>

            {/* TABS */}
            <div className="flex gap-2 px-6 py-3 bg-gray-50 border-b">
              {demoTeams.map(team => (
                <button
                  key={team.name}
                  onClick={() => setActiveTab(team.name)}
                  className={`px-4 py-2 text-sm rounded-lg capitalize transition ${
                    activeTab === team.name
                      ? "bg-blue-600 text-white"
                      : "bg-white border text-gray-700"
                  }`}
                >
                  {team.name}
                </button>
              ))}
            </div>

            {/* COLUMNS */}
            <div className="p-6 grid md:grid-cols-3 gap-5">
              {/* Pending */}
              <div className="border rounded-xl p-4">
                <h4 className="font-medium mb-4">Pending</h4>
                <div className="space-y-3">
                  {activeTeam.tasks.map((task, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 border rounded-lg p-3"
                    >
                      <p className="text-sm font-medium">{task.title}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {task.due} • {task.pr}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verify */}
              <div className="border rounded-xl p-4 flex flex-col items-center justify-center">
                <FaUserCheck className="text-gray-300 text-3xl mb-3" />
                <p className="text-sm text-gray-500">Nothing to verify</p>
              </div>

              {/* Completed */}
              <div className="border rounded-xl p-4 flex flex-col items-center justify-center">
                <FaCheckCircle className="text-gray-300 text-3xl mb-3" />
                <p className="text-sm text-gray-500">No completed tasks</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
