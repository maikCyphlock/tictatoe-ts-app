import React from 'react'

const ModalWin = ({winner,open}:{winner:string,open:boolean}) => {
  return (
    <dialog className='modal' open >{winner}</dialog>
  )
}

export default ModalWin