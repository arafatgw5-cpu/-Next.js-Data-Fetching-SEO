import React from 'react';

const FancyLandingHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a5f3fc] via-[#67e8f9] to-[#bae8f0] flex items-center justify-center p-8 relative overflow-hidden">
      
      {/* Subtle futuristic grid background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0ea5e9 1px, transparent 1px),
            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side - Text Content */}
        <div className="lg:pl-8 space-y-8">
          <h1 className="text-6xl lg:text-7xl font-bold leading-none tracking-tighter text-slate-900">
            Get landing page in <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">2 weeks</span>
          </h1>
          
          <p className="text-xl text-slate-700 max-w-md">
            Landing page design for your startup can be done in two weeks by 
            <span className="font-semibold text-slate-900"> FANCY Design Subscription</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              className="px-10 py-5 bg-black hover:bg-slate-800 transition-colors text-white text-lg font-semibold rounded-3xl shadow-lg shadow-black/30"
            >
              Start subscription
            </button>
            
            <button 
              className="px-10 py-5 border-2 border-slate-900 hover:bg-white/60 transition-colors text-slate-900 text-lg font-semibold rounded-3xl"
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Right Side - 3D Scene (Exact visual match using pure CSS) */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[420px] h-[460px] lg:w-[520px] lg:h-[520px]">
            
            {/* Platform Glow Base */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[420px] h-24">
              {/* Outer soft glow */}
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-30 scale-110"></div>
              
              {/* Main holographic platform */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl border border-cyan-300/70 rounded-full shadow-2xl shadow-cyan-500/50 flex items-center justify-center">
                {/* Inner glowing ring */}
                <div className="w-[300px] h-5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rounded-full shadow-inner"></div>
              </div>
            </div>

            {/* Main Metallic Sphere */}
            <div 
              className="absolute bottom-36 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full z-10
                         bg-gradient-to-br from-slate-100 via-slate-300 to-zinc-700
                         shadow-[0_40px_70px_-20px_rgb(0,0,0,0.4),
                                 inset_50px_40px_50px_-30px_rgba(255,255,255,0.95),
                                 inset_-50px_-40px_50px_-30px_rgba(0,0,0,0.7)]"
            >
              {/* Chrome reflection highlight */}
              <div className="absolute top-10 left-10 w-28 h-28 bg-white/40 rounded-full blur-2xl"></div>
              
              {/* Extra specular highlight strip */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/20 to-transparent rotate-45"></div>
            </div>

            {/* Floating Coin / Logo Disc */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full z-20
                           bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-800
                           shadow-2xl shadow-black/40 border border-white/30 flex items-center justify-center
                           text-6xl font-black text-zinc-900 rotate-12">
              G2
            </div>

            {/* Extra soft glow under sphere */}
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyLandingHero;