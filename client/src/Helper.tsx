import React from "react";
import { useTranslation } from "react-i18next";
import { quizQuestions } from "./constants";

const useConfigTranslation = (quizQuestions: any[]) => {
  const { t } = useTranslation();

  const translatedConfig = quizQuestions.map((item, i) => {
    return {
      question: t(`questions.q${i + 1}.question`),
      answers: item.answers.map((answer: any) => ({
        text: answer.text,
        correct: answer.correct,
      })),
    };
  });

  return translatedConfig;
};

export default useConfigTranslation;
