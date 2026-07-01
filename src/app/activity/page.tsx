"use client";

import React, { useState, useEffect } from "react";
import { Activity, Bell, CheckCircle, FileText, Upload, Trash, Plus, Users, FolderGit2 } from "lucide-react";
import { useWorkspaceStore } from "@/store/workspaceStore";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

export default function ActivityPage() {
  const { activities } = useWorkspaceStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen p-8 pt-12 pb-32 flex justify-center">
      <div className="w-full max-w-4xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
              <Activity size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Activity Log</h1>
              <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">Track all recent actions across your workspaces.</p>
            </div>
          </div>
        </div>

        {activities.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon" className="text-zinc-400 dark:text-zinc-500 mesh:text-white">
                  <Bell />
                </EmptyMedia>
                <EmptyTitle className="text-zinc-900 dark:text-zinc-100 mesh:text-white">No activity yet</EmptyTitle>
                <EmptyDescription className="text-zinc-600 dark:text-zinc-400 mesh:text-white/70">Create projects, tasks, or upload files to see them tracked here.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        ) : (
          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20">
            <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 mesh:border-white/20 ml-6 pb-4">
              {activities.map((activity, index) => {
                let Icon = Bell;
                let bgClass = "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400";
                
                if (activity.action.includes('Project')) {
                  Icon = FolderGit2;
                  bgClass = "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400";
                } else if (activity.action.includes('Task')) {
                  Icon = CheckCircle;
                  bgClass = "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400";
                } else if (activity.action.includes('File')) {
                  Icon = Upload;
                  bgClass = "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400";
                } else if (activity.action.includes('Note')) {
                  Icon = FileText;
                  bgClass = "bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400";
                } else if (activity.action.includes('Delete')) {
                  Icon = Trash;
                  bgClass = "bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400";
                }

                return (
                  <div key={activity.id} className="mb-10 ml-8 relative group">
                    <span className={`absolute -left-[49px] top-1 flex h-10 w-10 items-center justify-center rounded-full ring-8 ring-white dark:ring-zinc-950 mesh:ring-transparent ${bgClass}`}>
                      <Icon size={18} />
                    </span>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-zinc-500 dark:text-zinc-400 mesh:text-white/60">
                        {new Date(activity.createdAt).toLocaleString(undefined, {
                          month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                        })}
                      </div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mesh:text-white">{activity.action}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80">{activity.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
