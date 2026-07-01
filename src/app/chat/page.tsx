"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, Hash, User, MessageSquare } from "lucide-react";
import { useWorkspaceStore } from "@/store/workspaceStore";

const CHANNELS = ["general", "development", "design", "marketing"];
const CURRENT_USER = "You";

export default function ChatPage() {
  const { messages, addMessage } = useWorkspaceStore();
  const [mounted, setMounted] = useState(false);
  const [activeChannel, setActiveChannel] = useState("general");
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeChannel]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    addMessage({
      text: inputText,
      sender: CURRENT_USER,
      channel: activeChannel,
    });
    
    setInputText("");
  };

  if (!mounted) return null;

  const currentMessages = messages.filter(m => m.channel === activeChannel);

  return (
    <div className="min-h-screen p-8 pt-12 pb-32 flex justify-center">
      <div className="w-full max-w-6xl h-[80vh] flex gap-6">
        
        {/* Sidebar for Channels */}
        <div className="w-64 flex-shrink-0 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-3xl p-6 shadow-xl flex flex-col">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mesh:text-white mb-6 flex items-center gap-2">
            <MessageSquare size={20} />
            Channels
          </h2>
          <div className="flex flex-col gap-2">
            {CHANNELS.map(channel => (
              <button
                key={channel}
                onClick={() => setActiveChannel(channel)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                  activeChannel === channel 
                  ? 'bg-blue-50 dark:bg-blue-900/20 mesh:bg-white/20 text-blue-600 dark:text-blue-400 mesh:text-white border border-blue-200 dark:border-blue-800 mesh:border-white/30'
                  : 'text-zinc-600 dark:text-zinc-400 mesh:text-white/70 hover:bg-zinc-50 dark:hover:bg-zinc-800 mesh:hover:bg-white/5 border border-transparent'
                }`}
              >
                <Hash size={18} className={activeChannel === channel ? 'text-blue-600 dark:text-blue-400 mesh:text-white' : 'text-zinc-400 mesh:text-white/50'} />
                {channel}
              </button>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-3xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-8 py-6 border-b border-zinc-200 dark:border-zinc-800 mesh:border-white/20 bg-zinc-50/50 dark:bg-zinc-900/50 mesh:bg-black/10">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white flex items-center gap-2">
              <Hash size={24} className="text-zinc-400" />
              {activeChannel}
            </h1>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
            {currentMessages.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-zinc-500 mesh:text-white/60">
                <MessageSquare size={48} className="mb-4 opacity-50" />
                <p>No messages in #{activeChannel} yet.</p>
                <p className="text-sm">Be the first to say hello!</p>
              </div>
            ) : (
              currentMessages.map((msg, i) => {
                const isMe = msg.sender === CURRENT_USER;
                return (
                  <div key={msg.id} className={`flex gap-4 max-w-[80%] ${isMe ? 'self-end flex-row-reverse' : 'self-start'}`}>
                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 mesh:bg-white/20 flex items-center justify-center flex-shrink-0">
                      {isMe ? <User size={20} className="text-zinc-600 dark:text-zinc-400 mesh:text-white" /> : <div className="font-bold text-zinc-600 dark:text-zinc-400 mesh:text-white">{msg.sender.charAt(0)}</div>}
                    </div>
                    <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mesh:text-white">{msg.sender}</span>
                        <span className="text-xs text-zinc-500 mesh:text-white/60">{new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      </div>
                      <div className={`px-5 py-3 rounded-2xl text-sm ${
                        isMe 
                        ? 'bg-blue-600 mesh:bg-white text-white mesh:text-blue-900 rounded-tr-none' 
                        : 'bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 text-zinc-900 dark:text-zinc-100 mesh:text-white rounded-tl-none border border-zinc-200 dark:border-zinc-700 mesh:border-white/10'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 mesh:border-white/20 bg-zinc-50/50 dark:bg-zinc-900/50 mesh:bg-black/10">
            <form onSubmit={handleSend} className="relative">
              <input
                type="text"
                placeholder={`Message #${activeChannel}...`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full bg-white dark:bg-zinc-800 mesh:bg-white/10 border border-zinc-300 dark:border-zinc-700 mesh:border-white/20 rounded-full pl-6 pr-14 py-4 text-zinc-900 dark:text-white mesh:text-white placeholder-zinc-500 mesh:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <button 
                type="submit"
                disabled={!inputText.trim()}
                className="absolute right-2 top-2 bottom-2 aspect-square bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} className="ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
