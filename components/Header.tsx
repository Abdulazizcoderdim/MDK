'use client'

import { navItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <div className="flex container py-7 justify-between items-center bg-[#191919]">
      <h1>
        <Link href={'/'}>
          <img src="/logo.png" alt="" />
        </Link>
      </h1>
      <ul className="flex items-center gap-8 font-bold text-white">
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
    </div>
  )
}

export default Header
