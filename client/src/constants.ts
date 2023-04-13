export const quizQuestions = [
  {
    question: "Quelle est la date de création de COPAG",
    answers: [
      { text: "1995", correct: false },
      { text: "2000", correct: false },
      { text: "1987", correct: true },
      { text: "2015", correct: false },
    ],
  },
  {
    question: "Le nombre de producteurs à COPAG est de combien ? ",
    answers: [
      { text: "1,000", correct: false },
      { text: "24,000", correct: true },
      { text: "5,000", correct: false },
      { text: "10,000", correct: false },
    ],
  },
  {
    question: "Combien de coopératives sont adhérentes à COPAG ?",
    answers: [
      { text: "72", correct: true },
      { text: "20", correct: false },
      { text: "100", correct: false },
      { text: "50", correct: false },
    ],
  },
  {
    question:
      "Quel est le nom de la filiale COPAG destinée à la production des produits laitiers ?",
    answers: [
      { text: "COPAG", correct: false },
      { text: "DELIGHT", correct: false },
      { text: "JAYDA", correct: false },
      { text: "JAOUDA", correct: true },
    ],
  },
  {
    question: "De combien de vaches laitières dispose COPAG ?",
    answers: [
      { text: "50,000.00", correct: false },
      { text: "10,000", correct: false },
      { text: "5,000", correct: false },
      { text: "102,000.00", correct: true },
    ],
  },
  {
    question:
      "Combien de litres de lait cru est collecté chaque jour à Jaouda ?",
    answers: [
      { text: "500,000", correct: false },
      { text: "100,000", correct: false },
      { text: "10,000", correct: false },
      { text: "+1,3 MILLION", correct: true },
    ],
  },
  {
    question:
      "Combien de tonnes d’aliments de bétail sont produits par COPAG pour garantir les normes nutritionnelles les plus strictes aux vaches laitières ?",
    answers: [
      { text: "100,000", correct: false },
      { text: "50,000", correct: false },
      { text: "200,000", correct: false },
      { text: "+300 000", correct: true },
    ],
  },
  {
    question:
      "Comment s'appelle la filiale de COPAG dédiée à la viande et les produits à base de viande ?",
    answers: [
      { text: "Jaouda", correct: false },
      { text: "Delight", correct: false },
      { text: "Ghilal", correct: false },
      { text: "Jayda", correct: true },
    ],
  },
  {
    question:
      "Quelle est la superficie de l'atelier d’élevage et d’engraissement aux normes internationales créé en 2005 par Jayda ?",
    answers: [
      { text: "15 Ha", correct: false },
      { text: "5 Ha", correct: false },
      { text: "10 Ha", correct: false },
      { text: "24 Ha", correct: true },
    ],
  },
  {
    question:
      "Quelle est la capacité annuelle de production de Jayda en têtes bovines ?",
    answers: [
      { text: "6,000", correct: false },
      { text: "10,000", correct: false },
      { text: "20,000", correct: true },
      { text: "18,000", correct: false },
    ],
  },
  {
    question:
      "Quelle est la capacité annuelle de production de Jayda en têtes ovines ?",
    answers: [
      { text: "65,000", correct: true },
      { text: "50,000", correct: false },
      { text: "30,000", correct: false },
      { text: "10,000", correct: false },
    ],
  },
  {
    question:
      "Quel est le nom de la filiale COPAG destinée au conditionnement de fruits et légumes ?",
    answers: [
      { text: "COPAG", correct: false },
      { text: "JAYDA", correct: false },
      { text: "JAOUDA", correct: false },
      { text: "DELIGHT", correct: true },
    ],
  },
  {
    question: "Quelle est la surface des vergers d'agrumes à Delight ?",
    answers: [
      { text: "5000Ha", correct: false },
      { text: "1000Ha", correct: false },
      { text: "6900Ha", correct: true },
      { text: "3000Ha", correct: false },
    ],
  },
  {
    question:
      "Quelle est la capacite annulelle de production en tonnes des stations de conditionnemens d'agrumes DELIGHT ?",
    answers: [
      { text: "150,000", correct: true },
      { text: "100,000", correct: false },
      { text: "45,000", correct: false },
      { text: "90,000", correct: false },
    ],
  },
  {
    question:
      "Quelle est la capacite annulelle de production en tonnes de la station de conditionnement de primeurs DELIGHT ?",
    answers: [
      { text: "30,000", correct: false },
      { text: "10,000", correct: false },
      { text: "45,000", correct: false },
      { text: "50,000", correct: true },
    ],
  },
].sort(() => Math.random() - 0.5);

// =======================================    =======================================

export const secondsToTime = (secs: number) => {
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

export const firstLetterToUpperCase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
