import { Snowflake, PenguinGroup } from "@/components/penguin-icons";
import { AssignmentCard } from "@/components/assignment-card";
import assignmentsData from "@/lib/data/assignments.json";

interface Assignment {
  id: string;
  title: string;
  released_at: string;
  due_at: string;
  presentation_date?: string;
  spec_url?: string | null;
  submission_url?: string | null;
  is_project?: boolean;
}

export default function AssignmentsPage() {
  const assignments = assignmentsData as Assignment[];
  
  // Separate homework and final project
  const homeworks = assignments.filter(a => !a.is_project);
  const finalProject = assignments.find(a => a.is_project);

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="relative pb-6 border-b-2 border-blue-100">
        <Snowflake className="absolute -top-2 -right-2 w-14 h-14 text-blue-200/30" />
        <div className="flex items-center gap-4 mb-4">
          <PenguinGroup className="w-12 h-12 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Assignments</h1>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed">
          Problem sets, coding assignments, and final project specifications with due dates and submission instructions.
        </p>
      </div>

      {/* Homework Assignments Section */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Homework Assignments</h2>
          <p className="text-slate-600">
            We will hand out six homework assignments through the duration of the course. Each assignment consists of 4-5 conceptual questions 
            from papers related to topics covered in class and 1 programming assignment (with stencil code provided) to provide practical 
            understanding of working with genomics data and deep learning models.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {homeworks.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              id={assignment.id}
              title={assignment.title}
              released_at={assignment.released_at}
              due_at={assignment.due_at}
              spec_url={assignment.spec_url}
              submission_url={assignment.submission_url}
              is_project={false}
            />
          ))}
        </div>
      </section>

      {/* Final Project Section */}
      {finalProject && (
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Final Project</h2>
            <p className="text-slate-600">
              With 2-3 other students, you will work on a course project that applies a machine learning model to a particular biology and health domain task. 
              This project is modeled like a Kaggle competition, where we describe the task and provide the related dataset. Each team will develop and apply 
              a machine learning framework to solve that task using the released dataset.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <AssignmentCard
              key={finalProject.id}
              id={finalProject.id}
              title={finalProject.title}
              released_at={finalProject.released_at}
              due_at={finalProject.due_at}
              presentation_date={finalProject.presentation_date}
              spec_url={finalProject.spec_url}
              submission_url={finalProject.submission_url}
              is_project={true}
            />
          </div>

          {/* Project Guidelines */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Project Guidelines
            </h3>
            <div className="space-y-4 text-slate-700">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Team Formation</h4>
                  <p>Form teams of 2-3 students. Teams will be finalized by the project release date.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Mid-term Model Evaluation (5%)</h4>
                  <p>Submit your initial model implementation for a checkpoint evaluation on the mid-term exam day. This is scored on completion and helps you gauge your progress before the task update.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Final Presentations (15%)</h4>
                  <p>Each team gets a 10-minute slot (8 min presentation + 2 min questions) to present their project. We will recognize top-performing teams from both mid-term and final evaluations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Final Report and Code (10%)</h4>
                  <p>Each team submits a final report including task details, data, model, training, experiments, and results. Reports are due after presentations. We will also evaluate code quality, correctness, and documentation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Equal Participation</h4>
                  <p>All team members must contribute equally. If feedback forms indicate unequal participation, points will be deducted from the final project tally for that student.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Submission Policy */}
      <section>
        <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Submission Policy
          </h3>
          <div className="space-y-3 text-slate-700">
            <p>
              <strong className="text-slate-900">Due Time:</strong> All assignments are due at 5:00 PM EST on the specified day.
            </p>
            <p>
              <strong className="text-slate-900">Extensions:</strong> You can get a 72-hour extension for at most 4 homework deadlines without penalty. 
              Excluding this scenario, 20% of the total points will be deducted for late submissions, and missed submissions will not be assigned any score.
            </p>
            <p>
              <strong className="text-slate-900">Project Presentations:</strong> If you are unable to present on your assigned day, please exchange your slot 
              with another student/team and inform the instructor. No-show on the day of your assigned presentation will be treated as a missed assignment.
            </p>
            <p>
              <strong className="text-slate-900">Collaboration Policy:</strong> Discussion of material with classmates is both permitted and encouraged. 
              However, showing, copying, or other sharing of answers to written questions and actual code on homework and projects is forbidden. 
              Additionally, reusing code or pre-trained models from another student or any public platform is forbidden, unless specified. 
              This includes publishing projects publicly on Github or any other public platform.
            </p>
          </div>
        </div>
      </section>

      {/* Help & Resources */}
      <section>
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Need Help?
          </h3>
          <div className="space-y-3 text-slate-700">
            <p>
              If you have questions about assignments or need clarification on requirements:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Attend office hours (Fridays, 3:30 PM - 5:30 PM, DSI 313 or Zoom, HTA office hours: 1:00 PM - 3:00 PM, CIT 207)</li>
              <li>Post questions on the course discussion forum</li>
              <li>Email the teaching staff for private concerns</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
