'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../Header'

// --- Types ---
import type { Tab, ButtonProps, TabCardProps } from '@/lib/types';

// --- Constants ---
const TABS: Tab[] = [
  {
    id: 'habit',
    label: 'Habits Sustainable for Life',
    description: 'Join our tribe to make sustainable changes with expert guidance.',
    captionTitle: 'HABIT',
    captionSub: 'One habit at a time',
    image: '/assets/habit.svg',
    color: '#14AE5C',
  },
  {
    id: 'science',
    label: 'Science Backed Approach',
    description: 'We address the root cause of your health concerns for optimal results.',
    captionTitle: 'SCIENCE',
    captionSub: 'Evidence based living',
    image: '/assets/Science.svg',
    color: '#a3e635',
  },
  {
    id: 'mental',
    label: 'Mental Wellness First',
    description: 'Guided exercises targeting stress & anxiety to keep you balanced.',
    captionTitle: 'MIND',
    captionSub: 'Peace of mind',
    image: '/assets/MentalWeel.svg',
    color: '#3b82f6',
  },
  {
    id: 'movement',
    label: 'Functional Movement',
    description: 'Improving metabolism, joints and balance through daily activity.',
    captionTitle: 'BODY',
    captionSub: 'Keep moving forward',
    image: '/assets/Run.svg',
    color: '#fde047',
  },
  {
    id: 'help',
    label: 'Help Each Other',
    description: 'Great Things Happens when we lift each other up.',
    captionTitle: 'Help',
    captionSub: 'Together we win!',
    image: '/assets/Help.svg',
    color: '#FF6A00',
    
  },
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

const TabCardDesktop: React.FC<TabCardProps> = ({ tab, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`hidden md:flex flex-col gap-2 p-3 text-left transition-all duration-300 outline-none rounded-xl
      ${isActive ? 'bg-gray-50 ring-1 ring-gray-200' : 'hover:bg-gray-50/50 opacity-60 hover:opacity-100'}
    `}
  >
    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        style={{ backgroundColor: tab.color }}
        className="h-full bg-[#10B981]"
        initial={{ width: "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        transition={{ duration: isActive ? 3 : 0.3, ease: "linear" }}
      />
    </div>
    <h3 className={`font-semibold text-sm lg:text-base ${isActive ? 'text-black' : 'text-gray-600'}`}>
      {tab.label}
    </h3>
  </button>
)

// --- Main Hero Section ---

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-play Logic (3 seconds)
  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % TABS.length)
      }, 3000)
    }
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const handleManualChange = (index: number) => {
    setActiveTab(index)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length)
    }, 3000)
  }

  const currentTab = TABS[activeTab]

  return (
    <div  className="relative min-h-screen flex flex-col bg-white overflow-hidden font-sans text-gray-900">
      <Header />
      {/* --- Main Content --- */}
      <main className="flex-1 pt-20 flex flex-col">

        {/* MOBILE LAYOUT (< lg) - Matches your Image (Image -> Text -> Buttons) */}
        <div className="lg:hidden flex-1 flex flex-col px-6 pb-8 pt-4">

          {/* 1. Illustration (Centered) */}
          <div className="flex-1 flex items-center justify-center min-h-[300px] relative">
            <div
              className="absolute inset-0 m-auto w-64 h-64 rounded-full opacity-20 blur-3xl transition-colors duration-500"
              style={{ backgroundColor: currentTab.color }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}

                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-[320px] aspect-square"
              >
                <Image
                  src={currentTab.image}
                  alt={currentTab.label}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2. Content & Actions */}
          <div className="flex flex-col items-center text-center mt-6 space-y-6">

            <div className="space-y-3">
              <motion.h1
                key={`h-${currentTab.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-gray-900 leading-tight"
              >
                {currentTab.label}
              </motion.h1>
              <motion.p
                key={`p-${currentTab.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed"
              >
                {currentTab.description}
              </motion.p>
            </div>

            <div className="flex items-center gap-3 w-full justify-center">
              <Button variant="primary" customColor={currentTab.color} className="flex-1 max-w-[140px]">Get Started</Button>
              <Button variant="outline" size="lg" customColor={currentTab.color} className="flex-1 max-w-[140px]">Know More</Button>
            </div>

            <div className="flex gap-2 mt-4">
              {TABS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleManualChange(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${idx === activeTab ? 'bg-black' : 'bg-gray-200'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="pt-2">
              <motion.div
                key={`c-${currentTab.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center"
              >
                <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {currentTab.captionTitle}
                </span>
                <span className="text-[10px] text-gray-400">
                  {currentTab.captionSub}
                </span>
              </motion.div>
            </div>

          </div>
        </div>


        {/* DESKTOP LAYOUT (lg+) - Side by Side */}
        <div className="hidden lg:flex max-w-7xl mx-auto w-full px-8 h-[calc(100vh-80px)] items-center gap-16">
          <div className="flex-1 space-y-8">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              {currentTab.label}
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              {currentTab.description}
            </p>
            <div className="flex gap-4">
           <Link href="/#carousel" scroll={true}>  <Button variant="primary" customColor={currentTab.color}  // <--- Destructure this
                customTextColor={currentTab.color} size="lg" >Get Started</Button></Link>
              <Button variant="outline" size="lg" customColor={currentTab.color}>Know More</Button>
            </div>
          </div>

          <div className="flex-1 h-full max-h-[600px] relative flex items-center justify-center">
            <div
              className="absolute inset-0 m-auto w-[500px] h-[500px] rounded-full opacity-20 blur-3xl transition-colors duration-1000"
              style={{ backgroundColor: currentTab.color }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentTab.image}
                  alt={currentTab.label}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Bottom Tabs */}
        <div className="hidden lg:flex max-w-7xl mx-auto w-full px-8 pb-12 flex-nowrap justify-between gap-2">
          {TABS.map((tab, index) => (
            <TabCardDesktop
              key={tab.id}
              tab={tab}
              isActive={activeTab === index}
              onClick={() => handleManualChange(index)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default HeroSection