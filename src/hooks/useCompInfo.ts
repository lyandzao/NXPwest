import React, { ReactElement, useState, useRef } from 'react'
import { getUserCompetitionInfo, getAllTypes, getCompetitionPlanByClassName } from '@/services/apis'
import { useRequest } from '@umijs/hooks'

type Tdata = {
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

type Ttype = {
  type: string;
  teamNumber: number;
}[]

// function transfer(data: Tdata) {
//   return data.map(i => {
//     return {
//       type: i.type_name,
//       compId: i.comp_id,
//       compName: i.comp_name
//     }
//   })
// }

function useCompInfo(): {
  start: (typeName: string) => any,
  types: string[],
  compInfo: Tdata,
  loading: boolean,
  data:any
} {
  const [compInfo, setCompInfo] = useState<any[]>([])
  const [types, setTypes] = useState<any[]>([])
  const data = useRef()

  const getUserCompetitionInfoR = useRequest(getUserCompetitionInfo, {
    manual: true,
    onSuccess: (res, param) => {
      if (res.data.competitions) {
        setCompInfo(() => {
          data.current = res.data.competitions
          return res.data.competitions
        })
      }
    }
  })
  const getAllTypesR = useRequest(getAllTypes, {
    onSuccess: (res, param) => {
      if (res.data.types) {
        setTypes(i => {
          return res.data.types.map((i: any) => i.type)
        })
      }
    }
  })
  const start = (typeName: string) => {
    getUserCompetitionInfoR.run(typeName)
  }
  return { start, types, compInfo, loading: getUserCompetitionInfoR.loading,data }
}

export default useCompInfo
