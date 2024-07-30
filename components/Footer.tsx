import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <div className="text-white z-50 bg-[#191919] py-10">
      <div className='container'>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="space-y-3 text-[#b3b3b3] text-base ">
          <img src="/logo.png" alt="" />
          <p>Address: 60-49 Road 11378 New York</p>
          <p>Phone: +65 11.188.888</p>
          <p>Email: hello.colorlib@gmail.com</p>
          <div className="flex items-center gap-3">
            <span className="p-3 hover:bg-redd cursor-pointer transition-all duration-300 rounded-full text-white bg-[#303030]">
              <Facebook />
            </span>
            <span className="p-3 hover:bg-redd cursor-pointer transition-all duration-300 rounded-full text-white bg-[#303030]">
              <Instagram />
            </span>
            <span className="p-3 hover:bg-redd cursor-pointer transition-all duration-300 rounded-full text-white bg-[#303030]">
              <Twitter />
            </span>
            <span className="p-3 hover:bg-redd cursor-pointer transition-all duration-300 rounded-full text-white bg-[#303030]">
              <Youtube />
            </span>
          </div>
        </div>
        <div className="space-y-3 text-[#b3b3b3]">
          <h2 className="text-xl font-bold text-white">Useful Links</h2>
          <p>About Us</p>
          <p>Model</p>
          <p>Contact</p>
          <p>Serivius</p>
        </div>
        <div className="space-y-3 text-[#b3b3b3]">
          <h2 className="text-xl font-bold text-white">Join The Newsletter</h2>
          <p>Get E-mail updates about our latest shop and special offers.</p>
          <form className="space-y-2">
            <input
              type="text"
              className="p-3 bg-transparent outline-none w-full border border-gray-500 placeholder:text-gray-500"
              placeholder="Enter your email"
            />
            <button className="bg-redd text-white w-full py-3">
              Subscribe
            </button>
          </form>
        </div>
        <div className="space-y-3 text-[#b3b3b3]">
          <h2 className="text-xl font-bold text-white">Instagram</h2>
          <div className="grid grid-cols-3 gap-2">
            <img className='max-sm:w-52 max-sm:h-40' src="/instagram-1.jpg" alt="" />
            <img className='max-sm:w-52 max-sm:h-40' src="/instagram-2.jpg" alt="" />
            <img className='max-sm:w-52 max-sm:h-40' src="/instagram-3.jpg" alt="" />
            <img className='max-sm:w-52 max-sm:h-40' src="/instagram-4.jpg" alt="" />
            <img className='max-sm:w-52 max-sm:h-40' src="/instagram-5.jpg" alt="" />
            <img className='max-sm:w-52 max-sm:h-40' src="/instagram-6.jpg" alt="" />
          </div>
        </div>
      </div>
      <p className="flex justify-center mt-10 text-[#b3b3b3]">
        Copyright ©{new Date().getFullYear()} All rights reserved | This
        template is made with by Colorlib
      </p>
      </div>
    </div>
  )
}

export default Footer
