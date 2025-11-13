import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Confessions from './components/pages/Confessions';
import Memories from './components/pages/Memories';
import Soulmate from './components/pages/Soulmate';
import CustomCursor from './components/CustomCursor';
import FloatingHearts from './components/FloatingHearts';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/confessions" element={<Confessions />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/soulmate" element={<Soulmate />} />
      </Routes>
    </AnimatePresence>
  );
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 min-h-screen text-gray-800 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <FloatingHearts />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>
      </div>
      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </HashRouter>
  );
};

export default App;