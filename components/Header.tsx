import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Removed imports for 'next/image' and 'next/link'

// --- Internal Types Definitions for self-containment ---
const NAV_ITEMS = ['Home', 'Explore', 'Services', 'About Us'] as const
type NavItemType = typeof NAV_ITEMS[number]

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  customColor?: string;
  customTextColor?: 'text-white' | 'text-dark';
}

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
  onSelect: (item: NavItemType) => void;
  onClose?: () => void;
  href: string; // Added href property
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeNavItem: NavItemType;
  onNavSelect: (item: string) => void;
}
// --------------------------------------------------------

const NAV_PATHS: Record<NavItemType, string> = {
  Home: '/',
  Explore: '#', // Link is handled by dropdown, but required for type safety
  Services: '/#programs', // Path set to '/'
  'About Us': '/#faq', // Path set to '/'
};

const EXPLORE_OPTIONS = [
  { label: 'Programs', href: '/#programs' },
  { label: 'Workshops', href: '/' },
  { label: 'Resources', href: '/#faq' },
  { label: 'Community', href: '/#footer' }
]

// --- Utility Components ---

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  className = '',
  customColor,
  customTextColor,
  children,
  ...props
}) => {
  const base = 'inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none rounded-full'

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    default: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  }

  let dynamicStyle: React.CSSProperties = {}
  let variantClass = ''

  if (variant === 'primary') {
    if (customColor) {
      dynamicStyle = { backgroundColor: customColor, color: customTextColor === 'text-white' ? '#fff' : '#111827' }
      variantClass = 'shadow-md hover:brightness-105'
    } else {
      variantClass = 'bg-[#10B981] hover:bg-[#059669] text-white shadow-md shadow-green-200'
    }
  } else if (variant === 'outline') {
    if (customColor) {
      dynamicStyle = { borderColor: customColor, color: customColor }
      variantClass = 'border-2 hover:bg-gray-50'
    } else {
      variantClass = 'border border-gray-800 text-gray-900 hover:bg-gray-50'
    }
  } else {
    variantClass = 'text-gray-600 hover:text-black'
  }

  return (
    <button
      className={`${base} ${variantClass} ${sizes[size]} ${className}`}
      style={dynamicStyle}
      {...props}
    >
      {children}
    </button>
  )
}

// Fixed: Changed from a Next.js Link to a standard anchor tag <a>
const NavItem: React.FC<NavItemProps> = ({ item, isActive, onSelect, onClose, href }) => (
  <a
    href={href}
    onClick={() => { onSelect(item); onClose?.(); }}
    className={`relative py-1 px-2 font-medium transition-colors ${isActive ? 'text-black' : 'text-gray-500 hover:text-gray-900'}`}
  >
    <span className="relative z-10">{item}</span>
    {isActive && (
      <motion.div
        layoutId="nav-underline"
        className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
  </a>
)

const ExploreDropdown: React.FC<{ isActive: boolean; onClose: () => void }> = ({ isActive, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Fixed: Changed from Link to standard anchor tag <a> */}
      <a
        href={NAV_PATHS['Explore']}
        className={`flex items-center gap-1 py-1 px-2 font-medium transition-colors ${isActive || isOpen ? 'text-black' : 'text-gray-500 hover:text-gray-900'}`}
        aria-expanded={isOpen}
      >
        Explore
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          width="12" height="12" viewBox="0 0 12 12" fill="none"
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
        {isActive && (
          <motion.div
            layoutId="nav-underline"
            className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </a>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            {EXPLORE_OPTIONS.map((opt) => (
              // Fixed: Changed from Link to standard anchor tag <a>
              <a
                key={opt.label}
                href={opt.href}
                onClick={() => { setIsOpen(false); onClose(); }}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#10B981] transition-colors"
              >
                {opt.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeNavItem, onNavSelect }) => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="fixed inset-0 z-100 bg-white lg:hidden flex flex-col"
        >
          <div className="flex justify-end p-6">
            <button onClick={onClose} className="p-2 text-gray-600 hover:text-black">
              <span className="sr-only">Close menu</span>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6 px-8 text-xl font-medium overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <div key={item}>
                {item === 'Explore' ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => setIsExploreOpen(!isExploreOpen)}
                      className={`flex items-center justify-between w-full text-left ${activeNavItem === item ? 'text-[#10B981]' : 'text-gray-800'}`}
                    >
                      Explore
                      <motion.svg
                        animate={{ rotate: isExploreOpen ? 180 : 0 }}
                        width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {isExploreOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-3 mt-3 border-l-2 border-gray-100"
                        >
                          {EXPLORE_OPTIONS.map((opt) => (
                            // Fixed: Changed from Link to standard anchor tag <a>
                            <a
                              key={opt.label}
                              href={opt.href}
                              onClick={onClose}
                              className="text-base text-gray-600 py-1"
                            >
                              {opt.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Fixed: Changed from Link to standard anchor tag <a>
                  <a
                    href={NAV_PATHS[item]}
                    onClick={() => { onNavSelect(item); onClose(); }}
                    className={`text-left w-full ${activeNavItem === item ? 'text-[#10B981]' : 'text-gray-800'}`}
                  >
                    {item}
                  </a>
                )}
              </div>
            ))}

            <div className="h-px bg-gray-100 w-full my-4" />
            {/* Fixed: Changed from Link to standard anchor tag <a> */}
            <a href="/#programs">
              <Button size="lg" className="w-full">Book Now</Button>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Header: React.FC = () => {
    // Correctly initialize activeNavItem as a value from NavItemType
    const [activeNavItem, setActiveNavItem] = useState<NavItemType>('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavSelect = useCallback((item: string) => {
        // Only update active item if it's not the Explore dropdown (which handles its own state)
        if (item !== 'Explore') {
             setActiveNavItem(item as NavItemType);
        }
    }, []);

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
                    {/* Fixed: Changed from Link to standard anchor tag <a> and Image to <img> */}
                    <a href="/" className="flex items-center gap-2 group">
                        <img src="/assets/images/design/logo.svg" alt="Logo" width={50} height={50} className="w-[50px] h-[50px]" />
                        <span className="font-bold text-lg sm:text-xl tracking-tight group-hover:text-[#08e199] transition-colors" style={{ color: '#10B981' }}>
                            The Health Tribe
                        </span>
                    </a>

                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            item === 'Explore' ? (
                                <ExploreDropdown
                                    key={item}
                                    isActive={activeNavItem === item}
                                    onClose={() => { }}
                                />
                            ) : (
                                <NavItem
                                    key={item}
                                    item={item}
                                    isActive={activeNavItem === item}
                                    onSelect={handleNavSelect}
                                    href={NAV_PATHS[item]}
                                />
                            )
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        {/* Fixed: Changed from Link to standard anchor tag <a> */}
                        <a href="/#programs">
                        <Button variant="primary" size="default">Book Now</Button>
                        </a>
                    </div>

                    <button
                        className="lg:hidden p-2 text-gray-600"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </nav>
            </header>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                activeNavItem={activeNavItem}
                onNavSelect={handleNavSelect}
            />
        </>
    );
};

export default Header;
