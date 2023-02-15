import Navigation from '../components/navigation';
import Footer from '../components/footer';
import s from '../styles/testQuiz.module.scss';
import React, { useState } from 'react';
import quizResultsPic from '../public/img/forAdults/testLinkPic.webp';

export default function Test() {
  const questions = [
    {
      questionText: 'Where ... you from?',
      answerOptions: [
        { answerText: 'are', isCorrect: true },
        { answerText: '-', isCorrect: false },
        { answerText: 'is', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'These are our parents. ... live in Scotland.',
      answerOptions: [
        { answerText: 'We', isCorrect: false },
        { answerText: 'He', isCorrect: false },
        { answerText: 'They', isCorrect: true },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'She is from the USA. She can speak ... .',
      answerOptions: [
        { answerText: 'on English', isCorrect: false },
        { answerText: 'English', isCorrect: true },
        { answerText: 'in the English', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText:
        'I like this new ... , it’s so beautiful and really suits you.',
      answerOptions: [
        { answerText: 'jeans', isCorrect: false },
        { answerText: 'dress', isCorrect: true },
        { answerText: 'shorts', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'We like ... in the park.',
      answerOptions: [
        { answerText: 'run', isCorrect: false },
        { answerText: 'to drive', isCorrect: false },
        { answerText: 'running', isCorrect: true },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'Can I ... a sandwich, please?',
      answerOptions: [
        { answerText: 'have', isCorrect: true },
        { answerText: 'give', isCorrect: false },
        { answerText: 'buy', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'Do you like going ... with your friends?',
      answerOptions: [
        { answerText: 'back', isCorrect: false },
        { answerText: 'out', isCorrect: true },
        { answerText: 'away', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'The opposite of ‘expensive’ is ... .',
      answerOptions: [
        { answerText: 'cheap', isCorrect: true },
        { answerText: 'light', isCorrect: false },
        { answerText: 'poor', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'He ... so fast I couldn’t remember the way.',
      answerOptions: [
        { answerText: 'drive', isCorrect: false },
        { answerText: 'drove', isCorrect: true },
        { answerText: 'driven', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'I’m much ... than my sister. She is 14.',
      answerOptions: [
        { answerText: 'old', isCorrect: false },
        { answerText: 'older', isCorrect: true },
        { answerText: 'oldest', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText:
        'What are your plans for this summer? – I ... to see the Eiffel Tower!',
      answerOptions: [
        { answerText: 'will', isCorrect: false },
        { answerText: 'am going', isCorrect: true },
        { answerText: 'go', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'This is ... film I’ve ever watched. I love it!',
      answerOptions: [
        { answerText: 'better', isCorrect: false },
        { answerText: 'the best', isCorrect: true },
        { answerText: 'good', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'I couldn’t remember if I ... that woman before.',
      answerOptions: [
        { answerText: 'had seen', isCorrect: true },
        { answerText: 'have seen', isCorrect: false },
        { answerText: 'saw', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'We’ve known each other ... 10 years.',
      answerOptions: [
        { answerText: 'since', isCorrect: false },
        { answerText: 'for', isCorrect: true },
        { answerText: 'before', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText:
        'There are terrible traffic ... in the city. I’d better live in a village.',
      answerOptions: [
        { answerText: 'jams', isCorrect: true },
        { answerText: 'accident', isCorrect: false },
        { answerText: 'roads', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText:
        'He’s so ... . He never pays for anyone, even for his girlfriend.',
      answerOptions: [
        { answerText: 'generous', isCorrect: false },
        { answerText: 'mean', isCorrect: true },
        { answerText: 'smart', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'A teapot is a pot with a handle, in ... tea is brewed.',
      answerOptions: [
        { answerText: 'that', isCorrect: false },
        { answerText: 'what', isCorrect: false },
        { answerText: 'which', isCorrect: true },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'If you ... me earlier, I wouldn’t have been so angry.',
      answerOptions: [
        { answerText: 'have told', isCorrect: false },
        { answerText: 'had told', isCorrect: true },
        { answerText: 'had said', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'I ... like singing when I was a child, but now I don’t.',
      answerOptions: [
        { answerText: 'used to', isCorrect: true },
        { answerText: 'use to', isCorrect: false },
        { answerText: 'didn’t', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'I’ve just quit and don’t want to ... for a new job.',
      answerOptions: [
        { answerText: 'apply', isCorrect: true },
        { answerText: 'search', isCorrect: false },
        { answerText: 'have', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText:
        'I like watching how people are trying to ... different crimes, so I like detectives.',
      answerOptions: [
        { answerText: 'decide', isCorrect: false },
        { answerText: 'solve', isCorrect: true },
        { answerText: 'open', isCorrect: false },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
    {
      questionText: 'I fell in love ... her at first sight.',
      answerOptions: [
        { answerText: 'for', isCorrect: false },
        { answerText: 'on', isCorrect: false },
        { answerText: 'with', isCorrect: true },
        { answerText: 'Не знаю', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswewrButton = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <>
      <Navigation />

      <div className={s.testWrapper}>
        <div className={s.app}>
          {showScore ? (
            <div className={s.score_section}>
              <div className={s.score_section_text}>
                <div className={s.score_section_text_header}>
                  <span className={s.score_section_smile_size}>😎 </span>
                  <p>
                    Вы набрали <b>{score}</b> з <b>{questions.length}</b>
                  </p>
                  {score < 4 && (
                    <div className={s.score_section_score_container}>
                      <div className={s.score_section_score_header}>
                        <p>Ваш рівень</p>
                        <span className={s.score_section_score_header_H}>
                          Beginner
                        </span>
                      </div>
                      <p>
                        <b>A0 - Beginner</b> Ви на початку шляху і тільки
                        починаєте своє знайомство з англійською. Рекомендуємо
                        почати з азів, а саме освоїти алфавіт, базові слова та
                        основи граматики. Зараз саме час приступити до занять і
                        прокачати свою англійську!
                      </p>
                    </div>
                  )}
                  {score > 3 && score < 7 && (
                    <div className={s.score_section_score_container}>
                      <div className={s.score_section_score_header}>
                        <p>Ваш рівень</p>
                        <span className={s.score_section_score_header_H}>
                          Elementary
                        </span>
                      </div>
                      <p>
                        <b>А1 - Elementary</b> You're not bad! Вже можна
                        знайомитись з іноземцями. Перші (найважливіші) кроки
                        зроблені, настав час підвищувати планку! Щоб не
                        відкладати, пря
                      </p>
                    </div>
                  )}
                  {score > 6 && score < 13 && (
                    <div className={s.score_section_score_container}>
                      <div className={s.score_section_score_header}>
                        <p>Ваш рівень</p>
                        <span className={s.score_section_score_header_H}>
                          Pre-intermediate
                        </span>
                      </div>
                      <p>
                        <b>A2 - Pre-intermediate</b> Ваші знання англійської вже
                        на досить хорошому рівні. Тепер радимо розширювати
                        словниковий запас та вивчати складніші граматичні
                        конструкції. Бажаємо продуктивного навчання, яке ви
                        можете розпочати разом з Simple English.
                      </p>
                    </div>
                  )}
                  {score > 12 && score < 19 && (
                    <div className={s.score_section_score_container}>
                      <div className={s.score_section_score_header}>
                        <p>Ваш рівень</p>
                        <span className={s.score_section_score_header_H}>
                          Intermediate
                        </span>
                      </div>
                      <p>
                        <b>B1 - Intermediate</b> Ви досягли базового середнього
                        рівня англійської. Але зупинятися рано, повна свобода
                        мовлення ще попереду. Більшість студентів не переходять
                        до вищого рівня, але ви зможете! Граматика, винятки з
                        правил, читання неадаптованої літератури та більше
                        спілкування англійською чекають на вас. Одними з дієвих
                        способів є онлайн-листування на форумах або в соціальних
                        мережах з іноземцями, перегляд улюблених фільмів або
                        серіалів в оригіналі, прослуховування музики. Викладачі
                        Simple English обов'язково допоможуть вам у досягненні
                        лінгвістичних висот!
                      </p>
                    </div>
                  )}
                  {score > 18 && score < 22 && (
                    <div className={s.score_section_score_container}>
                      <div className={s.score_section_score_header}>
                        <p>Ваш рівень</p>
                        <span className={s.score_section_score_header_H}>
                          Upper-intermediate
                        </span>
                      </div>
                      <p>
                        <b>B1 - Intermediate</b> Ви досягли базового середнього
                        рівня англійської. Але зупинятися рано, повна свобода
                        мовлення ще попереду. Більшість студентів не переходять
                        до вищого рівня, але ви зможете! Граматика, винятки з
                        правил, читання неадаптованої літератури та більше
                        спілкування англійською чекають на вас. Одними з дієвих
                        способів є онлайн-листування на форумах або в соціальних
                        мережах з іноземцями, перегляд улюблених фільмів або
                        серіалів в оригіналі, прослуховування музики. Викладачі
                        Simple English обов'язково допоможуть вам у досягненні
                        лінгвістичних висот!
                      </p>
                    </div>
                  )}

                  {score === 22 && (
                    <div className={s.score_section_score_container}>
                      <div className={s.score_section_score_header}>
                        <p>Ваш рівень</p>
                        <span className={s.score_section_score_header_H}>
                          Advanced
                        </span>
                      </div>
                      <p>
                        <b>C1 - Advanced</b> Браво! Ви можете похвалитися своєю
                        англійською. Пам'ятайте, що потрібно підтримувати свій
                        рівень і практикуватися. Займіться вивченням крилатих
                        виразів, ідіом, прислів'їв - це дозволить
                        урізноманітнити вашу мову і висловлювати думки прозоріше
                        та легше. Адже головне завдання— зробити англійську
                        другою рідною мовою. Наші викладачі допоможуть вам у цій
                        нелегкій справі та допоможуть наблизитись до native
                        speakers. Записуйтесь на безкоштовний пробний урок!
                      </p>
                    </div>
                  )}
                </div>
                <div className={s.score_section_score_bottom_container}>
                  Зверніть увагу! Результати онлайн-тесту є приблизними і не
                  відображають всієї повноти ваших знань. Щоб отримати докладні
                  рекомендації щодо навчання та персональний план занять,
                  важливо пройти академічний тест на визначення рівня
                  англійської мови Simple English.
                </div>
              </div>
              <button className={s.buttonRepeat} onClick={resetQuiz}>
                Пройти тест ще раз!
              </button>
            </div>
          ) : (
            <>
              <div className={s.question_count}>
                <span className={s.header_title}>
                  Запитання {currentQuestion + 1} / {questions.length}{' '}
                </span>
                <p className={s.header_text}>Обери правильний варіант</p>
              </div>

              <div className={s.question_section}>
                <div className={s.question_text}>
                  {questions[currentQuestion].questionText}
                </div>
                <div className={s.answer_section}>
                  {questions[currentQuestion].answerOptions.map(
                    (answerOptions) => (
                      <button
                        key={answerOptions.answerText}
                        className={s.button}
                        onClick={() =>
                          handleAnswewrButton(answerOptions.isCorrect)
                        }
                      >
                        {answerOptions.answerText}
                      </button>
                    )
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
