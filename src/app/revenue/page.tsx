import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RevenuePage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950 p-8 md:p-12 flex flex-col items-center">
      <Link href="/" className="group self-start mb-8 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-medium bg-white/50 dark:bg-zinc-900/50 p-2 pr-4 rounded-full border border-zinc-200 dark:border-zinc-800 hover:shadow-sm">
        <div className="p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
          <ArrowLeft size={18} className="text-zinc-600 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </div>
        Back
      </Link>
      <main className="max-w-4xl w-full flex flex-col items-center bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-12 border border-zinc-100 dark:border-zinc-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-zinc-900 dark:text-white">
          Revenue
        </h1>
        <div className="relative w-full aspect-video flex justify-center p-4">
          <Image
            src="/revenue.svg"
            alt="Revenue Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </main>
    </div>
  );
}
