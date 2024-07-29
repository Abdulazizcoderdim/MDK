'use client'

import { homeWork } from '@/constants'
import { Link, Search } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)

  return (
    <div>
      <div className="relative flex items-center justify-center bg-red-300 ">
        <video
          className="fixed right-0 left-0 w-full h-screen object-cover origin-center -z-10 top-0 bottom-0"
          src="/finish.mp4"
          autoPlay
          loop
          muted
          id="bgVideo"
        >
          <source src="/finish.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bg-[#191919]">
        <div className="container py-24">
          <div>
            {/* 1-chi */}
            <div className="md:flex flex-row justify-between md:space-x-10 max-md:space-y-10 items-center">
              <img className="md:w-1/2 rounded-lg" src="/home.png" alt="" />
              <div className="flex md:w-1/2 flex-col space-y-3">
                <h1 className="text-sm font-bold uppercase text-[#e32879]">
                  FAQ
                </h1>
                <h1 className="md:text-[45px] text-[40px] text-white font-bold">
                  Общая информация
                </h1>
                <p className="text-[#b3b3b3] text-base font-normal leading-6">
                  В этом разделе вы сможете ознакомиться с условиями работы,
                  общей статистикой и самыми часто задаваемыми вопросами. <br />{' '}
                  <br /> Чаще всего главной проблемой является оформление ТЗ
                  (Технического задания) я стараюсь подать для вас готовый
                  контент даже в качестве вашего основного проектного
                  оформления. Все работы выполняются до полного утверждения
                  заказчика.
                </p>
                <button className="px-3 py-2 w-56 font-semibold bg-[#e32879] text-white ">
                  Читать подробнее
                </button>
              </div>
            </div>
            {/* 2-chi */}
            <div className="mt-28">
              <div className="text-center tracking-tighter">
                <p className="text-[#e32879] text-sm font-bold uppercase">
                  АБСОЛЮТНО ЛЮБОЙ ВИД РАБОТЫ
                </p>
                <h1 className="text-[45px] text-white font-bold">
                  Я обучаюсь вместе с вашими идеями и предложениями
                </h1>
              </div>
              <ul className="grid lg:grid-cols-3 mt-10 md:grid-cols-2 grid-cols-1 gap-5">
                {homeWork.map((item, index) => (
                  <li
                    key={index}
                    className={`space-y-3 transition-all duration-200 
                      ${hoveredIndex === index ? 'border-b-2' : ''}
                      border-[#e32879] p-10 bg-[#222222] text-center text-white`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img src={item.icon} alt="" className="mx-auto" />
                    <p className="text-[22px] font-bold">{item.title}</p>
                    <p className="text-sm text-[#b3b3b3] font-normal">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#222222] py-24 text-center">
        <div className="tracking-tighter container pb-28">
          <p className="text-[#e32879] text-sm uppercase font-bold">
            МОЁ ПОРТФОЛИО
          </p>
          <h1 className="text-[45px] font-bold text-white">
            3D и 2D оформления тем/баннеров/аватарок/статей
          </h1>
        </div>
      </div>
      <div className="bg-[#191919]">
        <div className="container">
          <div className="flex text-white">
            <div className="w-1/2 relative">
              <img
                className="h-full w-full object-cover"
                src="/w1.png"
                alt=""
              />
              <div className="absolute left-1/2 right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className='flex items-center gap-4'>
                  <span className='p-5 rounded-full bg-red-400'>
                    <Link />
                  </span>
                  <span className='p-5 rounded-full bg-red-400'>
                    <Search />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-1/2 flex-col h-full">
              <img className="h-1/2 object-cover" src="/w2.png" alt="" />
              <div className="flex h-1/2">
                <img className="w-1/2 object-cover" src="w3.png" alt="" />
                <img className="w-1/2 object-cover" src="w4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
