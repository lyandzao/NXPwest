import React, { ReactElement } from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../Header'
import Block from './Block'
import style from './style.module.scss'

interface Props {

}

function Services({ }: Props): ReactElement {
  const history=useHistory()
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Header title1={'赛事服务'} color1={'#63ace1'} title2={'EVENT SERVICES'} className={style.header} />
        <div className={style.blockWrapper}>
          <Block type='location' title1={'比赛安排'} title2={'Location'} onClick={() => history.push('/competition')}/>
          <Block type='volunteers' title1={'志愿者'} title2={'Volunteers'} onClick={() => history.push('/volunteer')}/>
          <Block type='accommodation' title1={'食宿安排'} title2={'Accommodation'} onClick={() => history.push('/accommodation')} />
        </div>
      </div>
    </div>
  )
}

export default Services
