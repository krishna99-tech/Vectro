"use client";

import { User, Mail, Shield, MapPin, Camera } from "lucide-react";
import ReflectiveCard from "@/components/ReflectiveCard";
import { useState } from "react";

export default function ProfilePage() {
  const [isWebcamActive, setIsWebcamActive] = useState(false);

  return (
    <div className="min-h-screen p-8 md:p-12 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
            <User size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Profile</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">Manage your public presence and personal details.</p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 dark:opacity-20"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start pt-8">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-800 mesh:border-white/20 bg-zinc-100 dark:bg-zinc-950 mesh:bg-white/10 shadow-lg flex items-center justify-center overflow-hidden shrink-0">
              <User size={64} className="text-zinc-400 dark:text-zinc-500 mesh:text-white/70" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white mb-2">Krishna</h2>
              <p className="text-blue-600 dark:text-blue-400 mesh:text-blue-300 font-medium tracking-wide text-sm mb-6 uppercase">Senior Developer</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-950 mesh:bg-white/5 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/10">
                  <Mail className="text-zinc-500 dark:text-zinc-400 mesh:text-white/70" size={18} />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mesh:text-white/90">krishna@example.com</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-950 mesh:bg-white/5 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/10">
                  <Shield className="text-green-600 dark:text-green-500 mesh:text-green-400" size={18} />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mesh:text-white/90">Admin Privileges</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-950 mesh:bg-white/5 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/10 sm:col-span-2">
                  <MapPin className="text-red-500 dark:text-red-400 mesh:text-red-400" size={18} />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mesh:text-white/90">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 mesh:border-white/10 flex justify-end gap-4">
            <button className="px-6 py-2 rounded-full font-medium text-zinc-600 dark:text-zinc-300 mesh:text-white/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 mesh:hover:bg-white/10 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2 rounded-full font-medium bg-zinc-900 dark:bg-white mesh:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 mesh:hover:bg-white/90 text-white dark:text-black mesh:text-black shadow-md transition-all hover:shadow-lg">
              Save Changes
            </button>
          </div>
        </div>

        <div className="w-full mt-16 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 flex flex-col items-center relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight text-zinc-900 dark:text-zinc-100 mesh:text-white">
              Identity Verification
            </h2>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-green-700 dark:text-green-400 mesh:text-green-300 bg-green-100 dark:bg-green-500/10 mesh:bg-green-500/20 rounded-full border border-green-200 dark:border-green-500/20 mesh:border-green-400/30">
              SECURE ACCESS
            </div>
            <p className="text-base text-zinc-600 dark:text-zinc-400 mesh:text-white/80 max-w-xl mx-auto font-medium mb-6">
              Grant camera access to experience the reflective metallic material reacting to your environment in real-time.
            </p>
            
            {!isWebcamActive && (
              <button 
                onClick={() => setIsWebcamActive(true)}
                className="flex items-center gap-2 mx-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <Camera size={20} />
                Enable Real-Time Reflection
              </button>
            )}
          </div>
          
          <div className="relative w-full max-w-sm flex justify-center items-center h-[500px]">
            <ReflectiveCard
              isActive={isWebcamActive}
              overlayColor="rgba(0, 0, 0, 0.2)"
              blurStrength={10}
              glassDistortion={15}
              metalness={0.8}
              roughness={0.5}
              displacementStrength={25}
              noiseScale={1.5}
              specularConstant={2.0}
              grayscale={0.5}
              color="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
