import React, { ReactElement } from 'react'
import style from './style.module.scss'

interface Props {
  rankList?: { teamInfo: string; time: string; rank: string }[]
}

function Table({ rankList }: Props): ReactElement {
  return (
    <div className={style.container}>
      {rankList?.length && rankList.map((item, index) => {
        return (<div key={`${item.teamInfo}-${index}`} className={style.row}>
          <div>{item.teamInfo}</div>
          <div>{item.time}</div>
          <div>{item.rank}</div>
        </div>)
      })}

    </div>
  )
}

export default Table
