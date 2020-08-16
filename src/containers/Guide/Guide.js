import React from 'react';
import classes from './Guide.module.css';
import { Link } from 'react-router-dom';
import { Button, Grid, Header } from 'semantic-ui-react';



export default function Guide() {
    const texts = [
        {
            textLeft: 'Damit Ihr indess erkennt, woher dieser ganze Irrthum gekommen ist, und weshalb man die Lust anklagt und den Schmerz lobet, so will ich Euch Alles eröffnen und auseinander setzen, was jener Begründer der Wahrheit und gleichsam Baumeister des glücklichen Lebens selbst darüber gesagt hat. Niemand, sagt er, verschmähe, oder hasse, oder fliehe die Lust als solche, sondern weil grosse Schmerzen ihr folgen, wenn man nicht mit Vernunft ihr nachzugehen verstehe. Ebenso werde der Schmerz als solcher von Niemand geliebt, gesucht und verlangt, sondern weil mitunter solche Zeiten eintreten, dass man mittelst Arbeiten und Schmerzen eine grosse Lust sich zu verschaften suchen müsse. Um hier gleich bei dem Einfachsten stehen zu bleiben, so würde Niemand von uns anstrengende körperliche Übungen vornehmen, wenn er nicht einen Vortheil davon erwartete. Wer dürfte aber wohl Den tadeln, der nach einer Lust verlangt, welcher keine Unannehmlichkeit folgt, oder der einem Schmerze ausweicht, aus dem keine Lust hervorgeht?',
            headerLeft: 'Beim Arbeitsunfall',
            textRight: 'Dagegen tadelt und hasst man mit Recht Den, welcher sich durch die Lockungen einer gegenwärtigen Lust erweichen und verführen lässt, ohne in seiner blinden Begierde zu sehen, welche Schmerzen und Unannehmlichkeiten seiner deshalb warten. Gleiche Schuld treffe Die, welche aus geistiger Schwäche, d.h. um der Arbeit und dem Schmerze zu entgehen, ihre Pflichten verabsäumen. Man kann hier leicht und schnell den richtigen Unterschied treffen; zu einer ruhigen Zeit, wo die Wahl der Entscheidung völlig frei ist und nichts hindert, das zu thun, was den Meisten gefällt, hat man jede Lust zu erfassen und jeden Schmerz abzuhalten; aber zu Zeiten trifft es sich in Folge von schuldigen Pflichten oder von sachlicher Noth, dass man die Lust zurückweisen und Beschwerden nicht von sich weisen darf. Deshalb trifft der Weise dann eine Auswahl, damit er durch Zurückweisung einer Lust dafür eine grössere erlange oder durch Übernahme gewisser Schmerzen sich grössere erspare.',
            headerRight: 'Notruf'
        },
        {
            textLeft: 'Denn wenn man die Weisheit wirklich erreichen kann, so muss man sie nicht blos erwerben, sondern auch geniessen, und wenn ihre Erwerbung schwer fällt, so darf man doch der Erforschung der Wahrheit, bevor man sie erreicht hat, keine Schranke ziehen; auch bleibt die Ermüdung im Suchen da tadelnswerth, wo der gesuchte Gegenstand der schönste ist. Wenn ich aber an meiner Arbeit mich ergötze, so kann doch nur der Neid mich davon abziehen wollen, und wenn ich mich dabei anstrenge, so darf doch ein Dritter fremdem Fleisse keine Grenze ziehen wollen. Wie der gutmüthige Chremes bei Terenz nicht will, dass sein neuer Nachbar »grabe oder pflüge oder sonst so etwas thue« womit er ihn nicht von der Arbeit, sondern nur von der gemeinen Körperarbeit abhalten will, so machen sich Manche übertriebene Sorge, wenn sie an einer Arbeit Anstoss nehmen, welche mir keineswegs unangenehm ist.',
            headerLeft: 'Nach einem Arbeitsunfall',
            textRight: 'Schwerer sind Die zufrieden zu stellen, welche die lateinischen Bücher verächtlich von sich weisen; nur wundert es mich bei diesen vor Allem, dass sie in den wichtigsten Dingen an ihrer Muttersprache keine Freude finden und doch die kleinen aus dem Griechischen wörtlich in das Lateinische übersetzten Geschichtchen nicht ungern lesen. Wer könnte wohl Allem, was den römischen Namen trägt, so feind sein, dass er des Ennius Medea und des Pacuvius Antiopa gering schätzte und zurückwiese, während er sich an denselben Stücken von Euripides geständlich ergötzt und nur die lateinischen Schriften hasst? Soll ich denn, höre ich ihn sagen, des Cäcilius Jugendgenossen und des Terenz Andria lesen und nicht lieber des Menander gleichnamige Stücke?',
            headerRight: 'Verantwortung'
        }
    ]

    return (
        <>
            <Header size='huge' textAlign='center'>Erste-Hilfe-Leitfaden</Header>
            <Grid container columns={2} centered className={classes.GuideGrid}>
                {texts.map((text, index) =>
                    <Grid.Row key={index}>
                        <Grid.Column key={text.headerLeft}>
                            <Header as='h3' color='teal'>{text.headerLeft}</Header>
                            {text.textLeft}
                        </Grid.Column>
                        <Grid.Column key={text.headerRight}>
                            <Header as='h3' color='teal'>{text.headerRight}</Header>
                            {text.textRight}
                        </Grid.Column>
                    </Grid.Row>
                )}
                    <Button color='teal' as={Link} to="/">
                        Zum Quiz
                    </Button>
            </Grid>
        </>
    )
}