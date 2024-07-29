'use client'

import { navItems } from '@/constants'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <div className='bg-[#191919]'>
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
  )
}

export default Header
