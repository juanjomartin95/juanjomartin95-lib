import React, {FC} from "react";
import '@/components/button/Button.scss';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: 'primary' | 'secondary' | 'text',
  children?: React.ReactNode,
}

const Button: FC<Button> = ({children, variant='primary', ...rest}) => {
  return <button className={`button ${variant}`} {...rest}>{children}</button>
}

export default Button