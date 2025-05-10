import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import DonationSection from './components/DonationSection';
import RescueStories from './components/RescueStories';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50">
        <Header />
        <main>
          <Hero />
          <DonationSection />
          <RescueStories />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;