import { useState } from 'react'
import { getUserCompetitionInfo, getAllComps } from '@/services/apis'
import { useRequest } from '@umijs/hooks'
import { createContainer } from 'unstated-next'

type TcompList = {
  competitionArrangement?: {
    argPlace: string; // 比赛场地
    argTimeInfo: string; // 比赛时间
    drawLotsTime: string; // 抽签时间
  },
  type_name: {
    type: string; // 比赛类型
    teamNumber: number; // 队伍数量
  },
  comp_id: number,
  comp_name: string; // 比赛名称
}[]

type TtypeList = {
  type: string;
  teamNumber: number;
}[]

type TuserInfo = {
  teamName: string;
  rank: any;
  time: any;
  type: string;
  compName: string;
}

type TtypesAndComps = {
  type: string;
  comps: TcompList;
}

function useComp() {
  const [userInfo, setUserInfo] = useState<TuserInfo>()
  const [typesAndComps, setTypesAndComps] = useState<TtypesAndComps[]>()
  const getUserCompetitionInfoR = useRequest(getUserCompetitionInfo, {
    manual: true,
    onSuccess: (res, param) => {
      if (res.data) {
        setUserInfo(res.data)
      }
    }
  })
  const getAllCompAndTypes = useRequest(getAllComps, {
    onSuccess: (res, param) => {
      if (res.data.data) {
        setTypesAndComps(res.data.data)
      }
    }
  })

  const user = {
    run: (comId: any) => getUserCompetitionInfoR.run(comId),
    refresh: () => getUserCompetitionInfoR.refresh(),
    loading: getUserCompetitionInfoR.loading,
    data: userInfo
  }
  const comp = {
    run: getAllCompAndTypes.run,
    refresh: getAllCompAndTypes.refresh,
    loading: getAllCompAndTypes.loading,
    data: typesAndComps
  }
  return { user, comp}
}

let comp = createContainer(useComp)

export default comp