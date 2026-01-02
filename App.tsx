
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ComingSoon from './pages/ComingSoon';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import Academy from './pages/Academy';
import DigitalMarketing from './pages/DigitalMarketing';
import HRServices from './pages/HRServices';
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
            <Route path="/academy" element={<Academy />} />
            <Route path="/marketing" element={<DigitalMarketing />} />
            <Route path="/hr" element={<HRServices />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;
