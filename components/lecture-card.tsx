import { FileText, Download } from "lucide-react";

interface LectureCardProps {
  date: string;
  topic: string;
  slidesUrl: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.getDate();
  return `${month} ${day}`;
}

export function LectureCard({ date, topic, slidesUrl }: LectureCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 items-center">
        {/* Column 1: Date */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary">
              {formatDate(date).split(' ')[1]}
            </div>
            <div className="text-sm font-medium text-slate-600">
              {formatDate(date).split(' ')[0]}
            </div>
          </div>
        </div>

        {/* Column 2: Topic */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-900">{topic}</h3>
          </div>
        </div>

        {/* Column 3: PDF Download */}
        <div className="flex-shrink-0">
          <a
            href={slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
