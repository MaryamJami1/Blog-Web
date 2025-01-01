'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Travel() {


  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const sections = [
    {
      title: 'Travel',
      image: '/images/travel.jpg',
      href: '/travel'
    },

    {
      title: 'Eat',
      image: '/images/food.jpg',
      href: '/eat'
    },

    {
      title: 'Relax',
      image: '/images/relax.jpg',
      href: '/relax'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-[5rem]">
     
     <div className="flex flex-wrap justify-center py-11">
      <h3 className='text-gray-800 text-md text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut repudiandae harum praesentium expedita nam voluptatibus excepturi error eos sed quae quaerat consectetur iusto enim commodi, dolorum vel corrupti repellat ipsa!</h3>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="relative group overflow-hidden"
            onMouseEnter={() => setHoveredSection(section.title)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className={`object-cover transition-transform duration-500 ease-in-out ${hoveredSection === section.title ? 'scale-110' : 'scale-100'
                  }`}
              />

              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className={`text-blue-600 bg-[#ffffff] text-xl md:text-2xl px-6 py-2 font-serif transition-transform duration-500 ease-in-out ${hoveredSection === section.title ? 'scale-110' : 'scale-100'
                    }`}
                >

                  {section.title}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

