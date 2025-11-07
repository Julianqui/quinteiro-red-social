'use client';

import React from 'react';
import Image from 'next/image';

interface IAvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({
  src,
  alt,
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  const initials = alt
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`
        relative rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500
        flex items-center justify-center text-white font-semibold
        ${sizeStyles[size]} ${className}
      `}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100px, 100px"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

