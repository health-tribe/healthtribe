import Image from "next/image";

export default function ComingSoon() {
  // Common styles for both mobile and desktop phone images
  // This prevents repeating the long class string twice
  const phoneImageStyle =
    "h-auto w-full drop-shadow-2xl transition-all duration-700 ease-in-out hover:scale-[1.02] hover:-translate-y-2";

  return (
    <main className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-gray-50">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/assets/join.png"
          alt="Background pattern"
          fill
          className="object-cover opacity-60 mix-blend-multiply" 
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Optional: Gradient fade at bottom to blend phone into background smoothly */}
        <div className="absolute bottom-0 h-1/3 w-full bg-linear-to-t from-gray-50 to-transparent" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex grow flex-col items-center justify-between">
        
        {/* 1. Header / Text Section */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 pt-12 text-center md:pt-20">
         
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
     Starting from January!!
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-600 md:text-xl">
            We are crafting an experience that redefines the standard. 
            <br className="hidden md:block" /> Stay tuned for the big reveal.
          </p>
        </div>

        {/* 2. Phone Image Container */}
        {/* 'pb-0' ensures it touches the bottom, but we manage max-width carefully */}
        <div className="flex w-full justify-center px-6 pb-0 md:px-0">
          <div className="relative w-full max-w-[400px] md:max-w-[450px]">
            
            {/* Desktop Image (Hidden on Mobile) */}
            <div className="hidden md:block">
              <Image
                src="/assets/i-12.png"
                alt="App Interface Desktop Preview"
                width={600}
                height={1200}
                className={phoneImageStyle}
                priority
                sizes="(min-width: 768px) 450px, 100vw"
              />
            </div>

            {/* Mobile Image (Hidden on Desktop) */}
            <div className="block md:hidden">
              <Image
                src="/assets/images/i-12-sm.png"
                alt="App Interface Mobile Preview"
                width={400}
                height={1000}
                className={phoneImageStyle}
                priority
                sizes="(max-width: 768px) 300px, 100vw"
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
