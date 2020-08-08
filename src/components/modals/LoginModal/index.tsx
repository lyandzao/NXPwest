import React, {
  ReactElement,
  useState,
} from 'react';

import { message } from 'antd'
import Button from '@/components/forms/Button';
import Input from '@/components/forms/input';
import { useChange } from '@/hooks';
import { login } from '@/services/apis';
import { modalContainer } from '@/store';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useRequest } from '@umijs/hooks';
import userContainer from '@/store/user'

import style from './style.module.scss';

interface Props {

}

function LoginModal(props: Props): ReactElement {
  const modal = modalContainer.useContainer()
  const phone = useChange('')
  const pwd = useChange('')
  const [errMsg, setErrMsg] = useState('')
  const user = userContainer.useContainer()
  const loginR = useRequest(login, {
    manual: true,
    onSuccess: (res, param) => {
      if (res.data.team_info) {
        user.setIsLogin(true)
        user.setInfo(draft => draft = res.data.team_info)
      }
      setErrMsg('')
      message.success('登录成功')
      modal.showLoginModal.setFalse()
    },
    onError: (err) => {
      setErrMsg(err.message)
    }
  })
  const validate = () => {
    let isEmpty = phone.value === '' || pwd.value === ''
    return isEmpty
  }
  const findPwd = () => {
    modal.showLoginModal.setFalse()
    modal.showUpdatePwdModal.setTrue()
  }
  const jumpToSignup = () => {
    modal.showLoginModal.setFalse()
    modal.showSignupModal.setTrue()
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loginR.run(phone.value, pwd.value)
  }
  return (
    <form action="" className={style.container} onSubmit={handleSubmit}>
      <Input {...phone.bindEvent} placeholder='请输入账号' prefix={<UserOutlined />} />
      <Input {...pwd.bindEvent} placeholder='请输入密码' type='password' prefix={<LockOutlined />} />
      <div className={style.err}>{errMsg}</div>
      <Button value={'登录'} type='submit' className={style.btn} loading={loginR.loading} disabled={validate()}/>
      <div className={style.bar}>
        <div onClick={findPwd}>找回密码</div>
        <div onClick={jumpToSignup}>注册</div>
      </div>
    </form>
  )
}

export default LoginModal
