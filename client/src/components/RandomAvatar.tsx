import React from "react";

const avatars = ["/items/mascotte-1.png", "/items/mascotte-2.png"];

const RandomAvatar = ({
  width,
  height,
  className,
}: {
  randomAvatar: number;
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <img
      src={avatars[Math.floor(Math.random() * avatars.length)]}
      alt="avatar"
      className={`bg-white rounded-full bg-opacity-60 ${className} object-cover object-center 
        border-2 border-blue-600
      `}
      width={width || 60}
      height={height || 60}
    />
  );
};

export default RandomAvatar;
