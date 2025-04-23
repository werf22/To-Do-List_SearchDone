import React, { useState, useRef, useEffect } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';

interface MultiSelectProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (newValue: string[]) => void;
  placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  value = [],
  onChange,
  placeholder = 'Select options...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [position, setPosition] = useState<'bottom' | 'top'>('bottom');
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter options based on search term
  const filteredOptions = searchTerm
    ? options.filter((option) => 
        option.toLowerCase().includes(searchTerm.toLowerCase()))
    : options;

  // Calculate positioning when dropdown opens
  useEffect(() => {
    if (isOpen && containerRef.current && dropdownRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - containerRect.bottom;
      const spaceAbove = containerRect.top;
      const dropdownHeight = Math.min(filteredOptions.length * 36 + 60, 300); // Estimate height
      
      if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [isOpen, filteredOptions.length]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle option selection
  const toggleOption = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(item => item !== option)
      : [...value, option];
    onChange(newValue);
  };

  // Remove a selected option
  const removeOption = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newValue = value.filter(item => item !== option);
    onChange(newValue);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      
      {/* Selected values display */}
      <div
        className="min-h-10 p-2 border border-gray-300 rounded-md bg-white w-full cursor-pointer flex flex-wrap gap-1 items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value.length === 0 ? (
          <span className="text-gray-500">{placeholder}</span>
        ) : (
          <>
            {value.map((item) => (
              <span 
                key={item} 
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center"
              >
                {item}
                <button
                  onClick={(e) => removeOption(item, e)}
                  className="ml-1 text-blue-800 hover:text-blue-900"
                  aria-label={`Remove ${item}`}
                >
                  <Cross2Icon />
                </button>
              </span>
            ))}
          </>
        )}
      </div>
      
      {/* Dropdown menu */}
      {isOpen && (
        <div 
          ref={dropdownRef}
          className={`fixed z-50 w-full max-w-[calc(100%-2rem)] border border-gray-300 rounded-md bg-white shadow-lg max-h-60 overflow-auto ${
            position === 'top' 
              ? 'bottom-full mb-1' 
              : 'top-full mt-1'
          }`}
          style={{
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
            left: containerRef.current ? `${containerRef.current.getBoundingClientRect().left}px` : '0',
            ...(position === 'top' 
              ? { bottom: `${window.innerHeight - (containerRef.current?.getBoundingClientRect().top || 0)}px` } 
              : { top: `${(containerRef.current?.getBoundingClientRect().bottom || 0)}px` })
          }}
        >
          {/* Search input */}
          <div className="sticky top-0 bg-white border-b border-gray-300 p-2">
            <input
              type="text"
              placeholder="Search options..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="w-full p-2 border border-gray-300 rounded-md"
              autoFocus
            />
          </div>
          
          {/* Options list */}
          <div className="p-1">
            {filteredOptions.length === 0 ? (
              <div className="py-2 px-3 text-gray-500">No options found</div>
            ) : (
              filteredOptions.map((option) => (
                <div 
                  key={option}
                  className="py-2 px-3 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => toggleOption(option)}
                >
                  <Checkbox.Root
                    className="mr-2 w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center"
                    checked={value.includes(option)}
                    onCheckedChange={() => toggleOption(option)}
                    id={`checkbox-${option.replace(/\s+/g, '-')}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Checkbox.Indicator>
                      <CheckIcon className="w-3 h-3 text-blue-600" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label 
                    htmlFor={`checkbox-${option.replace(/\s+/g, '-')}`}
                    className="cursor-pointer flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {option}
                  </label>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
