import { Snowflake, PenguinGroup } from "@/components/penguin-icons";

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
    <div className="space-y-12">
      {/* Page Header */}
      <div className="relative pb-6 border-b-2 border-blue-100">
        <Snowflake className="absolute -top-2 -right-2 w-14 h-14 text-blue-200/30" />
        <div className="flex items-center gap-4 mb-4">
          <PenguinGroup className="w-12 h-12 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Course Staff</h1>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed">
          Meet the team behind CSCI 1851. We're here to support your learning journey!
        </p>
      </div>

      {/* Professor Section */}
      {professor && (
        <section>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Snowflake className="w-7 h-7 text-blue-400/50" />
            <h2 className="text-3xl font-bold text-slate-900">Professor</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 border-2 border-blue-300 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center border-4 border-white shadow-md">
                  <span className="text-4xl font-bold text-blue-700">
                    {professor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                {/* Name */}
                <h3 className="text-2xl font-bold text-slate-900">{professor.name}</h3>
                
                {/* Pronouns */}
                <p className="text-base text-slate-600 italic">({professor.pronouns})</p>
                
                {/* Email */}
                <a 
                  href={`mailto:${professor.email}`}
                  className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 underline-offset-2 transition-colors"
                >
                  {professor.email}
                </a>
                
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Course Advisor Section */}
      {courseAdvisor && (
        <section>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Snowflake className="w-7 h-7 text-blue-400/50" />
            <h2 className="text-3xl font-bold text-slate-900">Course Advisor</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-3xl p-8 border-2 border-purple-300 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center border-4 border-white shadow-md">
                  <span className="text-4xl font-bold text-purple-700">
                    {courseAdvisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                {/* Name */}
                <h3 className="text-2xl font-bold text-slate-900">{courseAdvisor.name}</h3>
                
                {/* Pronouns */}
                <p className="text-base text-slate-600 italic">({courseAdvisor.pronouns})</p>
                
                {/* Email */}
                <a 
                  href={`mailto:${courseAdvisor.email}`}
                  className="text-purple-600 hover:text-purple-800 font-medium underline decoration-2 underline-offset-2 transition-colors"
                >
                  {courseAdvisor.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HTAs Section */}
      {htas.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Snowflake className="w-7 h-7 text-blue-400/50" />
            <h2 className="text-3xl font-bold text-slate-900">Head Teaching Assistants</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {htas.map((hta) => (
              <div 
                key={hta.id}
                className="bg-white rounded-2xl p-7 border-2 border-slate-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center border-4 border-white shadow-sm">
                    <span className="text-3xl font-bold text-slate-700">
                      {hta.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xl font-bold text-slate-900">{hta.name}</h3>
                  
                  {/* Pronouns */}
                  <p className="text-sm text-slate-600 italic">({hta.pronouns})</p>
                  
                  {/* Email */}
                  <a 
                    href={`mailto:${hta.email}`}
                    className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 underline-offset-2 transition-colors text-sm"
                  >
                    {hta.email}
                  </a>
                </div>
              </div>
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
