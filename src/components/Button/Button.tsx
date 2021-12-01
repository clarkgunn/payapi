import styles from './Button.module.css';

export interface ButtonProps {
  children: string;
  dark?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  type?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({
  children,
  dark = false,
  disabled = false,
  secondary = false,
  type = 'button',
  onClick,
}: ButtonProps) {
  const kind = secondary ? `secondary--${dark ? 'dark' : 'light'}` : 'primary';
  return (
    <button
      type={type}
      className={`${styles['button']} ${styles[kind]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
