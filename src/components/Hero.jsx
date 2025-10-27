import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero flex items-center justify-center min-h-[90vh] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80')",
      }}
    >
      {/* ✅ Soft light overlay for clear background */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="container relative z-10 text-center px-6 md:px-20 text-black">
        <div className="hero-content scroll-reveal">
          
          <div
  className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8"
  style={{ animationDelay: "0.6s" }}
>
  <Link
    to="/properties"
    className="btn-primary px-10 py-4 bg-[#d4af37] text-white rounded-full text-lg font-bold hover:bg-[#b89630] transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:scale-105 border-2 border-transparent hover:border-[#a08528] min-w-[280px] text-center"
  >
    🏠 Explore Premium Properties
  </Link>

  
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
