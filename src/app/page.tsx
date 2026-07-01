import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TextType from "@/components/TextType";


export default function Home() {
  const routes = [
    { href: "/seo", title: "SEO Isometric Composition", desc: "View the SEO illustration", color: "from-blue-500 to-cyan-500" },
    { href: "/study", title: "Study Discussion", desc: "View the study illustration", color: "from-purple-500 to-pink-500" },
    { href: "/error-page", title: "Page Not Found 404", desc: "View the 404 error illustration", color: "from-red-500 to-orange-500" },
    { href: "/marketing", title: "AI-powered Marketing Tools", desc: "View the AI marketing illustration", color: "from-emerald-500 to-teal-500" },
    { href: "/register", title: "Registration", desc: "View the register illustration", color: "from-indigo-500 to-blue-500" },
    { href: "/revenue", title: "Revenue", desc: "View the revenue illustration", color: "from-amber-500 to-yellow-500" },
    { href: "/digital-finance", title: "Digital Finance Animation", desc: "View the digital finance illustration", color: "from-fuchsia-500 to-purple-500" },
    { href: "/business-analysis", title: "Business Analysis", desc: "View the business analysis illustration", color: "from-rose-500 to-red-500" },
    { href: "/confetti", title: "Confetti Celebration", desc: "View the confetti illustration", color: "from-yellow-400 to-orange-500" },
  ];

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-500 selection:bg-blue-500/30">
      {/* Removed Dynamic Background Effects as the global mesh gradient handles it now */}

      <main className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-24 pb-48 px-6 md:px-12">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400 drop-shadow-sm">
            Vector Directory
          </h1>
          <div className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6 h-8">
            <TextType 
              text={["Welcome to the Vector Gallery!", "Beautiful SVG illustrations.", "Ready for your next project.", "Happy coding!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </div>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Scroll down to explore a premium showcase of interactive vector illustrations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {routes.map((route, index) => (
            <Link 
              key={index} 
              href={route.href} 
              className={`group relative flex flex-col justify-between p-8 rounded-[2rem] transition-all duration-500 
                bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 
                hover:-translate-y-2 hover:shadow-2xl shadow-xl shadow-black/5 dark:shadow-black/20 overflow-hidden`}
            >
              {/* Gradient highlight that reveals on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${route.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="flex flex-col z-10 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${route.color} text-white font-bold shadow-md`}>
                    {index + 1}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white group-hover:text-black dark:group-hover:text-white mesh:group-hover:text-white transition-colors tracking-tight">
                    {route.title}
                  </h2>
                </div>
                <p className="text-base text-zinc-600 dark:text-zinc-400 mesh:text-white/80 font-medium ml-14">
                  {route.desc}
                </p>
              </div>

              <div className="z-10 ml-14 flex items-center justify-center h-12 px-6 rounded-full bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 text-zinc-900 dark:text-zinc-100 mesh:text-white font-semibold group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white mesh:group-hover:bg-white mesh:group-hover:text-black transition-all duration-300 shadow-sm w-fit">
                Explore
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>


      </main>
    </div>
  );
}
