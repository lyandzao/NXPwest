import React, { ReactElement } from 'react'
import style from './content.module.scss'

interface Props extends Icontainer {

}

function Content({ className }: Props): ReactElement {
  const accommodation = {
    title1: '（一）住宿安排',
    contentList: [
      '参赛人员可在组委会协议酒店食宿，费用自理，西部赛区组委会协议酒店分别为： 海棠晓月隐沫温泉度假酒店(重庆南滨路店，四星)、瀚云明宇丽呈华廷酒店（五星），协议酒店可提供餐饮。',
      '不同学校参赛人员不得合住同一个房间。',
      '协议酒店相关信息在微信公众号公布，参赛人员须在 7 月 20 前向西部赛区组委会预订，并按预订酒店入住。'
    ],
    title2: '（二）用餐安排(校内)'
  }
  return (
    <div className={`${className} ${style.container}`}>
      <h1 className={style.title1}>{accommodation.title1}</h1>
      <div className={style.detail}>
        {accommodation.contentList.map((item, index) => {
          return (<div key={index}>{index + 1}.{item}</div>)
        })}
      </div>
      <h1 className={style.title2}>{accommodation.title2}</h1>
      <table className={style.form} >
        <thead>
          <tr>
            <th rowSpan={2}>营业食堂</th>
            <th colSpan={3}>营业时间</th>
          </tr>
          <tr>
            <th>早餐</th>
            <th>中餐</th>
            <th>晚餐</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>中心食堂一楼</td>
            <td>6:30-9:00</td>
            <td>11:00-13:30</td>
            <td>16:30-19:00</td>
          </tr>
          <tr>
            <td>中心食堂二楼</td>
            <td></td>
            <td>11:00-13:30</td>
            <td>16:30-19:00</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default Content


