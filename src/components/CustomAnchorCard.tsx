import React, { memo } from "react";
import IMAGES from "../assets/images";
import CustomButton from "./CustomButton";
import { CustomAnchorCardProps } from "../types/dataTypes";

const CustomAnchorCard: React.FC<CustomAnchorCardProps> = memo(
  ({
    title,
    company,
    location,
    jobType,
    datePosted,
    applicants,
    isSaved,
    onClick,
  }) => {
    return (
      <article className="w-full flex flex-col justify-between border-2 border-border-primary bg-white p-3 md:px-5 md:py-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Top Badge */}
        <header>
          {isSaved && (
            <p
              className="text-[10px] md:text-xs text-gray-500 font-medium"
              role="status"
            >
              Promoted
            </p>
          )}
        </header>

        {/* Logo + Title */}
        <div className="flex items-center gap-3 md:gap-4 my-2">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-md bg-background-secondary flex items-center justify-center shrink-0">
            <img
              src={IMAGES.teamsLogo}
              alt=""
              className="w-6 h-6 md:w-7 md:h-7 object-contain"
              width={28}
              height={28}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center overflow-hidden">
            <h3
              className="text-sm md:text-base font-semibold text-text-black truncate"
              title={title}
            >
              {title}
            </h3>
            <p className="text-xs md:text-sm text-text-secondary truncate">
              {company}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center mt-2">
          <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shrink-0">
            <img
              src={IMAGES.location}
              alt=""
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
              loading="lazy"
            />
          </div>
          <div className="flex items-center text-text-card text-sm md:text-base w-full overflow-hidden">
            <p className="truncate flex-shrink min-w-0">{location}</p>
            <p className="shrink-0 ml-1 whitespace-nowrap">({jobType})</p>
          </div>
        </div>

        {/* Date Posted + Applicants */}
        <div className="flex items-center mt-2">
          <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shrink-0">
            <img
              src={IMAGES.clock}
              alt=""
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
              loading="lazy"
            />
          </div>
          <div className="flex items-center gap-1 text-text-card text-xs md:text-sm w-full">
            <p className="truncate min-w-0">{datePosted}</p>
            <div
              className="w-[1px] h-4 bg-text-card shrink-0"
              aria-hidden="true"
            />
            <p className="truncate text-primary font-semibold min-w-0 whitespace-nowrap">
              {`${applicants} Applicant${applicants !== 1 ? "s" : ""}`}
            </p>
          </div>
        </div>

        {/* Apply & Save */}
        <footer className="flex items-center justify-between mt-4">
          <CustomButton title="Apply" onClick={onClick} />
          <button
            className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-md transition"
            aria-label={isSaved ? "Unsave job" : "Save job"}
          >
            <img
              src={IMAGES.save}
              alt=""
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
              loading="lazy"
            />
          </button>
        </footer>
      </article>
    );
  }
);

CustomAnchorCard.displayName = "CustomAnchorCard";

export default CustomAnchorCard;
