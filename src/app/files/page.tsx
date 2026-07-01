"use client";

import React, { useState, useEffect } from "react";
import { Folder, File, Upload, Trash2, HardDrive, FileText, FileImage, FileAudio, FileVideo } from "lucide-react";
import { useWorkspaceStore } from "@/store/workspaceStore";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

export default function FilesPage() {
  const { projects, files, addFile, deleteFile } = useWorkspaceStore();
  const [mounted, setMounted] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    if (projects.length > 0 && !selectedProjectId) {
      setSelectedProjectId(projects[0].id);
    }
  }, [projects, selectedProjectId]);

  const handleUploadMock = () => {
    if (!selectedProjectId) return;
    const name = prompt("Enter file name (e.g. document.pdf, image.png):");
    if (!name) return;
    
    let type = "document";
    if (name.endsWith(".png") || name.endsWith(".jpg")) type = "image";
    if (name.endsWith(".mp4")) type = "video";
    if (name.endsWith(".mp3")) type = "audio";

    addFile({
      name,
      size: (Math.random() * 10 + 1).toFixed(2) + " MB",
      type,
      projectId: selectedProjectId,
    });
  };

  const currentFiles = files.filter(f => f.projectId === selectedProjectId);
  const usedStorage = currentFiles.reduce((acc, curr) => acc + parseFloat(curr.size), 0).toFixed(1);

  if (!mounted) return null;

  return (
    <div className="min-h-screen p-8 pt-12 pb-32 flex justify-center">
      <div className="w-full max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
              <Folder size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Files & Storage</h1>
              <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">Manage project assets and documents.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {projects.length > 0 && (
              <select 
                value={selectedProjectId}
                onChange={(e) => setSelectedProjectId(e.target.value)}
                className="bg-white dark:bg-zinc-900 mesh:bg-white/10 border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 text-zinc-900 dark:text-zinc-100 mesh:text-white rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {projects.map(p => (
                  <option key={p.id} value={p.id} className="text-black dark:text-white">{p.name}</option>
                ))}
              </select>
            )}
            
            <button 
              onClick={handleUploadMock}
              disabled={projects.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors shadow-lg disabled:opacity-50"
            >
              <Upload size={20} />
              Upload File
            </button>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon" className="text-zinc-400 dark:text-zinc-500 mesh:text-white">
                  <Folder />
                </EmptyMedia>
                <EmptyTitle className="text-zinc-900 dark:text-zinc-100 mesh:text-white">No active projects</EmptyTitle>
                <EmptyDescription className="text-zinc-600 dark:text-zinc-400 mesh:text-white/70">Create a project first to start uploading files.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Storage Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <HardDrive className="text-blue-500" size={24} />
                  <h3 className="font-bold text-zinc-900 dark:text-white mesh:text-white">Storage</h3>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 mesh:bg-white/10 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${Math.min((parseFloat(usedStorage) / 50) * 100, 100)}%` }}></div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mesh:text-white/70">{usedStorage} MB / 50 MB Used</p>
                
                <div className="mt-8">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Folders</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-sm font-medium text-blue-600 dark:text-blue-400 mesh:text-white bg-blue-50 dark:bg-blue-900/20 mesh:bg-white/10 p-2 rounded-lg cursor-pointer">
                      <Folder size={16} /> All Files
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 mesh:text-white/70 hover:bg-zinc-50 dark:hover:bg-zinc-800 mesh:hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors">
                      <FileImage size={16} /> Images
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 mesh:text-white/70 hover:bg-zinc-50 dark:hover:bg-zinc-800 mesh:hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors">
                      <FileText size={16} /> Documents
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* File Grid */}
            <div className="flex-1 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 shadow-xl min-h-[400px]">
              {currentFiles.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-500 mesh:text-white/60 p-12">
                  <Upload size={48} className="mb-4 opacity-50" />
                  <p>No files uploaded yet.</p>
                  <p className="text-sm">Click the Upload button to add files to this project.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentFiles.map(file => {
                    let Icon = File;
                    let colorClass = "text-zinc-500";
                    if (file.type === 'image') { Icon = FileImage; colorClass = "text-blue-500"; }
                    if (file.type === 'video') { Icon = FileVideo; colorClass = "text-purple-500"; }
                    if (file.type === 'document') { Icon = FileText; colorClass = "text-emerald-500"; }
                    if (file.type === 'audio') { Icon = FileAudio; colorClass = "text-orange-500"; }

                    return (
                      <div key={file.id} className="group relative bg-zinc-50 dark:bg-zinc-800 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-700 mesh:border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-blue-300 dark:hover:border-blue-700 mesh:hover:border-white/30 transition-colors cursor-pointer">
                        <Icon size={40} className={colorClass} />
                        <div className="text-center w-full">
                          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mesh:text-white truncate">{file.name}</p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mesh:text-white/60">{file.size}</p>
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); deleteFile(file.id); }}
                          className="absolute top-2 right-2 p-1.5 bg-red-100 dark:bg-red-900/50 mesh:bg-red-500/20 text-red-600 dark:text-red-400 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity hover:bg-red-200"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
