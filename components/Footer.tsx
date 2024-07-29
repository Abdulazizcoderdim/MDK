import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <div className="text-white z-50 container bg-[#191919] py-10">
      <div className="grid grid-cols-4 gap-5">
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
          <div className='grid grid-cols-3 gap-2'>
            <img src="/i1.jpg" alt="" />
            <img src="/i2.jpg" alt="" />
            <img src="/i3.jpg" alt="" />
            <img src="/i4.jpg" alt="" />
            <img src="/i5.jpg" alt="" />
            <img src="/i6.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
