import React, { ReactElement } from 'react'
import { Button } from 'antd'
import modalContainer from '@/store/modal'
import { useHistory } from 'react-router-dom'
import style from './style.module.scss'
interface Props {

}

function AuthPage({ }: Props): ReactElement {
  const history = useHistory()
  const modal=modalContainer.useContainer()
  return (
    <div className={style.container}>
      <h2>若要访问请进行如下操作</h2>
      <div className={style.btnGroup}>
        <Button type='primary' onClick={modal.showLoginModal.setTrue}>登陆</Button>
        <Button onClick={() => history.goBack()}>取消</Button>
      </div>

    </div>
  )
}

export default AuthPage
