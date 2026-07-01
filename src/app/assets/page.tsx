import { FolderGit2, Image as ImageIcon, Box, LayoutTemplate } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function AssetsPage() {
  const assets: { title: string; date: string; type: string; size: string }[] = [];

  const getIcon = (type: string) => {
    switch (type) {
      case "illustration": return <ImageIcon className="text-blue-500" />;
      case "3d": return <Box className="text-pink-500" />;
      case "template": return <LayoutTemplate className="text-purple-500" />;
      default: return <ImageIcon className="text-zinc-500" />;
    }
  };

  return (
    <div className="min-h-screen p-8 md:p-12 pt-12 pb-32 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20 rounded-2xl shadow-lg">
            <FolderGit2 size={32} className="text-zinc-900 dark:text-white mesh:text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mesh:text-white">Vector Assets</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mesh:text-white/80 mt-1">Manage and organize your custom vector illustrations.</p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-zinc-200 dark:border-zinc-800 mesh:border-white/20">
          <div className="flex flex-col gap-4">
            {assets.length > 0 ? (
              assets.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 mesh:hover:bg-white/5 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 mesh:hover:border-white/10 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 flex items-center justify-center shadow-sm border border-zinc-200 dark:border-zinc-700 mesh:border-white/5">
                      {getIcon(item.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mesh:text-white">{item.title}</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mesh:text-white/60">{item.date}</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mesh:text-white/80 bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 mesh:border-white/5">
                    {item.size}
                  </div>
                </div>
              ))
            ) : (
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon" className="text-zinc-400 dark:text-zinc-500 mesh:text-white">
                    <FolderGit2 />
                  </EmptyMedia>
                  <EmptyTitle className="text-zinc-900 dark:text-zinc-100 mesh:text-white">No assets found</EmptyTitle>
                  <EmptyDescription className="text-zinc-600 dark:text-zinc-400 mesh:text-white/70">You haven't added any vector assets yet.</EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <button className="px-4 py-2 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors shadow-md">
                    Import Asset
                  </button>
                </EmptyContent>
              </Empty>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
