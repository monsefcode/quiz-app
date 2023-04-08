import React from "react";
import RandomAvatar from "./RandomAvatar";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createUser } from "../api";
import { UserContext } from "../UserContext";
// =======================================    =======================================

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

  const { mutate, isError } = useMutation({
    mutationFn: (data: any) => createUser(data),
    onSuccess: (data) => {
      setUserContext(data);
    },
  });

  const { user: userContext, setUser: setUserContext } =
    React.useContext(UserContext);

  const onSubmit = (data: any) => {
    setIsUser(true);
    setUser(data);
    //
    mutate(data);
  };

  console.log(isError);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col items-center justify-center gap-5 py-4"
    >
      <RandomAvatar
        randomAvatar={randomAvatarNumber}
        width={90}
        height={90}
        className="absolute top-0 left-[61%] -mt-20 -ml-20 border-4 border-blue-600 drop-shadow-lg "
      />
      <div className="flex flex-col w-full p-5 mx-auto drop-shadow-lg">
        <input
          type="text"
          placeholder="Username"
          className="p-2 mt-2 font-bold text-blue-900 placeholder-white bg-blue-300 bg-opacity-50 border-2 border-blue-600 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent drop-shadow-lg"
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
          className="p-2 mt-2 font-bold text-blue-900 placeholder-white bg-blue-300 bg-opacity-50 border-2 border-blue-600 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent drop-shadow-lg"
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
        className="p-3 text-xl font-bold text-center duration-300 transform bg-blue-600 rounded-xl hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 "
        onClick={() =>
          user.username !== "" && user.phoneNumber !== "" && setIsUser(true)
        }
      >
        Submit
      </button>
    </form>
  );
};
