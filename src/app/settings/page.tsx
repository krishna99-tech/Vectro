import { Settings, Bell, Palette, Lock, Globe } from "lucide-react";

export default function SettingsPage() {
  const sections = [
    { icon: <Bell />, title: "Notifications", desc: "Manage how you receive alerts and updates." },
    { icon: <Palette />, title: "Appearance", desc: "Customize the look and feel of the application." },
    { icon: <Lock />, title: "Privacy & Security", desc: "Control your data and account security settings." },
    { icon: <Globe />, title: "Language & Region", desc: "Set your preferred language and time zone." },
  ];

  return (
    <div className="min-h-screen p-8 md:p-12 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
            <Settings size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Settings</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">Manage your account preferences and configurations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700 mesh:hover:border-white/40 transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 mesh:group-hover:bg-white/20 transition-colors border border-transparent mesh:border-white/10">
                <div className="text-zinc-500 dark:text-zinc-400 mesh:text-white/80 group-hover:text-blue-600 dark:group-hover:text-blue-400 mesh:group-hover:text-white transition-colors">
                  {section.icon}
                </div>
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white mb-2">{section.title}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 leading-relaxed">{section.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
