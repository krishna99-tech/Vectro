import { User, Mail, Shield, MapPin } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 md:p-12 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
            <User size={32} className="text-zinc-700 dark:text-zinc-200" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Profile</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">Manage your public presence and personal details.</p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 dark:opacity-10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start pt-8">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 shadow-lg flex items-center justify-center overflow-hidden shrink-0">
              <User size={64} className="text-zinc-400 dark:text-zinc-500" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Krishna</h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide text-sm mb-6 uppercase">Senior Developer</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-xl border border-zinc-100 dark:border-zinc-700">
                  <Mail className="text-zinc-500" size={18} />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">krishna@example.com</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-xl border border-zinc-100 dark:border-zinc-700">
                  <Shield className="text-green-500" size={18} />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Admin Privileges</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-xl border border-zinc-100 dark:border-zinc-700 sm:col-span-2">
                  <MapPin className="text-red-400" size={18} />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex justify-end gap-4">
            <button className="px-6 py-2 rounded-full font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2 rounded-full font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all hover:shadow-lg">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
