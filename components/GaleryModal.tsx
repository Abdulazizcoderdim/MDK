'use client'

import { useRef } from 'react'

type ModalProps = {
  setModal: (modal: boolean) => void
  src: string | null
}
const GaleryModal = ({ setModal, src }: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) setModal(false)
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed flex justify-center items-center z-[1002] inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div>
        <video
          className="hover:scale-105 transition-all duration-200 w-[800px] h-[650px]"
          src={src as string}
          autoPlay
          loop
          muted
          id="bgVideo"
        >
          <source src={src as string} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default GaleryModal
