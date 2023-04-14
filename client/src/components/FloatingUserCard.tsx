import React from "react";
import { useTranslation } from "react-i18next";
import RandomAvatar from "./RandomAvatar";
import { firstLetterToUpperCase, secondsToTime } from "../constants";
import { TimeContext } from "../TimeContext";

export const FloatingUserCard = ({
  user,
  isOn,
}: {
  user: any;
  isOn: boolean;
}) => {
  const { t } = useTranslation();

  const { handleChangeTime } = React.useContext(TimeContext);

  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    let interval: any = null;
    if (isOn) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isOn && time !== 0) {
      clearInterval(interval);
      handleChangeTime(time);
    }

    return () => {
      clearInterval(interval);
      handleChangeTime(time);
    };
  }, [isOn, time]);

  return (
    <div className="flex gap-2 p-3 m-5 bg-white bg-opacity-50 shadow-xl rounded-xl backdrop-filter backdrop-blur-lg ">
      <RandomAvatar className="w-20 h-20 p-2 text-2xl text-blue-900 bg-blue-200 rounded-full hover:bg-blue-800 hover:shadow-xl hover:scale-105" />
      <div className="flex flex-col w-full p-5 mx-auto drop-shadow-lg">
        <h1 className="text-lg font-bold text-blue-500 ">
          {t("userCard.user")}:{" "}
          <span className="text-xl font-bold text-center text-blue-900 ">
            {firstLetterToUpperCase(user.username)}
          </span>
        </h1>
        <h1 className="text-lg font-bold text-blue-500 ">
          {t("userCard.time")}:{" "}
          <span className="text-xl font-bold text-center text-blue-900 ">
            {secondsToTime(time).m} min / {secondsToTime(time).s} s
          </span>
        </h1>
      </div>
    </div>
  );
};
