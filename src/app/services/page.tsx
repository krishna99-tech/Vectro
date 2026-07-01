import { Briefcase } from "lucide-react";

export default function ServicesPage() {
  const services = [
    { title: "Custom Illustration", desc: "Bespoke vector artwork tailored to your brand identity." },
    { title: "Component Integration", desc: "Seamless integration of interactive components into your React apps." },
    { title: "UI/UX Design", desc: "Creating beautiful interfaces focused on exceptional user experiences." },
  ];

  return (
    <div className="min-h-screen p-8 md:p-12 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-4xl text-center mb-12">
        <div className="inline-flex p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg mb-6">
          <Briefcase size={32} className="text-blue-600 dark:text-blue-400 mesh:text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mesh:text-white tracking-tight">Our Services</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-4 max-w-2xl mx-auto">
          We offer a variety of services to help you build stunning digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((svc, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 flex flex-col hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white mb-3">{svc.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80">{svc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
