import { FC } from 'react'
import '@/components/button/Button.scss'
import { ButtonProps } from '@/components/button/models.ts'

export const Button: FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}
