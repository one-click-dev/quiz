import React from 'react'
import classes from './FinishedQuiz.module.css'
import { Button, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const FinishedQuiz = props => {
    // Object.keys() - the function turns the object into an array of keys of this object
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    const greeting = () => {
        if (successCount >= props.quiz.length * 0.6) {
            return (
                <Header as='h3' color='teal'>Bestanden</Header>
            )
        } else {
            return (
                <div>
                    <Header as='h3' inverted color='red'>Nicht bestanden</Header>
                    <div>
                        Bitte lesen Sie den <Link to="/leitfaden">Erste-Hilfe-Leitfaden</Link> und versuchen Sie nochmal
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    //Array of classes
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]] // color: success or error
                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                })}
            </ul>
            <Segment basic textAlign='center'>
                <p>
                    <strong>Richtig {successCount} von {props.quiz.length}</strong>
                </p>
                {greeting()}
                <br/>
                <Button onClick={props.onRetry} color='teal'>
                    Quiz neu starten
                </Button>
            </Segment>
        </div>
    )
}

export default FinishedQuiz

