import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  fr: {
    translation: {
      form: {
        username: "Nom d'utilisateur",
        phone: "Numéro de téléphone",
        send: "Envoyer",
      },
      info: {
        title: "Informations utiles :",
        q1: "1 - Vous devez répondre à toutes les questions",
        q2: "2 - Vous ne pouvez pas revenir aux questions précédentes",
        q3: "3 - Vous ne pouvez pas ignorer les questions",
        q4: "4 - Le score est calculé en fonction du notes et du temps",
        start: "Commencer le Quiz",
      },
      userCard: {
        user: "Utilisateur",
        time: "Temps",
      },
      quiz: {
        question: "Question",
        score: "Note",
        time: "Temps",
        classmetTitle: "Vous pouvez trouver le classement ici",
        btn: "Classement",
      },
      timing: {
        m: "min",
        s: "sec",
        urScore: "Votre score",
      },
      questions: {
        q1: {
          question: "Quelle est la date de création de COPAG",
          answers: [
            { id: "q1a1", content: "1995" },
            { id: "q1a2", content: "2000" },
            { id: "q1a3", content: "1987" },
            { id: "q1a4", content: "2015" },
          ],
        },
        q2: {
          question: "Le nombre de producteurs à COPAG est de combien ? ",
          answers: [
            { id: "q2a1", content: "1,000" },
            { id: "q2a2", content: "24,000" },
            { id: "q2a3", content: "5,000" },
            { id: "q2a4", content: "10,000" },
          ],
        },
        q3: {
          question: "Combien de coopératives sont adhérentes à COPAG ?",
          answers: [
            { id: "q3a1", content: "72" },
            { id: "q3a2", content: "20" },
            { id: "q3a3", content: "100" },
            { id: "q3a4", content: "50" },
          ],
        },
        q4: {
          question:
            "Quel est le nom de la filiale COPAG destinée à la production des produits laitiers ?",
          answers: [
            { id: "q4a1", content: "COPAG" },
            { id: "q4a2", content: "DELIGHT" },
            { id: "q4a3", content: "JAYDA" },
            { id: "q4a4", content: "JAOUDA" },
          ],
        },
        q5: {
          question: "De combien de vaches laitières dispose COPAG ?",
          answers: [
            { id: "q5a1", content: "50,000.00" },
            { id: "q5a2", content: "10,000" },
            { id: "q5a3", content: "5,000" },
            { id: "q5a4", content: "102,000.00" },
          ],
        },
        q6: {
          question:
            "Combien de litres de lait cru est collecté chaque jour à Jaouda ?",
          answers: [
            { id: "q6a1", content: "500,000" },
            { id: "q6a2", content: "100,000" },
            { id: "q6a3", content: "10,000" },
            { id: "q6a4", content: "+1,3 MILLION" },
          ],
        },
        q7: {
          question:
            "Combien de tonnes d’aliments de bétail sont produits par COPAG pour garantir les normes nutritionnelles les plus strictes aux vaches laitières ?",
          answers: [
            { id: "q7a1", content: "100,000" },
            { id: "q7a2", content: "50,000" },
            { id: "q7a3", content: "200,000" },
            { id: "q7a4", content: "+300 000" },
          ],
        },
        q8: {
          question:
            "Comment s'appelle la filiale de COPAG dédiée à la viande et les produits à base de viande ?",
          answers: [
            { id: "q8a1", content: "JAOUDA" },
            { id: "q8a2", content: "DELIGHT" },
            { id: "q8a3", content: "GHILAL" },
            { id: "q8a4", content: "JAYDA" },
          ],
        },
        q9: {
          question:
            "Quelle est la superficie de l'atelier d’élevage et d’engraissement aux normes internationales créé en 2005 par Jayda ?",
          answers: [
            { id: "q9a1", content: "15 Ha" },
            { id: "q9a2", content: "5 Ha" },
            { id: "q9a3", content: "10 Ha" },
            { id: "q9a4", content: "24 Ha" },
          ],
        },
        q10: {
          question:
            "Quelle est la capacité annuelle de production de Jayda en têtes bovines ?",
          answers: [
            { id: "q10a1", content: "6,000" },
            { id: "q10a2", content: "10,000" },
            { id: "q10a3", content: "20,000" },
            { id: "q10a4", content: "18,000" },
          ],
        },
        q11: {
          question:
            "Quelle est la capacité annuelle de production de Jayda en têtes ovines ?",
          answers: [
            { id: "q11a1", content: "65,000" },
            { id: "q11a2", content: "50,000" },
            { id: "q11a3", content: "30,000" },
            { id: "q11a4", content: "10,000" },
          ],
        },
        q12: {
          question:
            "Quel est le nom de la filiale COPAG destinée au conditionnement de fruits et légumes ?",
          answers: [
            { id: "q12a1", content: "COPAG" },
            { id: "q12a2", content: "JAYDA" },
            { id: "q12a3", content: "JAOUDA" },
            { id: "q12a4", content: "DELIGHT" },
          ],
        },
        q13: {
          question: "Quelle est la surface des vergers d'agrumes à Delight ?",
          answers: [
            { id: "q13a1", content: "5000Ha" },
            { id: "q13a2", content: "1000Ha" },
            { id: "q13a3", content: "6900Ha" },
            { id: "q13a4", content: "3000Ha" },
          ],
        },
        q14: {
          question:
            "Quelle est la capacite annulelle de production en tonnes des stations de conditionnemens d'agrumes DELIGHT ?",
          answers: [
            { id: "q14a1", content: "150,000" },
            { id: "q14a2", content: "100,000" },
            { id: "q14a3", content: "45,000" },
            { id: "q14a4", content: "90,000" },
          ],
        },
        q15: {
          question:
            "Quelle est la capacite annulelle de production en tonnes de la station de conditionnement de primeurs DELIGHT ?",
          answers: [
            { id: "q15a1", content: "30,000" },
            { id: "q15a2", content: "10,000" },
            { id: "q15a3", content: "45,000" },
            { id: "q15a4", content: "50,000" },
          ],
        },
      },
    },
  },
  ar: {
    translation: {
      form: {
        username: "اسم المستخدم",
        phone: "رقم الهاتف",
        send: "إرسال",
      },
      info: {
        title: "معلومات مفيدة :",
        q1: "1 - يجب عليك الإجابة على جميع الأسئلة",
        q2: "2 - لا يمكنك العودة إلى الأسئلة السابقة",
        q3: "3 - لا يمكنك تجاهل الأسئلة",
        q4: "4 - يتم حساب النتيجة بناءً على الدرجات والوقت",
        start: "ابدأ الاختبار",
      },
      userCard: {
        user: "المستخدم",
        time: "الوقت",
      },
      quiz: {
        question: "السؤال",
        score: "الدرجة",
        time: "الوقت",
        classmetTitle: "يمكنك العثور على الترتيب هنا",
        btn: "الترتيب",
      },
      timing: {
        m: "دقيقة",
        s: "ثانية",
        urScore: "درجتك",
      },
      questions: {
        q1: {
          question: "ما هو تاريخ إنشاء كوباك",
          answers: [
            { id: "q1a1", content: "1995" },
            { id: "q1a2", content: "2000" },
            { id: "q1a3", content: "1987" },
            { id: "q1a4", content: "2015" },
          ],
        },
        q2: {
          question: "كم عدد الفلاحين في كوباك",
          answers: [
            { id: "q2a1", content: "1,000" },
            { id: "q2a2", content: "24,000" },
            { id: "q2a3", content: "5,000" },
            { id: "q2a4", content: "10,000" },
          ],
        },
        q3: {
          question: "كم عدد التعاونيات المنخرطة في كوباك",
          answers: [
            { id: "q3a1", content: "72" },
            { id: "q3a2", content: "20" },
            { id: "q3a3", content: "100" },
            { id: "q3a4", content: "50" },
          ],
        },
        q4: {
          question:
            "ما إسم الشركة الفرعية التابعة لكوباك و المختصة في صنع منتجات الالبان ",
          answers: [
            { id: "q4a1", content: "COPAG" },
            { id: "q4a2", content: "DELIGHT" },
            { id: "q4a3", content: "JAYDA" },
            { id: "q4a4", content: "JAOUDA" },
          ],
        },
        q5: {
          question: "كم عدد الابقار الحلوب التي تتوفر عليها كوباك",
          answers: [
            { id: "q5a1", content: "50,000.00" },
            { id: "q5a2", content: "10,000" },
            { id: "q5a3", content: "5,000" },
            { id: "q5a4", content: "102,000.00" },
          ],
        },
        q6: {
          question: "كم لتر من الحليب يتم جمعها يوميا من طرف جودة",
          answers: [
            { id: "q6a1", content: "500,000" },
            { id: "q6a2", content: "100,000" },
            { id: "q6a3", content: "10,000" },
            { id: "q6a4", content: "+1,3 MILLION" },
          ],
        },
        q7: {
          question:
            "كم طنا من العلف الحيواني يتم إنتاجه بواسطة كوباك لضمان المعايير الغذائية الأكثر صرامة للأبقار الحلوب ?",
          answers: [
            { id: "q7a1", content: "100,000" },
            { id: "q7a2", content: "50,000" },
            { id: "q7a3", content: "200,000" },
            { id: "q7a4", content: "+300 000" },
          ],
        },
        q8: {
          question:
            "ما إسم الشركة التابعة لكوباك المختصة في بيع اللحوم و المنتوجات القائمة عليها ?",
          answers: [
            { id: "q8a1", content: "JAOUDA" },
            { id: "q8a2", content: "DELIGHT" },
            { id: "q8a3", content: "GHILAL" },
            { id: "q8a4", content: "JAYDA" },
          ],
        },
        q9: {
          question:
            "ما هي مساحة الضيعة المشتركة التي تحترم المواصفات العالمية التي أنشاتها جيدة عام 2005 لتربية و تسمين العجول ?",
          answers: [
            { id: "q9a1", content: "15 Ha" },
            { id: "q9a2", content: "5 Ha" },
            { id: "q9a3", content: "10 Ha" },
            { id: "q9a4", content: "24 Ha" },
          ],
        },
        q10: {
          question:
            "ما هي الطاقة الإنتاجية السنوية لجيدة من رؤوس العجول و الأبقار ?",
          answers: [
            { id: "q10a1", content: "6,000" },
            { id: "q10a2", content: "10,000" },
            { id: "q10a3", content: "20,000" },
            { id: "q10a4", content: "18,000" },
          ],
        },
        q11: {
          question: "ما هي الطاقة الإنتاجية السنوية لجيدة من رؤوس الخرفان ?",
          answers: [
            { id: "q11a1", content: "65,000" },
            { id: "q11a2", content: "50,000" },
            { id: "q11a3", content: "30,000" },
            { id: "q11a4", content: "10,000" },
          ],
        },
        q12: {
          question:
            "ما إسم الشركة الفرعية التابعة لكوباك و المختصة في تعبئة الفواكه و الخضر ?",
          answers: [
            { id: "q12a1", content: "COPAG" },
            { id: "q12a2", content: "JAYDA" },
            { id: "q12a3", content: "JAOUDA" },
            { id: "q12a4", content: "DELIGHT" },
          ],
        },
        q13: {
          question: "ما هي مساحة بساتين الحوامض في DELIGHT ?",
          answers: [
            { id: "q13a1", content: "5000Ha" },
            { id: "q13a2", content: "1000Ha" },
            { id: "q13a3", content: "6900Ha" },
            { id: "q13a4", content: "3000Ha" },
          ],
        },
        q14: {
          question:
            "ما هي الطاقة الإنتاجية السنوية بالأطنان لمحطات تعبئة الحوامض ديلايت  ?",
          answers: [
            { id: "q14a1", content: "150,000" },
            { id: "q14a2", content: "100,000" },
            { id: "q14a3", content: "45,000" },
            { id: "q14a4", content: "90,000" },
          ],
        },
        q15: {
          question:
            "ما هي الطاقة الإنتاجية السنوية بالأطنان لمحطات تعبئة البواكر ديلايت  ?",
          answers: [
            { id: "q15a1", content: "30,000" },
            { id: "q15a2", content: "10,000" },
            { id: "q15a3", content: "45,000" },
            { id: "q15a4", content: "50,000" },
          ],
        },
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
