import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Grid, Header, Segment } from 'semantic-ui-react'


export default function FormComponent() {
    const [name, setName] = useState(''),
        [nameError, setNameError] = useState(false),
        [email, setEmail] = useState(''),
        [emailError, setEmailError] = useState(false),
        [subject, setSubject] = useState(''),
        [subjectError, setSubjectError] = useState(false),
        [message, setMessage] = useState(''),
        [messageError, setMessageError] = useState(false),
        [checkbox, setCheckbox] = useState(false),
        [checkboxError, setCheckboxError] = useState(false),
        [formError, setFormError] = useState(false),
        [formSubmitSuccess, setFormSubmitSuccess] = useState(false)

    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(checkbox);

        setFormSubmitSuccess(false);
        let error = false;

        if (name === '') {
            setNameError(true);
            error = true;
        } else {
            setNameError(false);
        }

        if (email === '' || !emailRegEx.test(email)) {
            setEmailError(true);
            error = true;
        } else {
            setEmailError(false);
        }

        if (subject === '') {
            setSubjectError(true);
            error = true;
        } else {
            setSubjectError(false);
        }

        if (message === '') {
            setMessageError(true);
            error = true;
        } else {
            setMessageError(false);
        }

        if (checkbox === false) {
            setCheckboxError(true);
            error = true;
        } else {
            setCheckboxError(false);
        }

        if (error) {
            setFormError(true);
            return;
        }

        setFormError(false);
        setFormSubmitSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setCheckbox(false);
    }

    return (
        <Grid centered>
            <Grid.Column width={8}>
            <Header size='huge' textAlign='center'>Schreiben Sie uns</Header>
                <Form onSubmit={submitHandler} error={formError}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            id='name'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            error={nameError}
                        />
                        <Form.Input
                            id='email'
                            placeholder='joe@schmoe.com'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            error={emailError}
                        />
                        <Form.Input
                            id='subject'
                            placeholder='Betreff'
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            error={subjectError}
                        />
                    </Form.Group>
                    <Form.TextArea
                        id='message'
                        value={message}
                        placeholder='Nachricht'
                        onChange={(e) => { setMessage(e.target.value) }}
                        error={messageError}
                    />
                    <Form.Checkbox
                        label='Ich stimme Datenschutzbestimmungen zu.'
                        checked={checkbox}
                        onChange={(e) => { setCheckbox(e.target.value) }}
                        error={checkboxError}
                    />
                    <p>
                        <Link to='/datenschutz'>Zur Datenschutzbestimmungen</Link>
                    </p>
                    <Form.Button
                        id='button'
                        content='Nachricht absenden'
                        color='teal'
                        type='submit'
                    />
                </Form>
                {(formSubmitSuccess === true)
                    ? <Segment basic textAlign='center'>
                        <Header as='h3'>Vielen Dank für Ihre Nachricht</Header>
                        <p>Ihre Nachricht wurde erfolgreich an uns gesendet und wird schnellstmöglich bearbeitet.</p>
                    </Segment>
                    : null
                }
            </Grid.Column>
        </Grid>
    )
}

