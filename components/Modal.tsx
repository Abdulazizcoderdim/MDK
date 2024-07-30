'use client'

import { X } from 'lucide-react'
import { Dispatch, SetStateAction, useRef } from 'react'

type ModalProps = {
  setModalSearch: Dispatch<
    SetStateAction<'rasm1' | 'rasm2' | 'rasm3' | 'rasm4' | null>
  >
  modalSearch: 'rasm1' | 'rasm2' | 'rasm3' | 'rasm4' | null
  setModal: (modal: boolean) => void
}
const Modal = ({
  setModalSearch,
  modalSearch,
  setModal,
}: ModalProps): JSX.Element => {
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
      <div className="flex flex-col items-center justify-center text-white p-20 ">
        <p className="flex justify-end w-full">
          <X
            onClick={() => setModal(false)}
            className="origin-right cursor-pointer"
          />
        </p>
        <img
          width={
            modalSearch === 'rasm3' ? 500 : modalSearch === 'rasm4' ? 500 : 1000
          }
          height={500}
          className="object-cover"
          src={`/${modalSearch}.png` || `${modalSearch}.mp4`}
          alt=""
        />
      </div>
    </div>
  )
}

export default Modal
