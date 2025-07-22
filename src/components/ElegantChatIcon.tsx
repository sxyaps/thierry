import React from 'react';

interface ElegantChatIconProps {
  className?: string;
  size?: number;
}

const ElegantChatIcon: React.FC<ElegantChatIconProps> = ({ 
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
      {/* Chat bubble */}
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      
      {/* Elegant dots */}
      <circle cx="9" cy="11.5" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="11.5" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="15" cy="11.5" r="1" fill="currentColor" opacity="0.8" />
      
      {/* Subtle highlight */}
      <path
        d="M8 7.5c2-1.5 6-1.5 8 0"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
};

export default ElegantChatIcon;
