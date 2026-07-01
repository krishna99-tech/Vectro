"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { GlobalSearch } from "./GlobalSearch";

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white/90 dark:bg-black/60 mesh:bg-white/5 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 mesh:border-white/10 shadow-sm mesh:shadow-lg sticky top-0 z-50 px-6 py-4 flex justify-between items-center transition-colors duration-500">
      <div className="flex items-center gap-4">
        {pathname !== "/" && <SidebarTrigger className="text-zinc-900 dark:text-white mesh:text-white mesh:hover:bg-white/10 mesh:hover:text-white" />}
        <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white mesh:text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
            V
          </div>
          VectorGallery
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <GlobalSearch />
        <Link href="/" className="text-sm text-zinc-600 dark:text-zinc-300 mesh:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 mesh:hover:text-white font-medium transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm text-zinc-600 dark:text-zinc-300 mesh:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 mesh:hover:text-white font-medium transition-colors">
          About
        </Link>
        <Link href="/services" className="text-sm text-zinc-600 dark:text-zinc-300 mesh:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 mesh:hover:text-white font-medium transition-colors">
          Services
        </Link>
        <Link href="/contact" className="text-sm text-zinc-600 dark:text-zinc-300 mesh:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 mesh:hover:text-white font-medium transition-colors">
          Contact
        </Link>
        <Link href="/docs" className="text-sm text-zinc-600 dark:text-zinc-300 mesh:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 mesh:hover:text-white font-medium transition-colors">
          Documentation
        </Link>
      </div>
    </nav>
  );
}
