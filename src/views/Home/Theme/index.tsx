import React, { ReactElement, useState } from 'react'
import DrawLots from '@/components/commons/DrawLots'
import {compContainer,} from '@/store'
import style from './style.module.scss'

interface Props {

}

function Theme({ }: Props): ReactElement {
  const MAIL_TITLE = '第15届大学生智能汽车竞赛'
  const AREA = '西部赛区'
  const TIME = '2020年8月13日'
  const LOCATION = '重庆邮电大学'
  const [modalVisible, setModalVisible] = useState(false)
  const comp=compContainer.useContainer()
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.main}>
          <h2>{MAIL_TITLE}</h2>
          <h3>{AREA}</h3>
          <div onClick={() => setModalVisible(true)}>进入抽签</div>
          <DrawLots modalVisible={modalVisible} onCancel={() => setModalVisible(false)} />
        </div>
        <div className={style.msg}>
          <div className={style.time}>{`比赛时间: ${TIME}`}</div>
          <div className={style.location}>{`比赛地点: ${LOCATION}`}</div>
        </div>
      </div>
    </div>
  )
}

export default Theme
