import React, { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft, AlertTriangle, MapPin } from 'lucide-react';

export default function PageNotFound() {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
    
      const popularLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Collection", path: "/collection" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-purple-400 opacity-20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-5xl w-full">
          <div className="text-center space-y-12">
            {/* 404 Number with Parallax Effect */}
            <div 
              className="relative"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
              }}
            >
              <h1 className="text-9xl md:text-[20rem] font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent opacity-90 leading-none">
                404
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-30 animate-pulse" />
            </div>

            {/* Animated Icon */}
            <div className="flex justify-center items-center gap-4 -mt-8">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full p-6 shadow-2xl">
                  <AlertTriangle className="w-16 h-16 text-white animate-bounce" style={{ animationDuration: '2s' }} />
                </div>
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-30 animate-pulse" />
                <h2 className="relative text-4xl md:text-6xl font-bold text-white drop-shadow-lg px-8 py-4">
                  Oops! Page Not Found
                </h2>
              </div>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Looks like you've ventured into uncharted territory. The page you're looking for seems to have wandered off into the digital void.
              </p>
            </div>

            {/* Search Suggestion Card */}
            <div className="max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-purple-400 mb-3">
                        Lost Your Way?
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Don't worry, it happens to the best of us! The page you're searching for might have been moved, deleted, or perhaps never existed. Let's get you back on track.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => window.history.back()}
                className="group relative px-8 py-4 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-100 group-hover:opacity-90 transition-opacity" />
                <div className="relative flex items-center gap-3 text-white font-semibold text-lg">
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </div>
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="group relative px-8 py-4 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity" />
                <div className="relative flex items-center gap-3 text-white font-semibold text-lg">
                  <Home className="w-5 h-5" />
                  Home Page
                </div>
              </button>
            </div>

            {/* Popular Links */}
            <div className="pt-12">
              <p className="text-gray-400 text-sm mb-4">POPULAR PAGES</p>
              <div className="flex flex-wrap justify-center gap-3">
                {popularLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => window.location.href =link.path}
                    className="px-6 py-2 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-gray-300 hover:text-white hover:border-purple-500/60 transition-all duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Error Code */}
            <div className="pt-8">
              <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3">
                <p className="text-gray-400 text-sm font-mono">
                  ERROR CODE: <span className="text-purple-400 font-bold">404</span> | PAGE NOT FOUND
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/3 bg-gradient-to-t from-purple-600/20 to-transparent blur-3xl" />
    </div>
  );
}