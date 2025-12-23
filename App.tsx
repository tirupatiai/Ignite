
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/software" element={<ComingSoon title="Software Development" />} />
            <Route path="/academy" element={<ComingSoon title="Academy" />} />
            <Route path="/marketing" element={<ComingSoon title="Digital Marketing" />} />
            <Route path="/hr" element={<ComingSoon title="HR & Recruitment" />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;
