import React from 'react';
import { Dumbbell, Puzzle, Monitor, Leaf, ClipboardList, Users } from 'lucide-react';

const Timeline1 = () => {
  const steps = [
    {
      id: 1,
      title: "STRENGTH TRAINING",
      description: "Building joints strength and stability",
      color: "bg-orange-100", // Light background for text (if needed, though image shows white for first)
      dotColor: "bg-orange-300",
      blobColor: "bg-orange-200",
      icon: <Dumbbell className="w-12 h-12 text-gray-800" />,
      position: "right", // Text is on the right
    },
    {
      id: 2,
      title: "AWARENESS SESSION",
      description: "Interactive Sessions with Doctors and Experts",
      color: "bg-yellow-50",
      dotColor: "bg-yellow-300",
      blobColor: "bg-yellow-300",
      icon: <Puzzle className="w-12 h-12 text-gray-800" />,
      position: "left", // Text is on the left
    },
    {
      id: 3,
      title: "AWARENESS SESSION",
      description: "Interactive Sessions with Doctors and Experts",
      color: "bg-green-50",
      dotColor: "bg-green-300",
      blobColor: "bg-green-200",
      icon: <Monitor className="w-12 h-12 text-gray-800" />,
      position: "right",
    },
    {
      id: 4,
      title: "YOGA & DETOX SESSIONS",
      description: "Yoga therapy for vital organ blood circulation",
      color: "bg-blue-100",
      dotColor: "bg-blue-400",
      blobColor: "bg-blue-200",
      icon: <Leaf className="w-12 h-12 text-gray-800" />,
      position: "left",
    },
    {
      id: 5,
      title: "NUTRITION AND FOOD CHOICE",
      description: "Focus on nutrition & fixing and emotional eating.",
      color: "bg-pink-100",
      dotColor: "bg-pink-300",
      blobColor: "bg-pink-200",
      icon: <ClipboardList className="w-12 h-12 text-gray-800" />,
      position: "right",
    },
    {
      id: 6,
      title: "COMMUNITY SUPPORT",
      description: "Collective success with like minded people",
      color: "bg-cyan-100",
      dotColor: "bg-cyan-300",
      blobColor: "bg-cyan-200",
      icon: <Users className="w-12 h-12 text-gray-800" />,
      position: "left",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black rounded-full" />

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-center justify-between min-h-[180px]">
              
              {/* Central Dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-black z-10 ${step.dotColor}`} />

              {/* Layout Logic: 
                  If position is 'left': Text is on Left, Image is on Right.
                  If position is 'right': Image is on Left, Text is on Right.
              */}

              {/* LEFT SIDE BLOCK */}
              <div className="w-1/2 pr-12 flex justify-end">
                {step.position === 'left' ? (
                  // TEXT CONTENT (Left)
                  <div className={`w-full py-12 pr-8 pl-4 rounded-l-xl ${step.color} flex flex-col items-end text-right transition-all hover:shadow-md`}>
                    <h3 className="text-xl font-bold text-black uppercase mb-1">{step.title}</h3>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">{step.description}</p>
                  </div>
                ) : (
                  // IMAGE CONTENT (Left)
                  <div className="flex justify-center items-center w-full py-6">
                     {/* Blob Background for Image */}
                    <div className={`relative flex items-center justify-center w-40 h-32 ${step.blobColor} rounded-[2rem] rounded-tr-none rounded-bl-3xl transform -rotate-3 transition-transform hover:rotate-0`}>
                       {/* SVG Placeholder */}
                       <div className="transform rotate-3">
                          {/* REPLACE THE LINE BELOW WITH YOUR UPLOADED SVG */}
                          {step.icon}
                       </div>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT SIDE BLOCK */}
              <div className="w-1/2 pl-12 flex justify-start">
                {step.position === 'right' ? (
                  // TEXT CONTENT (Right)
                  <div className={`w-full py-12 pl-8 pr-4 rounded-r-xl ${step.color} flex flex-col items-start text-left transition-all hover:shadow-md`}>
                    <h3 className="text-xl font-bold text-black uppercase mb-1">{step.title}</h3>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">{step.description}</p>
                  </div>
                ) : (
                  // IMAGE CONTENT (Right)
                  <div className="flex justify-center items-center w-full py-6">
                    {/* Blob Background for Image */}
                    <div className={`relative flex items-center justify-center w-40 h-32 ${step.blobColor} rounded-[2rem] rounded-tl-none rounded-br-3xl transform rotate-3 transition-transform hover:rotate-0`}>
                       {/* SVG Placeholder */}
                       <div className="transform -rotate-3">
                          {/* REPLACE THE LINE BELOW WITH YOUR UPLOADED SVG */}
                          {step.icon}
                       </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline1;