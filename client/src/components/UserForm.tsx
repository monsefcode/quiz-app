import React from "react";
import RandomAvatar from "./RandomAvatar";
import { useForm } from "react-hook-form";

const usernameRegex = /^[a-zA-Z0-9]+$/;
const morrocanPhoneRegex = /^(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}$/;

export const UserForm = ({
  randomAvatarNumber,
  user,
  setUser,
  setIsUser,
}: {
  randomAvatarNumber: number;
  user: any;
  setUser: any;
  setIsUser: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setIsUser(true);
    setUser(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-5"
    >
      <RandomAvatar randomAvatar={randomAvatarNumber} width={130} />
      <div className="flex flex-col w-full p-5 mx-auto drop-shadow-lg">
        <input
          type="text"
          placeholder="Username"
          className="p-3 mt-2 text-lg font-bold text-blue-900 placeholder-white bg-blue-300 bg-opacity-50 border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-xl drop-shadow-lg "
          {...register("username", {
            required: "Username is required",
            pattern: {
              value: usernameRegex,
              message: "Username must be alphanumeric",
            },
          })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="p-3 mt-2 text-lg font-bold text-blue-900 placeholder-white bg-blue-300 bg-opacity-50 border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-xl drop-shadow-lg "
          {...register("phoneNumber", {
            required: "Phone Number is required",
            pattern: {
              value: morrocanPhoneRegex as RegExp,
              message: "Phone Number must be a valid Moroccan phone number",
            },
          })}
        />
      </div>
      <button
        type="submit"
        className="p-3 mt-2 text-xl font-bold text-center bg-blue-600 rounded-xl"
        onClick={() =>
          user.username !== "" && user.phoneNumber !== "" && setIsUser(true)
        }
      >
        Submit
      </button>
    </form>
  );
};
