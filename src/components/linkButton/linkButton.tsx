import styles from './linkButton.module.css';

export interface LinkButtonProps {
  children: string;
  dark?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function LinkButton({
  children,
  dark = false,
  disabled = false,
  secondary = false,
  onClick,
}: LinkButtonProps) {
  const kind = secondary ? `secondary--${dark ? 'dark' : 'light'}` : 'primary';
  return (
    <button
      type="button"
      className={`${styles['link-button']} ${styles[kind]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default LinkButton;
