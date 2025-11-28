import React, { useState, useEffect } from 'react';
import { Construction, Wrench, AlertCircle, Sparkles } from 'lucide-react';

export default function ComingSoon() {
  const [particles, setParticles] = useState([]);

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
            {/* Animated Icon Group */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-8 shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <Construction className="w-20 h-20 text-white animate-bounce" style={{ animationDuration: '2s' }} />
                </div>
              </div>
              <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full p-8 shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-20 h-20 text-white animate-spin" style={{ animationDuration: '4s' }} />
                </div>
              </div>
            </div>

            {/* Main Heading with Gradient Text */}
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Coming Soon
              </h1>
              
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-30 animate-pulse" />
                <p className="relative text-2xl md:text-4xl font-bold text-white drop-shadow-lg px-8 py-4">
                  Something Extraordinary is Being Created
                </p>
              </div>

              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're crafting an exceptional facility with state-of-the-art features designed to exceed your expectations. Every detail is being perfected to deliver an unforgettable experience.
              </p>
            </div>

            {/* Apology Card with Modern Design */}
            <div className="max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-yellow-500/30 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full p-3">
                        <AlertCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                        Sorry for the Inconvenience
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        We sincerely apologize for any disruption this may cause. Our team is working diligently around the clock to bring you an enhanced facility that will redefine excellence. Your patience and understanding mean the world to us, and we promise the wait will be worthwhile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              {[
                { title: 'Premium Quality', emoji: '✨', desc: 'World-class standards' },
                { title: 'Modern Design', emoji: '🎨', desc: 'Cutting-edge aesthetics' },
                { title: 'Excellence', emoji: '🏆', desc: 'Unmatched experience' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                  <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 transform hover:scale-105 transition-all duration-300">
                    <div className="text-5xl mb-3">{feature.emoji}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="pt-12">
              <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-8 py-4">
                <p className="text-gray-300 text-lg">
                  Questions? Reach us at{' '}
                  <a 
                    href="mailto:info@yourwebsite.com" 
                    className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
                  >
                    info@zamana.com
                  </a>
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