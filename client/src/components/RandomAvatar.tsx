import React from "react";

const avatars = ["/items/mascotte-1.png", "/items/mascotte-2.png"];

const RandomAvatar = ({
  width,
  height,
  className,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  const [avatar, setAvatar] = React.useState(null);

  const handleSelectAvatar = (e: any) => {
    setAvatar(e.target.value);
  };

  return (
    <img
      src={avatars[0]}
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
