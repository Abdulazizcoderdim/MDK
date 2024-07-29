'use client'

import GaleryModal from '@/components/GaleryModal'
import { videos } from '@/constants'
import { useState } from 'react'

const GalleryPage = () => {
  const [modal, setModal] = useState(false)
  const [srcM, setSrcM] = useState<string | null>('')
  const [items, setItems] = useState(videos)
  const filterItem = (categoryItem: string) => {
    const updatedItems = videos.filter((curElem) => {
      return curElem.category === categoryItem
    })

    setItems(updatedItems)
  }

  return (
    <div className="bg-[#222222] py-24">
      <div className="container text-center w-full space-y-16">
        <div className="flex items-center gap-10 text-center justify-center text-white font-bold">
          <span
            className="hover:text-redd focus:text-redd cursor-pointer transition-all duration-200 text-lg"
            onClick={() => setItems(videos)}
          >
            ALL GALLERY
          </span>
          <span
            className="hover:text-redd focus:text-redd cursor-pointer transition-all duration-200 text-lg"
            onClick={() => filterItem('FASHION')}
          >
            FASHION
          </span>
          <span
            className="hover:text-redd focus:text-redd cursor-pointer transition-all duration-200 text-lg"
            onClick={() => filterItem('MODEL')}
          >
            MODEL
          </span>
          <span
            className="hover:text-redd focus:text-redd cursor-pointer transition-all duration-200 text-lg"
            onClick={() => filterItem('EVENT')}
          >
            EVENT
          </span>
          <span
            className="hover:text-redd focus:text-redd cursor-pointer transition-all duration-200 text-lg"
            onClick={() => filterItem('OTHER')}
          >
            OTHER
          </span>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {items.map((elem, index) => {
            const { src, category } = elem
            return (
              <div className="" key={index}>
                <video
                  onClick={() => {setModal(true), setSrcM(src)}}
                  className="hover:scale-105 transition-all duration-200"
                  src={src}
                  autoPlay
                  loop
                  muted
                  id="bgVideo"
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            )
          })}
        </div>
      </div>

      {/* modal */}
      {modal && <GaleryModal src={srcM} setModal={setModal} />}
    </div>
  )
}

export default GalleryPage
