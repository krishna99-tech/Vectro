"use client";

import React, { useState, useEffect } from "react";
import { LayoutDashboard, Users, CheckCircle, Clock } from "lucide-react";
import { useWorkspaceStore } from "@/store/workspaceStore";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function DashboardPage() {
  const { projects, tasks, messages, notes } = useWorkspaceStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const totalProjects = projects.length;
  const completedTasks = tasks.filter(t => t.status === "Done").length;
  const pendingTasks = tasks.length - completedTasks;
  const activeMembers = new Set(messages.map(m => m.sender)).size;

  // Task Data for Bar Chart
  const taskStatusData = [
    { name: 'Todo', count: tasks.filter(t => t.status === 'Todo').length },
    { name: 'In Progress', count: tasks.filter(t => t.status === 'In Progress').length },
    { name: 'Review', count: tasks.filter(t => t.status === 'Review').length },
    { name: 'Done', count: tasks.filter(t => t.status === 'Done').length },
  ];

  // Priority Data for Pie Chart
  const priorityData = [
    { name: 'Low', value: tasks.filter(t => t.priority === 'Low').length },
    { name: 'Medium', value: tasks.filter(t => t.priority === 'Medium').length },
    { name: 'High', value: tasks.filter(t => t.priority === 'High').length },
    { name: 'Critical', value: tasks.filter(t => t.priority === 'Critical').length },
  ];

  return (
    <div className="min-h-screen p-8 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
            <LayoutDashboard size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Workspace Analytics</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">Overview of your team's performance and projects.</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 p-6 rounded-3xl shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 mesh:bg-white/20 flex items-center justify-center">
              <FolderGit2Icon className="text-blue-600 dark:text-blue-400 mesh:text-white" size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mesh:text-white/70">Total Projects</p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mesh:text-white">{totalProjects}</h3>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 p-6 rounded-3xl shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mesh:bg-white/20 flex items-center justify-center">
              <CheckCircle className="text-emerald-600 dark:text-emerald-400 mesh:text-white" size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mesh:text-white/70">Completed Tasks</p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mesh:text-white">{completedTasks}</h3>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 p-6 rounded-3xl shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 mesh:bg-white/20 flex items-center justify-center">
              <Clock className="text-orange-600 dark:text-orange-400 mesh:text-white" size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mesh:text-white/70">Pending Tasks</p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mesh:text-white">{pendingTasks}</h3>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 p-6 rounded-3xl shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 mesh:bg-white/20 flex items-center justify-center">
              <Users className="text-purple-600 dark:text-purple-400 mesh:text-white" size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mesh:text-white/70">Active Members</p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mesh:text-white">{activeMembers || 1}</h3>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mesh:text-white mb-6">Task Progress</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taskStatusData}>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.1)' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mesh:text-white mb-6">Task Priority Distribution</h3>
            <div className="h-72 w-full flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={priorityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {priorityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Inline Icon to avoid import mess if not found
function FolderGit2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />
      <circle cx="13" cy="12" r="2" />
      <path d="M18 19c-2.8 0-5-2.2-5-5v8" />
      <circle cx="20" cy="19" r="2" />
    </svg>
  );
}
