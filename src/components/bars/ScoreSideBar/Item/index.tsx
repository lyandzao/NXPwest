import React, { ReactElement } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import { useBoolean } from '@umijs/hooks'
import SubMenu from '../SubMenu'
import style from './style.module.scss'

interface Props {
  key: any;
  type: string;
  comps: { comp_name: string; comp_id: string; }[]
}

function Item({ type, comps }: Props): ReactElement {
  const showSubMenu = useBoolean(false)
  return (
    <div className={style.container}>
      <div className={style.btnWrapper}>
        <MenuOutlined className={style.btn} onClick={()=>showSubMenu.toggle()}/></div>
      <div className={style.content}>{type}</div>
      <SubMenu data={comps} show={showSubMenu.state} className={style.submenu}/>
    </div>
  )
}

export default Item
