import React from "react";
import IMAGES from "../assets/images";

const UserProfileLogo: React.FC = () => {
  return (
    <div className="w-11 h-11 border-2 border-primary rounded-full">
      <img
        src={IMAGES.profile}
        alt="Profile Image"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default UserProfileLogo;
