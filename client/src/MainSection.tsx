import React from "react";
import { useEffect, useState } from "react";
import RandomAvatar from "./components/RandomAvatar";
import { UserForm } from "./components/UserForm";
import { getAllUsers, updateUser } from "./api";
import { useQuery, useMutation } from "react-query";
import { UserContext } from "./UserContext";
// cts
import {
  firstLetterToUpperCase,
  secondsToTime,
  quizQuestions as quizQuestionsConfig,
} from "./constants";
// audio
// import sound from "./audios/quiz.mp3";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useConfigTranslation from "./Helper";
import { FloatingUserCard } from "./components/FloatingUserCard";
import Quiz from "./components/Quiz";
import { TimeContext } from "./TimeContext";
// =======================================    =======================================

function MainSection() {
  // const { data: users } = useQuery(["users"], getAllUsers);

  const { user: userContext } = React.useContext(UserContext);
  const { time } = React.useContext(TimeContext);

  const { mutate } = useMutation({
    mutationFn: (data: any) => updateUser(userContext?.id, data),
  });

  const { t, i18n } = useTranslation();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState({
    username: "",
    phoneNumber: "",
  });
  const [isOn, setIsOn] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const randomAvatarNumber = Math.floor(Math.random() * 1000);

  // ? handle quiz questions
  const quizQuestions = useConfigTranslation(quizQuestionsConfig);
  console.log(quizQuestions);

  /*
   * This function is ansewer question handler
   * @param {boolean} answerIsCorrect
   */
  const handleAnswerQuestion = (answerIsCorrect: boolean) => {
    if (answerIsCorrect) {
      setScore(score + 1);
    }
    setUserClicked(true);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // end of quiz
      setShowScore(true);
      // update user score
      mutate({
        score,
        timing: time,
      });
    }
  };

  return (
    <main className="relative z-10 flex flex-col items-center justify-center p-2 text-white md:pt-6">
      <select
        className="absolute top-0 right-0 z-50 m-4 text-blue-800"
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="fr">Francais</option>
        <option value="ar">Arabe</option>
      </select>
      <img
        src="/icon.png"
        className="absolute top-0 left-0 w-20 m-10 mb-2 duration-200 opacity-50"
      />
      {/* Floating images */}
      <img
        src="/items/img5.png"
        className="absolute left-0 w-1/6 duration-200 opacity-50 top-20 "
      />
      <img
        src="/items/img2.png"
        className="absolute top-0 w-1/6 duration-200 opacity-50 right-4 "
      />
      <img
        src="/items/img3.png"
        className="absolute w-1/6 duration-200 opacity-50 -bottom-60 left-64 "
      />
      <img
        src="/items/img1.png"
        className="absolute w-1/5 duration-200 opacity-50 -bottom-60 right-20 "
      />
      {/* Floating images */}
      {isOn && <FloatingUserCard user={user} isOn={isOn} />}
      <div
        className={`
          ${!isUser || showScore ? "mt-40" : ""}
        flex flex-col p-5 mx-auto bg-blue-100 bg-opacity-50 rounded-xl drop-shadow-lg backdrop-filter backdrop-blur-lg
          max-w-2xl 
        `}
      >
        {showScore ? (
          <div className="flex flex-col items-center justify-center p-2 mx-auto">
            <h1 className="text-2xl font-bold text-center text-blue-900">
              {t("timing.urScore")} :
            </h1>
            <h1 className="text-2xl font-bold text-center text-blue-700 ">
              {t("quiz.score")}:{" "}
              <span className="text-3xl font-bold text-center text-blue-900">
                {score}/{quizQuestions.length}{" "}
              </span>{" "}
            </h1>
            <h1 className="text-2xl font-bold text-center text-blue-700 ">
              {t("quiz.time")}:{" "}
              <span className="text-3xl font-bold text-center text-blue-900">
                {secondsToTime(time).m} {t("timing.m")}/ {secondsToTime(time).s}{" "}
                {t("timing.s")}{" "}
              </span>
            </h1>
            <h1 className="mt-5 text-lg font-bold text-center text-slate-700">
              {t("quiz.classmetTitle")} :{" "}
              <Link
                to="/classment"
                className="font-bold text-center text-blue-700 underline text-md"
              >
                {t("quiz.btn")}
              </Link>
            </h1>
          </div>
        ) : (
          <>
            {isUser ? (
              <>
                {!isOn && (
                  <>
                    <div className="flex flex-col items-center justify-center p-2 mx-auto">
                      <h1 className="text-2xl font-bold text-center text-blue-600 ">
                        {t("info.title")}
                      </h1>
                      <p className="p-2 text-xl font-bold text-center text-blue-900 ">
                        {t("info.q1")}
                      </p>
                      <p className="p-2 text-xl font-bold text-center text-blue-900 ">
                        {t("info.q2")}
                      </p>
                      <p className="p-2 text-xl font-bold text-center text-blue-900 ">
                        {t("info.q3")}
                      </p>
                      <p className="p-2 text-xl font-bold text-center text-blue-900 ">
                        {t("info.q4")}
                      </p>
                    </div>
                    <button
                      className="p-3 mt-2 text-xl font-bold text-center transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 hover:shadow-lg hover:scale-105 "
                      onClick={() => setIsOn(true)}
                    >
                      {t("info.start")}
                    </button>
                  </>
                )}

                {isOn && (
                  <>
                    <h1 className="font-bold text-center text-blue-700 text-md">
                      {t("quiz.question")} {currentQuestion + 1} /{" "}
                      {quizQuestions?.length}
                    </h1>

                    <h1 className="text-2xl font-bold text-center text-blue-900">
                      {quizQuestions[currentQuestion].question}
                    </h1>
                    <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-1 ">
                      {quizQuestions[currentQuestion].answers.map(
                        (answer: any, i: number) => (
                          <button
                            key={i}
                            className={`flex items-center gap-5 p-3 text-xl font-bold text-center bg-white rounded-xl hover:bg-blue-800 
                            hover:shadow-xl text-blue-900 hover:text-white
                            `}
                            onClick={() => {
                              handleAnswerQuestion(answer.correct);
                              currentQuestion + 1 === quizQuestions.length &&
                                setIsOn(false);
                            }}
                          >
                            <span className="flex items-center justify-center w-10 h-10 p-2 text-2xl text-blue-900 bg-blue-200 rounded-full">
                              {i + 1}
                            </span>{" "}
                            <span className="text-center">{answer.text}</span>
                          </button>
                        )
                      )}
                    </div>
                  </>
                )}
              </>
            ) : (
              <UserForm
                setUser={setUser}
                setIsUser={setIsUser}
                randomAvatarNumber={randomAvatarNumber}
                user={user}
              />
            )}
          </>
        )}
      </div>

      <div></div>
    </main>
  );
}

export default MainSection;
