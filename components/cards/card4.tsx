import React from 'react';
import { Stethoscope, Users, Music, BookOpen } from 'lucide-react';

const Timeline4 = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-hidden py-10 relative">
      <div className="max-w-6xl mx-auto px-4 relative h-full">
        
        {/* --- DESKTOP VIEW (Custom Coordinate Layout) --- */}
        <div className="hidden md:block relative w-full h-[1000px]">
          
          {/* SVG BACKGROUND PATH 
            - Dotted line style
            - Winds through the specific coordinates of the design
          */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <path
              d="M 0 20 
                 Q 14 20 14 120 
                 Q 14 180 35 180 
                 T 60 180
                 Q 85 180 85 280
                 Q 85 340 60 340
                 T 42 450
                 Q 25 550 42 650
                 T 85 800"
              fill="none"
              stroke="#333"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-60"
              // Note: This path is an approximation of the snake shape. 
              // Adjust control points (Q) if you need the curve to be wider/tighter.
            />
          </svg>

          {/* --- SECTION 1: SYSTEM RESET --- */}
          {/* Dot 1 (Orange) - Top Left */}
          <div className="absolute left-[14%] top-[12%] w-8 h-8 rounded-full border-2 border-black bg-orange-200 z-10 transform -translate-x-1/2 -translate-y-1/2" />
          
          {/* Image 1 (Doctor) - Top Center-Left */}
          <div className="absolute left-[30%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Blob Background */}
              <div className="absolute inset-0 bg-orange-100 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] transform scale-125 -rotate-6 -z-10" />
              {/* PASTE DOCTOR SVG HERE */}
              <Stethoscope className="w-32 h-32 text-gray-800 relative z-10" strokeWidth={1} />
            </div>
          </div>

          {/* Text 1 - Top Right */}
          <div className="absolute left-[55%] top-[15%] w-[40%] transform -translate-y-1/2 z-10 text-left pl-8">
            <h2 className="text-3xl font-bold mb-3 text-black">System Reset</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Starting with assessment with appointment with doctor, psychologists and other experts to identify the root cause and prepare the plan with medical and wellness interventions
            </p>
          </div>


          {/* --- SECTION 2: REINFORCEMENT --- */}
          {/* Dot 2 (Green) - Middle Right-ish */}
          <div className="absolute left-[60%] top-[34%] w-8 h-8 rounded-full border-2 border-black bg-green-200 z-10 transform -translate-x-1/2 -translate-y-1/2" />

          {/* Text 2 - Middle Left */}
          <div className="absolute right-[55%] top-[35%] w-[40%] transform -translate-y-1/2 z-10 text-right pr-8">
            <h2 className="text-3xl font-bold mb-3 text-black">Reinforcement</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Assess the impact and optimize the plan as required. This phase will help you boost your energy and move forward on the health recovery path.
            </p>
          </div>

          {/* Image 2 (Couple) - Middle Right */}
          <div className="absolute left-[75%] top-[35%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-green-100 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] transform scale-125 rotate-3 -z-10" />
              {/* PASTE COUPLE SVG HERE */}
              <Users className="w-32 h-32 text-gray-800 relative z-10" strokeWidth={1} />
            </div>
          </div>


          {/* --- SECTION 3: RECOVERY --- */}
          {/* Dot 3 (Blue) - Center Left-ish */}
          <div className="absolute left-[42%] top-[55%] w-8 h-8 rounded-full border-2 border-black bg-blue-300 z-10 transform -translate-x-1/2 -translate-y-1/2" />

          {/* Image 3 (Music/Meditate) - Left Side */}
          <div className="absolute left-[25%] top-[60%] transform -translate-x-1/2 -translate-y-1/2 z-10">
             <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%] transform scale-125 -rotate-2 -z-10" />
              {/* PASTE MUSIC/MEDITATE SVG HERE */}
              <Music className="w-32 h-32 text-gray-800 relative z-10" strokeWidth={1} />
            </div>
          </div>

          {/* Text 3 - Right Side */}
          <div className="absolute left-[55%] top-[60%] w-[40%] transform -translate-y-1/2 z-10 text-left pl-8">
            <h2 className="text-3xl font-bold mb-3 text-black">Recovery</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              With body metabolism adaptation, this phase will speed up your recovery and your consistent efforts will show up results. Plan will be optimized to boost your recovery.
            </p>
          </div>


          {/* --- SECTION 4: SUSTAINABILITY --- */}
          {/* Dot 4 (Purple) - Bottom Center */}
          <div className="absolute left-[40%] top-[80%] w-8 h-8 rounded-full border-2 border-black bg-purple-300 z-10 transform -translate-x-1/2 -translate-y-1/2" />

          {/* Text 4 - Left Side */}
          <div className="absolute right-[55%] top-[85%] w-[40%] transform -translate-y-1/2 z-10 text-right pr-8">
            <h2 className="text-3xl font-bold mb-3 text-black">Sustainability</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Final assessment and peer support group reinforcement. Final counseling with experts, family and mentors.
            </p>
          </div>

          {/* Image 4 (Reading/Bench) - Bottom Right */}
          <div className="absolute left-[75%] top-[85%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-100 rounded-[50%_50%_30%_70%_/_50%_70%_30%_70%] transform scale-125 rotate-6 -z-10" />
              {/* PASTE BENCH/READING SVG HERE */}
              <BookOpen className="w-32 h-32 text-gray-800 relative z-10" strokeWidth={1} />
            </div>
          </div>

        </div>

        {/* --- MOBILE VIEW (Vertical Stack) --- */}
        <div className="md:hidden flex flex-col space-y-12 pb-10">
          {[
            { 
              title: "System Reset", 
              desc: "Starting with assessment with appointment with doctor, psychologists and other experts...", 
              icon: <Stethoscope className="w-24 h-24" />, 
              color: "bg-orange-100" 
            },
            { 
              title: "Reinforcement", 
              desc: "Assess the impact and optimize the plan as required...", 
              icon: <Users className="w-24 h-24" />, 
              color: "bg-green-100" 
            },
            { 
              title: "Recovery", 
              desc: "With body metabolism adaptation, this phase will speed up your recovery...", 
              icon: <Music className="w-24 h-24" />, 
              color: "bg-blue-100" 
            },
            { 
              title: "Sustainability", 
              desc: "Final assessment and peer support group reinforcement...", 
              icon: <BookOpen className="w-24 h-24" />, 
              color: "bg-purple-100" 
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <div className={`mb-6 p-6 rounded-full ${item.color}`}>
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Timeline4;