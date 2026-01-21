import { PenguinGroup } from "@/components/penguin-icons";
import { StaffCard } from "@/components/staff-card";

interface StaffMember {
  id: string;
  name: string;
  role: string;
  pronouns: string;
  email: string;
  photo_url: string;
}

async function getStaffData(): Promise<StaffMember[]> {
  // Import staff data directly instead of using fetch in production
  const staffData = await import('@/lib/data/staff.json');
  return staffData.default as StaffMember[];
}

export default async function StaffPage() {
  const staff = await getStaffData();
  const professor = staff.find(member => member.role === "Professor");
  const courseAdvisor = staff.find(member => member.role === "Course Advisor");
  const htas = staff.filter(member => member.role === "Head TA");

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="relative pb-6 border-b border-slate-200">
        <div className="flex items-center gap-4 mb-4">
          <PenguinGroup className="w-12 h-12 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Course Staff</h1>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed">
          Meet the team behind CSCI 1851. We're here to support your learning journey!
        </p>
      </div>

      {/* Professor Section */}
      {professor && (
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Professor</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <StaffCard
                name={professor.name}
                role={professor.role}
                pronouns={professor.pronouns}
                email={professor.email}
                imageSrc={professor.photo_url}
              />
            </div>
          </div>
        </section>
      )}

      {/* Course Advisor Section */}
      {courseAdvisor && (
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Advisor</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <StaffCard
                name={courseAdvisor.name}
                role={courseAdvisor.role}
                pronouns={courseAdvisor.pronouns}
                email={courseAdvisor.email}
                imageSrc={courseAdvisor.photo_url}
              />
            </div>
          </div>
        </section>
      )}

      {/* Head TAs Section */}
      {htas.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Head Teaching Assistants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {htas.map((hta) => (
              <StaffCard
                key={hta.id}
                name={hta.name}
                role={hta.role}
                pronouns={hta.pronouns}
                email={hta.email}
                imageSrc={hta.photo_url}
              />
            ))}
          </div>
        </section>
      )}

      {/* Footer Note */}
      <div className="pt-8 pb-4">
        <p className="text-sm text-slate-500 text-center italic">
          Feel free to reach out during office hours or via email with any questions!
        </p>
      </div>
    </div>
  );
}
