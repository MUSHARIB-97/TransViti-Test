import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMAGES from "../assets/images";
import { MenuButtonProps, MenuItemProps } from "../types/dataTypes";

const MenuButton: React.FC<MenuButtonProps> = ({
  title,
  list,
  selected,
  setSelected,
  style,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (item: MenuItemProps) => {
    setSelected?.(item.title);
    setIsOpen(false);
  };

  return (
    <div
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      className="relative text-left w-full focus:outline-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-8 w-full flex items-center justify-between outline-none ${style}
         bg-background-secondary px-2 py-5 rounded-md md:bg-transparent md:px-0 md:py-0`}
      >
        <p className="text-text-secondary border-l-0 md:border-l-2 px-2 text-base">
          {selected || title}
        </p>
        <img
          src={IMAGES.arrowdown}
          className={`w-4 h-4 object-contain transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, scaleY: 0.9, y: -5 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.9, y: -5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute mt-2 w-full bg-white shadow-lg rounded-md z-10 overflow-hidden origin-top"
          >
            <li className="flex md:hidden px-4 py-2 text-sm text-text-card font-semibold">
              {title}
            </li>
            {list.map((value: MenuItemProps) => (
              <li
                key={value.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-text-secondary"
                onClick={() => handleSelect(value)}
              >
                {value.title}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuButton;
