import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock, Zap, CheckSquare, ShieldAlert } from 'lucide-react';

export default function BehindBarPage() {
  return (
    <div className="space-y-12 pb-16">
      <div className="space-y-4 max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-black">
          Back Behind the Bar
        </h1>
        <p className="font-sans text-xl md:text-2xl font-bold text-gray-700 leading-relaxed border-l-4 border-[#ffd60a] pl-6">
          The bar is a stage. <br />
          Your setup determines your performance.
        </p>
      </div>

      {/* Hero Tip */}
      <div className="neo-card bg-black text-white p-8 border-4 border-black shadow-neo-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h2 className="font-display text-4xl font-black text-[#ffd60a]">Mise en Place</h2>
            <p className="text-xl font-bold leading-relaxed opacity-90">
              "Everything in its place."<br />
              If you have to take continuous steps to get a lime, you've already lost.
              Setup is 90% of the battle.
            </p>
          </div>
          <div className="w-full md:w-auto p-6 bg-white/10 rounded-xl border-2 border-white/20 text-center backdrop-blur-sm">
            <Clock className="w-12 h-12 text-[#ffd60a] mx-auto mb-2" />
            <div className="text-3xl font-black">15 min</div>
            <div className="text-sm font-bold uppercase tracking-widest">Setup Time</div>
          </div>
        </div>
      </div>

      <section className="grid gap-8 md:grid-cols-2">
        {/* Station Setup */}
        <Card className="neo-card h-full">
          <CardHeader className="border-b-4 border-black bg-[#f0f0f0]">
            <CardTitle className="bg-black text-white inline-block px-4 py-1 text-2xl font-black rotate-1">
              Station Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4 font-bold text-lg text-gray-800">
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 text-[#70e000] shrink-0 mt-0.5" />
                <span>Ice Bin Full (Fresh ice only)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 text-[#70e000] shrink-0 mt-0.5" />
                <span>Tools (Shaker, Jigger, Spoon) <strong>touching distance</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 text-[#70e000] shrink-0 mt-0.5" />
                <span>Bottles facing forward (Speed rail)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 text-[#70e000] shrink-0 mt-0.5" />
                <span>Garnishes prepped & full</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Speed Tactics */}
        <Card className="neo-card h-full">
          <CardHeader className="border-b-4 border-black bg-[#f0f0f0]">
            <CardTitle className="bg-[#ff006e] text-white inline-block px-4 py-1 text-2xl font-black -rotate-1">
              Speed Tactics
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-black text-xl uppercase mb-1">Batching</h4>
                <p className="font-bold text-gray-600">Making 3 Margaritas? Build them all in the tins at once. Shake 2 tins at a time.</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-black text-xl uppercase mb-1">Order of Operations</h4>
                <p className="font-bold text-gray-600">1. Build Rocks  →  2. Shake Sours  →  3. Stir Martinis  →  4. Highballs.</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-black text-xl uppercase mb-1">Two Hands</h4>
                <p className="font-bold text-gray-600">Never have an empty hand. Grab two bottles at once. Pour simultaneously.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Critical Mistakes */}
      <section className="space-y-6">
        <h2 className="font-display text-4xl font-black">Don't Do This.</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="neo-card p-6 bg-[#ff5400]/10 border-red-500">
            <ShieldAlert className="w-8 h-8 text-[#ff5400] mb-3" />
            <h4 className="font-black text-xl mb-2">The Dilution Trap</h4>
            <p className="font-bold text-sm text-gray-600">Letting ice sit in a shaker while you take an order. Your drink is dying. Dump it.</p>
          </div>
          <div className="neo-card p-6 bg-[#ff5400]/10 border-red-500">
            <ShieldAlert className="w-8 h-8 text-[#ff5400] mb-3" />
            <h4 className="font-black text-xl mb-2">The 'Guess' Pour</h4>
            <p className="font-bold text-sm text-gray-600">Free pouring without training. You're losing money and consistency. Use a jigger.</p>
          </div>
          <div className="neo-card p-6 bg-[#ff5400]/10 border-red-500">
            <ShieldAlert className="w-8 h-8 text-[#ff5400] mb-3" />
            <h4 className="font-black text-xl mb-2">The Dirty Bar</h4>
            <p className="font-bold text-sm text-gray-600">Wet labels, sticky bar top. It signals you don't care. Wipe constantly.</p>
          </div>
        </div>
      </section>

      {/* Closing Duties */}
      <Card className="neo-card bg-white">
        <CardHeader className="border-b-4 border-black">
          <CardTitle className="text-3xl font-black">Closing Time</CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="list-decimal list-inside space-y-3 font-bold text-lg text-gray-700 marker:text-black marker:font-black">
              <li>Stop orders immediately at last call.</li>
              <li>Burn the ice (melt it with hot water).</li>
              <li>Wipe every bottle.</li>
              <li>Cap liquors. Store in lockup.</li>
              <li>Run glassware.</li>
            </ul>
            <div className="bg-[#f0f0f0] p-6 border-2 border-black rotate-1">
              <p className="font-display font-black text-2xl mb-2">RULE #1</p>
              <p className="text-xl font-bold">"Leave the bar better than you found it."</p>
              <p className="text-sm font-bold text-gray-500 mt-2">The opener will thank you.</p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
