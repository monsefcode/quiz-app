import React from "react";
import RandomAvatar from "./RandomAvatar";

type FloatingUserCardProps = {
  user: any;
  randomAvatarNumber: number;
};

const FloatingUserCard = ({
  user,
  randomAvatarNumber,
}: FloatingUserCardProps) => {
  return (
    <div className="absolute top-0 flex items-center justify-center gap-2 p-3 m-5 bg-white bg-opacity-50 shadow-xl -left-0 rounded-xl backdrop-filter backdrop-blur-lg ">
      <RandomAvatar />
      <div className="flex flex-col w-full p-5 mx-auto drop-shadow-lg">
        <h1 className="text-xl font-bold text-center text-blue-900 ">
          User: {user.username}
        </h1>
        <h1 className="text-xl font-bold text-center text-blue-900 ">
          Time: {user.time}
        </h1>
      </div>
    </div>
  );
};

export default FloatingUserCard;
