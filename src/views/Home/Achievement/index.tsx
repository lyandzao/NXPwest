import React, {
  ReactElement,
} from 'react';

import Header from '../Header';
import { useBoolean } from '@umijs/hooks'
import AllTeamScore from './AllTeamScore'
import MyTeamScore from './MyTeamScore'
import style from './style.module.scss';

interface Props {

}

function Achievement({ }: Props): ReactElement {
  const showAllScore = useBoolean(false)
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Header title1={showAllScore.state ? '全部队伍成绩' : '队伍成绩'} title2={'ACHIEVEMENT'} className={style.header} />
        {showAllScore.state ? <AllTeamScore showAllScore={showAllScore} /> : <MyTeamScore showAllScore={showAllScore} />}
      </div>
    </div>
  )
}

export default Achievement
