import { Cpu, Users, Camera, DollarSign } from 'lucide-react';

const AIAdvantage = () => (
  <section className="py-24 px-6" id="ai">
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-600 to-pink-500 rounded-[3rem] p-12 text-white relative overflow-hidden">
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6">High-Quality Videos Without High Production Costs</h2>
        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
          Our proprietary AI-driven creators remove the need for expensive models, studios, cameras, and crews. 
          We save you thousands while delivering content that converts.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Users />, text: "No Models" },
            { icon: <Camera />, text: "No Studio" },
            { icon: <Cpu />, text: "AI Perfect" },
            { icon: <DollarSign />, text: "90% Cheaper" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                {item.icon}
              </div>
              <span className="font-bold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AIAdvantage;
