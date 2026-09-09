import React from 'react';

interface FaIconProps {
  name: string; // e.g., "fa-solid fa-droplet", "fa-brands fa-whatsapp", "fa-solid fa-phone-volume"
  className?: string;
  animation?: 'beat' | 'bounce' | 'fade' | 'shake' | 'spin' | 'pulse';
  title?: string;
}

export const FaIcon: React.FC<FaIconProps> = ({ name, className = '', animation, title }) => {
  const animClass = animation ? `fa-${animation}` : '';
  const fullClassName = `${name} ${animClass} ${className}`.trim();

  return <i className={fullClassName} title={title} aria-hidden="true" />;
};
