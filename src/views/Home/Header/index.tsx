import React, { ReactElement } from 'react'
import style from './style.module.scss'
interface Props extends Icontainer{
  title1?: string;
  color1?: string;
  title2?: string;
  color2?: string;
}

function Header({title1,color1,title2,color2,className}: Props): ReactElement {
  return (
    <div className={`${className} ${style.container}`}>
      <span className={style.title1} style={{color:color1}}>{title1}</span>
      <span className={style.title2} style={{color:color2}}>{title2}</span>
    </div>
  )
}

export default Header
