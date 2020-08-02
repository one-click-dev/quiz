import React, { useState } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import { Header } from 'semantic-ui-react';


function Quiz () {
    const [results, setResultsState] = useState({}), // Results of Quiz - { [id]: 'success' 'error'}
    [isFinished, setFinished] = useState(false),
    [activeQuestion, setActiveQuestion] = useState(0),
    [answerState, setAnswerState] = useState(null), // { [id]: 'success' 'error'}
    quiz = [
        {
            question: 'Was muss jeder Mitarbeiter über das Verbandsmaterial sowie andere Hilfsmittel wissen?',
            rightAnswerId: 3,
            id: 1,
            answers: [
                { text: 'Was sich alles im Verbandskasten befindet.', id: 1 },
                { text: 'Ob der Verbandskasten vorschriftsmäßig erneuert wurde.', id: 2 },
                { text: 'Wo sich der Verbanskasten sowie die Hilfsmittel zu Ersten Hilfe befinden.', id: 3 },
            ]
        },
        {
            question: 'Was muss jeder Mitarbeiter über den Ersthelfer wissen?',
            rightAnswerId: 1,
            id: 2,
            answers: [
                { text: 'Wer ist der Ersthelfer in meinem Arbeitsbereich und wie kann man ihn erreichen?', id: 1 },
                { text: 'Ist seine Ausbildung auf dem neuesten Stand?', id: 2 },
                { text: 'Kann man sich auf ihn verlassen?', id: 3 },
            ]
        },
        {
            question: 'An welchem Zeichen können Sie den Standort einer Notdusche erkennen?',
            rightAnswerId: 3,
            id: 3,
            answers: [ 
                { text: 'Siehe Symbol', id: 1, img: 'symbol1.jpg'},
                { text: 'Siehe Symbol', id: 2, img: 'symbol2.jpg'},
                { text: 'Siehe Symbol', id: 3, img: 'symbol3.jpg'},
            ]
        },
        {
            question: 'Wie werden Verletzungen eines Arbeitsunfalls rechtssicher dokumentiert?',
            rightAnswerId: 3,
            id: 4,
            answers: [
                { text: 'Durch Bericht des Betriebsarztes.', id: 1 },
                { text: 'Durch Bericht des Vorgesetzten.', id: 2 },
                { text: 'Durch Eintrag im Verbandbuch.', id: 3 },
            ]
        },
        {
            question: 'Was sollen Sie nach dieser Unterweisung als erstes tun?',
            rightAnswerId: 1,
            id: 5,
            answers: [
                { text: 'Mich informieren, wie ich im Notfall die Ersthelfer erreichen kann.', id: 1 },
                { text: 'Einen "Erste Hilfe" - Kurs besuchen.', id: 2 },
                { text: 'Den Verbandkasten in meinem Auto überprüfen.', id: 3 },
            ]
        },
        {
            question: 'Was ist rechtlich notwendig nach einem Arbeitsunfall?',
            rightAnswerId: 2,
            id: 6,
            answers: [
                { text: 'Die Unfallstelle möglichst schnell räumen, damit weiter gearbeited werden kann.', id: 1 },
                { text: 'Der Unfall muss im Verbandbuch documentiert werden.', id: 2 },
                { text: 'Das Verbandmaterial wieder auffühllen.', id: 3 },
            ]
        },
        {
            question: 'Wie verhalte ich mich bei einem Arbeitsunfall?',
            rightAnswerId: 2,
            id: 7,
            answers: [
                { text: 'Ruhe bewahren und die weitere Entwicklung abwarten.', id: 1 },
                { text: 'Wenn möglich, Verletzte aus dem Gefahrenbereich bergen.', id: 2 },
                { text: 'Die Erste Hilfe - Maßnahmen mit einem Smartphone dokumentieren.', id: 3 },
            ]
        },
        {
            question: 'Wie kann ich bei einem Arbeitsunfall helfen und unterstützen?',
            rightAnswerId: 2,
            id: 8,
            answers: [
                { text: 'Gemeinsam mit anderen Kollegen und Kolleginnen alles genau beobachten.', id: 1 },
                { text: 'Shaulustige abweisen.', id: 2 },
                { text: 'Das nächste Krankenhaus anrufen.', id: 3 },
            ]
        },
        {
            question: 'Was enhält der Aushang "Erste Hilfe"?',
            rightAnswerId: 1,
            id: 9,
            answers: [
                { text: 'Die fünf W`s des Notrufs.', id: 1 },
                { text: 'Die Namen aller Ersthelfer.', id: 2 },
                { text: 'Die Anleitung zur Nutzung des Verbandskastens.', id: 3 },
            ]
        },
        {
            question: 'Welche Angaben müssen bei einem Notruf gemacht werden?',
            rightAnswerId: 3,
            id: 10,
            answers: [
                { text: 'Ursache des Unfalls.', id: 1 },
                { text: 'Namen der Verletzten.', id: 2 },
                { text: 'Art der Verletzungen.', id: 3 },
            ]
        }
    ]

   const onAnswerClickHandler = (answerId) => {

        if (answerState) {
            const key = Object.keys(answerState)[0]
            if (answerState[key] === 'success') {
                return
            }
        }
        const question = quiz[activeQuestion] // Current question

        if (question.rightAnswerId === answerId) { // The answer is right
            results[question.id] = 'success'
            setAnswerState({[answerId]: 'success'})
            setResultsState(results)
        } else {
            results[question.id] = 'error' // The answer was wrong, id was recorded in the object "results"
            setAnswerState({[answerId]: 'error'})
            setResultsState(results)
        }

        // Timeout
        const timeout = window.setTimeout(() => {
            if (isQuizFinished()) {
                setFinished({
                    isFinished: true // Quiz is finished
                })
            } else {
                setActiveQuestion(activeQuestion => activeQuestion + 1)
                setAnswerState(null)
            }
            window.clearTimeout(timeout)
        }, 1000)
    }

    // The number of the current question is the length of the array with the questions 
   const isQuizFinished = () => (activeQuestion + 1 === quiz.length)
    

    const retryHandler = () => {
        // Reset the state
        setActiveQuestion(0)
        setAnswerState(null)
        setFinished(false)
        setResultsState({})

    };

        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <Header size='huge' inverted color='primary' textAlign='center'>Quiz: Erste Hilfe beim Arbeitsunfall</Header>
                    {
                        isFinished // Quiz is finished
                            ? <FinishedQuiz
                                results={results}
                                quiz={quiz}
                                onRetry={retryHandler} // Repeat quiz
                            />
                            : <ActiveQuiz // if is quiz not finished -> show questions
                                answers={quiz[activeQuestion].answers}
                                question={quiz[activeQuestion].question}
                                onAnswerClick={onAnswerClickHandler}
                                quizLength={quiz.length}
                                questionNumber={activeQuestion + 1}
                                state={answerState}
                            />
                    }
                </div>
            </div>
        )

}

export default Quiz;
