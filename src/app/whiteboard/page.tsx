"use client";

import React, { useRef, useState, useEffect } from "react";
import { Pen, Square, Circle, Type, StickyNote, Download, Trash2, Edit2 } from "lucide-react";

export default function WhiteboardPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#3b82f6");
  const [tool, setTool] = useState("pen");

  // Handle window resize to keep canvas full size of its container
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set internal resolution to match display size
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 3;
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    setIsDrawing(true);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    let x, y;
    if ('touches' in e) {
      const rect = canvas.getBoundingClientRect();
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.nativeEvent.offsetX;
      y = e.nativeEvent.offsetY;
    }
    
    ctx.moveTo(x, y);
    ctx.strokeStyle = color;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let x, y;
    if ('touches' in e) {
      const rect = canvas.getBoundingClientRect();
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.nativeEvent.offsetX;
      y = e.nativeEvent.offsetY;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col pt-16 bg-zinc-50 dark:bg-zinc-950 mesh:bg-transparent">
      
      {/* Top Toolbar */}
      <div className="h-16 border-b border-zinc-200 dark:border-zinc-800 mesh:border-white/20 bg-white dark:bg-zinc-900 mesh:bg-white/10 mesh:backdrop-blur-xl flex items-center justify-between px-6 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <Edit2 className="text-blue-600 dark:text-blue-400 mesh:text-white" />
          <h1 className="font-bold text-zinc-900 dark:text-white mesh:text-white">Collaborative Whiteboard</h1>
        </div>

        <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 mesh:bg-white/10 p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 mesh:border-white/20">
          <button onClick={() => setTool("pen")} className={`p-2 rounded-lg transition-colors ${tool === "pen" ? "bg-white dark:bg-zinc-700 mesh:bg-white/20 shadow-sm" : "hover:bg-zinc-200 dark:hover:bg-zinc-600 mesh:hover:bg-white/10"}`}>
            <Pen size={18} className="text-zinc-700 dark:text-zinc-200 mesh:text-white" />
          </button>
          <button onClick={() => setTool("square")} className={`p-2 rounded-lg transition-colors ${tool === "square" ? "bg-white dark:bg-zinc-700 mesh:bg-white/20 shadow-sm" : "hover:bg-zinc-200 dark:hover:bg-zinc-600 mesh:hover:bg-white/10"}`}>
            <Square size={18} className="text-zinc-700 dark:text-zinc-200 mesh:text-white" />
          </button>
          <button onClick={() => setTool("circle")} className={`p-2 rounded-lg transition-colors ${tool === "circle" ? "bg-white dark:bg-zinc-700 mesh:bg-white/20 shadow-sm" : "hover:bg-zinc-200 dark:hover:bg-zinc-600 mesh:hover:bg-white/10"}`}>
            <Circle size={18} className="text-zinc-700 dark:text-zinc-200 mesh:text-white" />
          </button>
          <button onClick={() => setTool("text")} className={`p-2 rounded-lg transition-colors ${tool === "text" ? "bg-white dark:bg-zinc-700 mesh:bg-white/20 shadow-sm" : "hover:bg-zinc-200 dark:hover:bg-zinc-600 mesh:hover:bg-white/10"}`}>
            <Type size={18} className="text-zinc-700 dark:text-zinc-200 mesh:text-white" />
          </button>
          <button onClick={() => setTool("sticky")} className={`p-2 rounded-lg transition-colors ${tool === "sticky" ? "bg-white dark:bg-zinc-700 mesh:bg-white/20 shadow-sm" : "hover:bg-zinc-200 dark:hover:bg-zinc-600 mesh:hover:bg-white/10"}`}>
            <StickyNote size={18} className="text-zinc-700 dark:text-zinc-200 mesh:text-white" />
          </button>

          <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-600 mesh:bg-white/20 mx-1"></div>

          {/* Color Picker */}
          <input 
            type="color" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-8 h-8 rounded-full border-0 cursor-pointer overflow-hidden outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-3">
          <button onClick={clearCanvas} className="flex items-center gap-2 px-3 py-1.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 mesh:hover:bg-red-500/20 rounded-lg text-sm font-medium transition-colors">
            <Trash2 size={16} /> Clear
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 dark:bg-blue-500 mesh:bg-white text-white mesh:text-black rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 mesh:hover:bg-white/90 transition-colors shadow-sm">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 w-full relative overflow-hidden bg-transparent">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
        />
        
        {/* Placeholder for tool specific UI (e.g. if we are not on 'pen') */}
        {tool !== 'pen' && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full pointer-events-none backdrop-blur-md">
            Shape and text tools are currently in view-only mock mode. Use the pen to draw!
          </div>
        )}
      </div>

    </div>
  );
}
