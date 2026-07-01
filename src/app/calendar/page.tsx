"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays } from "lucide-react"

export default function PlatformCalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen p-8 md:p-12 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-4xl text-center mb-12">
        <div className="inline-flex p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg mb-6">
          <CalendarDays size={32} className="text-blue-600 dark:text-blue-400 mesh:text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mesh:text-white tracking-tight">Platform Calendar</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-4 max-w-2xl mx-auto">
          Manage your schedule and view upcoming events across the year.
        </p>
      </div>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg p-4 w-full text-zinc-900 dark:text-zinc-100 mesh:text-white"
        numberOfMonths={18}
        pagedNavigation
        disableNavigation
        defaultMonth={new Date(new Date().getFullYear(), 0)}
        classNames={{
          months: "flex flex-wrap justify-center gap-8 w-full",
          month: "flex flex-col gap-4 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 shadow-xl",
          today: "bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black font-bold rounded-md shadow-md",
        }}
      />
    </div>
  )
}
