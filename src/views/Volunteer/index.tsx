import React, { ReactElement } from 'react'
import ManagemantBar from '@/components/bars/ManagementBar'
import imgSrc from '@/assets/images/volunteer_qr.png'
import style from './style.module.scss'
interface Props {

}

function Volunteer({ }: Props): ReactElement {
  return (
    <div className={style.container}>
      <ManagemantBar title={'志愿者'}  />
      <h2 className={style.tt}>请加入QQ群了解志愿者信息</h2>
      <img className={style.img} src={imgSrc} alt=""/>
    </div>
  )
}

export default Volunteer
