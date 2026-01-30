"use client";

import { Snowflake, PenguinGroup } from "@/components/penguin-icons";
import { useState } from "react";

export default function CalendarsPage() {
  const [selectedEvent, setSelectedEvent] = useState<{day: number, month: number, type: string} | null>(null);
  
  // Get current date
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(0); // January (0-indexed)
  const currentYear = 2026;
  
  // Get first day of month and number of days
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  
  // Define all class days with details for the entire semester
  const allClassDetails: {[month: number]: {[day: number]: {time: string, location: string, topic: string}}} = {
    0: { // January
      22: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Welcome to CSCI 1851" },
      27: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Linear classification (Perceptron)" },
      29: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Logistic Regression, introduction to heart disease prediction task" },
    },
    1: { // February
      3: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Linear Regression, introduction to the aging prediction task" },
      5: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Overfitting and regularization" },
      10: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Decision Trees and Random Forests" },
      12: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Gradient Boosting, introduction to Cancer prediction task" },
      19: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Kernels" },
      24: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Kernels" },
      26: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Support Vector Machines (SVMs)" },
    },
    2: { // March
      3: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Kernalized SVMs" },
      5: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Fully connected neural networks" },
      10: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Neural networks continued, predicting from X-rays" },
      12: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Convolutional Neural Networks (CNNs)" },
      17: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Deep architectures, U-Nets" },
      19: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Mid-term examination" },
      31: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Unsupervised learning, introduction to single-cell gene expression" },
    },
    3: { // April
      2: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Autoencoders" },
      7: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Variational Autoencoders" },
      9: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Graph neural networks (GNNs)" },
      14: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "GNNs continued, introduction to drug-based prediction task" },
      16: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Recurrent Neural Networks and LSTMs, predicting from DNA sequences" },
      21: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Attention and Transformers" },
      23: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Transformers contd., single-cell foundation models" },
    },
    4: { // May
      5: { time: "1:00 PM - 2:20 PM", location: "CIT 241", topic: "Final project presentations" },
    }
  };
  
  // Assignment released dates by month
  const allAssignmentReleasedDates: {[month: number]: {[day: number]: string}} = {
    1: { // February
      3: "Homework 1 released",
      13: "Homework 2 released",
    },
    2: { // March
      3: "Homework 3 released",
      10: "Homework 3 released",
      17: "Homework 4 released",
    },
    3: { // April
      7: "Homework 5 released",
      21: "Homework 6 released",
    },
  };
  
  // Assignment due dates by month
  const allAssignmentDueDates: {[month: number]: {[day: number]: string}} = {
    1: { // February
      13: "Homework 1 due",
      27: "Homework 2 due",
    },
    2: { // March
      13: "Homework 3 due",
    },
    3: { // April
      3: "Homework 4 due",
      17: "Homework 5 due",
    },
    4: { // May
      1: "Homework 6 due",
      12: "Final project reports due",
    }
  };
  
  // Exam dates by month
  const allExamDates: {[month: number]: {[day: number]: string}} = {
    2: { // March
      19: "Mid-term examination",
    },
    4: { // May
      8: "Final examination",
    }
  };
  
  // Project presentation dates by month
  const allProjectDates: {[month: number]: {[day: number]: string}} = {
    4: { // May
      5: "Final project presentations",
    }
  };
  
  // Office hours dates by month (every Thursday and Friday)
  const allOfficeHoursDates: {[month: number]: {[day: number]: string}} = {
    0: { // January - Thursdays are 1, 8, 15, 22, 29; Fridays are 2, 9, 16, 23, 30
      22: "Office Hours - Falak & Kyle",
      23: "Office Hours - Ritambhara Singh",
      29: "Office Hours - Falak & Kyle",
      30: "Office Hours - Ritambhara Singh",
    },
    1: { // February - Thursdays are 5, 12, 19, 26; Fridays are 6, 13, 20, 27
      5: "Office Hours - Falak & Kyle",
      6: "Office Hours - Ritambhara Singh",
      12: "Office Hours - Falak & Kyle",
      13: "Office Hours - Ritambhara Singh",
      19: "Office Hours - Falak & Kyle",
      20: "Office Hours - Ritambhara Singh",
      26: "Office Hours - Falak & Kyle",
      27: "Office Hours - Ritambhara Singh",
    },
    2: { // March - Thursdays are 5, 12, 19, 26; Fridays are 6, 13, 20, 27
      5: "Office Hours - Falak & Kyle",
      6: "Office Hours - Ritambhara Singh",
      12: "Office Hours - Falak & Kyle",
      13: "Office Hours - Ritambhara Singh",
      19: "Office Hours - Falak & Kyle",
      20: "Office Hours - Ritambhara Singh",
      26: "Office Hours - Falak & Kyle",
      27: "Office Hours - Ritambhara Singh",
    },
    3: { // April - Thursdays are 2, 9, 16, 23, 30; Fridays are 3, 10, 17, 24
      2: "Office Hours - Falak & Kyle",
      3: "Office Hours - Ritambhara Singh",
      9: "Office Hours - Falak & Kyle",
      10: "Office Hours - Ritambhara Singh",
      16: "Office Hours - Falak & Kyle",
      17: "Office Hours - Ritambhara Singh",
      23: "Office Hours - Falak & Kyle",
      24: "Office Hours - Ritambhara Singh",
      30: "Office Hours - Falak & Kyle",
    },
    4: { // May - Thursdays are 7, 14, 21, 28; Fridays are 1, 8, 15, 22, 29
      1: "Office Hours - Ritambhara Singh",
      7: "Office Hours - Falak & Kyle",
      8: "Office Hours - Ritambhara Singh",
    }
  };
  
  const classDetails = allClassDetails[currentMonth] || {};
  const assignmentReleasedDates = allAssignmentReleasedDates[currentMonth] || {};
  const assignmentDueDates = allAssignmentDueDates[currentMonth] || {};
  const examDates = allExamDates[currentMonth] || {};
  const projectDates = allProjectDates[currentMonth] || {};
  const officeHoursDates = allOfficeHoursDates[currentMonth] || {};
  
  const classDays = Object.keys(classDetails).map(Number);
  const assignmentReleasedDays = Object.keys(assignmentReleasedDates).map(Number);
  const assignmentDueDays = Object.keys(assignmentDueDates).map(Number);
  const examDays = Object.keys(examDates).map(Number);
  const projectDays = Object.keys(projectDates).map(Number);
  const officeHoursDays = Object.keys(officeHoursDates).map(Number);
  
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
  
  const handlePrevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (currentMonth < 4) { // Limit to May (month index 4)
      setCurrentMonth(currentMonth + 1);
    }
  };

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
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevMonth}
                disabled={currentMonth === 0}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-3xl font-bold text-center">
                {monthNames[currentMonth]} {currentYear}
              </h2>
              <button
                onClick={handleNextMonth}
                disabled={currentMonth === 11}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
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
                              onClick={() => setSelectedEvent({day, month: currentMonth, type: 'class'})}
                              className="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded font-medium w-full text-left transition-colors cursor-pointer"
                            >
                              Class
                            </button>
                          )}
                          {day && assignmentReleasedDays.includes(day) && (
                            <button
                              onClick={() => setSelectedEvent({day, month: currentMonth, type: 'released'})}
                              className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded font-medium w-full text-left transition-colors cursor-pointer"
                            >
                              Released
                            </button>
                          )}
                          {day && assignmentDueDays.includes(day) && (
                            <button
                              onClick={() => setSelectedEvent({day, month: currentMonth, type: 'assignment'})}
                              className="text-xs bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded font-medium w-full text-left transition-colors cursor-pointer"
                            >
                              Due
                            </button>
                          )}
                          {day && examDays.includes(day) && (
                            <button
                              onClick={() => setSelectedEvent({day, month: currentMonth, type: 'exam'})}
                              className="text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded font-medium w-full text-left transition-colors cursor-pointer"
                            >
                              Exam
                            </button>
                          )}
                          {day && projectDays.includes(day) && (
                            <button
                              onClick={() => setSelectedEvent({day, month: currentMonth, type: 'project'})}
                              className="text-xs bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded font-medium w-full text-left transition-colors cursor-pointer"
                            >
                              Project
                            </button>
                          )}
                          {day && officeHoursDays.includes(day) && (
                            <button
                              onClick={() => setSelectedEvent({day, month: currentMonth, type: 'office'})}
                              className="text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded font-medium w-full text-left transition-colors cursor-pointer"
                            >
                              Office
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
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">
                    {selectedEvent.type === 'class' ? 'Class Details' : 
                     selectedEvent.type === 'released' ? 'Assignment Released' :
                     selectedEvent.type === 'assignment' ? 'Assignment Due' : 
                     selectedEvent.type === 'project' ? 'Project Presentation' : 
                     selectedEvent.type === 'office' ? 'Office Hours' : 'Exam'}
                  </h3>
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
                    <div className={`w-10 h-10 rounded-full ${
                      selectedEvent.type === 'class' ? 'bg-green-100' : 
                      selectedEvent.type === 'released' ? 'bg-blue-100' :
                      selectedEvent.type === 'assignment' ? 'bg-orange-100' : 
                      selectedEvent.type === 'project' ? 'bg-purple-100' : 
                      selectedEvent.type === 'office' ? 'bg-teal-100' : 'bg-red-100'
                    } flex items-center justify-center flex-shrink-0`}>
                      <svg className={`w-5 h-5 ${
                        selectedEvent.type === 'class' ? 'text-green-600' : 
                        selectedEvent.type === 'released' ? 'text-blue-600' :
                        selectedEvent.type === 'assignment' ? 'text-orange-600' : 
                        selectedEvent.type === 'project' ? 'text-purple-600' : 
                        selectedEvent.type === 'office' ? 'text-teal-600' : 'text-red-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Date</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {monthNames[selectedEvent.month]} {selectedEvent.day}, {currentYear}
                      </p>
                    </div>
                  </div>
                  {selectedEvent.type === 'class' && (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Time</p>
                          <p className="text-lg font-semibold text-slate-900">
                            {allClassDetails[selectedEvent.month]?.[selectedEvent.day]?.time || "TBA"}
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
                            {allClassDetails[selectedEvent.month]?.[selectedEvent.day]?.location || "TBA"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Topic</p>
                          <p className="text-lg font-semibold text-slate-900">
                            {allClassDetails[selectedEvent.month]?.[selectedEvent.day]?.topic || "TBA"}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                  {selectedEvent.type === 'released' && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Assignment Released</p>
                        <p className="text-lg font-semibold text-slate-900">
                          {allAssignmentReleasedDates[selectedEvent.month]?.[selectedEvent.day]}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedEvent.type === 'assignment' && (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Assignment Due</p>
                          <p className="text-lg font-semibold text-slate-900">
                            {allAssignmentDueDates[selectedEvent.month]?.[selectedEvent.day]}
                          </p>
                          <p className="text-sm text-slate-600">5:00 PM EST</p>
                        </div>
                      </div>
                    </>
                  )}
                  {selectedEvent.type === 'project' && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Project Presentation</p>
                        <p className="text-lg font-semibold text-slate-900">
                          {allProjectDates[selectedEvent.month]?.[selectedEvent.day]}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedEvent.type === 'office' && (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Office Hours</p>
                          <p className="text-lg font-semibold text-slate-900">
                            {allOfficeHoursDates[selectedEvent.month]?.[selectedEvent.day]}
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
                            {allOfficeHoursDates[selectedEvent.month]?.[selectedEvent.day]?.includes("Ritambhara Singh") 
                              ? "3:30 PM - 5:30 PM" 
                              : "1:00 PM - 3:00 PM"}
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
                            {allOfficeHoursDates[selectedEvent.month]?.[selectedEvent.day]?.includes("Ritambhara Singh") 
                              ? "DSI Room #313 (164 Angell St., 3rd Floor)" 
                              : "CIT 207"}
                          </p>
                        </div>
                      </div>
                      {allOfficeHoursDates[selectedEvent.month]?.[selectedEvent.day]?.includes("Ritambhara Singh") && (
                        <div className="mt-4">
                          <a 
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3t52pOY3_jj13S7etS8xTD1ZBvdtINoeSCKeeasgPF38MlnB3AKGdwsfn80B7eIdet8qxTp9Hj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book an appointment
                          </a>
                        </div>
                      )}
                    </>
                  )}
                  {selectedEvent.type === 'exam' && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Exam</p>
                        <p className="text-lg font-semibold text-slate-900">
                          {allExamDates[selectedEvent.month]?.[selectedEvent.day]}
                        </p>
                      </div>
                    </div>
                  )}
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
                <div className="w-4 h-4 rounded bg-blue-500"></div>
                <span className="text-slate-600">Assignment Released</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-orange-500"></div>
                <span className="text-slate-600">Assignment Due</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-purple-500"></div>
                <span className="text-slate-600">Project Presentation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-teal-500"></div>
                <span className="text-slate-600">Office Hours</span>
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
      
      {/* Office Hours Section */}
      <section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Office Hours</h2>
          <div className="bg-white rounded-2xl shadow-lg border-2 border-[#1e3a5f]/20 p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900">Ritambhara Singh</h3>
                  <p className="text-slate-600 mt-1">
                    <span className="font-medium">Friday</span> • 3:30 PM - 5:30 PM
                  </p>
                  <p className="text-slate-600 flex items-center gap-2 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    DSI Room #313 (164 Angell St., 3rd Floor)
                  </p>
                  <a 
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3t52pOY3_jj13S7etS8xTD1ZBvdtINoeSCKeeasgPF38MlnB3AKGdwsfn80B7eIdet8qxTp9Hj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book an appointment
                  </a>
                  <p className="text-sm text-slate-500 mt-2 italic">Recurring weekly (in-person or video call)</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900">Falak Pabari & Kyle Yeh</h3>
                  <p className="text-slate-600 mt-1">
                    <span className="font-medium">Thursday</span> • 1:00 PM - 3:00 PM
                  </p>
                  <p className="text-slate-600 flex items-center gap-2 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    CIT 207
                  </p>
                  <p className="text-sm text-slate-500 mt-2 italic">Recurring weekly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
