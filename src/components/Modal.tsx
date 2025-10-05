import React from "react";
import { Job } from "../types/dataTypes";
import { X } from "lucide-react";
import CustomButton from "./CustomButton";

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job | null;
}

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, job }) => {
  if (!isOpen || !job) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
      <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div className="flex justify-between items-start mb-1 pb-2 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {job.title}
            </h2>
            <p className="text-gray-400 text-sm">{job.company}</p>
          </div>

          {/* <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {job.isSaved ? (
              <BookmarkCheck className="text-blue-500" size={22} />
            ) : (
              <Bookmark className="text-gray-500" size={22} />
            )}
          </button> */}
        </div>

        {/* Job Info */}
        <div className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex justify-between">
            <span className="font-medium">Location:</span>
            <span>{job.location}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Job Type:</span>
            <span>{job.jobType}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Date Posted:</span>
            <span>{job.datePosted}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Applicants:</span>
            <span>{job.applicants}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-3 pt-3 flex justify-end gap-3 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          >
            Close
          </button>
          {/* <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
            Apply Now
          </button> */}
          {/* <CustomButton
            isOutline
            title="Close"
            customStyles="px-4 py-2 rounded-lg bg-gray-100"
          /> */}
          <CustomButton title="Apply Now" />
        </div>
      </div>
    </div>
  );
};

export default JobModal;
