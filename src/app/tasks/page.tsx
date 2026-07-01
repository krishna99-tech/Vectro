"use client";

import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { ListTodo, Plus } from "lucide-react";
import { useWorkspaceStore, TaskStatus, TaskPriority } from "@/store/workspaceStore";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

const COLUMNS: TaskStatus[] = ["Todo", "In Progress", "Review", "Testing", "Done"];

export default function TasksPage() {
  const { projects, tasks, addTask, updateTaskStatus, deleteTask } = useWorkspaceStore();
  const [mounted, setMounted] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [isCreating, setIsCreating] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "", priority: "Medium" as TaskPriority });

  useEffect(() => {
    setMounted(true);
    if (projects.length > 0 && !selectedProjectId) {
      setSelectedProjectId(projects[0].id);
    }
  }, [projects, selectedProjectId]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { draggableId, destination } = result;
    const newStatus = destination.droppableId as TaskStatus;
    updateTaskStatus(draggableId, newStatus);
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title.trim() || !selectedProjectId) return;
    
    addTask({
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
      status: "Todo",
      projectId: selectedProjectId,
    });
    
    setNewTask({ title: "", description: "", priority: "Medium" });
    setIsCreating(false);
  };

  if (!mounted) return null;

  const currentTasks = tasks.filter(t => t.projectId === selectedProjectId);

  return (
    <div className="min-h-screen p-8 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
              <ListTodo size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Tasks</h1>
              <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">Kanban board for task tracking.</p>
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
              onClick={() => setIsCreating(true)}
              disabled={projects.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors shadow-lg disabled:opacity-50"
            >
              <Plus size={20} />
              New Task
            </button>
          </div>
        </div>

        {projects.length === 0 ? (
           <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20">
           <Empty>
             <EmptyHeader>
               <EmptyMedia variant="icon" className="text-zinc-400 dark:text-zinc-500 mesh:text-white">
                 <ListTodo />
               </EmptyMedia>
               <EmptyTitle className="text-zinc-900 dark:text-zinc-100 mesh:text-white">No active projects</EmptyTitle>
               <EmptyDescription className="text-zinc-600 dark:text-zinc-400 mesh:text-white/70">Create a project first to start adding tasks.</EmptyDescription>
             </EmptyHeader>
           </Empty>
         </div>
        ) : (
          <>
            {isCreating && (
              <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 mb-8">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mesh:text-white mb-4">Create New Task</h2>
                <form onSubmit={handleCreateTask} className="flex flex-col gap-4">
                  <input 
                    type="text" 
                    placeholder="Task Title" 
                    className="bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-700 mesh:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white mesh:text-white placeholder-zinc-500 mesh:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newTask.title}
                    onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                    autoFocus
                  />
                  <textarea 
                    placeholder="Description" 
                    className="bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-700 mesh:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white mesh:text-white placeholder-zinc-500 mesh:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20"
                    value={newTask.description}
                    onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                  />
                  <div className="flex justify-between items-center">
                    <select 
                      value={newTask.priority}
                      onChange={(e) => setNewTask({...newTask, priority: e.target.value as TaskPriority})}
                      className="bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-700 mesh:border-white/10 rounded-xl px-4 py-2 text-zinc-900 dark:text-white mesh:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Low" className="text-black dark:text-white">Low Priority</option>
                      <option value="Medium" className="text-black dark:text-white">Medium Priority</option>
                      <option value="High" className="text-black dark:text-white">High Priority</option>
                      <option value="Critical" className="text-black dark:text-white">Critical</option>
                    </select>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setIsCreating(false)} className="px-6 py-2 text-zinc-600 dark:text-zinc-400 mesh:text-white/80 hover:text-zinc-900 dark:hover:text-white font-medium transition-colors">Cancel</button>
                      <button type="submit" className="px-6 py-2 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors">Add Task</button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            <DragDropContext onDragEnd={onDragEnd}>
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
                {COLUMNS.map((col) => {
                  const colTasks = currentTasks.filter(t => t.status === col);
                  return (
                    <div key={col} className="min-w-[300px] w-[300px] bg-zinc-100/50 dark:bg-zinc-900/50 mesh:bg-black/20 rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 mesh:border-white/10 shrink-0 snap-center">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mesh:text-white mb-4 flex justify-between items-center">
                        {col}
                        <span className="bg-zinc-200 dark:bg-zinc-800 mesh:bg-white/10 text-xs px-2 py-1 rounded-full">{colTasks.length}</span>
                      </h3>
                      
                      <Droppable droppableId={col}>
                        {(provided, snapshot) => (
                          <div 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`min-h-[200px] rounded-xl transition-colors ${snapshot.isDraggingOver ? 'bg-blue-50/50 dark:bg-blue-900/10 mesh:bg-white/5' : ''}`}
                          >
                            {colTasks.map((task, index) => (
                              <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`bg-white dark:bg-zinc-800 mesh:bg-white/10 mesh:backdrop-blur-md p-4 mb-3 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 mesh:border-white/10 ${snapshot.isDragging ? 'shadow-xl scale-[1.02] rotate-1 cursor-grabbing' : 'hover:border-zinc-300 dark:hover:border-zinc-600 mesh:hover:border-white/30 cursor-grab'}`}
                                  >
                                    <div className="flex justify-between items-start mb-2">
                                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                                        task.priority === 'Critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                        task.priority === 'High' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                        task.priority === 'Medium' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                        'bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300'
                                      }`}>
                                        {task.priority}
                                      </span>
                                    </div>
                                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mesh:text-white text-sm mb-1">{task.title}</h4>
                                    {task.description && (
                                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mesh:text-white/60 line-clamp-2">{task.description}</p>
                                    )}
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  )
                })}
              </div>
            </DragDropContext>
          </>
        )}
      </div>
    </div>
  );
}
