import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TextType from "@/components/TextType";
import Beams from "@/components/Beams";
import ReflectiveCard from "@/components/ReflectiveCard";
import DockWrapper from "@/components/DockWrapper";

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
    <div className="relative min-h-screen font-sans bg-slate-50 dark:bg-zinc-950 transition-colors duration-500 selection:bg-blue-500/30">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 dark:opacity-40 invert dark:invert-0 mix-blend-multiply dark:mix-blend-screen">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-60" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-emerald-400/20 dark:bg-emerald-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50" />
      </div>

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
                bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/60 dark:border-white/10 
                hover:-translate-y-2 hover:shadow-2xl shadow-xl shadow-black/5 dark:shadow-black/20 overflow-hidden`}
            >
              {/* Gradient highlight that reveals on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${route.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="flex flex-col z-10 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${route.color} text-white font-bold shadow-md`}>
                    {index + 1}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors tracking-tight">
                    {route.title}
                  </h2>
                </div>
                <p className="text-base text-zinc-600 dark:text-zinc-400 font-medium ml-14">
                  {route.desc}
                </p>
              </div>

              <div className="z-10 ml-14 flex items-center justify-center h-12 px-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300 shadow-sm w-fit">
                Explore
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="w-full mt-32 flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400">
              Identity Verification
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto font-medium">
              Grant camera access to experience the reflective metallic material reacting to your environment in real-time.
            </p>
          </div>
          
          <div className="relative w-full max-w-sm flex justify-center items-center h-[600px]">
            <ReflectiveCard
              overlayColor="rgba(0, 0, 0, 0.2)"
              blurStrength={10}
              glassDistortion={15}
              metalness={0.8}
              roughness={0.5}
              displacementStrength={25}
              noiseScale={1.5}
              specularConstant={2.0}
              grayscale={0.5}
              color="#ffffff"
            />
          </div>
        </div>
      </main>
      <DockWrapper />
    </div>
  );
}
