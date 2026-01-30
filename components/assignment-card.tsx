interface AssignmentCardProps {
  id: string;
  title: string;
  released_at?: string;
  due_at: string;
  presentation_date?: string;
  spec_url?: string | null;
  submission_url?: string | null;
  is_project?: boolean;
}

export function AssignmentCard({
  title,
  released_at,
  due_at,
  presentation_date,
  spec_url,
  submission_url,
  is_project = false,
}: AssignmentCardProps) {
  const releasedDate = released_at ? new Date(released_at) : null;
  const dueDate = new Date(due_at);
  const presentationDate = presentation_date ? new Date(presentation_date) : null;
  const now = new Date();
  
  const isReleased = releasedDate ? now >= releasedDate : true;
  const isPastDue = now > dueDate;
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    });
  };
  
  const formatTime = (date: Date) => {
    return "5:00 PM EST";
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg border-2 ${
      is_project ? 'border-purple-200' : 'border-[#1e3a5f]/20'
    } overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
      {/* Header */}
      <div className={`${
        is_project 
          ? 'bg-gradient-to-r from-purple-600 to-purple-800' 
          : 'bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f]'
      } p-6 text-white`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <div className="flex items-center gap-2">
              {is_project ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Final Project
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Homework
                </span>
              )}
              {!isReleased && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400/90 text-yellow-900 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Not Released
                </span>
              )}
              {isPastDue && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-400/90 text-red-900 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Past Due
                </span>
              )}
            </div>
          </div>
          <div className={`w-16 h-16 rounded-full ${
            is_project ? 'bg-purple-500/30' : 'bg-white/20'
          } flex items-center justify-center flex-shrink-0`}>
            {is_project ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Released Date */}
        {releasedDate && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Released</p>
              <p className="text-lg font-semibold text-slate-900">{formatDate(releasedDate)}</p>
              <p className="text-sm text-slate-600">{formatTime(releasedDate)}</p>
            </div>
          </div>
        )}

        {/* Due Date */}
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-full ${
            isPastDue ? 'bg-red-100' : 'bg-orange-100'
          } flex items-center justify-center flex-shrink-0`}>
            <svg className={`w-5 h-5 ${isPastDue ? 'text-red-600' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Due Date</p>
            <p className={`text-lg font-semibold ${isPastDue ? 'text-red-600' : 'text-slate-900'}`}>
              {formatDate(dueDate)}
            </p>
            <p className={`text-sm ${isPastDue ? 'text-red-600' : 'text-slate-600'}`}>
              {formatTime(dueDate)}
            </p>
          </div>
        </div>

        {/* Presentation Date (for final project) */}
        {is_project && presentationDate && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Presentation</p>
              <p className="text-lg font-semibold text-slate-900">{formatDate(presentationDate)}</p>
              <p className="text-sm text-slate-600">During scheduled presentation slots</p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {isReleased && (spec_url || submission_url) && (
          <div className="flex gap-3 pt-4 border-t border-slate-200">
            {spec_url && (
              <a
                href={spec_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 ${
                  is_project 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'bg-[#1e3a5f] hover:bg-[#2d5a8f]'
                } text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Specification
              </a>
            )}
            {submission_url && (
              <a
                href={submission_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Submit
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
