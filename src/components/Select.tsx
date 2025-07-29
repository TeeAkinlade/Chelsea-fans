import { useState, useRef, useEffect } from "react";
import { iconArrowDown } from "../constants/media";

interface OptionType {
  label: string;
  value: string | number;
}

interface SelectType {
  options: OptionType[];
  onSelect: (option: OptionType) => void;
  icon?: string;
}

export const Select = ({ options, onSelect, icon = iconArrowDown }: SelectType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0] || null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (dropdownRef.current && target && !dropdownRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);  
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-fit" ref={dropdownRef}>
      <div
        className="bg-[white] border border-[#E7E7E7] rounded-md px-3 py-1 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-black/80 text-sm">   
          {selectedOption ? selectedOption.label : ''}
        </span>
        <span className={`ml-2 transform text-[#909DAD] text-sm ${isOpen ? "rotate-180" : ""}`}>
          <img src={icon} alt="arrow" />
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border-0 rounded-lg shadow-custom z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="pt-3 text-sm text-center text- font-medium text-[#0A0A0A]/80 cursor-pointer hover:bg-[#F9F9F9]"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
              <div className="h-[1px] w-full border-0 bg-[#E7E7E7] mt-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};