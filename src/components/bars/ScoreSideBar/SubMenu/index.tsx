import React, { ReactElement } from 'react'
import style from './style.module.scss'

interface Props extends Icontainer{
  data: { comp_id: string;comp_name:string}[]
  show: boolean;
}

function SubMenu({ data, show,className }: Props): ReactElement { 
  return (
    <div className={`${show ? style.show : style.close} ${className}`}>
      {data.map((item, index) => <div className={style.child} key={item.comp_id}>{item.comp_name}</div>)}
    </div>
  )
}

export default SubMenu
