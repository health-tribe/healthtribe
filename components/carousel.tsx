'use client';
import React, { useState, useEffect } from 'react';
import Timeline1 from './cards/card1';
import Timeline2 from './cards/card2';
import Timeline3 from './cards/card3';
import Image from 'next/image';
import Timeline4 from './cards/card4';

// --- TYPES & INTERFACES ---
interface MenuItem {
  title: string;
}

interface CarouselFrameProps {
  children: React.ReactNode;
  autoPlayInterval?: number;
  menuItems?: MenuItem[];
  aspectRatio?: string; // New prop to control the shape of the card
}

// --- THE REUSABLE CAROUSEL COMPONENT ---
const CarouselFrame: React.FC<CarouselFrameProps> = ({ 
  children, 
  autoPlayInterval = 5000, 
  menuItems = [],
  // Default set to your SVG dimensions: 1440 / 1875
  aspectRatio = "1440 / 1875" 
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const slides = React.Children.toArray(children);
  const length = slides.length;

  // Autoplay Logic (Never pauses as requested)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
      }, autoPlayInterval);
    }
    return () => clearInterval(interval);
  }, [length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!length) return null;

  // Default colors to match your reference image (Green active, Pastels inactive)
  const getButtonStyles = (index: number, isActive: boolean): string => {
    // Active State (Green Solid)
    if (isActive) {
      return "bg-[#10B981] text-white shadow-md border-transparent";
    }
    
    // Inactive States (Specific Pastels based on index)
    // You can add more colors here if you have more than 4 slides
    const inactiveColors = [
      "bg-emerald-50 text-emerald-900 border-emerald-100", // Fallback for 0 if not active
      "bg-blue-50 text-slate-800 border-blue-100",        // Index 1
      "bg-yellow-50 text-slate-800 border-yellow-100",    // Index 2
      "bg-orange-50 text-slate-800 border-orange-100",    // Index 3
    ];
    
    return inactiveColors[index % inactiveColors.length] + " hover:opacity-90";
  };

  return (
    <div  id="carousel" className="w-full max-w-6xl mx-auto flex flex-col gap-6 px-4 py-8">
      
      {/* --- TOP CONTROLS (Responsive Grid) --- */}
      {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {slides.map((_, index) => {
          const isActive = currentIndex === index;
          const item = menuItems[index] || { title: `Option ${index + 1}` }; // Fallback text

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                relative flex items-center p-4 h-24 rounded-lg text-left transition-all duration-300 border
                ${getButtonStyles(index, isActive)}
              `}
            >
              {/* Large Number */}
              <span className={`
                text-5xl font-light mr-4 leading-none
                ${isActive ? 'font-normal' : 'font-thin font-condensed'}
              `}>
                {index + 1}
              </span>
              
              {/* Divider Line (Visual separator like in the design) */}
              <div className={`h-12 w-px mr-4 ${isActive ? 'bg-white/30' : 'bg-black/10'}`}></div>

              {/* Text Content */}
              <span className={`
                text-sm font-medium leading-tight line-clamp-3
                ${isActive ? 'text-white' : 'text-slate-700'}
              `}>
                {item.title}
              </span>
              
              {/* Mobile Active Indicator (Bottom bar) */}
              {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/40 lg:hidden"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* --- THE CAROUSEL WINDOW --- */}
      {/* Changed: Removed Tailwind aspect classes. Used style prop for exact SVG ratio. */}
      <div 
        className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-white border border-slate-200"
        style={{ aspectRatio: aspectRatio }}
      >
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((child, index) => (
            <div 
              key={index} 
              className="min-w-full h-full flex-shrink-0 flex items-center justify-center p-0"
            >
              {/* Render the slide content with explicit sizing */}
              <div className="w-full h-full">
                {child}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    <div className="flex flex-col items-center justify-center w-full py-12 px-4 bg-white">
      {/* Heading Text */}
      <h2 className="text-xl md:text-2xl text-gray-500 font-normal mb-6 text-center">
        Book now to start your health journey today
      </h2>

      {/* Button */}
      <button 
        className="px-10 py-2.5 rounded-full border border-black font-bold text-black bg-transparent hover:bg-gray-100 transition-colors duration-200"
      >
        Know more
      </button>
    </div>  
    </div>
  );
};


// --- EXAMPLE USAGE COMPONENT ---
const Carousel: React.FC = () => {
  // Data matching your reference image text
  const menuData: MenuItem[] = [
    { title: "Foundation Reset Program" },
    { title: "Comprehensive Health Reboot Program" },
    { title: "Move Better: Lifestyle and Mobility" },
    { title: "Rejuvenation Of Mind & Body" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      
      {/* Pass the menuData to the frame so the buttons have the correct text */}
      <CarouselFrame 
        autoPlayInterval={3000} 
        menuItems={menuData}
        aspectRatio="1440 / 1875"
      >
        
        {/* SLIDE 1: Green Theme */}
        <div className="w-full h-full">
            <Image 
                src="/assets/FOUNDATION.svg" 
                alt="Slide 1" 
                width={1440} 
                height={1875} 
                className="w-full h-full object-cover" 
            />
        </div>

        {/* SLIDE 2: Blue Theme */}
         <div className="w-full h-full">
            <Image 
                src="/assets/Comp.svg" 
                alt="Slide 1" 
                width={1440} 
                height={1875} 
                className="w-full h-full object-cover" 
            />
        </div>

        {/* SLIDE 3: Ye <Timeline3 />}

        {/* SLIDE 4: Orange Theme */}
        <div className="w-full h-full">
            <Image 
                src="/assets/MoveB.svg" 
                alt="Slide 1" 
                width={1440} 
                height={1875} 
                className="w-full h-full object-cover" 
            />
        </div>
        
 <div className="w-full h-full">
            <Image 
                src="/assets/Reju.svg" 
                alt="Slide 1" 
                width={1440} 
                height={1875} 
                className="w-full h-full object-cover" 
            />
        </div>
      </CarouselFrame>
    </div>
  );
};

export default Carousel;