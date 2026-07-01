"use client";

import React from "react";
import { CalendarClock, MapPin, Users, ArrowRight } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Global Tech Summit 2026",
      date: "August 15, 2026",
      time: "9:00 AM - 5:00 PM EST",
      location: "Virtual & San Francisco, CA",
      type: "Conference",
      attendees: 1250,
      description: "Join industry leaders to discuss the future of AI and collaborative workspaces.",
      image: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quarterly Town Hall",
      date: "September 2, 2026",
      time: "1:00 PM - 2:30 PM EST",
      location: "Main Auditorium (Hybrid)",
      type: "Internal",
      attendees: 300,
      description: "Company-wide meeting to review Q3 progress and outline our Q4 roadmap.",
      image: "bg-gradient-to-br from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      title: "Frontend Engineering Workshop",
      date: "September 18, 2026",
      time: "10:00 AM - 12:00 PM EST",
      location: "Zoom (Link provided upon RSVP)",
      type: "Workshop",
      attendees: 45,
      description: "Deep dive into advanced React patterns, Zustand state management, and modern CSS architecture.",
      image: "bg-gradient-to-br from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen p-8 md:p-12 flex justify-center pb-32">
      <div className="w-full max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
              <CalendarClock size={32} className="text-blue-600 dark:text-blue-400 mesh:text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mesh:text-white tracking-tight">Upcoming Events</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1 max-w-2xl">
                Discover and register for upcoming conferences, town halls, and workshops.
              </p>
            </div>
          </div>
        </div>

        {/* Event List */}
        <div className="flex flex-col gap-6">
          {events.map((event) => (
            <div key={event.id} className="group bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl rounded-3xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 shadow-xl overflow-hidden flex flex-col md:flex-row transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
              
              {/* Image Banner */}
              <div className={`w-full md:w-64 h-48 md:h-auto ${event.image} flex flex-col justify-center items-center text-white p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 mesh:bg-white/10"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl font-black">{event.date.split(' ')[1].replace(',', '')}</div>
                  <div className="text-xl font-bold uppercase tracking-wider">{event.date.split(' ')[0]}</div>
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/20 text-zinc-600 dark:text-zinc-300 mesh:text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      {event.type}
                    </span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mesh:text-blue-200">
                      {event.time}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mesh:text-white mb-3">
                    {event.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/70 mb-6 max-w-3xl leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 mesh:border-white/10">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mesh:text-white/60 font-medium">
                      <MapPin size={16} />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mesh:text-white/60 font-medium">
                      <Users size={16} />
                      {event.attendees} Attending
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-white mesh:bg-white text-white dark:text-black mesh:text-black font-bold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 mesh:hover:bg-white/90 transition-colors">
                    RSVP Now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
