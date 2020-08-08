import React, { ReactElement } from 'react'
import style from './style.module.scss'
interface Props extends Icontainer{
  title?: string;
  content?: string;
}

function SimpleInput({className,title,content}: Props): ReactElement {
  return (
    <div className={`${className} ${style.container}`}>
      <div title={title}>{title}</div>
      <span title={content}>{content}</span>
    </div>
  )
}

export default SimpleInput
