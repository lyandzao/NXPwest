import React, { ReactElement } from 'react'
import style from './style.module.scss'

interface Props extends Icontainer{
  title: string;
  // subTitle: string;
}

function ManagementBar({ title,className }: Props): ReactElement {
  return (
    <div className={`${style.container} ${className}`}>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>ARRANGEMENT</div>
    </div>
  )
}

export default ManagementBar
