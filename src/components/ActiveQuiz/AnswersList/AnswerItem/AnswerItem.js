import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = props => {

  const cls = [classes.AnswerItem]

  if (props.state) {
    cls.push(classes[props.state]) // 'success' or 'error'
  }
  
  return (
    <li className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {'img' in props.answer &&
        <img className={classes.Symbol} src={process.env.PUBLIC_URL + '/img/' + props.answer.img} alt="symbol"/>
      }
      {props.answer.text}
    </li>
  )
}

export default AnswerItem