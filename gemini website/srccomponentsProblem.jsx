import { X, CheckCircle2 } from 'lucide-react';

const Problem = () => (
  <section className="py-24 bg-slate-50 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Traditional Ads Don’t Work Anymore</h2>
        <p className="text-slate-500 text-xl font-medium">People Don’t Trust Perfect Ads. They Trust Real Experiences.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-400">
            <X className="text-red-400" /> Traditional Commercials
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 text-slate-500">Over-produced and "salesy"</li>
            <li className="flex gap-3 text-slate-500">Expensive studio & model fees</li>
            <li className="flex gap-3 text-slate-500">Users scroll past immediately</li>
            <li className="flex gap-3 text-slate-500">Low engagement & high CPA</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-3xl border-2 border-purple-500 relative">
          <span className="absolute -top-4 right-8 bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Winning</span>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
            <CheckCircle2 className="text-green-500" /> Relatable Content
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 font-medium">Feels like a friend's recommendation</li>
            <li className="flex gap-3 font-medium">Authentic environment & lighting</li>
            <li className="flex gap-3 font-medium">Native to TikTok/Reels/Shorts</li>
            <li className="flex gap-3 font-medium">5x higher retention & conversion</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Problem;