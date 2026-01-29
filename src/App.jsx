import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ValueCards from './components/ValueCards';
import Portfolio from './components/Portfolio';
import AIAdvantage from './components/AIAdvantage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-agency-gradient min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <ValueCards />
        <Portfolio />
        <AIAdvantage />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}


export default App;

