import React from "react";
import { CustomButtonProps } from "../types/dataTypes";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onClick,
  isOutline,
  rightIcon,
  customStyles,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        `${
          isOutline
            ? "border border-text-secondary hover:border-primary hover:text-primary min-h-8 px-2 rounded-md text-text-secondary text-md font-normal"
            : `flex items-center justify-center gap-2 px-6 py-1 bg-primary font-light text-white rounded-md text-nowrap hover:scale-105`
        } ` + customStyles
      }
    >
      {rightIcon && <img src={rightIcon} className="w-4 h-4 object-contain" />}
      {title}
    </button>
  );
};

export default CustomButton;
