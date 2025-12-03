import React from 'react';
import { User, Zap, Brain, Activity, Users } from 'lucide-react';

const Timeline2 = () => {
  const steps = [
    {
      id: 1,
      title: "Psychological Counseling",
      imageBg: "bg-[#FFF5EE]", // Light peach
      // Icon placeholder - Replace with your <svg>...</svg>
      icon: <User strokeWidth={1} className="w-32 h-32 text-gray-800" />, 
      layout: "text-left", // Text on left, Image on right
      numberPos: "top", // Number above text
      line: null,
    },
    {
      id: 2,
      title: "Stress Awareness",
      imageBg: "bg-[#E6F4FF]", // Light blue
      icon: <Zap strokeWidth={1} className="w-32 h-32 text-gray-800" />,
      layout: "text-right", // Image on left, Text on right
      numberPos: "right", // Number to the right of text
      line: "right", // Line extending right
    },
    {
      id: 3,
      title: "Mind-Body Practice",
      imageBg: "bg-[#F0FFF4]", // Light green
      icon: <Brain strokeWidth={1} className="w-32 h-32 text-gray-800" />,
      layout: "text-left",
      numberPos: "top",
      line: "top", // Line extending up
    },
    {
      id: 4,
      title: "Nervous System Reset",
      imageBg: "bg-[#E0FFFF]", // Light cyan
      icon: <Activity strokeWidth={1} className="w-32 h-32 text-gray-800" />,
      layout: "text-right",
      numberPos: "right",
      line: "right",
    },
    {
      id: 5,
      title: "Support Community",
      imageBg: "bg-[#FFFFF0]", // Light yellow
      icon: <Users strokeWidth={1} className="w-32 h-32 text-gray-800" />,
      layout: "text-left",
      numberPos: "top",
      line: "top",
    },
  ];

  return (
    <div className="w-full bg-white font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Mobile: Simple Stack, Desktop: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {steps.map((step, index) => {
            // Determine if the text should be in the first column or second based on layout
            const isTextFirst = step.layout === "text-left";
            
            // Text Block Component
            const TextBlock = () => (
              <div className="relative h-64 md:h-80 flex flex-col items-center justify-center p-8 bg-white z-10">
                <div className={`flex items-center ${step.numberPos === 'right' ? 'flex-row gap-6' : 'flex-col gap-4'}`}>
                  
                  {/* Number Circle (If Top) */}
                  {step.numberPos === 'top' && (
                    <div className="relative">
                      {/* Connecting Line (Top) */}
                      {step.line === 'top' && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-1 h-24 bg-black" />
                      )}
                      <div className="w-12 h-12 rounded-full border-2 border-black bg-orange-200/50 flex items-center justify-center text-xl font-medium relative z-10">
                        {step.id}
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-semibold text-center text-black max-w-[200px] leading-tight">
                    {step.title}
                  </h3>

                  {/* Number Circle (If Right) */}
                  {step.numberPos === 'right' && (
                    <div className="relative flex items-center">
                      <div className="w-12 h-12 rounded-full border-2 border-black bg-yellow-200/50 flex items-center justify-center text-xl font-medium relative z-10 shrink-0">
                        {step.id}
                      </div>
                       {/* Connecting Line (Right) */}
                       {step.line === 'right' && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 w-32 h-1 bg-black" />
                      )}
                    </div>
                  )}

                </div>
              </div>
            );

            // Image Block Component
            const ImageBlock = () => (
              <div className={`h-64 md:h-80 flex items-center justify-center ${step.imageBg} p-8`}>
                <div className="transform transition-transform hover:scale-105 duration-300">
                  {/* --- PASTE YOUR SVG HERE --- */}
                  {step.icon}
                  {/* --------------------------- */}
                </div>
              </div>
            );

            return (
              <React.Fragment key={step.id}>
                {/* Conditional Rendering for Grid Position */}
                {isTextFirst ? (
                  <>
                    <TextBlock />
                    <ImageBlock />
                  </>
                ) : (
                  <>
                    {/* On Desktop: Image first, then Text. On Mobile: we might want consistent order, but grid-flow-row-dense handles this naturally if we want simple stacking, 
                        but to keep strictly to the checkerboard design on desktop: */}
                    <div className="hidden md:block"><ImageBlock /></div>
                    <div className="hidden md:block"><TextBlock /></div>
                    
                    {/* Mobile Only: Stack visually nicely (Text then Image usually looks better, or maintain checkerboard) */}
                    <div className="md:hidden"><TextBlock /></div>
                    <div className="md:hidden"><ImageBlock /></div>
                  </>
                )}
              </React.Fragment>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Timeline2;