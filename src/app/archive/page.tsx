import { Archive, FileText, ImageIcon, Video } from "lucide-react";

export default function ArchivePage() {
  const archives = [
    { title: "Q1 Financial Report", date: "Mar 31, 2026", type: "document", size: "2.4 MB" },
    { title: "Marketing Assets", date: "Mar 15, 2026", type: "image", size: "145 MB" },
    { title: "Team Meeting Recording", date: "Feb 28, 2026", type: "video", size: "1.2 GB" },
    { title: "Project Proposal v2", date: "Jan 10, 2026", type: "document", size: "1.1 MB" },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "document": return <FileText className="text-blue-500" />;
      case "image": return <ImageIcon className="text-pink-500" />;
      case "video": return <Video className="text-purple-500" />;
      default: return <FileText className="text-zinc-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 md:p-12 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
            <Archive size={32} className="text-zinc-700 dark:text-zinc-200" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Archive</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">View and manage your stored files and documents.</p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-xl border border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col gap-4">
            {archives.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shadow-sm">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.date}</p>
                  </div>
                </div>
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                  {item.size}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
