"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, Clock, CheckCircle2 } from "lucide-react"
import { useWorkspaceStore } from "@/store/workspaceStore"

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const { tasks } = useWorkspaceStore()

  // Generate some mock events for the UI
  const mockEvents = [
    { title: "Team Weekly Sync", time: "10:00 AM", type: "meeting" },
    { title: "Design Review", time: "2:00 PM", type: "meeting" },
  ]

  const selectedDateTasks = tasks.filter(t => {
    const taskDate = new Date(t.createdAt);
    return date && taskDate.getDate() === date.getDate() && taskDate.getMonth() === date.getMonth();
  });

  return (
    <div className="min-h-screen p-8 md:p-12 pt-12 pb-32 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        
        {/* Left Side - Calendar */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
              <CalendarDays size={32} className="text-blue-600 dark:text-blue-400 mesh:text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white tracking-tight">Calendar</h1>
              <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1 max-w-2xl">
                Manage your schedule and view upcoming tasks.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 shadow-xl flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg p-4 text-zinc-900 dark:text-zinc-100 mesh:text-white w-full max-w-md mx-auto"
              classNames={{
                months: "flex flex-wrap justify-center w-full",
                month: "flex flex-col gap-4 w-full",
                today: "bg-blue-100 dark:bg-blue-900/30 mesh:bg-white/20 text-blue-900 dark:text-blue-100 mesh:text-white font-bold rounded-md shadow-sm",
                selected: "bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black font-bold rounded-md shadow-md",
              }}
            />
          </div>
        </div>

        {/* Right Side - Events & Tasks */}
        <div className="w-full lg:flex-1 flex flex-col gap-6 pt-2">
          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 shadow-xl h-fit">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mesh:text-white mb-6 border-b border-zinc-200 dark:border-zinc-800 mesh:border-white/20 pb-4">
              {date ? date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' }) : "Select a date"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Schedule Column */}
              <div>
                <h3 className="text-sm font-bold text-zinc-500 mesh:text-white/60 uppercase tracking-wider mb-3">Schedule</h3>
                {mockEvents.map((event, i) => (
                  <div key={i} className="flex items-start gap-4 mb-4">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mesh:text-white pt-1">{event.time}</div>
                    <div className="flex-1 bg-zinc-50 dark:bg-zinc-800 mesh:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-zinc-700 mesh:border-white/10">
                      <div className="font-semibold text-zinc-900 dark:text-white mesh:text-white text-sm">{event.title}</div>
                      <div className="text-xs text-zinc-500 mesh:text-white/60 mt-1 flex items-center gap-1">
                        <Clock size={12} /> 1 hour
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-sm font-bold text-zinc-500 mesh:text-white/60 uppercase tracking-wider mb-3">Tasks Created on this Date</h3>
                {selectedDateTasks.length === 0 ? (
                  <p className="text-sm text-zinc-500 mesh:text-white/60 italic">No tasks found for this day.</p>
                ) : (
                  selectedDateTasks.map(task => (
                    <div key={task.id} className="flex items-start gap-3 mb-3">
                      <CheckCircle2 size={16} className={task.status === 'Done' ? 'text-emerald-500' : 'text-zinc-400'} />
                      <div className={`text-sm ${task.status === 'Done' ? 'text-zinc-500 line-through' : 'text-zinc-900 dark:text-zinc-100 mesh:text-white font-medium'}`}>
                        {task.title}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
