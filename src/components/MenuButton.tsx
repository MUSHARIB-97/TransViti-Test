import React, { useState, useCallback, memo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMAGES from "../assets/images";
import { MenuButtonProps, MenuItemProps } from "../types/dataTypes";

const MenuButton: React.FC<MenuButtonProps> = memo(
  ({ title, list, selected, setSelected, style }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSelect = useCallback(
      (item: MenuItemProps) => {
        setSelected?.(item.title);
        setIsOpen(false);
      },
      [setSelected]
    );

    const handleToggle = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      setIsOpen((prev) => !prev);
    }, []);

    const handleMouseEnter = useCallback(() => {
      // Only open on hover for desktop
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      }
    }, []);

    const handleMouseLeave = useCallback(() => {
      // Only close on leave for desktop
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    return (
      <div
        ref={containerRef}
        className="relative text-left w-full focus:outline-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          onClick={handleToggle}
          className={`h-8 w-full flex items-center justify-between outline-none ${style}
         bg-background-secondary px-2 py-5 rounded-md md:bg-transparent md:px-0 md:py-0`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={selected || title}
        >
          <span className="text-text-secondary  px-2 text-base">
            {selected || title}
          </span>
          <img
            src={IMAGES.arrowdown}
            alt=""
            className={`w-4 h-4 object-contain transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            width={16}
            height={16}
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
              role="listbox"
              aria-label={title}
            >
              <li className="flex md:hidden px-4 py-2 text-sm text-text-card font-semibold">
                {title}
              </li>
              {list.map((value: MenuItemProps) => (
                <li
                  key={value.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-text-secondary"
                  onClick={() => handleSelect(value)}
                  role="option"
                  aria-selected={selected === value.title}
                >
                  {value.title}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

MenuButton.displayName = "MenuButton";

export default MenuButton;
