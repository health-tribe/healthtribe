import React from 'react';
import { Mail, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

// Next.js Link replacement for simple anchors
import type { NavLinkProps } from '@/lib/types';

const NavLink = ({ href, children, className = '' }: NavLinkProps) => (
    <a
        href={href}
        className={`hover:underline transition-colors block py-2 md:py-0 ${className}`}
    >
        {children}
    </a>
);

export default function App() {
    // Navigation items
    const navItems = [
        { name: 'Contact Us', href: '/contact' },
        { name: 'About Us', href: '/about' },
        { name: 'Our programs', href: '/programs' },
        { name: 'Articles', href: '/articles' },
        { name: 'FAQs', href: '/faqs' },
    ];

    // Legal items
    const legalItems = [
      { name: 'Cancellation and refund', href: '/cancellation' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms and Condition', href: '/terms' },
         { name: 'Shipping', href: '/shipping' },
        
    ];

    const currentYear = new Date().getFullYear();

    return (
        // Main footer container, using the requested hex color #14AE5C for the background
        <footer
            id="footer"
            className="text-black font-sans m-0 p-0"
            style={{ backgroundColor: '#F5F5F5' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* TOP SECTION: Links and Newsletter */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">

                    {/* 1. Navigation Links */}
                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-8 text-lg font-light">
                        {navItems.map((item) => (
                            <NavLink key={item.name} href={item.href}>
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* 2. Newsletter Sign-up */}
                    <div className="w-full md:w-auto md:max-w-md">
                        <h3 className="text-xl font-semibold mb-4 whitespace-nowrap">Join Us Now</h3>
                        <form className="flex space-x-4 items-center w-full max-w-lg p-2 rounded-xl">

                            {/* Email Input Field */}
                            <div className="relative flex grow">
                                {/*
            NOTE: The Mail icon has been removed to match the image provided.
            The input field now has a solid background (bg-green-500) and 
            a prominent white border to match the visual style of the image.
          */}
                                <input
                                    type="email"
                                    placeholder="Your Email Here"
                                    // Adjusted classes to match the image:
                                    // 1. bg-green-500 for the solid background color.
                                    // 2. text-white for the input text color.
                                    // 3. border-2 border-white for the light outline.
                                    // 4. px-5 (instead of px-10) since there is no icon.
                                    // 5. rounded-full for the pill shape.
                                    className="w-full px-5 py-3  border-2 border-black rounded-full placeholder-black/80 text-black focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300"
                                    aria-label="Your Email Here"
                                    required
                                />
                            </div>

                            {/* Join Button */}
                            {/* We use the Button placeholder and style it to match the input background color */}
                            <Button
                                // Custom classes to match the image:
                                // 1. bg-green-500 (same color as input background).
                                // 2. hover:bg-green-400 for a subtle interaction effect.
                                // 3. rounded-full for the pill shape.

                                className="bg-transparent px-8 py-6 hover:bg-green-400 border-2 border-black text-black rounded-full whitespace-nowrap"
                                type="submit"
                            >
                                Join
                            </Button>
                        </form>

                        {/* Privacy Policy text */}
                        <p className="mt-3 text-sm text-black">
                            By joining, you accept our <NavLink href="/privacy" className="inline text-black hover:text-green-300 hover:underline">Privacy Policy</NavLink>.
                        </p>
                    </div>
                </div>

                {/* Separator Line: Updated to a subtle white line for better contrast with the custom background color */}
                <div className="mt-12 mb-8 border-t border-white border-opacity-30"></div>

                {/* BOTTOM SECTION: Legal and Copyright */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm space-y-4 md:space-y-0">

                    {/* Legal Links (Left side on desktop) */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                        {legalItems.map((item) => (
                            <NavLink key={item.name} href={item.href}>
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Copyright (Right side on desktop) */}
                    <p className="text-black md:text-right">
                        © {currentYear} Health Tribe. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
