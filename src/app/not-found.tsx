import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex-1 p-8 md:p-12 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <main className="w-full flex flex-col items-center max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-zinc-900 dark:text-zinc-100 mesh:text-white">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mb-8 text-center max-w-lg">
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
