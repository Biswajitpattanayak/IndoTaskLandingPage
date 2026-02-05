import React from "react";

export default function TaskFeatureSections() {
  return (
    <section className="w-full max-w-7xl mx-auto space-y-10 bg-gray">

      {/* ================= Section 1 ================= */}
      <div className="bg-green-50 rounded-[32px]
                      flex flex-col lg:flex-row items-center gap-14 2xl:gap-28">

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-5">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000"
              alt="Task Dashboard"
              className="rounded-2xl w-full max-w-[520px] 2xl:max-w-[640px]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-4">
            Manage Tasks
          </p>

          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Organize your tasks <br className="hidden lg:block" />
            efficiently
          </h2>

          <p className="text-gray-600 text-base md:text-lg 2xl:text-xl 
                        leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0">
            IndoTask helps you organize work by priority, category, and team
            members. Track every task clearly and keep your workflow smooth.
          </p>
        </div>
      </div>

      {/* ================= Section 2 ================= */}
      <div className="bg-blue-50 rounded-[32px] p-8 md:p-16 2xl:p-20 
                      flex flex-col lg:flex-row items-center gap-14 2xl:gap-24">

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
            Team Progress
          </p>

          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Track progress <br className="hidden lg:block" />
            in real time
          </h2>

          <p className="text-gray-600 text-base md:text-lg 2xl:text-xl 
                        leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0">
            View task status, deadlines, and employee progress in one dashboard.
            Managers stay updated without constant follow-ups.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-5">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
              alt="Analytics Dashboard"
              className="rounded-2xl w-full max-w-[520px] 2xl:max-w-[640px]"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
