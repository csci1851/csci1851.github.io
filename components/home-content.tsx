import { Snowflake } from "@/components/penguin-icons";

export function HomeContent() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="relative pb-6 border-b-2 border-blue-100">
        <Snowflake className="absolute -top-2 -right-2 w-14 h-14 text-blue-200/30" />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
          Welcome to CSCI 1851
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">
          Machine Learning for Biology and Health
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
          This is an applied machine learning course covering details of 
          different machine learning methods (from linear regression to transformers)
           and how they have been applied to various tasks in biology and health domains.
        </p>
      </div>

      {/* Course Overview Section */}
      <section className="relative">
        <div className="flex items-center gap-3 mb-5">
          <Snowflake className="w-7 h-7 text-blue-400/50" />
          <h2 className="text-3xl font-bold text-slate-900">Course Overview</h2>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 space-y-5 border border-blue-200/50">
          <p className="text-base text-slate-700 leading-relaxed">
            N/A
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            N/A
          </p>
          <div className="grid md:grid-cols-3 gap-5 pt-4">
            <div className="bg-white/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-2"></h3>
              <p className="text-sm text-slate-600 leading-relaxed"></p>
            </div>
            <div className="bg-white/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-2"></h3>
              <p className="text-sm text-slate-600 leading-relaxed"></p>
            </div>
            <div className="bg-white/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-2"></h3>
              <p className="text-sm text-slate-600 leading-relaxed"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Lecture Logistics Section */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <Snowflake className="w-7 h-7 text-blue-400/50" />
          <h2 className="text-3xl font-bold text-slate-900">Lecture Logistics</h2>
        </div>
        <div className="bg-white rounded-3xl border-2 border-blue-200 p-8 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-base font-bold text-slate-900 min-w-[140px]">When:</span>
            <span className="text-base text-slate-700">Tuesday & Thursday, 10:30 AM - 11:50 AM</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-base font-bold text-slate-900 min-w-[140px]">Where:</span>
            <span className="text-base text-slate-700">TBD</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-base font-bold text-slate-900 min-w-[140px]">First Lecture:</span>
            <span className="text-base text-slate-700">January 21, 2026</span>
          </div>
        </div>
      </section>

      {/* Communications Section */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <Snowflake className="w-7 h-7 text-blue-400/50" />
          <h2 className="text-3xl font-bold text-slate-900">Communications</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-7 border-2 border-slate-200 hover:border-slate-300 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Ed Discussion</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              All course announcements and Q&A will be posted on Ed Discussion. 
              Please check regularly for updates.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-7 border-2 border-slate-200 hover:border-slate-300 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Office Hours</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Office hours are held weekly. Check the Calendar tab for the full schedule 
              and Zoom links.
            </p>
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <Snowflake className="w-7 h-7 text-blue-400/50" />
          <h2 className="text-3xl font-bold text-slate-900">Exams</h2>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-300 shadow-sm">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-base font-bold text-slate-900 min-w-[160px]">Midterm Exam:</span>
              <span className="text-base text-slate-800">TBD</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-base font-bold text-slate-900 min-w-[160px]">Final Exam:</span>
              <span className="text-base text-slate-800">TBD (during finals period)</span>
            </div>
            <p className="text-sm text-slate-700 pt-3 bg-white/50 rounded-xl p-4">
              
            
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="pt-8 pb-4">
        <p className="text-sm text-slate-500 text-center italic">
          Questions? Reach out to the teaching staff or post on Ed Discussion.
        </p>
      </div>
    </div>
  );
}
