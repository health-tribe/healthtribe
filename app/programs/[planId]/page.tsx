'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { useRouter, useParams } from 'next/navigation';
import { ALL_COURSE_DATA } from '@/lib/data';


// --- CONFIGURATION ---
const USE_BACKEND_API = false;
const GST_RATE = 0.18;
// Define the course ID to display by default (e.g., if this were a static page for 'reboot')
// In a real application, this would come from the URL (e.g., using useRouter)
const DEFAULT_COURSE_ID = 'reboot'; 

// --- TYPES ---
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id?: string;
  handler: (response: any) => void;
  theme?: { color?: string; };
}

interface RazorpayInstance {
  open: () => void;
}

// Global window object type extension for Razorpay
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

// --- COURSE DATA ---
// NOTE: I am moving this data structure outside of the component scope for clarity and standard practice.

// --- COMPONENTS (No changes needed in component logic, only in data reference) ---

// Hero Section
// The type annotation must be corrected to use the shape of the course data object
type CourseDataType = (typeof ALL_COURSE_DATA)[keyof typeof ALL_COURSE_DATA];

const HeroSection = ({ course }: { course: CourseDataType }) => { /* ... (Component Body) ... */ 
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            {course.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-3 font-medium">
            {course.subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {course.tagline}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            <Image
              src={`/assets/plans/${course.heroImage}`}
              alt={course.title}
              fill
              className="object-contain p-8"
              priority
            />
          </div>
        </div>

        <div className="text-center">
          <a href="#pricing" className="inline-block bg-[#00B050] hover:bg-[#009645] text-white font-bold text-lg px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Start Your Transformation
          </a>
          <p className="text-sm text-gray-500 mt-4">14-day money-back guarantee</p>
        </div>
      </div>
    </section>
  );
};

// Pain Points Section
const PainSection = ({ course }: { course: CourseDataType }) => { /* ... (Component Body) ... */ 
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Does This Sound Familiar?
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          You're not alone. These are the exact struggles our clients faced before joining.
        </p>

        <div className="space-y-4">
          {course.painPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-red-500 text-2xl flex-shrink-0">❌</span>
              <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Solution Section
const SolutionSection = ({ course }: { course: CourseDataType }) => { /* ... (Component Body) ... */ 
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#00B050]/5 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Here's What Changes
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          This program gives you clarity, structure, and support—so you can finally make progress that lasts.
        </p>

        <div className="space-y-4">
          {course.outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#00B050]/20 shadow-sm">
              <span className="text-[#00B050] text-2xl flex-shrink-0">✓</span>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Curriculum Accordion Component
const CurriculumAccordion = ({ course }: { course: CourseDataType }) => { /* ... (Component Body) ... */ 
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Your {course.curriculum.length > 0 ? course.curriculum[course.curriculum.length - 1].week.split('-').pop() : ''}-Week Roadmap
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A structured, week-by-week program designed to build sustainable habits.
        </p>

        <div className="space-y-4">
          {course.curriculum.map((module, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-[#00B050] bg-[#00B050]/10 px-3 py-1 rounded-full">
                      {module.week}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  </div>
                  <p className="text-gray-600">{module.description}</p>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-100">
                  <ul className="space-y-3">
                    {module.lessons.map((lesson, lessonIdx) => (
                      <li key={lessonIdx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-[#00B050] mt-1">•</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Differentiators
const PremiumSection = ({ course }: { course: CourseDataType }) => { /* ... (Component Body) ... */ 
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Why This Program Works
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          It's not just about information—it's about implementation with expert support.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {course.differentiators.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = ({ course, isSdkReady }: { course: CourseDataType, isSdkReady: boolean }) => {
  const { pricing } = course;
  const [selectedOptionId, setSelectedOptionId] = useState(
    pricing.options.find(o => o.isRecommended)?.id || pricing.options[0].id
  );
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedOption = pricing.options.find(o => o.id === selectedOptionId) || pricing.options[0];
  const basePrice = selectedOption.price;
  const gstAmount = Math.round(basePrice * GST_RATE);
  const totalAmount = basePrice + gstAmount;

  const handlePayment = async () => {
    if (!isSdkReady) {
      alert("Payment system is loading. Please wait...");
      return;
    }

    setIsProcessing(true);

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_HERE',
      amount: totalAmount * 100, // Razorpay amount is in paise
      currency: 'INR',
      name: "Health Transformation Program",
      description: `${course.title} - ${selectedOption.label}`,
      handler: function (response: any) {
        alert(`Success! Payment ID: ${response.razorpay_payment_id}`);
      },
      theme: { color: '#00B050' },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setIsProcessing(false);
  };

  return (
    <section id="pricing" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Investment in Your Health
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose your commitment level. All plans include full program access and support.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {pricing.options.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedOptionId(option.id)}
              className={`cursor-pointer p-8 rounded-2xl border-2 transition-all relative ${
                selectedOptionId === option.id
                  ? 'border-[#00B050] bg-[#00B050]/5 shadow-lg'
                  : 'border-gray-200 hover:border-[#00B050]/30 bg-white'
              }`}
            >
              {option.isRecommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00B050] text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOptionId === option.id ? 'border-[#00B050]' : 'border-gray-300'
                }`}>
                  {selectedOptionId === option.id && (
                    <div className="w-3 h-3 bg-[#00B050] rounded-full" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{option.label}</h3>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">₹{option.price.toLocaleString('en-IN')}</span>
                <span className="text-gray-500 ml-2">/ {option.period}</span>
              </div>

              {option.savings && (
                <p className="text-[#00B050] font-semibold">
                  Save ₹{option.savings.toLocaleString('en-IN')}
                </p>
              )}

              <p className="text-gray-600 mt-2">{option.commitment} commitment</p>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Everything You Get:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {pricing.includes.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#00B050] mt-1 flex-shrink-0">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-gradient-to-br from-[#00B050] to-[#009645] text-white rounded-2xl p-8 shadow-xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Payment Summary</h3>

            <div className="space-y-3 mb-6 pb-6 border-b border-white/20">
              <div className="flex justify-between text-lg">
                <span>Program Fee ({selectedOption.label})</span>
                <span>₹{basePrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>GST ({GST_RATE * 100}%)</span>
                <span>₹{gstAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-sm text-white/80 mb-1">Total Amount</p>
                <p className="text-xs text-white/60">All taxes included</p>
              </div>
              <span className="text-4xl font-bold">₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>

            <button
              onClick={handlePayment}
              disabled={isProcessing || !isSdkReady}
              className={`w-full py-5 rounded-xl font-bold text-xl transition-all ${
                isProcessing || !isSdkReady
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-[#00B050] hover:bg-gray-50 shadow-lg hover:shadow-xl'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Unlock Your Program'}
            </button>

            <div className="mt-6 text-center">
              <p className="text-white/90 mb-2">🔒 Secure payment powered by Razorpay</p>
              <p className="text-sm text-white/70">{pricing.guarantee}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Soft CTA Footer
const FooterCTA = () => { /* ... (Component Body) ... */ 
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Start?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join hundreds of professionals who transformed their health without compromising their lifestyle.
        </p>
        <a href="#pricing" className="inline-block bg-[#00B050] hover:bg-[#009645] text-white font-bold text-lg px-10 py-4 rounded-full transition-all">
          View Plans
        </a>
      </div>
    </section>
  );
};

// --- MAIN PAGE ---
export default function CoursePage() {
  const router = useRouter();
  const params = useParams();
  const [isSdkReady, setIsSdkReady] = useState(false);

  const planIdFromRouter = (router as any)?.query?.planId;
  const planIdFromParams = params?.planId;

  const normalizedRouterId = Array.isArray(planIdFromRouter)
    ? planIdFromRouter[0]
    : planIdFromRouter;

  const normalizedParamId = Array.isArray(planIdFromParams)
    ? planIdFromParams[0]
    : planIdFromParams;

  const requestedPlanId = normalizedRouterId ?? normalizedParamId;
  const effectivePlanId =
    typeof requestedPlanId === 'string' && requestedPlanId.trim().length > 0
      ? requestedPlanId
      : DEFAULT_COURSE_ID;

  const courseData =
    ALL_COURSE_DATA[effectivePlanId as keyof typeof ALL_COURSE_DATA];
  
  if (
    typeof requestedPlanId === 'string' &&
    requestedPlanId.trim().length > 0 &&
    !courseData
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold text-gray-700">
        Course Not Found
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold text-gray-700">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setIsSdkReady(true)}
        onError={() => console.error("Payment system failed to load")}
      />

      <HeroSection course={courseData} />
      <PainSection course={courseData} />
      <SolutionSection course={courseData} />
      <CurriculumAccordion course={courseData} />
      <PremiumSection course={courseData} />
      <PricingSection course={courseData} isSdkReady={isSdkReady} />
      <FooterCTA />
    </div>
  );
}