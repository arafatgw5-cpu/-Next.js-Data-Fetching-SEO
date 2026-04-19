"use client";
import Image from "next/image";

const FashionBlogHero = () => {




    
  return (
    <div className="min-h-screen bg-zinc-200 flex items-center justify-center p-6">
      <div className="relative w-full max-w-6xl h-[650px] bg-black overflow-hidden shadow-2xl">

        {/* Background Image */}
        <Image
          src="https://avatars.githubusercontent.com/u/251947610?v=4"
          alt="hero"
          fill
          className="object-cover opacity-80"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* LEFT VERTICAL SOCIAL */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[10px] tracking-[6px] text-gray-400 hidden lg:flex flex-col gap-8">
          <span className="-rotate-90 origin-left">FACEBOOK</span>
          <span className="-rotate-90 origin-left">TWITTER</span>
          <span className="-rotate-90 origin-left">INSTAGRAM</span>
        </div>

        {/* RIGHT VERTICAL TEXT */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] tracking-[6px] text-gray-400 hidden lg:block">
          <span className="rotate-90 inline-block">SCROLL DOWN</span>
        </div>

        {/* TOP BAR */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <div className="text-white text-xl font-bold">||</div>

          <div className="space-y-1">
            <div className="w-6 h-[2px] bg-white"></div>
            <div className="w-6 h-[2px] bg-white"></div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 max-w-md text-white">
          
          {/* small text */}
          <p className="text-xs text-gray-400 mb-6">
            Featured in the blog
          </p>

          {/* author */}
          <div className="flex items-center gap-3 mb-8">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <div>
              <p className="text-sm">John Doe</p>
              <p className="text-xs text-gray-500">
                17 March 2025 • Blog
              </p>
            </div>
          </div>

          {/* heading */}
          <h1 className="text-5xl font-semibold leading-tight mb-6">
            We create interesting <br />
            fashion design.
          </h1>

          {/* description */}
          <p className="text-sm text-gray-300 mb-6">
            Make your photos look brilliant. In today’s article we present tips
            on how to use colored lighting in the scenery.
          </p>

          {/* button */}
          <button className="text-xs tracking-widest border-b border-white pb-1 hover:opacity-70">
            READ MORE
          </button>
        </div>

        {/* GLASS CARD */}
        <div className="absolute bottom-20 right-16 bg-white/10 backdrop-blur-lg px-8 py-6 rounded-lg flex items-center gap-10">
          
          <span className="text-white text-2xl font-light">02</span>

          <div>
            <p className="text-sm text-gray-300">Mountain photo</p>
            <p className="text-white font-medium">collection</p>
          </div>

          <span className="text-white text-xl">→</span>
        </div>

        {/* BOTTOM BAR */}
        <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-white/10 flex items-center px-12 text-xs tracking-widest text-gray-400">
          <div className="flex-1">CATEGORY</div>
          <div>SEND YOUR INQUIRY</div>
        </div>
      </div>
    </div>
  );
};

export default FashionBlogHero;