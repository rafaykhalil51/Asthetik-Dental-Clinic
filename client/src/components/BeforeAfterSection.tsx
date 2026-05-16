import { useState } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
           <div className="eyebrow justify-center mb-4 text-vibrant-orange">
            <div className="w-2 h-2 rounded-full bg-vibrant-orange" />
            Transformations
          </div>
          <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl text-navy">
            Real Results, <span className="serif-italic italic text-navy">Real Smiles</span>
          </h2>
        </div>

        <div 
          className="relative max-w-5xl mx-auto aspect-[16/9] rounded-[3rem] overflow-hidden cursor-ew-resize select-none border-[12px] border-white shadow-2xl"
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
        >
          {/* After Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200" 
              alt="After" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 right-8 bg-black/30 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              After
            </div>
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0" 
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200" 
              alt="Before" 
              className="w-full h-full object-cover grayscale-[30%]"
            />
            <div className="absolute bottom-8 left-8 bg-black/30 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Before
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
               <div className="flex gap-1">
                 <div className="w-1 h-3 bg-navy/20 rounded-full" />
                 <div className="w-1 h-3 bg-navy/20 rounded-full" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
