"use client";

import React, { useState } from "react";
import { FolderGit2, Plus, Trash2, Calendar } from "lucide-react";
import { useWorkspaceStore, ProjectStatus } from "@/store/workspaceStore";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

export default function ProjectsPage() {
  const { projects, addProject, deleteProject } = useWorkspaceStore();
  const [isCreating, setIsCreating] = useState(false);
  const [newProject, setNewProject] = useState({ name: "", description: "", status: "Planning" as ProjectStatus });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.name.trim()) return;
    addProject(newProject);
    setNewProject({ name: "", description: "", status: "Planning" });
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen p-8 md:p-12 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
              <FolderGit2 size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Projects</h1>
              <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">Manage your team's workspaces and projects.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors shadow-lg"
          >
            <Plus size={20} />
            New Project
          </button>
        </div>

        {isCreating && (
          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 mb-8">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mesh:text-white mb-4">Create New Project</h2>
            <form onSubmit={handleCreate} className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Project Name" 
                className="bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-700 mesh:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white mesh:text-white placeholder-zinc-500 mesh:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newProject.name}
                onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                autoFocus
              />
              <textarea 
                placeholder="Description" 
                className="bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-700 mesh:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white mesh:text-white placeholder-zinc-500 mesh:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
                value={newProject.description}
                onChange={(e) => setNewProject({...newProject, description: e.target.value})}
              />
              <div className="flex gap-4 justify-end">
                <button type="button" onClick={() => setIsCreating(false)} className="px-6 py-2 text-zinc-600 dark:text-zinc-400 mesh:text-white/80 hover:text-zinc-900 dark:hover:text-white font-medium transition-colors">Cancel</button>
                <button type="submit" className="px-6 py-2 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors">Create</button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="group flex flex-col justify-between bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700 mesh:hover:border-white/40 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 text-zinc-800 dark:text-zinc-200 mesh:text-white text-xs font-semibold rounded-full border border-zinc-200 dark:border-zinc-700 mesh:border-white/10">
                      {project.status}
                    </span>
                    <button 
                      onClick={() => deleteProject(project.id)}
                      className="text-zinc-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mesh:text-white mb-2">{project.name}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/70 line-clamp-3 mb-6">{project.description}</p>
                </div>
                <div className="flex items-center text-xs font-medium text-zinc-500 dark:text-zinc-500 mesh:text-white/50 pt-4 border-t border-zinc-100 dark:border-zinc-800 mesh:border-white/10">
                  <Calendar size={14} className="mr-2" />
                  Created {new Date(project.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full">
              {!isCreating && (
                <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20">
                  <Empty>
                    <EmptyHeader>
                      <EmptyMedia variant="icon" className="text-zinc-400 dark:text-zinc-500 mesh:text-white">
                        <FolderGit2 />
                      </EmptyMedia>
                      <EmptyTitle className="text-zinc-900 dark:text-zinc-100 mesh:text-white">No projects found</EmptyTitle>
                      <EmptyDescription className="text-zinc-600 dark:text-zinc-400 mesh:text-white/70">Create a project to start collaborating with your team.</EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                      <button onClick={() => setIsCreating(true)} className="px-4 py-2 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors shadow-md">
                        Create Project
                      </button>
                    </EmptyContent>
                  </Empty>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
