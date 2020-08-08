import React, { ReactElement } from 'react'
import userContainer from '@/store/user'
import style from './style.module.scss'

interface Props {

}

const Item = ({ tt, info }: { tt: string; info: string | any }): ReactElement => {
  return (
    <div className={style.item}>
      <div className={style.itemTt}>{tt}</div>
      <div className={style.itemInfo}>{info}</div>
    </div>
  )
}

function Center({ }: Props): ReactElement {
  const user = userContainer.useContainer()

  return (
    <div>
      {user.isLogin &&
        (<div className={style.container}>
          <Item tt={'队伍'} info={user.info.teamName} />
          <Item tt={'学校'} info={user.info.schoolName} />
          <Item tt={'队长电话'} info={user.info.team_captain?.phone} />
          <Item tt={'队伍分类'} info={user.info.type_name?.type} />
          <Item tt={'队伍编号'} info={user.info.type_name?.teamNumber} />
        </div>)}
    </div>

  )
}

export default Center
