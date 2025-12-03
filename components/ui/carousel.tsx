import React from 'react';
import { 
  PlayCircle, 
  Users, 
  Trophy, 
  ArrowRight, 
  Clock, 
  Activity, 
  CheckCircle2,
  Smartphone
} from 'lucide-react';

// Simple mock for Next.js Link to make this preview runnable. 
// In your project, revert this to: import Link from 'next/link';
const Link = ({ href, children }: { href: string; children: React.ReactNode }) => <a href={href} className="contents">{children}</a>;

const ProgramShowcase = () => {
  // Mock Data for Programs
  const programs = [
    {
      id: 1,
      title: "Foundation Reset Program",
      tagline: "Heal your digestion and boost natural energy.",
      image: "/assets/FOUNDATION.svg", // Replaced with Unsplash for preview
      duration: "3 Weeks",
      level: "Beginner",
      category: "Nutrition",
      badge: "Best Seller",
      price: "",
      url: "/programs/foundation-reset"
    },
    {
      id: 2,
      title: "Comprehensive Health Reboot",
      tagline: "Focused on lifestyle diseases along with expert doctors and coaches",
      image: "/assets/Comp.svg", // Replaced with Unsplash for preview
      duration: "4 Weeks",
      level: "All Levels",
      category: "Movement",
      badge: "Trending",
     price: "",
      url: "/programs/reboot"
    },
    {
      id: 3,
      title: "Move Better: Lifestyle & Mobility",
      tagline: "Is your sedentary work life taking a toll on your neck, back and joints?",
      image: "/assets/MoveB.svg", // Replaced with Unsplash for preview
      duration: "8 Weeks",
      level: "Intermediate",
      category: "Fitness",
      badge: null,
      price: "",
       url: "/programs/move-better"
    },
     {
      id: 4,
      title: "Rejuvenation Of Mind & Body",
      tagline: "Learn to win over stress and anxiety and reclaim your happiness",
      image: "/assets/Reju.svg", // Replaced with Unsplash for preview
      duration: "8 Weeks",
      level: "Intermediate",
      category: "Fitness",
      badge: null,
       price: "",
         url: "/programs/rejuvenation"
    }
  ];

  return (
    <div id="programs" className="font-sans text-stone-800">
      
      {/* SECTION C: PROGRAM SHOWCASE */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">
              Our Programs
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              Choose Your Path to Wellness
            </h3>
            <p className="text-stone-600 text-lg">
              Science-backed curriculums designed to help you build sustainable habits, not just temporary results.
            </p>
          </div>

          {/* Cards Grid 
              Updated: lg:grid-cols-2 (was 3) to create a 2x2 layout for 4 items 
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full"
              >
                {/* Card Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge */}
                  {program.badge && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-sm uppercase tracking-wide">
                      {program.badge}
                    </div>
                  )}
                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 bg-emerald-900/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-medium text-white flex items-center gap-1">
                    <Activity size={12} /> {program.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs font-medium text-stone-500 mb-3">
                    <span className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded">
                      <Clock size={12} /> {program.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded">
                      <Users size={12} /> {program.level}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h4 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {program.title}
                  </h4>
                  <p className="text-stone-600 text-sm mb-6 line-clamp-2">
                    {program.tagline}
                  </p>

                  {/* Bottom Action Area */}
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-lg font-bold text-stone-900">{program.price}</span>
                    <Link href={program.url}> 
                      <button className="flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:text-emerald-800 transition-colors">
                        Know More <ArrowRight size={16} />
                      </button>
                    </Link> 
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* REMOVED: Bottom CTA "Browse All Programs" button was here */}

        </div>
      </section>

      {/* SECTION D: HOW IT WORKS (Timeline) */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decor Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-stone-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              How It Works
            </h2>
            <p className="text-stone-600 text-lg max-w-xl mx-auto">
              Your journey to a healthier lifestyle is simple, structured, and supported every step of the way.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-emerald-200 to-transparent z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-emerald-50 flex items-center justify-center shadow-lg mb-6 group-hover:border-emerald-200 group-hover:scale-110 transition-all duration-300">
                  <Smartphone className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="bg-stone-50 px-3 py-1 rounded-full text-xs font-bold text-stone-500 mb-3 tracking-wide">
                  STEP 01
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Pick Your Plan</h3>
                <p className="text-stone-600 text-sm px-4">
                  Select a program that matches your goals. Get instant access to your dashboard and welcome guide.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-emerald-50 flex items-center justify-center shadow-lg mb-6 group-hover:border-emerald-200 group-hover:scale-110 transition-all duration-300">
                  <PlayCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="bg-stone-50 px-3 py-1 rounded-full text-xs font-bold text-stone-500 mb-3 tracking-wide">
                  STEP 02
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Follow The Guide</h3>
                <p className="text-stone-600 text-sm px-4">
                  Log in daily for guided video sessions, nutrition plans, and habit-tracking tools designed for busy lives.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-emerald-50 flex items-center justify-center shadow-lg mb-6 group-hover:border-emerald-200 group-hover:scale-110 transition-all duration-300">
                  <Trophy className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="bg-stone-50 px-3 py-1 rounded-full text-xs font-bold text-stone-500 mb-3 tracking-wide">
                  STEP 03
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">See Results</h3>
                <p className="text-stone-600 text-sm px-4">
                  Feel the difference in your energy, sleep, and strength. Join our community of success stories.
                </p>
              </div>

            </div>
          </div>
          
          {/* Trust Indicators / Micro-social proof */}
          <div className="mt-20 pt-10 border-t border-stone-100 flex flex-col md:flex-row items-center justify-center gap-8 text-stone-500 text-sm font-medium">
             <div className="flex items-center gap-2">
               <CheckCircle2 className="text-emerald-500 w-5 h-5" /> 100% Science-Backed
             </div>
             <div className="hidden md:block w-1 h-1 bg-stone-300 rounded-full"></div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="text-emerald-500 w-5 h-5" /> Lifetime Access
             </div>
             <div className="hidden md:block w-1 h-1 bg-stone-300 rounded-full"></div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="text-emerald-500 w-5 h-5" /> Expert Support
             </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ProgramShowcase;
