'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, User } from 'lucide-react';

import { testimonialsData } from '@/lib/data';
import { StarRatingProps, TestimonialCardProps } from '@/lib/types';

// 1. UPDATED: StarRating now handles color based on isActive
const StarRating: React.FC<StarRatingProps> = ({ rating, isActive }) => {
    const stars = Array(5).fill(0).map((_, index) => {
        const filled = index < rating;
        
        // Logic: If active & filled -> Yellow. If inactive & filled -> Gray. Empty -> Light Gray.
        let colorClass = 'text-gray-200'; 
        
        if (filled) {
            colorClass = isActive 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-400 fill-gray-400';
        }

        return (
            <Star
                key={index}
                className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-200 ${colorClass}`}
                strokeWidth={1.5}
            />
        );
    });

    return <div className="flex space-x-0.5">{stars}</div>;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, rating, isActive, onClick }) => {
    // Styles for the active (middle) card
    const activeClasses = 'bg-[#D4FFE8]/50 scale-105 ring-4 ring-[#D4FFE8]/40 z-10 border border-gray-200 opacity-100';
    // Styles for inactive (side) cards
    const inactiveClasses = 'bg-white opacity-60 scale-95 hover:opacity-80 border border-gray-200 cursor-pointer';

    return (
        <div
            onClick={onClick}
           className={`
    mx-6 md:mx-0
    p-6 md:p-8 rounded-2xl transition-all duration-500 ease-in-out 
    h-full min-h-[320px] md:min-h-[380px] flex flex-col justify-between relative 
    ${isActive ? activeClasses : inactiveClasses}
  `}
        >
            {/* Quote Content */}
            <div className="relative z-10">
                <Quote className={`w-8 h-8 mb-4 rotate-180 fill-lime-200 ${isActive ? 'text-lime-600' : 'text-gray-300'}`} />
                <p className={`font-inter leading-relaxed ${isActive ? 'text-gray-800 text-lg md:text-xl' : 'text-gray-500 text-base'}`}>
                    "{quote}"
                </p>
            </div>

            {/* 2. IMPROVEMENT: Author Section (Name & Role) */}
            <div className="mt-6 flex items-center gap-4 border-t border-gray-200/50 pt-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? 'bg-lime-200 text-lime-800' : 'bg-gray-100 text-gray-500'}`}>
                    <span className="font-bold text-sm">{name.charAt(0)}</span>
                </div>
                <div className="text-left">
                    <h4 className={`font-bold text-sm ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                        {name}
                    </h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                        {role}
                    </p>
                </div>
            </div>

            {/* Floating Rating Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full border border-gray-100 flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400"></span>
                <StarRating rating={rating} isActive={isActive} />
            </div>
        </div>
    );
};

export default function TestimonialSlider() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    // Wrapped in useCallback to stay stable for dependencies
    const handleNext = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, []);

    const handlePrev = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    }, []);

    // 3. IMPROVEMENT: Optimized Autoplay (5 seconds instead of 2)
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Changed to 5000ms (5 seconds) for better readability

        return () => clearInterval(interval);
    }, [isPaused, handleNext]);

    // Calculate indices
    const prevIndex = (activeIndex - 1 + testimonialsData.length) % testimonialsData.length;
    const nextIndex = (activeIndex + 1) % testimonialsData.length;

    // Create the visible array with click handlers logic
    const visibleCards = [
        { data: testimonialsData[prevIndex], clickHandler: handlePrev, isActive: false },
        { data: testimonialsData[activeIndex], clickHandler: undefined, isActive: true },
        { data: testimonialsData[nextIndex], clickHandler: handleNext, isActive: false },
    ];

    return (
        <section className="mb-10 pb-10 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header Section */}
                <div className="mb-16 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-4">
                        <Quote className="w-10 h-10 rotate-180 text-lime-500 fill-lime-100" />
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-600">
                            Success Stories
                        </p>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Why Clients <span className="text-lime-600">Trust Us</span>
                    </h1>
                </div>

                {/* Slider Section */}
                <div
                    className="relative flex items-center justify-center max-w-6xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Left Navigation Arrow */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white rounded-full shadow-xl transition-all duration-300 hover:bg-[#D4FFE8] hover:scale-110 text-gray-700 focus:outline-none ring-1 ring-gray-100"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Testimonial Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
                        {visibleCards.map((card, index) => (
                            <div
                                key={`${card.data.id}-${index}`}
                                className={`transform transition-all duration-500 
                                    ${index === 1 ? 'md:col-span-1 block' : 'md:col-span-1 hidden md:block'}
                                `}
                            >
                                <TestimonialCard
                                    name={card.data.name}
                                    role={card.data.role}
                                    quote={card.data.quote}
                                    rating={card.data.rating}
                                    isActive={card.isActive}
                                    onClick={card.clickHandler}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                        className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white rounded-full shadow-xl transition-all duration-300 hover:bg-lime-500 hover:text-white hover:scale-110 text-gray-700 focus:outline-none ring-1 ring-gray-100"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Navigation Dots (Optional enhancement for mobile view) */}
                <div className="flex md:hidden justify-center mt-8 gap-2">
                    {testimonialsData.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                                idx === activeIndex ? 'bg-lime-500 w-6' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}