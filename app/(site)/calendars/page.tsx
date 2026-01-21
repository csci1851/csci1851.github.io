"use client";

import { Snowflake, PenguinGroup } from "@/components/penguin-icons";
import { useState } from "react";

export default function CalendarsPage() {
  const [selectedEvent, setSelectedEvent] = useState<{day: number, type: string} | null>(null);
  
  // Get current date
  const today = new Date();
  const currentMonth = 0; // January (0-indexed)
  const currentYear = 2026;
  
  // Get first day of month and number of days
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Define class days with details (Tuesdays and Thursdays starting from Jan 22, 2026)
  const classDetails: {[key: number]: {time: string, location: string}} = {
    22: { time: "1:00 PM - 2:20 PM", location: "CIT Center (Thomas Watson CIT) 241" }, // Jan 22 (Thu)
    27: { time: "1:00 PM - 2:20 PM", location: "CIT Center (Thomas Watson CIT) 241" }, // Jan 27 (Tue)
    29: { time: "1:00 PM - 2:20 PM", location: "CIT Center (Thomas Watson CIT) 241" }, // Jan 29 (Thu)
  };
  
  const classDays = Object.keys(classDetails).map(Number);
  
  // Generate calendar days
  const calendarDays = [];
  
  // Add empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="relative pb-6 border-b-2 border-blue-100">
        <Snowflake className="absolute -top-2 -right-2 w-14 h-14 text-blue-200/30" />
        <div className="flex items-center gap-4 mb-4">
          <PenguinGroup className="w-12 h-12 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Calendar</h1>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed">
          Complete course schedule including lectures, office hours, assignment due dates, and exam dates.
        </p>
      </div>

      {/* Calendar */}
      <section>
        <div className="max-w-4xl mx-auto">
          {/* Calendar Header */}
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] rounded-t-2xl p-6 text-white">
            <h2 className="text-3xl font-bold text-center">
              {monthNames[currentMonth]} {currentYear}
            </h2>
          </div>
          
          {/* Calendar Grid */}
          <div className="bg-white rounded-b-2xl shadow-lg border-2 border-[#1e3a5f]/20 overflow-hidden">
            {/* Day Headers */}
            <div className="grid grid-cols-7 bg-[#1e3a5f]/10 border-b-2 border-[#1e3a5f]/20">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="p-4 text-center font-bold text-slate-700 border-r border-[#1e3a5f]/10 last:border-r-0"
                >
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Days */}
            <div className="grid grid-cols-7">
              {calendarDays.map((day, index) => {
                const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
                const hasClass = day && classDays.includes(day);
                return (
                  <div
                    key={index}
                    className={`min-h-24 p-3 border-r border-b border-slate-200 last:border-r-0 ${
                      day ? "bg-white hover:bg-[#1e3a5f]/5 transition-colors" : "bg-slate-50"
                    }`}
                  >
                    {day && (
                      <div className="flex flex-col h-full">
                        <span
                          className={`text-sm font-semibold mb-2 ${
                            isToday
                              ? "bg-[#1e3a5f] text-white w-7 h-7 rounded-full flex items-center justify-center"
                              : "text-slate-700"
                          }`}
                        >
                          {day}
                        </span>
                        {/* Events */}
                        <div className="flex-1 space-y-1">
                          {hasClass && (
                            <button
                              onClick={() => setSelectedEvent({day, type: 'class'})}
                              className="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded font-medium w-full text-left transition-colors cursor-pointer"
                            >
                              Class
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Event Details Modal */}
          {selectedEvent && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedEvent(null)}>
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">Class Details</h3>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Date</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {monthNames[currentMonth]} {selectedEvent.day}, {currentYear}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Time</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {classDetails[selectedEvent.day]?.time || "TBA"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Location</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {classDetails[selectedEvent.day]?.location || "TBA"}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="mt-6 w-full bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          
          {/* Legend */}
          <div className="mt-6 p-4 bg-[#1e3a5f]/10 rounded-lg border border-[#1e3a5f]/20">
            <h3 className="font-semibold text-slate-700 mb-2">Legend:</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#1e3a5f]"></div>
                <span className="text-slate-600">Today</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500"></div>
                <span className="text-slate-600">Lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-orange-500"></div>
                <span className="text-slate-600">Assignment Due</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-500"></div>
                <span className="text-slate-600">Exam</span>
              </div>
            </div>
          </div>
          
          {/* Note */}
          <div className="mt-4 text-center">
            <p className="text-sm text-slate-500 italic">
              Classes meet every Tuesday and Thursday starting January 22nd, 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
