import React, { useState } from 'react';
import { Palette, Camera, Sparkles, Share2 } from 'lucide-react';

export default function App() {
  const [tool, setTool] = useState<'fill' | 'spray' | 'brush'>('fill');

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Palette className="w-8 h-8 text-pink-500 animate-pulse" />
          <h1 className="text-2xl font-black bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Pic-Craft
          </h1>
        </div>
      </header>
      <div className="flex-1 flex flex-col md:flex-row p-6 gap-6 max-w-7xl mx-auto w-full items-center justify-center">
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 text-center shadow-2xl">
          <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-bounce" />
          <h2 className="text-xl font-bold mb-2">¡Tu estudio Pic-Craft está listo!</h2>
          <p className="text-slate-400 text-sm">Has recuperado tu aplicación con éxito.</p>
        </div>
      </div>
    </div>
  );
}