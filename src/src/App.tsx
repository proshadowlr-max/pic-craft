import React from 'react';
import { Palette } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full">
        <Palette className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
        <h1 className="text-3xl font-black bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent mb-2">
          Pic-Craft
        </h1>
        <p className="text-slate-400 text-sm">¡Tu estudio de arte digital está en línea y funcionando!</p>
      </div>
    </div>
  );
}
