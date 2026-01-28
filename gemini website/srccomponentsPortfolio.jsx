const Portfolio = () => {
  const cards = Array(8).fill(null);
  return (
    <section className="py-24 bg-slate-900 text-white px-6" id="results">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Fashion Brands Are Getting Real Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((_, i) => (
            <div key={i} className="group relative aspect-[9/16] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                <p className="text-xs uppercase tracking-widest font-semibold">Video Placeholder</p>
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-xs font-bold text-purple-400 mb-1">CAMPAIGN 0{i+1}</p>
                <p className="text-sm font-bold leading-tight">
                  {i % 2 === 0 ? "5× ROAS · 100K+ Views" : "Created from single product image"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;