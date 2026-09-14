import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outline' | 'ghost';
  size?: 'default' | 'icon-lg';
};

export function Button({
  className = '',
  variant = 'outline',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button ${variant === 'ghost' ? 'button-ghost' : 'button-outline'} ${
        size === 'icon-lg' ? 'button-icon-lg' : ''
      } ${className}`}
      {...props}
    />
  );
}

export function ChapterHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="chapter-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="chapter-copy">{children}</div> : null}
    </div>
  );
}
