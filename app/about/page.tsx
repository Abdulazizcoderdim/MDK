'use client'

import LinkPage from '@/components/LinkPage'
import PlacePage from '@/components/PlacePage'
import { ourTeam, ourTeamAbout } from '@/constants'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { useState } from 'react'
import CountUp from 'react-countup'

const AboutPage = () => {
  const [team, setTeam] = useState<number | null>(null)
  return (
    <div>
      <LinkPage path="about" page="About Us" />
      <div className="bg-[#191919]">
        <div className="container py-24">
          <div className="flex max-md:flex-col items-center gap-14 justify-between">
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
                    end={2034}
                    duration={2.7}
                    separator=""
                  />
                  <p className="text-base text-[#b3b3b3]">MEMBER</p>
                </div>
                <div className="w-1 h-full bg-gray-600" />
                <div className="space-y-3">
                  <CountUp
                    className=" md:text-4xl text-2xl font-bold"
                    start={0}
                    end={2034}
                    duration={2.7}
                    separator=""
                  />
                  <p className="text-base text-[#b3b3b3]">MEMBER</p>
                </div>
                <div className="w-1 h-full bg-gray-600" />
                <div className="space-y-3">
                  <CountUp
                    className=" md:text-4xl text-2xl font-bold"
                    start={0}
                    end={2034}
                    duration={2.7}
                    separator=""
                  />
                  <p className="text-base text-[#b3b3b3]">MEMBER</p>
                </div>
                <div className="w-1 h-full bg-gray-600" />
                <div className="space-y-3">
                  <CountUp
                    className=" md:text-4xl text-2xl font-bold"
                    start={0}
                    end={2034}
                    duration={2.7}
                    separator=""
                  />
                  <p className="text-base text-[#b3b3b3]">MEMBER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center py-20">
          <span className="text-[#e32879] text-sm font-bold">OUR TEAM</span>
          <p className="text-[45px] text-white font-bold">Top Designers</p>
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {ourTeamAbout.map((item, index) => (
              <li
                onMouseEnter={() => setTeam(index)}
                onMouseLeave={() => setTeam(null)}
                className="text-white relative transition-all duration-300"
                key={index}
              >
                <img className="" src={item.img} alt="" />
                <div
                  className={`md:space-y-8 space-y-2 text-center absolute top-5 left-5 bottom-5 right-5 ${
                    team === index ? 'opacity-100' : 'opacity-0'
                  } transition-all duration-300 md:py-16 py-5 px-5 bg-[#191919]`}
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

      <PlacePage />
    </div>
  )
}

export default AboutPage
