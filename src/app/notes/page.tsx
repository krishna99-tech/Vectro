"use client";

import React, { useState, useEffect } from "react";
import { FileText, Plus, Trash2, Edit3, Save } from "lucide-react";
import { useWorkspaceStore, Note } from "@/store/workspaceStore";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

export default function NotesPage() {
  const { projects, notes, addNote, updateNote, deleteNote } = useWorkspaceStore();
  const [mounted, setMounted] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    setMounted(true);
    if (projects.length > 0 && !selectedProjectId) {
      setSelectedProjectId(projects[0].id);
    }
  }, [projects, selectedProjectId]);

  const currentNotes = notes.filter(n => n.projectId === selectedProjectId);
  const activeNote = currentNotes.find(n => n.id === activeNoteId);

  useEffect(() => {
    if (activeNote) {
      setEditorContent(activeNote.content);
    } else {
      setEditorContent("");
    }
  }, [activeNoteId, activeNote?.content]);

  const handleCreateNote = () => {
    if (!selectedProjectId) return;
    const title = prompt("Enter note title:");
    if (!title) return;
    
    addNote({
      title,
      content: "# " + title + "\n\nStart writing here...",
      projectId: selectedProjectId,
    });
  };

  const handleSave = () => {
    if (activeNoteId) {
      updateNote(activeNoteId, editorContent);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen p-8 pt-12 pb-32 flex justify-center">
      <div className="w-full max-w-7xl h-[80vh] flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
              <FileText size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Notes & Docs</h1>
              <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">Collaborative documents and team knowledge.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {projects.length > 0 && (
              <select 
                value={selectedProjectId}
                onChange={(e) => {
                  setSelectedProjectId(e.target.value);
                  setActiveNoteId(null);
                }}
                className="bg-white dark:bg-zinc-900 mesh:bg-white/10 border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 text-zinc-900 dark:text-zinc-100 mesh:text-white rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {projects.map(p => (
                  <option key={p.id} value={p.id} className="text-black dark:text-white">{p.name}</option>
                ))}
              </select>
            )}
            
            <button 
              onClick={handleCreateNote}
              disabled={projects.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors shadow-lg disabled:opacity-50"
            >
              <Plus size={20} />
              New Note
            </button>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="flex-1 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 flex items-center justify-center">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon" className="text-zinc-400 dark:text-zinc-500 mesh:text-white">
                  <FileText />
                </EmptyMedia>
                <EmptyTitle className="text-zinc-900 dark:text-zinc-100 mesh:text-white">No active projects</EmptyTitle>
                <EmptyDescription className="text-zinc-600 dark:text-zinc-400 mesh:text-white/70">Create a project first to start adding notes.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        ) : (
          <div className="flex-1 flex gap-6 min-h-0">
            {/* Notes List Sidebar */}
            <div className="w-72 flex-shrink-0 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-3xl shadow-xl flex flex-col overflow-hidden">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 mesh:border-white/20 bg-zinc-50/50 dark:bg-zinc-900/50 mesh:bg-black/10">
                <h2 className="font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Documents</h2>
              </div>
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                {currentNotes.length === 0 ? (
                  <p className="text-sm text-zinc-500 mesh:text-white/60 text-center mt-4">No notes created yet.</p>
                ) : (
                  currentNotes.map(note => (
                    <div 
                      key={note.id}
                      onClick={() => setActiveNoteId(note.id)}
                      className={`group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                        activeNoteId === note.id 
                        ? 'bg-blue-50 dark:bg-blue-900/20 mesh:bg-white/20 border border-blue-200 dark:border-blue-800 mesh:border-white/30'
                        : 'hover:bg-zinc-50 dark:hover:bg-zinc-800 mesh:hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <FileText size={16} className={activeNoteId === note.id ? 'text-blue-600 dark:text-blue-400 mesh:text-white' : 'text-zinc-400 mesh:text-white/50'} />
                        <span className={`text-sm truncate font-medium ${activeNoteId === note.id ? 'text-blue-700 dark:text-blue-300 mesh:text-white' : 'text-zinc-700 dark:text-zinc-300 mesh:text-white/80'}`}>
                          {note.title}
                        </span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); deleteNote(note.id); if(activeNoteId === note.id) setActiveNoteId(null); }}
                        className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-500 transition-opacity"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-3xl shadow-xl flex flex-col overflow-hidden relative">
              {activeNoteId ? (
                <>
                  <div className="flex items-center justify-between px-8 py-4 border-b border-zinc-200 dark:border-zinc-800 mesh:border-white/20 bg-zinc-50/50 dark:bg-zinc-900/50 mesh:bg-black/10">
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mesh:text-white/60">
                      <Edit3 size={16} />
                      Editing Markdown
                    </div>
                    <button 
                      onClick={handleSave}
                      className="flex items-center gap-2 px-4 py-1.5 bg-zinc-900 dark:bg-zinc-100 mesh:bg-white/20 text-white dark:text-zinc-900 mesh:text-white text-sm rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <Save size={14} />
                      Save Changes
                    </button>
                  </div>
                  <textarea
                    value={editorContent}
                    onChange={(e) => setEditorContent(e.target.value)}
                    className="flex-1 w-full p-8 bg-transparent text-zinc-900 dark:text-zinc-100 mesh:text-white resize-none focus:outline-none font-mono text-sm leading-relaxed"
                    placeholder="Start typing in Markdown..."
                  />
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-zinc-500 mesh:text-white/60">
                  <FileText size={48} className="mb-4 opacity-50" />
                  <p>Select a note from the sidebar</p>
                  <p className="text-sm">or create a new one to start writing.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
