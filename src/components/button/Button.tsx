import { FC } from 'react'
import '@/components/button/Button.scss'
import { Button } from '@/components/button/models.ts'

const Button: FC<Button> = ({ children, variant = 'primary', ...rest }) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
