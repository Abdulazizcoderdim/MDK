'use client'

import BlogPlace from '@/components/BlogPlace'
import LinkPage from '@/components/LinkPage'
import { Calendar, Mails } from 'lucide-react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const BlogPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <div>
      <LinkPage path="blog" page="Our Blog" />
      <div className="bg-[#222222]">
        <div data-aos="fade-down" className="container py-24">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <BlogPlace srcA="/author-1.jpg" srcB="/blog-1.jpg" />
            <BlogPlace srcA="/author-2.jpg" srcB="/blog-2.jpg" />
            <div className="flex flex-col justify-between bg-redd  h-full p-20 text-white">
              <p className="text-white flex items-center gap-1">
                <Calendar width={15} height={15} /> August 9, 2019{' '}
                <Mails width={15} height={15} /> 0
              </p>
              <h1 className="text-white font-bold text-2xl">
                Every Single Way You Can Wear Pastel Makeup This Spring
              </h1>
              <p className="text-base text-[#b3b3b3]">
                Never ever think of giving up. Winners never quit <br /> and
              </p>
              <div className="flex gap-2 items-center">
                <img src="/a1.jpg" className="rounded-full" alt="" />
                <div className="text-start">
                  <h2 className="text-white text-lg font-bold">
                    Aaron Russell
                  </h2>
                  <span className="text-redd">DESIGNER</span>
                </div>
              </div>
            </div>
            <BlogPlace srcA="/author-1.jpg" srcB="/blog-3.jpg" />
            <BlogPlace srcA="/author-2.jpg" srcB="/blog-4.jpg" />
            <BlogPlace srcA="/author-2.jpg" srcB="/blog-5.jpg" />
          </div>
          <div className="flex justify-center mt-16">
            <button className="border outline-none border-redd px-10 bg-transparent text-white py-3">
              Work With US
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
