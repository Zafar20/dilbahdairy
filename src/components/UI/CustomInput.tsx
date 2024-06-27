import React from "react"
import s from './CustomInput.module.scss'
import Image from 'next/image'

interface CustomInputProps {
  holder: string,
  register: any,
  type: string,
  icon: any
}

const CustomInput:React.FC<CustomInputProps> = ({holder,icon, register, type}) => {
  return (
    <div className={s.input}>
        <Image width={37} height={37} src={icon.src} alt="" className={s.input_icon} />
        <input
          placeholder={holder}
          className={s.input_text}
          type={type}
          {...register}
        />
      
    </div>
  )
}

export default CustomInput
