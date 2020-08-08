import React, { ReactElement, useState, useEffect } from 'react'
import RankSelect from '../RankSelect'
import Table from './Table'
import style from './style.module.scss'

interface Props {
  showAllScore: any;
}

function AllTeamScore({ showAllScore }: Props): ReactElement {
  const [rankInfo, setRankInfo] = useState<any>()
  const sendDataToRank = (e: any) => {
    setRankInfo(e)
  }
  return (
    <div className={style.container}>
      <div className={style.btnWrapper}>
        <button className={style.btn} onClick={showAllScore.setFalse}>队伍成绩</button>
      </div>
      <div className={style.content}>
        <div className={style.select}>
          <RankSelect sendData={sendDataToRank} />
        </div>
        <div className={style.list}>
          <Table rankList={rankInfo} />
        </div>
      </div>
    </div>
  )
}

export default AllTeamScore
