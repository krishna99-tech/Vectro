"use client";

import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8 md:p-12 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-3xl text-center mb-12">
        <div className="inline-flex p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg mb-6">
          <MessageSquare size={32} className="text-blue-600 dark:text-blue-400 mesh:text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mesh:text-white tracking-tight">Contact Us</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-4 max-w-2xl mx-auto">
          Have a question or want to work together? Drop us a line.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20">
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mesh:text-white/90">Name</label>
            <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-800 mesh:border-white/10 text-zinc-900 dark:text-zinc-100 mesh:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 mesh:placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500 mesh:focus:ring-white/30 transition-shadow" placeholder="Your name" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mesh:text-white/90">Email</label>
            <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-800 mesh:border-white/10 text-zinc-900 dark:text-zinc-100 mesh:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 mesh:placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500 mesh:focus:ring-white/30 transition-shadow" placeholder="your@email.com" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mesh:text-white/90">Message</label>
            <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 mesh:bg-white/5 border border-zinc-200 dark:border-zinc-800 mesh:border-white/10 text-zinc-900 dark:text-zinc-100 mesh:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 mesh:placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500 mesh:focus:ring-white/30 transition-shadow resize-none" placeholder="How can we help?"></textarea>
          </div>

          <button type="submit" className="mt-2 w-full py-3 px-6 bg-blue-600 dark:bg-blue-500 mesh:bg-white hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 text-white mesh:text-black font-semibold rounded-xl shadow-md transition-colors flex justify-center items-center gap-2">
            <Mail size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
