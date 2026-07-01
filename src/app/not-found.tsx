import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex-1 bg-zinc-50 font-sans dark:bg-zinc-950 p-8 md:p-12 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <Link href="/" className="absolute top-8 left-8 group text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-medium bg-white/50 dark:bg-zinc-900/50 p-2 pr-4 rounded-full border border-zinc-200 dark:border-zinc-800 hover:shadow-sm z-10">
        <div className="p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
          <ArrowLeft size={18} className="text-zinc-600 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </div>
        Back to Home
      </Link>

      <main className="w-full flex flex-col items-center max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-zinc-900 dark:text-white">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 text-center max-w-lg">
          We couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="relative w-full aspect-video flex justify-center p-4 mb-8">
          <Image
            src="/page-not-found-404.svg"
            alt="404 Page Not Found"
            fill
            className="object-contain"
            priority
          />
        </div>
      </main>
    </div>
  );
}
