import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'


const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <small>{props.questionNumber} von {props.quizLength}</small>
        <p>
            <strong>{props.questionNumber}.&nbsp;{props.question}</strong>
        </p>

        <ul>
            <AnswersList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </ul>
    </div>
)

export default ActiveQuiz