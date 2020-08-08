import React, { ReactElement, useState, useEffect } from 'react'
import { getRanked } from '@/services/apis'
import { useRequest, useMount } from '@umijs/hooks'
import { compContainer } from '@/store'
import { Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import style from './style.module.scss'
interface Props extends Iwrapper {
  title?: string;
  sendData: (e: any) => any;
}
const { SubMenu } = Menu
function Select({ className, title, sendData }: Props): ReactElement {
  const comp = compContainer.useContainer()
  const [compData, setCompData] = useState<{ type: string; comps: any[] }[]>()
  const [curComp, setCurComp] = useState('')

  const getRankedR = useRequest(getRanked, {
    manual: true,
    onSuccess: (res, param) => {
      if (res.data.ranked) {
        sendData(res.data.ranked)
      }
    }
  })

  const handleClick = (e: any) => {
    setCurComp(`${e.keyPath[1]}--${e.item.props.children}`)
    getRankedR.run(e.key)
  }

  const menu =
    (
      <Menu onClick={handleClick}>
        {compData && compData.map((item, index) => {
          return (
            <SubMenu key={item.type} title={item.type} >
              {item.comps.map((item2, index2) => {
                return (
                  <Menu.Item key={item2.comp_id} >{item2.comp_name}</Menu.Item>
                )
              })}
            </SubMenu>
          )
        })}
      </Menu>
    )
  useMount(() => {
    comp.comp.run()
  })
  useEffect(() => {
    setCompData(comp.comp.data)
  }, [comp.comp.data])
  return (
    <div className={`${className} ${style.container}`}>
      <div className={style.comp}>
        <Dropdown overlay={menu} overlayClassName={style.overlay}>
          <a className={style.select}>
            选择比赛 <DownOutlined />
          </a>
        </Dropdown>
      </div>
      <div className={style.value}>{curComp}</div>
    </div>
  )
}

export default Select
