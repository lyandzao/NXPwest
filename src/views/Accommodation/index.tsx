import React, { ReactElement } from 'react'
import ManagementBar from '@/components/bars/ManagementBar'
import Content from './Content'
import style from './style.module.scss'

interface Props {
  
}

function Accommodation({}: Props): ReactElement {
  return (
    <div className={style.container}>
      <ManagementBar title={'食宿安排'} />
      <Content/>
    </div>
  )
}

export default Accommodation
