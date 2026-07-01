import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
          V
        </div>
        VectorGallery
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/" className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
          About
        </Link>
        <Link href="/services" className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
          Services
        </Link>
        <Link href="/contact" className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
