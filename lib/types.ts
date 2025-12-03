import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface FAQItem {
  value: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface StarRatingProps {
  rating: number;
  isActive: boolean;
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  isActive: boolean;
  onClick?: () => void;
}

// Header / Navigation types
export interface NavItemProps {
  item: string;
  isActive: boolean;
  onSelect: (item: string) => void;
  onClose?: () => void;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'default' | 'lg' | 'sm';
  customColor?: string;
  customTextColor?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeNavItem: string;
  onNavSelect: (item: string) => void;
}

// Footer types
export interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

// Hero section types
export interface Tab {
  id: string;
  label: string;
  description: string;
  captionTitle: string;
  captionSub: string;
  image: string;
  color: string;
}

export interface TabCardProps {
  tab: Tab;
  isActive: boolean;
  onClick: () => void;
}

export default {};
