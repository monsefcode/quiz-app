import React, { useState, createContext } from "react";

export const TimeContext = createContext({
  time: 0,
  handleChangeTime: (time: number) => {},
});

export const TimeProvider = ({ children }: any) => {
  const [time, setTime] = useState(0);

  const handleChangeTime = (time: number) => {
    setTime(time);
  };

  return (
    <TimeContext.Provider value={{ time, handleChangeTime }}>
      {children}
    </TimeContext.Provider>
  );
};
