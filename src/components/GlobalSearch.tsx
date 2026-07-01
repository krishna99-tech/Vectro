"use client";

import React, { useState, useEffect } from "react";
import { Search, FolderGit2, CheckCircle, FileText, X } from "lucide-react";
import { useWorkspaceStore } from "@/store/workspaceStore";
import { useRouter } from "next/navigation";

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { projects, tasks, notes } = useWorkspaceStore();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = projects.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
  const filteredNotes = notes.filter(n => n.title.toLowerCase().includes(query.toLowerCase()));

  const hasResults = query.length > 0 && (filteredProjects.length > 0 || filteredTasks.length > 0 || filteredNotes.length > 0);

  const navigateTo = (path: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(path);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 hover:bg-zinc-200 dark:hover:bg-zinc-700 mesh:hover:bg-white/20 rounded-lg text-sm text-zinc-500 dark:text-zinc-400 mesh:text-white/70 transition-colors border border-zinc-200 dark:border-zinc-700 mesh:border-white/10"
      >
        <Search size={14} />
        <span>Search...</span>
        <kbd className="hidden sm:inline-block ml-2 px-1.5 py-0.5 bg-white dark:bg-zinc-900 mesh:bg-black/20 rounded text-xs font-mono">⌘K</kbd>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div 
            className="w-full max-w-2xl bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 shadow-2xl rounded-2xl overflow-hidden flex flex-col mx-4"
            onClick={e => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 mesh:border-white/20">
              <Search className="text-zinc-400 dark:text-zinc-500 mesh:text-white/60 mr-3" size={20} />
              <input
                autoFocus
                type="text"
                placeholder="Search projects, tasks, notes..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-zinc-900 dark:text-zinc-100 mesh:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 mesh:placeholder:text-white/40 text-lg"
              />
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 mesh:hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query.length === 0 ? (
                <div className="p-8 text-center text-zinc-500 dark:text-zinc-400 mesh:text-white/60">
                  <p>Type to start searching your workspace...</p>
                </div>
              ) : !hasResults ? (
                <div className="p-8 text-center text-zinc-500 dark:text-zinc-400 mesh:text-white/60">
                  <p>No results found for "{query}"</p>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  
                  {filteredProjects.length > 0 && (
                    <div className="mb-2">
                      <div className="px-3 py-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider">Projects</div>
                      {filteredProjects.map(p => (
                        <button key={p.id} onClick={() => navigateTo('/projects')} className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800 mesh:hover:bg-white/10 rounded-lg group transition-colors">
                          <FolderGit2 size={16} className="text-blue-500" />
                          <span className="text-zinc-900 dark:text-zinc-100 mesh:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mesh:group-hover:text-white">{p.name}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {filteredTasks.length > 0 && (
                    <div className="mb-2">
                      <div className="px-3 py-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider">Tasks</div>
                      {filteredTasks.map(t => (
                        <button key={t.id} onClick={() => navigateTo('/tasks')} className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800 mesh:hover:bg-white/10 rounded-lg group transition-colors">
                          <CheckCircle size={16} className="text-emerald-500" />
                          <span className="text-zinc-900 dark:text-zinc-100 mesh:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mesh:group-hover:text-white">{t.title}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {filteredNotes.length > 0 && (
                    <div className="mb-2">
                      <div className="px-3 py-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider">Notes</div>
                      {filteredNotes.map(n => (
                        <button key={n.id} onClick={() => navigateTo('/notes')} className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800 mesh:hover:bg-white/10 rounded-lg group transition-colors">
                          <FileText size={16} className="text-orange-500" />
                          <span className="text-zinc-900 dark:text-zinc-100 mesh:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 mesh:group-hover:text-white">{n.title}</span>
                        </button>
                      ))}
                    </div>
                  )}

                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-4 py-2 border-t border-zinc-200 dark:border-zinc-800 mesh:border-white/20 text-xs text-zinc-500 dark:text-zinc-400 mesh:text-white/50 flex justify-between">
              <span>Use <kbd className="font-mono bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 px-1 rounded">↑</kbd> <kbd className="font-mono bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 px-1 rounded">↓</kbd> to navigate</span>
              <span><kbd className="font-mono bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 px-1 rounded">Enter</kbd> to select</span>
              <span><kbd className="font-mono bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 px-1 rounded">Esc</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
