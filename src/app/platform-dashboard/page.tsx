import Image from "next/image";
import { LayoutDashboard } from "lucide-react";

export default function PlatformDashboardPage() {
  return (
    <div className="min-h-screen p-8 md:p-12 flex flex-col items-center">
      <main className="max-w-4xl w-full flex flex-col items-center bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 shadow-xl rounded-3xl p-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
            <LayoutDashboard size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mesh:text-white">
              Platform Dashboard
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">AI-powered Marketing Tools & Overview</p>
          </div>
        </div>

        <div className="relative w-full aspect-video flex justify-center p-4 bg-zinc-50 dark:bg-zinc-800/50 mesh:bg-black/10 rounded-2xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/10">
          <Image
            src="/ai-powered-marketing-tools.svg"
            alt="AI Marketing Tools"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      </main>
    </div>
  );
}
