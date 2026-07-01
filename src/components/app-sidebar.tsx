"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Archive, User, LayoutDashboard, Settings, Plus, FolderGit2, Users, Bell, Search, LogOut, Calendar as CalendarIcon, CalendarClock, ListTodo } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"

// Sample navigation data
const platformItems = [
  { title: "Platform Dashboard", url: "/platform-dashboard", icon: LayoutDashboard },
  { title: "About", url: "/about", icon: User },
  { title: "Services", url: "/services", icon: FolderGit2 },
  { title: "Contact", url: "/contact", icon: Users },
  { title: "Archive", url: "/archive", icon: Archive },
  { title: "Calendar", url: "/calendar", icon: CalendarIcon },
  { title: "Events", url: "/events", icon: CalendarClock },
  { title: "To-Do List", url: "/todos", icon: ListTodo },
]

const accountItems = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
]

const workspaceItems = [
  { title: "Dashboard", url: "/marketing", icon: LayoutDashboard },
  { title: "Projects", url: "/projects", icon: FolderGit2 },
  { title: "Tasks (Kanban)", url: "/tasks", icon: ListTodo },
  { title: "Files", url: "/files", icon: FolderGit2 },
  { title: "Whiteboard", url: "/whiteboard", icon: LayoutDashboard },
  { title: "Notes", url: "/notes", icon: Archive },
  { title: "Workspace Calendar", url: "/workspace-calendar", icon: CalendarIcon },
  { title: "Team Chat", url: "/chat", icon: Users },
  { title: "Meetings", url: "/meetings", icon: CalendarClock },
  { title: "Team Members", url: "/team", icon: User },
  { title: "Activity Log", url: "/activity", icon: Bell },
  { title: "Vector Assets", url: "/assets", icon: Archive },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  // Do not show the sidebar on the main home/dashboard page (root)
  if (pathname === "/") {
    return null
  }

  return (
    <Sidebar collapsible="icon" {...props} className="border-r border-sidebar-border shadow-lg">
      <SidebarHeader className="pt-4 pb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
                <LayoutDashboard className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold text-sidebar-foreground">Vector App</span>
                <span className="text-xs text-sidebar-foreground/70">Pro Workspace</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <div className="px-2 py-2">
          <div className="relative">
            <Search className="absolute left-2 top-1.5 h-4 w-4 text-sidebar-foreground/50" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-sidebar-accent border-none rounded-md pl-8 pr-3 py-1.5 text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/50 outline-none focus:ring-2 focus:ring-sidebar-ring transition-shadow"
            />
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            {platformItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton render={<Link href={item.url} />} tooltip={item.title}>
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between items-center w-full">
            Team Workspace
            <button className="p-0.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors">
              <Plus className="size-3" />
            </button>
          </SidebarGroupLabel>
          <SidebarMenu>
            {workspaceItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton render={<Link href={item.url} />} tooltip={item.title}>
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        
        <SidebarSeparator />
        
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarMenu>
            {accountItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton render={<Link href={item.url} />} tooltip={item.title}>
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton render={<Link href="#" />} tooltip="Logout" className="text-red-600 dark:text-red-400 mesh:text-red-400 hover:text-red-700 dark:hover:text-red-300 mesh:hover:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/20 mesh:hover:bg-red-500/20">
              <LogOut className="text-red-600 dark:text-red-400 mesh:text-red-400" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
