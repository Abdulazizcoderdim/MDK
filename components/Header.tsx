'use client'

import { navItems } from '@/constants'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  const [munBu, setMunBu] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      <div className="bg-[#191919]">
        <div data-aos="fade-down" className="flex py-7 container justify-between items-center ">
          <h1>
            <Link href={'/'}>
              <img src="/logo.png" alt="" />
            </Link>
          </h1>
          <ul className="md:flex hidden items-center gap-8 font-bold text-white">
            {navItems.map((item, index) => {
              const isActive = item.href === pathname
              return (
                <FlyoutLink
                  FlyoutContent={index === 3 && <PricingContent />}
                  className={`hover:text-[#E32879] transition ${
                    isActive && 'text-[#E32879]'
                  }`}
                  key={index}
                >
                  <Link href={item.href}>{item.title}</Link>
                </FlyoutLink>
              )
            })}
          </ul>
          {/* mobile */}
          <div
            onClick={() => setMunBu((prev) => !prev)}
            className="md:hidden bg-[#606060] text-white font-bold gap-2 cursor-pointer flex items-center p-3 py-1"
          >
            MENU <Menu />
          </div>
        </div>
        {munBu && (
          <ul className="md:hidden mx-5 bg-[#666666] transition-all duration-300 px-7 text-base py-3 space-y-3 text-white">
            <li>
              <Link href={'/'}>Главная</Link>
            </li>
            <li>
              <Link href={'/about'}>About Us</Link>
            </li>
            <li>
              <Link href={'/blog'}>Blog</Link>
            </li>
            <li>
              <Link className="flex items-center" href={'/gallery'}>
                Gallery <ChevronRight width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
        )}
      </div>
      {/* faq */}

      {pathname === '/' && (
        <div data-aos="fade-down" className="flex items-center h-[100vh] bg-transparent text-white">
          <div className="lg:ml-96 md:ml-52 sm:ml-5 ml-0 bg-[#AB4F81]/40 backdrop-blur-sm text-center rounded-xl w-96 min-h-96 py-5">
            <h1 className="font-semibold">
              &quot;MOTION DESIGN KEEP PEOPLE WONDERING&quot;
            </h1>
            <h1 className="text-6xl pt-10 font-bold">MDK.PW</h1>
            <p className="mt-4 text-base">
              Абсолютно любая работа для вашего проекта, которая подается с
              душой и уникальными ходовыми функциями.
            </p>
            <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold">
              Заказать
            </button>
          </div>
        </div>
      )}
    </>
  )
}

interface FlyoutLinkProps {
  children: React.ReactNode
  FlyoutContent: React.ReactNode
  className?: string
}

const FlyoutLink = ({
  children,
  FlyoutContent,
  className,
}: FlyoutLinkProps) => {
  const [open, setOpen] = useState(false)

  const showFlyout = open && FlyoutContent
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit z-50"
    >
      <p className={className}>{children}</p>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute rounded-lg left-0 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            {FlyoutContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const PricingContent = () => {
  return (
    <ul className="w-48 min-h-24 bg-slate-50 text-black font-bold text-lg space-y-3 p-6 shadow hover:shadow-lg transition duration-200 ">
      <li className="hover:text-redd transition-all duration-200">
        <Link href={'#'}>Naoh</Link>
      </li>
      <li className="hover:text-redd transition-all duration-200">
        <Link href={'#'}>Padis</Link>
      </li>
      <li className="hover:text-redd transition-all duration-200">
        <Link href={'#'}>Jacob</Link>
      </li>
      <li className="hover:text-redd transition-all duration-200">
        <Link href={'#'}>Gomez</Link>
      </li>
    </ul>
  )
}

export default Header
