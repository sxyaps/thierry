import React from 'react';

interface LuxuryGemIconProps {
  className?: string;
  size?: number;
}

const LuxuryGemIcon: React.FC<LuxuryGemIconProps> = ({ 
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
      {/* Diamond/Gem shape */}
      <path
        d="M6 9l6-6 6 6-6 12-6-12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      
      {/* Internal facets for sparkle effect */}
      <path
        d="M12 3v8m-6 6l6-8m6 8l-6-8"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.4"
      />
      
      {/* Top facets */}
      <path
        d="M6 9h12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Highlight */}
      <path
        d="M9 6l3-3 1.5 1.5"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
};

export default LuxuryGemIcon;
