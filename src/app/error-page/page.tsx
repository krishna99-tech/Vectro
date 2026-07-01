import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ErrorPageRoute() {
  return (
    <div className="min-h-screen p-8 md:p-12 flex flex-col items-center pt-24">
      <main className="max-w-4xl w-full flex flex-col items-center bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl shadow-xl rounded-2xl p-12 border border-zinc-200 dark:border-zinc-800 mesh:border-white/20">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100 mesh:text-white">
          Page Not Found 404
        </h1>
        <div className="relative w-full aspect-video flex justify-center p-4">
          <Image
            src="/page-not-found-404.svg"
            alt="404 Error"
            fill
            className="object-contain"
            priority
          />
        </div>
      </main>
    </div>
  );
}
