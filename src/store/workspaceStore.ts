import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TaskStatus = 'Todo' | 'In Progress' | 'Review' | 'Testing' | 'Done';
export type TaskPriority = 'Low' | 'Medium' | 'High' | 'Critical';
export type ProjectStatus = 'Planning' | 'Active' | 'On Hold' | 'Completed' | 'Archived';

export interface Message {
  id: string;
  text: string;
  sender: string;
  channel: string;
  createdAt: number;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  projectId: string;
  createdAt: number;
}

export interface WorkspaceFile {
  id: string;
  name: string;
  size: string;
  type: string;
  projectId: string;
  createdAt: number;
}

export interface Activity {
  id: string;
  action: string;
  details: string;
  createdAt: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  projectId: string;
  createdAt: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  createdAt: number;
}

interface WorkspaceState {
  projects: Project[];
  tasks: Task[];
  messages: Message[];
  notes: Note[];
  files: WorkspaceFile[];
  activities: Activity[];
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  deleteProject: (id: string) => void;
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;
  deleteTask: (id: string) => void;
  addMessage: (message: Omit<Message, 'id' | 'createdAt'>) => void;
  addNote: (note: Omit<Note, 'id' | 'createdAt'>) => void;
  updateNote: (noteId: string, content: string) => void;
  deleteNote: (id: string) => void;
  addFile: (file: Omit<WorkspaceFile, 'id' | 'createdAt'>) => void;
  deleteFile: (id: string) => void;
  logActivity: (activity: Omit<Activity, 'id' | 'createdAt'>) => void;
}

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set) => ({
      projects: [],
      tasks: [],
      messages: [],
      notes: [],
      files: [],
      activities: [],
      addProject: (project) =>
        set((state) => ({
          projects: [
            ...state.projects,
            { ...project, id: crypto.randomUUID(), createdAt: Date.now() },
          ],
          activities: [
            { id: crypto.randomUUID(), action: 'Project Created', details: `Created project: ${project.name}`, createdAt: Date.now() },
            ...state.activities,
          ].slice(0, 50),
        })),
      deleteProject: (id) =>
        set((state) => {
          const project = state.projects.find(p => p.id === id);
          return {
            projects: state.projects.filter((p) => p.id !== id),
            tasks: state.tasks.filter((t) => t.projectId !== id),
            notes: state.notes.filter((n) => n.projectId !== id),
            files: state.files.filter((f) => f.projectId !== id),
            activities: [
              { id: crypto.randomUUID(), action: 'Project Deleted', details: `Deleted project: ${project?.name || id}`, createdAt: Date.now() },
              ...state.activities,
            ].slice(0, 50),
          };
        }),
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { ...task, id: crypto.randomUUID(), createdAt: Date.now() },
          ],
        })),
      updateTaskStatus: (taskId, status) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === taskId ? { ...t, status } : t
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),
      addMessage: (message) =>
        set((state) => ({
          messages: [
            ...state.messages,
            { ...message, id: crypto.randomUUID(), createdAt: Date.now() },
          ],
        })),
      addNote: (note) =>
        set((state) => ({
          notes: [
            ...state.notes,
            { ...note, id: crypto.randomUUID(), createdAt: Date.now() },
          ],
        })),
      updateNote: (noteId, content) =>
        set((state) => ({
          notes: state.notes.map((n) =>
            n.id === noteId ? { ...n, content } : n
          ),
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((n) => n.id !== id),
        })),
      addFile: (file) =>
        set((state) => ({
          files: [
            ...state.files,
            { ...file, id: crypto.randomUUID(), createdAt: Date.now() },
          ],
          activities: [
            { id: crypto.randomUUID(), action: 'File Uploaded', details: `Uploaded file: ${file.name}`, createdAt: Date.now() },
            ...state.activities,
          ].slice(0, 50),
        })),
      deleteFile: (id) =>
        set((state) => ({
          files: state.files.filter((f) => f.id !== id),
        })),
      logActivity: (activity) =>
        set((state) => ({
          activities: [
            { ...activity, id: crypto.randomUUID(), createdAt: Date.now() },
            ...state.activities,
          ].slice(0, 50),
        })),
    }),
    {
      name: 'team-workspace-storage',
    }
  )
);
