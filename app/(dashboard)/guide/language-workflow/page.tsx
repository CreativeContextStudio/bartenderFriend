import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function LanguageWorkflowPage() {
  return (
    <div className="space-y-12 pb-16">
      <div className="space-y-4 max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-black">
          Language & Workflow
        </h1>
        <p className="font-sans text-xl md:text-2xl font-bold text-gray-700 leading-relaxed border-l-4 border-[#70e000] pl-6">
          If you can't speak the language, you can't work the line. <br />
          Key terms. Core rules.
        </p>
      </div>

      {/* Shake vs Stir - Visual AB Test */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="neo-card bg-[#f0f0f0] border-4 border-black relative overflow-hidden group hover:bg-[#70e000] transition-colors duration-300">
          <div className="p-8 relative z-10">
            <h2 className="font-display text-6xl font-black uppercase mb-4 opacity-20 group-hover:opacity-100 transition-opacity">Shake</h2>
            <p className="text-2xl font-bold mb-4">Citrus. Juice. Cream. Egg.</p>
            <p className="font-mono text-sm uppercase tracking-widest font-bold">Goal: Aeration & Texture</p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#70e000] rounded-full blur-3xl opacity-50 group-hover:opacity-0"></div>
        </div>
        <div className="neo-card bg-[#f0f0f0] border-4 border-black relative overflow-hidden group hover:bg-[#00b4d8] transition-colors duration-300">
          <div className="p-8 relative z-10">
            <h2 className="font-display text-6xl font-black uppercase mb-4 opacity-20 group-hover:opacity-100 transition-opacity">Stir</h2>
            <p className="text-2xl font-bold mb-4">Spirits only. Clear. Boozy.</p>
            <p className="font-mono text-sm uppercase tracking-widest font-bold">Goal: Dilution & Clarity</p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#00b4d8] rounded-full blur-3xl opacity-50 group-hover:opacity-0"></div>
        </div>
      </section>

      {/* Glossary Grid */}
      <section className="space-y-6">
        <h2 className="font-display text-4xl font-black">The Vocabulary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { term: 'Neat', def: 'Room temp. No ice. Nothing else.', color: 'bg-white' },
            { term: 'Up', def: 'Chilled & strained. No ice in glass.', color: 'bg-white' },
            { term: 'Rocks', def: 'Over ice.', color: 'bg-white' },
            { term: 'Dry', def: 'Little to no Vermouth.', color: 'bg-white' },
            { term: 'Dirty', def: 'Add olive brine.', color: 'bg-white' },
            { term: 'Double', def: '2x Spirit. Usually 3oz+.', color: 'bg-white' },
            { term: 'Back', def: 'Side of water or soda.', color: 'bg-white' },
            { term: '86\'d', def: 'Out of stock. Gone.', color: 'bg-[#ff5400] text-white' },
          ].map((item, idx) => (
            <div key={idx} className={`neo-card p-6 border-2 border-black shadow-neo-sm hover:shadow-neo-md transition-all ${item.color}`}>
              <h3 className="font-display text-2xl font-black mb-2">{item.term}</h3>
              <p className="font-bold text-lg leading-tight opacity-90">{item.def}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modifiers */}
      <section className="neo-card bg-black text-white p-8 border-4 border-black">
        <h2 className="font-display text-3xl font-black mb-6 text-[#ffd60a]">Know Your Modifiers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="border-b border-white/20 pb-2">
              <span className="font-black text-xl block text-[#ff006e]">Vermouth (Sweet)</span>
              <span className="font-bold text-gray-400">Manhattans, Negronis. Refrigerate it.</span>
            </div>
            <div className="border-b border-white/20 pb-2">
              <span className="font-black text-xl block text-[#ff006e]">Vermouth (Dry)</span>
              <span className="font-bold text-gray-400">Martinis. Refrigerate it.</span>
            </div>
            <div className="border-b border-white/20 pb-2">
              <span className="font-black text-xl block text-[#ff006e]">Campari</span>
              <span className="font-bold text-gray-400">Bitter red Italian liqueur. Negroni fuel.</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-b border-white/20 pb-2">
              <span className="font-black text-xl block text-[#ff006e]">Cointreau / Triple Sec</span>
              <span className="font-bold text-gray-400">Orange liqueur. Margaritas, Cosmos.</span>
            </div>
            <div className="border-b border-white/20 pb-2">
              <span className="font-black text-xl block text-[#ff006e]">Angostura Bitters</span>
              <span className="font-bold text-gray-400">The salt & pepper of the bar. Use sparingly.</span>
            </div>
            <div className="border-b border-white/20 pb-2">
              <span className="font-black text-xl block text-[#ff006e]">Simple Syrup</span>
              <span className="font-bold text-gray-400">1:1 Sugar and Water. Essential sweetener.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
