import { Snowflake, PenguinHome } from "@/components/penguin-icons";
import { SyllabusCard } from "@/components/syllabus-card";

export function HomeContent() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="relative pb-6 border-b-2 border-blue-100">
        <Snowflake className="absolute -top-2 -right-2 w-14 h-14 text-blue-200/30" />
        <PenguinHome className="absolute -top-1 -left-1 w-10 h-10 text-blue-400/40" />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
          Welcome to CSCI 1851
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">
          Machine Learning for Biology and Health
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
          Welcome to CSCI 1851! This is an applied machine learning course covering details of different machine learning methods (from linear regression to more traditional applied models) and how they have been applied to various tasks in biology and health domains.
        </p>
      </div>

      {/* Syllabus Section */}
      <SyllabusCard />

      {/* Course Overview Section - Temporarily Hidden */}
      {/* <section className="relative">
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
      </section> */}

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
            <span className="text-base font-bold text-slate-900 min-w-[140px]">Location:</span>
            <span className="text-base text-slate-700">CIT Center (Thomas Watson CIT) 241</span>
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
              <span className="text-base text-slate-800">Mar 19, Thursday</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-base font-bold text-slate-900 min-w-[160px]">Final Exam:</span>
              <span className="text-base text-slate-800">May 08, Friday</span>
            </div>
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
