import React from 'react';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-extrabold tracking-tighter">
        DIGITIV<span className="text-purple-600">MEDIA</span>
      </div>
      <div className="hidden md:flex gap-8 font-medium text-sm text-slate-600">
        <a href="#results" className="hover:text-purple-600 transition-colors">Results</a>
        <a href="#services" className="hover:text-purple-600 transition-colors">Process</a>
        <a href="#ai" className="hover:text-purple-600 transition-colors">AI Advantage</a>
      </div>
      <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
        Book a Call
      </a>
    </div>
  </nav>
);

export default Navbar;
