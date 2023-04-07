import React from "react";
import { useEffect, useState } from "react";
import RandomAvatar from "./components/RandomAvatar";
import { UserForm } from "./components/UserForm";
import "/fonts/JungleAdventurer.ttf";
import { getAllUsers } from "./api";
import { useQuery } from "react-query";
// =======================================    =======================================

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "New York", correct: false },
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Dublin", correct: false },
    ],
  },
  {
    question: "Who is CEO of Tesla?",
    answers: [
      { text: "Jeff Bezos", correct: false },
      { text: "Elon Musk", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Tony Stark", correct: false },
    ],
  },
  {
    question: "The iPhone was created by which company?",
    answers: [
      { text: "Apple", correct: true },
      { text: "Intel", correct: false },
      { text: "Amazon", correct: false },
      { text: "Microsoft", correct: false },
    ],
  },
  {
    question: "How many Harry Potter books are there?",
    answers: [
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
    ],
  },
].sort(() => Math.random() - 0.5);

const secondsToTime = (secs: number) => {
  const hours = Math.floor(secs / (60 * 60));

  const divisor_for_minutes = secs % (60 * 60);
  const minutes = Math.floor(divisor_for_minutes / 60);

  const divisor_for_seconds = divisor_for_minutes % 60;

  const seconds = Math.ceil(divisor_for_seconds);

  const obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
};

const firstLetterToUpperCase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function App() {
  const { data: users } = useQuery(["users"], getAllUsers);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const [user, setUser] = useState({
    username: "",
    phoneNumber: "",
  });

  const [isUser, setIsUser] = useState(false);

  const [userClicked, setUserClicked] = useState(false);

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
    }
  };

  const [time, setTime] = useState(1);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isOn) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isOn && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, time, currentQuestion]);

  const randomAvatarNumber = Math.floor(Math.random() * 1000);

  console.log(users);

  return (
    <main className="flex flex-col items-center justify-center p-2 text-white bg-img">
      {isOn && (
        <FloatingUserCard
          user={user}
          randomAvatarNumber={randomAvatarNumber}
          time={time}
        />
      )}
      <div className="flex flex-col p-5 mx-auto bg-blue-100 bg-opacity-50 rounded-xl drop-shadow-lg backdrop-filter backdrop-blur-lg ">
        {showScore ? (
          <h1 className="text-2xl font-bold text-center text-blue-900">
            You got {score} out of {quizQuestions.length} correct!, at{" "}
            {secondsToTime(time).m} minutes and {secondsToTime(time).s} seconds
          </h1>
        ) : (
          <>
            {isUser ? (
              <>
                {!isOn && (
                  <>
                    <h1 className="text-2xl font-bold text-center text-blue-900 ">
                      User: {firstLetterToUpperCase(user.username)}
                    </h1>
                    <div className="flex flex-col items-center justify-center p-2 mx-auto">
                      <h1 className="text-2xl font-bold text-center text-blue-900 ">
                        Useful Info:
                      </h1>
                      <p className="p-2 text-xl font-bold text-center text-blue-600 ">
                        1 - You have 10 seconds to answer each question
                      </p>
                      <p className="p-2 text-xl font-bold text-center text-blue-600 ">
                        2 - You have 1 minute to answer all the questions
                      </p>
                      <p className="p-2 text-xl font-bold text-center text-blue-600 ">
                        3 - You can't go back to previous questions
                      </p>
                      <p className="p-2 text-xl font-bold text-center text-blue-600 ">
                        4 - You can't skip questions
                      </p>
                    </div>
                    <button
                      className="p-5 mt-2 text-xl font-bold text-center bg-blue-600 rounded-xl"
                      onClick={() => setIsOn(true)}
                    >
                      Start Quiz
                    </button>
                  </>
                )}

                {isOn && (
                  <QuestionsList
                    currentQuestion={currentQuestion}
                    handleAnswerQuestion={handleAnswerQuestion}
                    setIsOn={setIsOn}
                    userClicked={userClicked}
                  />
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
    </main>
  );
}

export default App;

const QuestionsList = ({
  currentQuestion,
  handleAnswerQuestion,
  setIsOn,
  userClicked,
}: {
  currentQuestion: number;
  handleAnswerQuestion: any;
  setIsOn: any;
  userClicked: boolean;
}) => {
  return (
    <>
      <h1 className="text-lg font-bold text-center text-blue-900">
        Question {currentQuestion + 1} / {quizQuestions?.length}
      </h1>

      <h1 className="text-3xl font-bold text-center text-blue-900">
        {quizQuestions[currentQuestion].question}
      </h1>
      <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-1">
        {quizQuestions[currentQuestion].answers.map(
          (answer: any, i: number) => (
            <button
              key={i}
              className={`flex items-center gap-5 p-3 text-xl font-bold text-center transition-all  ease-in-out bg-white
               rounded-xl hover:bg-blue-800 hover:shadow-xl hover:scale-105 
                text-blue-900
                  hover:text-white
                  duration-300
                `}
              onClick={() => {
                handleAnswerQuestion(answer.correct);
                currentQuestion + 1 === quizQuestions.length && setIsOn(false);
              }}
            >
              <span className="flex items-center justify-center w-10 h-10 p-2 text-2xl text-blue-900 bg-blue-200 rounded-full hover:bg-blue-800 hover:shadow-xl hover:scale-105 ">
                {i + 1}
              </span>{" "}
              <span className="text-center">{answer.text}</span>
            </button>
          )
        )}
      </div>
    </>
  );
};

const FloatingUserCard = ({
  user,
  randomAvatarNumber,
  time,
}: {
  user: any;
  randomAvatarNumber: number;
  time: number;
}) => {
  return (
    <div className="flex gap-2 p-3 m-5 bg-white bg-opacity-50 shadow-xl rounded-xl backdrop-filter backdrop-blur-lg ">
      <RandomAvatar randomAvatar={4} />
      <div className="flex flex-col w-full p-5 mx-auto drop-shadow-lg">
        <h1 className="text-lg font-bold text-blue-500 ">
          User:{" "}
          <span className="text-2xl font-bold text-center text-blue-900 ">
            {firstLetterToUpperCase(user.username)}
          </span>
        </h1>
        <h1 className="text-lg font-bold text-blue-500 ">
          Time:{" "}
          <span className="text-2xl font-bold text-center text-blue-900 ">
            {secondsToTime(time).m} minutes and {secondsToTime(time).s} seconds
          </span>
        </h1>
      </div>
    </div>
  );
};
