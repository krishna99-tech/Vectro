"use client";

import * as React from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed bottom-6 right-6 w-12 h-12" />; // placeholder to prevent layout shift
  }

  const cycleTheme = () => {
    if (theme === "mesh") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("mesh");
  };

  return (
    <button
      onClick={cycleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-zinc-800 mesh:bg-white/20 mesh:backdrop-blur-md border border-zinc-200 dark:border-zinc-700 mesh:border-white/30 shadow-lg text-zinc-800 dark:text-zinc-200 mesh:text-white hover:scale-110 hover:bg-zinc-100 dark:hover:bg-zinc-700 mesh:hover:bg-white/40 transition-all duration-300 flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {theme === "mesh" ? <Palette size={24} /> : theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
