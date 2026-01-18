import { Snowflake } from "@/components/penguin-icons";
import { SyllabusCard } from "@/components/syllabus-card";

export function ResourcesContent() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="relative pb-6 border-b-2 border-blue-100">
        <Snowflake className="absolute -top-2 -right-2 w-14 h-14 text-blue-200/30" />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
          Resources
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
          Course materials, textbooks, programming tools, and additional learning resources.
        </p>
      </div>

      {/* Syllabus Section */}
      <SyllabusCard />

      {/* Additional Resources Section */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <Snowflake className="w-7 h-7 text-blue-400/50" />
          <h2 className="text-3xl font-bold text-slate-900">Additional Resources</h2>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-12 border border-blue-200/50 text-center">
          <div className="text-6xl mb-6"></div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">More Resources Coming Soon</h3>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Additional course materials, textbooks, programming tools, and learning resources will be posted here throughout the semester.
          </p>
        </div>
      </section>
    </div>
  );
}
