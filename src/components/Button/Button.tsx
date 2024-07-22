import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={`rounded-[60px] font-bold text-white text-sm tracking-wider cursor-pointer overflow-hidden relative ${className ? className : null}`}
      {...rest}
    >
      <span>{children}</span>
    </button>
  )
}
