import React from 'react';
import { User, Zap, Brain, Activity, Users } from 'lucide-react';

const Timeline3 = () => {
  // Configuration for the nodes in the path
  // x, y are percentages (0-100) for position on the container
  const items = [
    {
      id: 1,
      type: 'icon',
      x: 12,
      y: 10,
      color: 'border-orange-200',
      bgColor: 'bg-white',
      // PASTE YOUR SVG INSIDE THIS ICON PROP
      icon: <User className="w-10 h-10 text-gray-700" />,
    },
    {
      id: 2,
      type: 'text',
      text: "Developed under expert Physiotherapist guidance",
      x: 42,
      y: 15,
      blobShape: "rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%]",
      bgColor: "bg-[#FFE4D6]", // Peach
      width: "w-48",
    },
    {
      id: 3,
      type: 'icon',
      x: 82,
      y: 18,
      color: 'border-yellow-200',
      bgColor: 'bg-white',
      icon: <Zap className="w-10 h-10 text-gray-700" />,
    },
    {
      id: 4,
      type: 'text',
      text: "Posture correction to reduce daily discomfort",
      x: 80,
      y: 45,
      blobShape: "rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]",
      bgColor: "bg-[#FFF8DC]", // Cream
      width: "w-48",
    },
    {
      id: 5,
      type: 'icon',
      x: 50,
      y: 45,
      color: 'border-blue-200',
      bgColor: 'bg-white',
      icon: <Brain className="w-12 h-12 text-gray-700" />,
      scale: 1.2, // Center one is slightly bigger in reference image
    },
    {
      id: 6,
      type: 'text',
      text: "Structural support training & joint strengthening exercises",
      x: 18,
      y: 32,
      blobShape: "rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]",
      bgColor: "bg-[#E6E6FA]", // Lavender
      width: "w-56",
    },
    {
      id: 7,
      type: 'icon',
      x: 18,
      y: 65,
      color: 'border-pink-200',
      bgColor: 'bg-white',
      icon: <Activity className="w-10 h-10 text-gray-700" />,
    },
    {
      id: 8,
      type: 'text',
      text: "Core engagement & stability enhancement",
      x: 52,
      y: 68,
      blobShape: "rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%]",
      bgColor: "bg-[#FFE4E1]", // Pink
      width: "w-48",
    },
    {
      id: 9,
      type: 'icon',
      x: 82,
      y: 80,
      color: 'border-teal-200',
      bgColor: 'bg-white',
      icon: <Users className="w-10 h-10 text-gray-700" />,
    },
    {
      id: 10,
      type: 'text',
      text: "Workplace focused pain prevention & management",
      x: 25,
      y: 85,
      blobShape: "rounded-[50%_50%_30%_70%_/_50%_70%_30%_70%]",
      bgColor: "bg-[#E0FFFF]", // Cyan
      width: "w-52",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-hidden py-10 relative">
      <div className="max-w-6xl mx-auto px-4 relative h-full">
        
        {/* --- DESKTOP VIEW (The Custom Layout) --- */}
        <div className="hidden md:block relative w-full h-[800px]">
          
          {/* SVG Connector Path */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            {/* This path connects the centers of the nodes. 
              Coordinates are roughly mapped from percentages to the viewbox 100x100 
            */}
            <path
              d="M 12 10 Q 27 12 42 15 T 82 18 Q 85 30 80 45 T 50 45 Q 35 45 18 32 T 18 65 Q 35 68 52 68 T 82 80 Q 50 85 25 85"
              fill="none"
              stroke="#333"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="opacity-70"
              vectorEffect="non-scaling-stroke"
              // Note: vectorEffect ensures stroke width stays constant regardless of scaling
            />
          </svg>

          {items.map((item) => (
            <div
              key={item.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all hover:scale-105 duration-300"
              style={{ left: `${item.x}%`, top: `${item.y}%`, zIndex: 10 }}
            >
              {item.type === 'icon' ? (
                // ICON NODE
                <div 
                  className={`rounded-full border-[6px] ${item.color} ${item.bgColor} shadow-lg flex items-center justify-center`}
                  style={{ 
                    width: item.scale ? `${120 * item.scale}px` : '100px', 
                    height: item.scale ? `${120 * item.scale}px` : '100px' 
                  }}
                >
                  {/* --- PASTE YOUR SVG HERE --- */}
                  {item.icon}
                  {/* --------------------------- */}
                </div>
              ) : (
                // TEXT BLOB NODE
                <div 
                  className={`${item.bgColor} ${item.blobShape} p-6 flex items-center justify-center text-center shadow-sm ${item.width}`}
                  style={{ minHeight: '100px' }}
                >
                  <p className="font-semibold text-gray-800 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- MOBILE VIEW (Simple Vertical Stack) --- */}
        <div className="md:hidden flex flex-col space-y-8 items-center pb-12">
           {items.map((item) => (
             <div key={item.id} className="w-full flex justify-center">
               {item.type === 'icon' ? (
                  <div className={`rounded-full border-4 ${item.color} ${item.bgColor} w-32 h-32 flex items-center justify-center shadow-md`}>
                    {/* --- PASTE YOUR SVG HERE (For Mobile too) --- */}
                    {item.icon}
                  </div>
               ) : (
                 <div className={`${item.bgColor} ${item.blobShape} w-4/5 p-6 text-center shadow-sm`}>
                   <p className="font-bold text-gray-800">{item.text}</p>
                 </div>
               )}
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default Timeline3;