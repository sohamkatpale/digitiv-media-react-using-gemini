const ContactForm = () => (
  <section className="py-24 px-6" id="contact">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Create Videos That Actually Sell?</h2>
      <p className="text-slate-500 mb-12">Fill out the form below and we'll reach out with a custom content strategy.</p>
      
      <form className="space-y-4 text-left">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="text" placeholder="Brand Name" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <input type="email" placeholder="Work Email" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        <textarea rows="4" placeholder="Tell us about your product..." className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
        <button type="button" className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-slate-800 transition-colors text-lg">
          Send My Free Strategy
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
