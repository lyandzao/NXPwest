import React, { ReactElement, useState } from 'react'
import ManagementBar from '@/components/bars/ManagementBar'
import ArrangementTable from '@/components/forms/ArrangementTable'
import { useRequest } from '@umijs/hooks'
import { getAllTypes, getCompetitionPlanByClassName } from '@/services/apis'
import style from './style.module.scss'

interface Props {

}

function Competition({ }: Props): ReactElement {
  const [dataList, setDataList] = useState()
  const [typeList, setTypeList] = useState()
  const [selectValue, setSelectValue] = useState('暂无分类')
  const getAllTypesR = useRequest(getAllTypes, {
    manual: false,
    onSuccess: (res, param) => {
      if (res.data?.types) {
        setTypeList(res.data.types)
        setSelectValue(res.data.types[0].type)
        getCompetitionPlanByClassNameR.run(res.data.types[0].type)
      }
    }
  })
  const getCompetitionPlanByClassNameR = useRequest(getCompetitionPlanByClassName, {
    manual: true,
    onSuccess: (res, param) => {
      if (res.data?.competitions) {
        setDataList(res.data.competitions)
      }
    }
  })
  const handleChange = (value: string) => {
    setSelectValue(value)
    getCompetitionPlanByClassNameR.run(value)
  }
  return (
    <div>
      <ManagementBar title={'比赛安排'} />
      <ArrangementTable
        list={dataList}
        typeList={typeList}
        handleChange={handleChange}
        selectValue={selectValue}
        selecLoading={getCompetitionPlanByClassNameR.loading}
        contentLoading={getCompetitionPlanByClassNameR.loading} />
    </div>
  )
}

export default Competition
