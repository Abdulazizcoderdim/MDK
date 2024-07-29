// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Slider = () => {
  return (
    <div className="container py-10">
      <Swiper
        className="min-h-80"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={35}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="bg-[#222222] md:pt-[60px] pt-[50px] pr-[20px] md:pb-[50px] pb-[40px] pl-[40px] flex max-md:flex-col w-full gap-5 items-center">
            <img src="/t1.jpg" className="rounded-full max-md:w-20" alt="" />
            <div className="space-y-2">
              <h2 className="text-[22px] text-white font-bold">
                Travis Crawford
              </h2>
              <span className="text-redd">DESIGNER</span>
              <p className="text-base text-[#b3b3b3] font-normal">
                Adipisci velit, sed quia non numquam eius modi tempora incidunt
                ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#222222] md:pt-[60px] pt-[50px] pr-[20px] md:pb-[50px] pb-[40px] pl-[40px] max-md:flex-col flex w-full gap-5 items-center">
            <img src="/t2.jpg" className="rounded-full max-md:w-20" alt="" />
            <div className="space-y-2">
              <h2 className="text-[22px] text-white font-bold">
                Travis Crawford
              </h2>
              <span className="text-redd">DESIGNER</span>
              <p className="text-base text-[#b3b3b3] font-normal">
                Adipisci velit, sed quia non numquam eius modi tempora incidunt
                ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#222222] md:pt-[60px] pt-[50px] pr-[20px] md:pb-[50px] pb-[40px] pl-[40px] max-md:flex-col flex w-full gap-5 items-center">
            <img src="/t3.jpg" className="rounded-full" alt="" />
            <div className="space-y-2">
              <h2 className="text-[22px] text-white font-bold">
                Travis Crawford
              </h2>
              <span className="text-redd">DESIGNER</span>
              <p className="text-base text-[#b3b3b3] font-normal">
                Adipisci velit, sed quia non numquam eius modi tempora incidunt
                ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#222222] md:pt-[60px] pt-[50px] pr-[20px] md:pb-[50px] pb-[40px] pl-[40px] max-md:flex-col flex w-full gap-5 items-center">
            <img src="/t4.jpg" className="rounded-full" alt="" />
            <div className="space-y-2">
              <h2 className="text-[22px] text-white font-bold">
                Travis Crawford
              </h2>
              <span className="text-redd">DESIGNER</span>
              <p className="text-base text-[#b3b3b3] font-normal">
                Adipisci velit, sed quia non numquam eius modi tempora incidunt
                ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
