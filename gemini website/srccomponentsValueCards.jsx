const values = [
  { title: "Trending GRWM Videos", desc: "Get Ready With Me style content that seamlessly integrates your product into daily routines." },
  { title: "POV & Mirror Aesthetic", desc: "Native-feel mirror shots that highlight fit and fabric as if the viewer is looking in the mirror." },
  { title: "Lifestyle Story Hooks", desc: "Narrative-driven starts that stop the scroll by solving a fashion dilemma or setting a vibe." },
  { title: "Short-Form Fast-Cuts", desc: "High-energy editing designed for Gen-Z and Millennial attention spans." },
  { title: "Emotional Transformations", desc: "Before vs After content that shows the confidence boost your brand provides." }
];

const ValueCards = () => (
  <section className="py-24 px-6" id="services">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-16 text-center max-w-2xl mx-auto">
        Relatable Video Concepts That Turn Attention Into Sales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {values.map((v, i) => (
          <div key={i} className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl mb-6 flex items-center justify-center text-purple-600 font-bold">0{i+1}</div>
            <h3 className="text-lg font-bold mb-4 group-hover:text-purple-600 transition-colors">{v.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueCards;