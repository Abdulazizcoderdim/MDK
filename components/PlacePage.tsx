"use client"

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const PlacePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <div className="relative flex items-center justify-center bg-pink-500 text-white">
      <img
        src={'/ctc-bg.jpg'}
        alt="Background"
        className="absolute object-cover inset-0 z-0"
      />
      <div className="relative right-0 left-0 w-full py-28 z-10 p-4 bg-pink-600 bg-opacity-85 text-center">
        <h1 data-aos="fade-down" className="text-4xl font-bold mb-4">
          We Create Trends For The World
        </h1>
        <p data-aos="fade-down" className="mb-4">
          Donec faucibus consequat ante. Mauris eget mi sed ex efficitur porta
          id non quam. Cras aliquam turpis tellus, quis laoreet lacus <br />
          congue sed. Nullam at est quis urna vestibulum interdum. Praesent
          auctor leo ut massa ultrices tempor.
        </p>
        <button data-aos="fade-down" className="px-4 py-2 bg-white text-pink-600  font-bold cursor-pointer">
          Work With Us
        </button>
      </div>
    </div>
  )
}

export default PlacePage
