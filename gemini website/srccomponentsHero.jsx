import { motion } from 'framer-motion';

const Hero = () => (
  <section className="pt-40 pb-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8"
      >
        Stop Running Boring Ads — Your Fashion Brand Needs Ads <span className="gradient-text">People Connect With</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
      >
        We create natural, relatable, high-performing videos that feel real and drive sales for fashion brands.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">
          Get High-Converting Videos
        </button>
        <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors">
          View Results
        </button>
      </motion.div>
    </div>
  </section>
);

export default Hero;