import { Snowflake } from "@/components/penguin-icons";

interface PlaceholderContentProps {
  title: string;
  description: string;
}

export function PlaceholderContent({ title, description }: PlaceholderContentProps) {
  return (
    <div className="space-y-8">
      <div className="relative pb-6 border-b-2 border-blue-100">
        <Snowflake className="absolute -top-2 -right-2 w-14 h-14 text-blue-200/30" />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
          {description}
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-12 border border-blue-200/50 text-center">
        <div className="text-6xl mb-6"></div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Content Coming Soon</h2>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          This section is currently being updated. Check back soon for the latest information.
        </p>
      </div>
    </div>
  );
}
