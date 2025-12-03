'use client'
import React from 'react'
import Image from 'next/image'

export default function Design() {
  return (
    <div
      className="
        w-full 
        max-w-[1400px]
        mx-auto
        relative 
        p-0 
        
        overflow-hidden
        h-[80vh] 
        xs:h-[350px]
        sm:h-[420px] 
        md:h-[530px] 
        lg:h-[630px]
        xl:h-[690px]
      "
      style={{ backgroundColor: "#e8f0f8" }}
    >
      {/* Mobile Image */}
      <Image
        src="/assets/images/design/design-sm.svg"
        alt="Design background"
        fill
        className="object-cover object-center sm:hidden"
        priority
        sizes="h-100vh"
      />
      
      {/* Desktop Image */}
      <Image
        src="/assets/images/design/design.svg"
        alt="Design background"
        fill
        className="hidden sm:block object-cover object-top"
        priority
        sizes="(max-width: 1024px) 100vw, 1400px"
      />
    </div>
  )
}