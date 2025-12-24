
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import Products from './pages/Products';
import Academy from './pages/Academy';
import HRServices from './pages/HRServices';
import DigitalMarketing from './pages/DigitalMarketing';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/software" element={<SoftwareDevelopment />} />
            <Route path="/products" element={<Products />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/marketing" element={<DigitalMarketing />} />
            <Route path="/hr" element={<HRServices />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;
