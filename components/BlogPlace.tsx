import { Calendar, Mails } from 'lucide-react'

const BlogPlace = ({srcA,srcB}:{srcA:string,srcB:string}) => {
  return (
    <div className="md:w-1/2 max-sm:flex-col  flex">
      <img className="md:w-[300px] h-[400px] " src={srcB} alt="" />
      <div className="bg-[#191919] flex flex-col min-w-72 justify-between p-10">
        <p className="text-redd flex items-center gap-1">
          <Calendar width={15} height={15} /> August 9, 2019{' '}
          <Mails width={15} height={15} /> 0
        </p>
        <h1 className="text-white font-bold text-2xl">
          Every Single Way You Can Wear Pastel Makeup This Spring
        </h1>
        <p className="text-base text-[#b3b3b3]">
          Never ever think of giving up. Winners never quit and
        </p>
        <div className="flex gap-2 items-center">
          <img src={srcA} className="rounded-full" alt="" />
          <div className="text-start">
            <h2 className="text-white text-lg font-bold">Aaron Russell</h2>
            <span className="text-redd">DESIGNER</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPlace
