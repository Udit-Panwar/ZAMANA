import React from "react";

const testimonials = [
  { id: 1, name: "Priya S.", quote: "Fast delivery and excellent quality — I'm a returning customer!" },
  { id: 2, name: "Aman K.", quote: "Great prices and very helpful support team." },
  { id: 3, name: "Meera R.", quote: "Smooth checkout and quick returns. Highly recommend!" },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-15 animate-float-large" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-500 rounded-full filter blur-3xl opacity-15 animate-float-large" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-10 animate-float-large" style={{ animationDelay: '4s' }} />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5 animate-grid-move" style={{
        backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="bg-particle bg-particle-1" />
        <div className="bg-particle bg-particle-2" />
        <div className="bg-particle bg-particle-3" />
        <div className="bg-particle bg-particle-4" />
        <div className="bg-particle bg-particle-5" />
      </div>
      
      {/* ------------------- HERO SECTION ------------------- */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12">
          
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="inline-block mb-6 animate-bounce-gentle">
              <span className="bg-gradient-to-r from-orange-500 to-rose-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-orange-500/30 animate-glow-pulse">
                ✨ About ShopEase
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-rose-500 to-pink-400 bg-clip-text text-transparent animate-gradient-text">
                We make online shopping{" "}
              </span>
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-gradient-text">
                effortless
              </span>
              <span className="text-white">.</span>
            </h1>
            
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              Trusted products, transparent pricing, lightning-fast delivery — ShopEase is built for the modern shopper who expects more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/collection"
                className="relative rounded-full bg-gradient-to-r from-orange-500 to-rose-600 text-white px-8 py-4 text-sm font-bold shadow-xl hover:shadow-2xl hover:shadow-orange-500/60 transform hover:scale-110 transition-all duration-300 overflow-hidden group inline-block"
              >
                <span className="relative z-10">Start Shopping 🛍️</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>

              <a
                href="/contact"
                className="rounded-full bg-slate-800/50 border-2 border-orange-500/50 text-white px-8 py-4 text-sm font-bold hover:bg-slate-700 hover:border-orange-400 transform hover:scale-110 transition-all duration-300 inline-block"
              >
                Contact Us 💬
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-1/2 animate-fade-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-glow" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-700 border-4 border-orange-500/50">
                <img
                  src="https://images.unsplash.com/photo-1479746800994-5e8d6a75c002?q=80&w=1074&auto=format&fit=crop"
                  alt="shopping"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- TESTIMONIALS ------------------- */}
      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-rose-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ Testimonials
            </span>
          </div>
          {/* <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
            What Our Customers Say
          </h2> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <blockquote
              key={t.id}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-700 transform hover:-translate-y-4 border-2 border-slate-700/50 hover:border-orange-500/80 overflow-hidden animate-zoom-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               */}
              {/* <div className="relative z-10">
                <div className="text-4xl text-orange-400 mb-4 animate-pulse-subtle">"</div>
                <p className="text-gray-300 leading-relaxed mb-6">{t.quote}</p>
                <footer className="text-sm font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                  — {t.name}
                </footer>
              </div> */}
              
              <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-twinkle-fast" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-rose-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </blockquote>
          ))}
        </div>
      </section>

      {/* ------------------- CTA ------------------- */}
      {/* <section className="relative bg-gradient-to-r from-orange-500/10 to-rose-500/10 backdrop-blur-sm border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-white mb-3">Ready to explore our collection?</h3>
            <p className="text-gray-300 text-lg">Join thousands of happy customers today.</p>
          </div>

          <div className="flex gap-4 animate-fade-in-right">
            <a
              href="/shop"
              className="relative rounded-full bg-gradient-to-r from-orange-500 to-rose-600 text-white px-8 py-4 text-sm font-bold shadow-xl hover:shadow-2xl hover:shadow-orange-500/60 transform hover:scale-110 transition-all duration-300 overflow-hidden group inline-block"
            >
              <span className="relative z-10">Shop Now 🛍️</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
            
            <a
              href="/contact"
              className="rounded-full bg-slate-800/50 border-2 border-orange-500/50 text-white px-8 py-4 text-sm font-bold hover:bg-slate-700 hover:border-orange-400 transform hover:scale-110 transition-all duration-300 inline-block"
            >
              Contact Sales 📞
            </a>
          </div>
        </div>
      </section> */}

      <style>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.8) translateY(50px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse-strong {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
          50% { box-shadow: 0 0 60px rgba(249, 115, 22, 0.8); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes twinkle-fast {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes particle-float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-120vh) translateX(60px); opacity: 0; }
        }

        .animate-float-large { animation: float-large 8s ease-in-out infinite; }
        .animate-zoom-in { animation: zoom-in 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-left { animation: fade-in-left 1s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 1s ease-out; }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-pulse-strong { animation: pulse-strong 2s ease-in-out infinite; }
        .animate-pulse-subtle { animation: pulse-subtle 2s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-gradient-text { animation: gradient-text 5s ease infinite; background-size: 200% 200%; }
        .animate-grid-move { animation: grid-move 30s linear infinite; }
        .animate-twinkle-fast { animation: twinkle-fast 1s ease-in-out infinite; }

        .bg-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #f97316, #fb923c);
          border-radius: 50%;
          opacity: 0.4;
          animation: particle-float 20s linear infinite;
        }

        .bg-particle-1 { top: 10%; left: 15%; animation-delay: 0s; }
        .bg-particle-2 { top: 70%; left: 85%; animation-delay: 4s; }
        .bg-particle-3 { top: 30%; left: 60%; animation-delay: 8s; }
        .bg-particle-4 { top: 50%; left: 25%; animation-delay: 12s; }
        .bg-particle-5 { top: 85%; left: 70%; animation-delay: 16s; }
      `}</style>
    </main>
  );
}