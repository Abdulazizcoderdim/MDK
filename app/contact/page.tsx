'use client'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { LocateIcon, Mail, Phone } from 'lucide-react'
import { useEffect } from 'react'

const ContactPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3722935212218!2d-74.01449132411715!3d40.709820171393815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17514fe9c9%3A0x9426780af7189da9!2sLiberty%20St%2C%20New%20York%2C%20NY%2C%20Amerika%20Qo%E2%80%98shma%20Shtatlari!5e0!3m2!1suz!2s!4v1722288755272!5m2!1suz!2s"
          width="600"
          height="450"
          className="border-none w-full"
          loading="lazy"
        ></iframe>
      </div>
      <div className="bg-[#222222]">
        <div
          data-aos="fade-down"
          className="container py-24 flex max-lg:flex-col max-lg:space-y-10 justify-between"
        >
          <div className="text-white space-y-4">
            <h1 className="font-bold text-2xl">Contacts Us</h1>
            <div className="flex gap-5 items-center">
              <span className="p-6 rounded-full text-redd bg-[#393939]">
                <LocateIcon />
              </span>
              <div className="">
                <p className="text-[#b3b3b3] text-lg">Our Location</p>
                <p className="text-white text-lg">60-49 Road 11378 New York</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <span className="p-6 rounded-full text-redd bg-[#393939]">
                <Phone />
              </span>
              <div className="">
                <p className="text-[#b3b3b3] text-lg">Our Location</p>
                <p className="text-white text-lg">60-49 Road 11378 New York</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <span className="p-6 rounded-full text-redd bg-[#393939]">
                <Mail />{' '}
              </span>
              <div className="">
                <p className="text-[#b3b3b3] text-lg">Our Location</p>
                <p className="text-white text-lg">60-49 Road 11378 New York</p>
              </div>
            </div>
          </div>
          <div className="text-white space-y-4">
            <h1 className="font-bold text-2xl">Leave A Comment</h1>
            <form action="" className="space-y-5">
              <div className="flex flex-col gap-7">
                <div className="flex max-md:flex-col items-center gap-7">
                  <input
                    className="outline-none bg-transparent border max-md:w-full py-3 px-3"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="outline-none bg-transparent border max-md:w-full py-3 px-3"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <textarea
                  className="border outline-none bg-transparent p-3"
                  name="text"
                  title="messages"
                  placeholder="Messages"
                  id=""
                ></textarea>
              </div>
              <button className="bg-redd px-7 mt-5 py-3 text-white ">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
