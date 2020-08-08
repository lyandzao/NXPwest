import React, { ReactElement, useState, useEffect } from 'react'
import { drawLots } from '@/services/apis'
import { useRequest, useMount } from '@umijs/hooks'
import { useChange } from '@/hooks'
import { compContainer } from '@/store'
import { Modal, Button, Select, Input, Dropdown, Menu, Statistic } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import style from './style.module.scss'
interface Props {
  modalVisible: boolean;
  onCancel: () => any;
}
const { SubMenu } = Menu
function DrawLots({ modalVisible, onCancel }: Props): ReactElement {
  const comp = compContainer.useContainer()
  const [compData, setCompData] = useState<{ type: string; comps: any[] }[]>()
  const [curComp, setCurComp] = useState('')
  const [curCompId, setCurCompId] = useState('')
  const [lots, setLots] = useState('')
  const phone = useChange('')
  const drawLotsR = useRequest(drawLots, {
    manual: true,
    onSuccess: (res, param) => {
      if (res.data.draw_lots_result) {
        
        setLots(res.data.draw_lots_result)
      }
    }
  })
  const handleClick = (e: any) => {
    
    setCurCompId(e.key)
    setCurComp(`${e.keyPath[1]}  ${e.item.props.children}`)
  }
  const handleDrawLots = () => {
    if (curCompId && phone.value) {
      drawLotsR.run(curCompId, phone.value)
    }
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
    <Modal
      title={'抽签'}
      visible={modalVisible}
      footer={null}
      onCancel={onCancel}
      className={style.container}
    >
      <div className={style.comp}>
        <Dropdown overlay={menu}>
          <Button>
            选择比赛 <DownOutlined />
          </Button>
        </Dropdown>
        <Input disabled value={curComp} />
      </div>
      <div className={style.phone}>
        <Input placeholder={'请输入你的电话号码'} {...phone.bindEvent} required />
      </div>
      <div className={style.lots}>你的签号是:<span>{lots}</span></div>
      <div className={style.btnWrapper}>
        <Button onClick={handleDrawLots} className={style.btn} >抽签</Button>
      </div>
      
    </Modal>
  )
}

export default DrawLots
