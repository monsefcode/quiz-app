import React from "react";
import RandomAvatar from "./RandomAvatar";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createUser } from "../api";
import { UserContext } from "../UserContext";
// t
import { useTranslation, Trans } from "react-i18next";
// =======================================    =======================================

const usernameRegex = /^[a-zA-Z0-9]+$/;
const morrocanPhoneRegex = /^(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}$/;

export const UserForm = ({
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

  const { t } = useTranslation();

  const { mutate, isError } = useMutation({
    mutationFn: (data: any) => createUser(data),
    onSuccess: (data) => {
      setUserContext(data);
      setIsUser(true);
      setUser(data);
    },
  });

  const { setUser: setUserContext } = React.useContext(UserContext);

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col items-center justify-center gap-5 py-4"
    >
      <RandomAvatar
        width={90}
        height={90}
        className="absolute top-0 left-[61%] -mt-20 -ml-20 border-4 border-blue-600 drop-shadow-lg "
      />
      <div className="flex flex-col w-full p-5 mx-auto drop-shadow-lg">
        <input
          type="text"
          // @ts-ignore
          placeholder={t("form.username")}
          className="p-2 mt-2 font-bold text-blue-900 placeholder-white bg-blue-300 bg-opacity-50 border-2 border-blue-600 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent drop-shadow-lg"
          {...register("username", {
            required: "Nom d'utilisateur est nécessaire",
            pattern: {
              value: usernameRegex,
              message: "Nom d'utilisateur non valide",
            },
          })}
        />
        {errors && errors.username && (
          <p className="mt-1 font-semibold text-red-500">
            {/* @ts-ignore */}
            {errors.username.message}
          </p>
        )}
        <input
          type="text"
          // @ts-ignore
          placeholder={t("form.phone")}
          className="p-2 mt-4 font-bold text-blue-900 placeholder-white bg-blue-300 bg-opacity-50 border-2 border-blue-600 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent drop-shadow-lg"
          {...register("phoneNumber", {
            required: "Le numéro de téléphone est requis",
            pattern: {
              value: morrocanPhoneRegex as RegExp,
              message:
                "Le numéro de téléphone doit être un numéro de téléphone marocain valide",
            },
          })}
        />
        {errors && errors.phoneNumber && (
          <p className="mt-1 font-semibold text-red-500">
            {/* @ts-ignore */}
            {errors.phoneNumber.message}
          </p>
        )}
      </div>

      {isError && (
        <p className="mt-1 font-semibold text-red-500">
          Enter Valide Informations
        </p>
      )}
      <button
        type="submit"
        className="p-3 text-xl font-bold text-center duration-300 transform bg-blue-600 rounded-xl hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 "
      >
        {t("form.send")}
      </button>
    </form>
  );
};
