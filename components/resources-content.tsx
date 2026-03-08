import { Snowflake } from "@/components/penguin-icons";
import { SyllabusCard } from "@/components/syllabus-card";
import resourcesData from "@/lib/data/resources.json";

interface Resource {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
  authors?: string;
}

const resources: Resource[] = resourcesData;

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
        <div className="grid gap-4">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.url}
              target={resource.url.startsWith("http") ? "_blank" : "_self"}
              rel={resource.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col sm:flex-row sm:items-start gap-4 bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                {resource.authors && (
                  <p className="text-sm text-slate-500 mt-0.5">{resource.authors}</p>
                )}
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  {resource.description}
                </p>
              </div>
              <div className="shrink-0 self-center">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 group-hover:text-blue-700 transition-colors">
                  {resource.url.startsWith("http") ? "Visit →" : "Open PDF →"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
