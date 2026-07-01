import { Info } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 md:p-12 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-4xl text-center mb-12">
        <div className="inline-flex p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg mb-6">
          <Info size={32} className="text-blue-600 dark:text-blue-400 mesh:text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mesh:text-white tracking-tight">About Us</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-4 max-w-2xl mx-auto">
          Learn more about our mission, vision, and the amazing team building the future of vector illustrations.
        </p>
      </div>

      <div className="w-full max-w-4xl bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white mb-4">Our Mission</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mb-8 leading-relaxed">
          We strive to provide the best and most highly customizable vector graphics for developers and designers alike. 
          Our platform aims to be the central hub for interactive, beautiful components that work seamlessly across the web.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white mb-4">The Team</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 leading-relaxed">
          We are a small but passionate group of engineers, artists, and creators who believe in the power of open-source and stunning design.
        </p>
      </div>
    </div>
  );
}
