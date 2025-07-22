import React from 'react';

interface PerfumeBottleIconProps {
  className?: string;
  size?: number;
}

const PerfumeBottleIcon: React.FC<PerfumeBottleIconProps> = ({ 
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
      {/* Bottle body */}
      <path
        d="M8 12v7c0 1.5 1.5 3 3 3h2c1.5 0 3-1.5 3-3v-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      
      {/* Bottle neck */}
      <path
        d="M10 8v4h4V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.2"
      />
      
      {/* Cap */}
      <path
        d="M9 6h6v2h-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.9"
      />
      
      {/* Spray nozzle */}
      <circle
        cx="12"
        cy="4"
        r="1"
        fill="currentColor"
      />
      
      {/* Decorative liquid level */}
      <path
        d="M9 16h6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Sparkle effects */}
      <circle cx="10" cy="14" r="0.5" fill="currentColor" opacity="0.7" />
      <circle cx="14" cy="17" r="0.5" fill="currentColor" opacity="0.7" />
      <circle cx="11" cy="18" r="0.3" fill="currentColor" opacity="0.5" />
    </svg>
  );
};

export default PerfumeBottleIcon;
