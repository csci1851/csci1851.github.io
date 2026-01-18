import { Snowflake } from "@/components/penguin-icons";

interface SyllabusCardProps {
  pdfPath?: string;
}

export function SyllabusCard({ pdfPath = "/syllabus/course-syllabus.pdf" }: SyllabusCardProps) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <Snowflake className="w-7 h-7 text-blue-400/50" />
        <h2 className="text-3xl font-bold text-slate-900">Course Syllabus</h2>
      </div>
      <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 border-2 border-blue-300 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Course Syllabus
            </h3>
            <p className="text-base text-slate-700 leading-relaxed">
              View or download the complete course syllabus including policies, grading criteria, 
              schedule, and important course information.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md hover:shadow-lg"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              View Syllabus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
