import React, { ReactElement,useState } from 'react'
import Select from '../Select';
import SimpleInput from '../SimpleInput';
import style from './style.module.scss'

interface Props {
  showAllScore: any;
}

function MyTeamScore({showAllScore }: Props): ReactElement {
  const [userInfo, setUserInfo] = useState<any>()
  const sendDataToUser = (e: any) => {
    setUserInfo(e)
  }
  return (
    <div className={style.infoList}>
      <Select sendData={sendDataToUser} />
      <SimpleInput title={'队名'} content={userInfo?.teamName} />
      <SimpleInput title={'排名'} content={userInfo?.rank} />
      <SimpleInput title={'时间'} content={userInfo?.time} />
      <button className={style.btn} onClick={showAllScore.setTrue}>全部队伍成绩</button>
    </div>
  )
}

export default MyTeamScore
