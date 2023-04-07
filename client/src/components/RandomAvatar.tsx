import React from "react";

const RandomAvatar = ({
  randomAvatar,
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
      src={`https://avatars.dicebear.com/api/human/${randomAvatar}.svg`}
      alt="avatar"
      className={`bg-white rounded-full bg-opacity-60 ${className}`}
      width={width || 70}
      height={height || 70}
    />
  );
};

export default RandomAvatar;
