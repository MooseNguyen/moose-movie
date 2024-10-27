import { ButtonHTMLAttributes } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button = ({ className, children, ...rest }: IButtonProps) => {
  return (
    <button
      className={`rounded-[60px] font-bold text-white text-sm tracking-wider cursor-pointer overflow-hidden relative ${className ? className : null}`}
      {...rest}
    >
      <span>{children}</span>
    </button>
  )
}
