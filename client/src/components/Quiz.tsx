import React from "react";

const Quiz = ({
  quizQuestions,
  currentQuestion,
  handleAnswerQuestion,
  setIsOn,
}: any) => {
  return (
    <>
      <h1 className="font-bold text-center text-blue-700 text-md">
        Question {currentQuestion + 1} / {quizQuestions?.length}
      </h1>

      <h1 className="text-2xl font-bold text-center text-blue-900">
        {quizQuestions[currentQuestion].question}
      </h1>
      <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-1 ">
        {quizQuestions[currentQuestion].answers.map(
          (answer: any, i: number) => (
            <button
              key={i}
              className={`flex items-center gap-5 p-3 text-xl font-bold text-center transition-all  ease-in-out bg-white rounded-xl hover:bg-blue-800 hover:shadow-xl hover:scale-105 text-blue-900 hover:text-white duration-300`}
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

export default Quiz;
