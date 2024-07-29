'use client'

import { navItems } from '@/constants'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Header = () => {
  const pathname = usePathname()

  return (
    <>
      <div className="bg-[#191919]">
        <div className="flex py-7 container justify-between items-center ">
          <h1>
            <Link href={'/'}>
              <img src="/logo.png" alt="" />
            </Link>
          </h1>
          <ul className="md:flex hidden items-center gap-8 font-bold text-white">
            {navItems.map((item, index) => {
              const isActive = item.href === pathname
              return (
                <li
                  className={`hover:text-[#E32879] transition ${
                    isActive && 'text-[#E32879]'
                  }`}
                  key={index}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
          {/* mobile */}
          <div className="md:hidden bg-[#606060] text-white font-bold gap-2 cursor-pointer flex items-center p-3 py-1">
            MENU <Menu />
          </div>
        </div>
      </div>
      {/* faq */}
      
      {pathname === '/' && <div className="flex items-center h-[100vh] bg-transparent text-white">
        <div className="lg:ml-96 md:ml-52 ml-11 bg-[#AB4F81]/40 backdrop-blur-sm text-center rounded-xl w-96 min-h-96 py-5">
          <h1 className="font-semibold">
          &quot;MOTION DESIGN KEEP PEOPLE WONDERING&quot;
          </h1>
          <h1 className="text-6xl pt-10 font-bold">MDK.PW</h1>
          <p className="mt-4 text-base">
            Абсолютно любая работа для вашего проекта, которая подается с душой
            и уникальными ходовыми функциями.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold">
            Заказать
          </button>
        </div>
      </div>}
    </>
  )
}

export default Header
