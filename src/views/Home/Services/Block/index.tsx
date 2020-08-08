import React, { ReactElement } from 'react'
import style from './style.module.scss'
interface Props extends Icontainer{
  type: 'location' | 'volunteers' | 'accommodation';
  title1?: string;
  title2?: string;
  onClick?: (e: any) => any;
}

function Block({ className, type, title1,title2,onClick }: Props): ReactElement {
  const bacMap = {
    'location': 'locationLogo',
    'volunteers': 'volunteersLogo',
    'accommodation':'accommodationLogo'
  }
  return (
    <div className={`${className} ${style.container}`} onClick={onClick}>
      <div className={style[bacMap[type]]} ></div>
      <span className={style.title1}>{title1}</span>
      <span className={style.title2}>{title2}</span>
      <div className={style.detail}>查看详情</div>
    </div>
  )
}

export default Block
