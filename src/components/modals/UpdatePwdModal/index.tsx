import React, { ReactElement, useState } from 'react'
import { UserOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons';
import VerificationCodeButton from '@/components/forms/VerificationCodeButton'
import Input from '@/components/forms/input'
import Button from '@/components/forms/Button'
import { message } from 'antd'
import { modalContainer, userContainer } from '@/store'
import { resetPwd, getCode } from '@/services/apis'
import { useImmer } from 'use-immer'
import { useRequest, useDebounceFn } from '@umijs/hooks'
import { useChange } from '@/hooks'
import style from './style.module.scss'

interface Props {

}

function UpdatePwdModal(props: Props): ReactElement {
  const modal = modalContainer.useContainer()
  const user = userContainer.useContainer()
  const code = useChange('')
  const newPwd = useChange('')
  const confirmPwd = useChange('')
  const phone = useChange('')

  const resetPwdR = useRequest(resetPwd, {
    manual: true,
    onSuccess: (res, param) => {
      message.success('修改成功,请重新登陆')
      user.setIsLogin(false)
      modal.showUpdatePwdModal.setFalse()
      modal.showLoginModal.setTrue()
    }
  })
  const getCodeR = useRequest(getCode, { manual: true, })
  const jumpToLogin = () => {
    modal.showUpdatePwdModal.setFalse()
    modal.showLoginModal.setTrue()
  }
  const getVerificationCode = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    getCodeR.run(phone.value)
  }
  const validate = () => {
    let isEmpty = phone.value === '' || newPwd.value === '' || confirmPwd.value === '' || code.value === ''
    return isEmpty
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    resetPwdR.run(code.value, newPwd.value, phone.value)
  }
  return (
    <form action="" className={style.container} onSubmit={handleSubmit} onInput={validate}>
      <Input {...phone.bindEvent} placeholder='请输入账号' prefix={<UserOutlined />} hasMsg msg='' />
      <Input {...newPwd.bindEvent} placeholder='请输入新密码' type='password' prefix={<LockOutlined />} />
      <Input {...confirmPwd.bindEvent} placeholder='请确认新密码' type='password' prefix={<LockOutlined />} hasMsg msg='' />
      <Input {...code.bindEvent} placeholder='请输入验证码' prefix={<KeyOutlined />} hasMsg msg='' suffix={<VerificationCodeButton time={5} onClick={getVerificationCode} disabled={phone.value === ''} />} />
      <Button value={'确认修改'} type='submit' className={style.btn} disabled={validate()} />
      <div onClick={jumpToLogin} className={style.jump}>登录</div>
    </form>
  )
}

export default UpdatePwdModal

