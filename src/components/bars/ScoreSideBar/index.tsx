import React, { ReactElement } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import SubMenu from './SubMenu'
import Item from './Item'
import style from './style.module.scss'

interface Props {
  types: any[]
}

function ScoreSideBar({ types }: Props): ReactElement {
  console.log(types)

  return (
    <div className={style.container}>
      {types && types.map((item, index) => {
        return <Item key={`${item.type}`} type={item.type} comps={item.comps} />
      })}
    </div>
  )
}

export default ScoreSideBar
