import { MouseEvent, ReactNode } from 'react';

import { BUTTON_STYLES } from './constants';

type ButtonProps = {
  buttonType: "primary" | "secondary" | "success" | "danger";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  className?: string;
};

const Button = ({ buttonType, onClick, children, className }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer rounded-md ${BUTTON_STYLES[buttonType]} p-2 text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
