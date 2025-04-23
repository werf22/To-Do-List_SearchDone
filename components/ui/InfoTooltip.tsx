import React, { useState, useRef, useEffect } from 'react';
import { InfoCircledIcon } from '@radix-ui/react-icons';

interface InfoTooltipProps {
  content: string;
  maxWidth?: number;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ 
  content, 
  maxWidth = 300 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current && 
        !tooltipRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  // Toggle tooltip visibility
  const toggleTooltip = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative inline-block ml-1">
      <div 
        ref={iconRef}
        onClick={toggleTooltip} 
        className="text-gray-400 hover:text-gray-600 cursor-pointer"
      >
        <InfoCircledIcon className="w-4 h-4" suppressHydrationWarning={true} />
      </div>
      
      {isVisible && (
        <div 
          ref={tooltipRef}
          className="absolute z-50 bg-white border border-gray-200 rounded-md shadow-lg p-3 text-sm text-gray-700"
          style={{ 
            maxWidth: `${maxWidth}px`,
            right: 0,
            top: '100%',
            marginTop: '0.5rem'
          }}
        >
          <div className="whitespace-pre-wrap">{content}</div>
        </div>
      )}
    </div>
  );
};

export default InfoTooltip;
