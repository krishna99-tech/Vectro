"use client";

import React, { useState } from "react";
import { Users, UserPlus, Shield, MoreVertical, Mail } from "lucide-react";

export default function TeamPage() {
  const [members, setMembers] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@vectorapp.com", role: "Owner", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@vectorapp.com", role: "Admin", status: "Active" },
    { id: 3, name: "Charlie Davis", email: "charlie@vectorapp.com", role: "Manager", status: "Offline" },
    { id: 4, name: "Diana Prince", email: "diana@vectorapp.com", role: "Member", status: "Active" },
  ]);

  const [isInviting, setIsInviting] = useState(false);

  return (
    <div className="min-h-screen p-8 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
              <Users size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Team Management</h1>
              <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">Manage workspace members and roles.</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsInviting(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors shadow-lg"
          >
            <UserPlus size={20} />
            Invite Member
          </button>
        </div>

        {/* Invite Modal Mock */}
        {isInviting && (
          <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 mb-8 max-w-xl">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mesh:text-white mb-4">Invite New Member</h2>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-700 mesh:border-white/10 rounded-xl pl-12 pr-4 py-3 text-zinc-900 dark:text-white mesh:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select className="bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-700 mesh:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white mesh:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Admin" className="text-black dark:text-white">Admin</option>
                <option value="Manager" className="text-black dark:text-white">Manager</option>
                <option value="Member" className="text-black dark:text-white">Member</option>
                <option value="Guest" className="text-black dark:text-white">Guest</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <button onClick={() => setIsInviting(false)} className="px-6 py-2 text-zinc-600 dark:text-zinc-400 mesh:text-white/80 hover:text-zinc-900 dark:hover:text-white font-medium transition-colors">Cancel</button>
              <button onClick={() => setIsInviting(false)} className="px-6 py-2 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">Send Invite</button>
            </div>
          </div>
        )}

        {/* Team List */}
        <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 mesh:border-white/20 bg-zinc-50/50 dark:bg-zinc-900/50 mesh:bg-black/10 text-zinc-500 dark:text-zinc-400 mesh:text-white/70 text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Member</th>
                  <th className="px-6 py-4 font-semibold">Role</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 mesh:divide-white/10">
                {members.map((member) => (
                  <tr key={member.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800 mesh:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 mesh:bg-white/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mesh:text-white font-bold">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-zinc-900 dark:text-white mesh:text-white">{member.name}</div>
                          <div className="text-sm text-zinc-500 dark:text-zinc-400 mesh:text-white/60">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 mesh:text-white/90 font-medium">
                        <Shield size={16} className={member.role === 'Owner' || member.role === 'Admin' ? 'text-blue-500' : 'text-zinc-400'} />
                        {member.role}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        member.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white mesh:hover:text-white transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
