import React, { ReactElement, useEffect, useState } from 'react'
import { Select, Spin } from 'antd'
import style from './style.module.scss'

interface Props extends Icontainer {
  list?: {
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
  }[],
  typeList?: {
    type: string;
    teamNumber: number;
  }[],
  handleChange: (value: string) => any,
  selectValue: string;
  selecLoading: boolean;
  contentLoading: boolean;
}
const { Option } = Select

function ArrangementTable({ list, typeList, className, handleChange, selectValue, contentLoading, selecLoading }: Props): ReactElement {

  return (
    <div className={`${className} ${style.container}`}>
      <Select className={style.select} value={selectValue} style={{ width: 120 }} onChange={handleChange} loading={selecLoading}>
        {typeList?.map((item, index) => {
          return <Option key={`type-${index}`} value={item.type}>{item.type}</Option>
        })}
      </Select>
      <table className={style.table}>
        <thead className={style.head}>
          <tr>
            <th>序号</th>
            <th>比赛名称</th>
            <th>比赛场地</th>
            <th>比赛时间</th>
            <th>抽签时间</th>
            <th>队伍数量</th>
          </tr>
        </thead>

        <tbody className={style.body}>
          <Spin spinning={contentLoading}>
          {list?.map((item, index) => {
            return (
              <tr key={item.comp_id}>
                <td>{index + 1}</td>
                <td>{item.comp_name}</td>
                <td>{item.competitionArrangement?.argPlace}</td>
                <td>{item.competitionArrangement?.argTimeInfo}</td>
                <td>{item.competitionArrangement?.drawLotsTime}</td>
                <td>{item.type_name.teamNumber}</td>
              </tr>
            )
          })}
          </Spin>
        </tbody>



      </table>
    </div>
  )
}

export default ArrangementTable
