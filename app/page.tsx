'use client'

import BlogPlace from '@/components/BlogPlace'
import Modal from '@/components/Modal'
import PlacePage from '@/components/PlacePage'
import Slider from '@/components/Slider'
import { homeWork, ourTeam } from '@/constants'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  Facebook,
  Instagram,
  Link,
  Search,
  Twitter,
  Youtube,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)
  const [photoHover, setPhotoHover] = useState<
    'rasm1' | 'rasm2' | 'rasm3' | 'rasm4' | null
  >(null)
  const [modalSearch, setModalSearch] = useState<
    'rasm1' | 'rasm2' | 'rasm3' | 'rasm4' | null
  >(null)
  const [modal, setModal] = useState(false)
  const [team, setTeam] = useState<number | null>(null)
  // AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div>
      <div className="relative flex items-center justify-center bg-red-300 ">
        <img
          title="finish"
          className="fixed right-0 left-0 w-full h-screen object-cover origin-center -z-10 top-0 bottom-0"
          src="/finish.gif"
        />
      </div>

      <div className="bg-[#191919]">
        <div className="container py-24">
          <div >
            {/* 1-chi */}
            <div data-aos="fade-down" className="md:flex flex-row justify-between md:space-x-10 max-md:space-y-10 items-center">
              <video
                className="rounded-3xl"
                src="/dva1.mp4"
                autoPlay
                loop
                muted
                id="bgVideo"
              >
                <source src="/dva1.mp4" type="video/mp4" />
              </video>
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
            <div data-aos="fade-down" className="mt-28">
              <div className="text-center tracking-tighter">
                <p className="text-[#e32879] text-sm font-bold uppercase">
                  АБСОЛЮТНО ЛЮБОЙ ВИД РАБОТЫ
                </p>
                <h1 className="text-[45px] max-md:text-[35px] text-white font-bold">
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

      <div  className="bg-[#222222] py-24 text-center">
        <div data-aos="fade-down" className="tracking-tighter container pb-28">
          <p className="text-[#e32879] text-sm uppercase font-bold">
            МОЁ ПОРТФОЛИО
          </p>
          <h1 className="md:text-[45px] text-[35px] font-bold text-white">
            3D и 2D оформления тем/баннеров/аватарок/статей
          </h1>
        </div>
      </div>

      <div  className="bg-[#191919]">
        <div className="container">
          <div data-aos="fade-down" className="flex max-md:flex-col text-white -translate-y-36">
            <div
              onMouseEnter={() => setPhotoHover('rasm1')}
              onMouseLeave={() => setPhotoHover(null)}
              className="w-1/2 max-md:w-full relative"
            >
              <img
                className="h-full w-full object-cover"
                src="https://nztcdn.com/files/bcea6246-9461-4d6c-b958-42a54a155f22.webp"
                alt=""
              />
              <div
                className={`absolute flex inset-0 transition-all duration-500 items-center justify-center ${
                  photoHover === 'rasm1' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`p-5 rounded-full bg-[#e32879] cursor-pointer`}>
                    <Link />
                  </span>
                  <span
                    onClick={() => {
                      setModalSearch('rasm1'), setModal(true)
                    }}
                    className={`p-5 rounded-full bg-[#e32879] cursor-pointer`}
                  >
                    <Search />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-1/2 max-md:w-full flex-col h-full">
              <div
                onMouseEnter={() => setPhotoHover('rasm2')}
                onMouseLeave={() => setPhotoHover(null)}
                className="md:h-1/2 relative"
              >
                <video
                  className="rounded-3xl"
                  src="/3d.mp4"
                  autoPlay
                  loop
                  muted
                  id=""
                >
                  <source src="/dva1.mp4" type="video/mp4" />
                </video>
                <div
                  className={`absolute inset-0 flex transition-all duration-500 items-center justify-center ${
                    photoHover === 'rasm2' ? 'flex' : 'opacity-0 flex'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="p-5 rounded-full bg-[#e32879] cursor-pointer">
                      <Link />
                    </span>
                    <span
                      onClick={() => {
                        setModalSearch('rasm2'), setModal(true)
                      }}
                      className="p-5 rounded-full bg-[#e32879] cursor-pointer"
                    >
                      <Search />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex max-md:flex-col h-1/2">
                <div
                  onMouseEnter={() => setPhotoHover('rasm3')}
                  onMouseLeave={() => setPhotoHover(null)}
                  className="w-1/2 max-md:w-full relative"
                >
                  <video
                    className="rounded-3xl"
                    src="/3d2.mp4"
                    autoPlay
                    loop
                    muted
                    id=""
                  >
                    <source src="/dva1.mp4" type="video/mp4" />
                  </video>
                  <div
                    className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${
                      photoHover === 'rasm3' ? 'flex' : 'opacity-0 flex'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="p-5 rounded-full bg-[#e32879] cursor-pointer">
                        <Link />
                      </span>
                      <span
                        onClick={() => {
                          setModalSearch('rasm3'), setModal(true)
                        }}
                        className="p-5 rounded-full bg-[#e32879] cursor-pointer"
                      >
                        <Search />
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setPhotoHover('rasm4')}
                  onMouseLeave={() => setPhotoHover(null)}
                  className="w-1/2 max-md:w-full relative"
                >
                  <img
                    className="object-cover h-full w-full"
                    src="w4.png"
                    alt=""
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-500 items-center justify-center ${
                      photoHover === 'rasm4' ? 'flex' : 'opacity-0 flex'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="p-5 rounded-full bg-[#e32879] cursor-pointer">
                        <Link />
                      </span>
                      <span
                        onClick={() => {
                          setModalSearch('rasm4'), setModal(true)
                        }}
                        className="p-5 rounded-full bg-[#e32879] cursor-pointer"
                      >
                        <Search />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flex max-md:flex-col max-md:space-y-10 justify-between container">
          <div className="md:w-1/2 text-white space-y-4">
            <h3 className="text-redd text-sm font-bold uppercase">
              NUMBER SPEAKS
            </h3>
            <h1 className="md:text-[45px] text-[35px] font-bold leading-tight">
              We have a lot of experience
            </h1>
            <button
              style={{ marginTop: '50px' }}
              title="Read More"
              className="font-semibold px-8 py-3 bg-redd"
            >
              Read More
            </button>
          </div>
          <div className="md:w-1/2 space-y-5">
            <div className="flex gap-10">
              <CountUp
                className="text-redd md:text-5xl text-2xl font-bold"
                start={0}
                end={2034}
                duration={2.7}
                separator=""
              />
              <div className="space-y-4">
                <h2 className="text-white text-[22px] font-bold">
                  Successful projects
                </h2>
                <p className="text-base text-[#b3b3b3] font-normal">
                  Since its establishment in 2005, Fashion has been focusing on
                  project management & implementation through cooperation.
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <CountUp
                className="text-redd md:text-5xl text-2xl font-bold"
                start={0}
                end={1054}
                duration={2.7}
                separator=""
              />
              <div className="space-y-4">
                <h2 className="text-white text-[22px] font-bold">Events</h2>
                <p className="text-base text-[#b3b3b3] font-normal">
                  Since its establishment in 2005, Fashion has been focusing on
                  project management & implementation through cooperation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* slider */}
        <Slider />

        <PlacePage />

        {/* our team */}
        <div className="container text-center py-20">
          <span data-aos="fade-down" className="text-[#e32879] text-sm font-bold">OUR TEAM</span>
          <p data-aos="fade-down" className="text-[45px] text-white font-bold mb-10">
            Top Designers
          </p>
          <ul data-aos="fade-down" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {ourTeam.map((item, index) => (
              <li
                onMouseEnter={() => setTeam(index)}
                onMouseLeave={() => setTeam(null)}
                className="text-white relative transition-all duration-300"
                key={index}
              >
                <img className="" src={item.img} alt="" />
                <div
                  className={`md:space-y-8 space-y-2 text-center absolute top-5 left-5 bottom-5 right-5 ${
                    team === index ? 'opacity-100' : 'opacity-0 scale-0'
                  } transition-all duration-500 md:py-16 py-5 px-5 bg-[#191919]`}
                >
                  <p className="text-[#b3b3b3] font-normal text-base">
                    {item.desc}
                  </p>
                  <h2 className="text-[22px] font-bold ">{item.name}</h2>
                  <p className="text-redd text-xs">{item.position}</p>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="md:p-4 p-3 rounded-full bg-[#303030] cursor-pointer">
                      <Facebook />
                    </span>
                    <span className="md:p-4 p-3 rounded-full bg-[#303030] cursor-pointer">
                      <Twitter />
                    </span>
                    <span className="md:p-4 p-3 rounded-full bg-[#303030] cursor-pointer">
                      <Instagram />
                    </span>
                    <span className="md:p-4 p-3 rounded-full bg-[#303030] cursor-pointer">
                      <Youtube />
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* blog */}
      <div className="bg-[#222222] py-20 text-center">
        <div data-aos="fade-down" className="mb-10">
          <h3 className="text-[#e32879] text-sm font-bold uppercase">
            Latest Blog
          </h3>
          <h1 className="text-white md:text-[45px] text-[40px] font-bold">
            From Our Blog
          </h1>
        </div>
        <div data-aos="fade-down" className="container flex gap-5 max-lg:flex-col justify-between">
          <BlogPlace srcA="/author-1.jpg" srcB="/blog-1.jpg" />
          <BlogPlace srcA="/author-2.jpg" srcB="/blog-2.jpg" />
        </div>
      </div>

      {/* modal */}

      {modal && (
        <Modal
          modalSearch={modalSearch}
          setModal={setModal}
          setModalSearch={setModalSearch}
        />
      )}
    </div>
  )
}
