import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary to-blue-700"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             backgroundPosition: '0 0',
             backgroundSize: '200px 200px'
           }}>
      </div>
      
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `radial-gradient(white 2px, transparent 2px)`,
             backgroundSize: '20px 20px'
           }}>
      </div>
      
      {/* Light beam effect */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;