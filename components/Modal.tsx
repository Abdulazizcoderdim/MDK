'use client'

import { Dispatch, SetStateAction, useRef } from 'react'

type ModalProps = {
    setModalSearch: Dispatch<SetStateAction<"rasm1" | "rasm2" | "rasm3" | "rasm4" | null>>
  }
const Modal = ({ setModalSearch }: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) setModalSearch(null)
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed flex justify-center items-center z-[1002] inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      asas
    </div>
  )
}

export default Modal
