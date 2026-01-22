import { PenguinGroup } from "@/components/penguin-icons";
import { LectureCard } from "@/components/lecture-card";

interface Lecture {
  id: string;
  date: string;
  title: string;
  topic: string;
  slides_url: string;
  recording_url: string | null;
  notes_url: string | null;
}

async function getLecturesData(): Promise<Lecture[]> {
  // Import lectures data directly instead of using fetch in production
  const lecturesData = await import('@/lib/data/lectures.json');
  return lecturesData.default as Lecture[];
}

export default async function LecturesPage() {
  const lectures = await getLecturesData();

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="relative pb-6 border-b border-slate-200">
        <div className="flex items-center gap-4 mb-4">
          <PenguinGroup className="w-12 h-12 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Lectures</h1>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed">
          Lecture slides, recordings, and supplementary materials organized by date.
        </p>
      </div>

      {/* Lectures List */}
      <section>
        <div className="space-y-4">
          {lectures.map((lecture) => (
            <LectureCard
              key={lecture.id}
              date={lecture.date}
              topic={lecture.topic}
              slidesUrl={lecture.slides_url}
            />
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <div className="pt-8 pb-4">
        <p className="text-sm text-slate-500 text-center italic">
          Check back regularly for new lecture materials and updates!
        </p>
      </div>
    </div>
  );
}
