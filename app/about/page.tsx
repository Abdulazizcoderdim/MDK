'use client'

import LinkPage from '@/components/LinkPage'
import PlacePage from '@/components/PlacePage'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import CountUp from 'react-countup'

const AboutPage = () => {
  // const [team, setTeam] = useState<number | null>(null)
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <div>
      <LinkPage path="about" page="About Us" />
      <div className="bg-[#191919]">
        <div className="container py-24">
          <div
            data-aos="fade-down"
            className="flex max-md:flex-col items-center gap-14 justify-between"
          >
            <img src="/a.jpg" className="md:w-1/2" alt="" />
            <div className="space-y-4 md:w-1/2 text-white">
              <p className="text-redd text-sm font-bold">ABOUT US</p>
              <h1 className="text-[45px] font-bold">About Story</h1>
              <p className="text-[#b3b3b3] font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.Tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex w-full justify-between">
                <div className="space-y-3">
                  <CountUp
                    className=" md:text-4xl text-2xl font-bold"
                    start={0}
                    end={8384}
                    duration={2.7}
                    separator=""
                  />
                  <p className="text-base text-[#b3b3b3]">MEMBER</p>
                </div>
                <div className="w-[1px] h-16 bg-gray-700" />
                <div className="space-y-3">
                  <CountUp
                    className=" md:text-4xl text-2xl font-bold"
                    start={0}
                    end={6880}
                    duration={2.7}
                    separator=""
                  />
                  <p className="text-base text-[#b3b3b3]">PARTNER</p>
                </div>
                <div className="w-[1px] h-16 bg-gray-700" />
                <div className="space-y-3">
                  <CountUp
                    className=" md:text-4xl text-2xl font-bold"
                    start={0}
                    end={1546}
                    duration={2.7}
                    separator=""
                  />
                  <p className="text-base text-[#b3b3b3]">BRANCH</p>
                </div>
                <div className="w-[1px] h-16 bg-gray-700" />
                <div className="space-y-3">
                  <CountUp
                    className=" md:text-4xl text-2xl font-bold"
                    start={0}
                    end={4677}
                    duration={2.7}
                    separator=""
                  />
                  <p className="text-base text-[#b3b3b3]">DESIGNS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center py-20">
          <span
            data-aos="fade-down"
            className="text-[#e32879] text-sm font-bold"
          >
            OUR TEAM
          </span>
          <p
            data-aos="fade-down"
            className="text-[45px] text-white font-bold mb-10"
          >
            Top Designers
          </p>
          <div
            data-aos="fade-down"
            className="grid md:grid-cols-2 grid-cols-1 gap-5"
          >
            <div className="flex gap-5 flex-col">
              <img src="/gallery-1.jpg" alt="" />
              <div className="flex max-md:flex-col gap-5 items-center">
                <img className='w-full' src="/gallery-6.jpg" alt="" />
                <img className='w-full' src="/gallery-7.jpg" alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <img src="/gallery-2.jpg" alt="" />
                <img src="/gallery-3.jpg" alt="" />
                <img src="/gallery-4.jpg" alt="" />
                <img src="/gallery-5.jpg" alt="" />
              </div>
              <img src="/gallery-8.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <PlacePage />
    </div>
  )
}

export default AboutPage
