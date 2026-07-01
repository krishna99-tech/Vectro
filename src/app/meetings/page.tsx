"use client";

import React, { useState } from "react";
import { Video, Mic, MicOff, VideoOff, PhoneMissed, Users, MonitorUp, Settings, MessageSquare, Hand } from "lucide-react";

export default function MeetingsPage() {
  const [inMeeting, setInMeeting] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);

  if (!inMeeting) {
    return (
      <div className="min-h-screen p-8 pt-12 pb-32 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-3xl p-12 shadow-xl flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 mesh:bg-white/20 rounded-full flex items-center justify-center mb-6">
            <Video size={48} className="text-blue-600 dark:text-blue-400 mesh:text-white" />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white mb-4">Team Video Meetings</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 max-w-lg mb-8">
            Connect with your team instantly with high-quality video, screen sharing, and collaborative whiteboards.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => setInMeeting(true)}
              className="px-8 py-3 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-xl font-bold hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors shadow-lg flex items-center gap-2"
            >
              <Video size={20} />
              Start New Meeting
            </button>
            <button className="px-8 py-3 bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 text-zinc-900 dark:text-zinc-100 mesh:text-white border border-zinc-200 dark:border-zinc-700 mesh:border-white/20 rounded-xl font-bold hover:bg-zinc-200 dark:hover:bg-zinc-700 mesh:hover:bg-white/20 transition-colors flex items-center gap-2">
              <Users size={20} />
              Join with Code
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col">
      {/* Meeting Header */}
      <div className="h-16 px-6 flex items-center justify-between bg-zinc-900 border-b border-zinc-800 text-white">
        <div className="font-bold flex items-center gap-2">
          <Video size={20} className="text-blue-500" />
          Weekly Sync - General Project
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="bg-red-500/20 text-red-500 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            REC
          </span>
          <span className="text-zinc-400">00:15:23</span>
        </div>
      </div>

      {/* Video Grid */}
      <div className="flex-1 p-4 flex gap-4 overflow-hidden">
        {/* Main Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* You */}
          <div className="relative bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 flex items-center justify-center">
            {videoOn ? (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />
            ) : (
              <div className="w-24 h-24 rounded-full bg-zinc-700 flex items-center justify-center text-4xl text-zinc-500 font-bold">Y</div>
            )}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium flex items-center gap-2">
              You
              {!micOn && <MicOff size={14} className="text-red-400" />}
            </div>
          </div>
          {/* Alice */}
          <div className="relative bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-teal-900/40" />
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
              Alice (Product Manager)
            </div>
          </div>
          {/* Bob */}
          <div className="relative bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 to-red-900/40" />
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
              Bob (Lead Dev)
            </div>
          </div>
          {/* Charlie */}
          <div className="relative bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-zinc-700 flex items-center justify-center text-4xl text-zinc-500 font-bold">C</div>
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium flex items-center gap-2">
              Charlie
              <MicOff size={14} className="text-red-400" />
            </div>
          </div>
        </div>
        
        {/* Right Sidebar (Chat Mock) */}
        <div className="w-80 bg-zinc-900 rounded-2xl border border-zinc-800 flex flex-col">
          <div className="p-4 border-b border-zinc-800 text-white font-bold flex items-center gap-2">
            <MessageSquare size={18} />
            In-call Messages
          </div>
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            <div className="text-sm">
              <span className="font-bold text-blue-400 mr-2">Alice</span>
              <span className="text-zinc-300">Can everyone see my screen?</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-emerald-400 mr-2">Bob</span>
              <span className="text-zinc-300">Yes, looks good!</span>
            </div>
          </div>
          <div className="p-4 border-t border-zinc-800">
            <input 
              type="text" 
              placeholder="Send message..." 
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="h-20 bg-zinc-900 border-t border-zinc-800 flex items-center justify-center gap-4 px-6">
        <button 
          onClick={() => setMicOn(!micOn)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${micOn ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
        >
          {micOn ? <Mic size={20} /> : <MicOff size={20} />}
        </button>
        <button 
          onClick={() => setVideoOn(!videoOn)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${videoOn ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
        >
          {videoOn ? <Video size={20} /> : <VideoOff size={20} />}
        </button>
        <button className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors">
          <MonitorUp size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors">
          <Hand size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors">
          <Settings size={20} />
        </button>
        <div className="w-px h-8 bg-zinc-800 mx-2"></div>
        <button 
          onClick={() => setInMeeting(false)}
          className="px-6 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold flex items-center gap-2 transition-colors"
        >
          <PhoneMissed size={20} />
          Leave Call
        </button>
      </div>
    </div>
  );
}
