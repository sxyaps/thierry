import React from 'react';

interface MinimalAvatarIconProps {
  className?: string;
  size?: number;
}

const MinimalAvatarIcon: React.FC<MinimalAvatarIconProps> = ({ 
  className = "", 
  size = 24 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Head */}
      <circle
        cx="12"
        cy="9"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      
      {/* Body/Shoulders */}
      <path
        d="M6 20.5c0-4.5 2.5-7.5 6-7.5s6 3 6 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.05"
      />
      
      {/* Elegant detail - small crown or accent */}
      <path
        d="M10.5 6.5L12 5l1.5 1.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
};

export default MinimalAvatarIcon;
