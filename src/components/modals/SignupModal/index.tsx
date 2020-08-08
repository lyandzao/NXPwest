import React, { ReactElement } from 'react'
import { UserOutlined, LockOutlined, KeyOutlined, TeamOutlined, BankOutlined } from '@ant-design/icons';
import VerificationCodeButton from '@/components/forms/VerificationCodeButton'
import { message } from 'antd'
import Input from '@/components/forms/input'
import Button from '@/components/forms/Button'
import { modalContainer } from '@/store'
import { useRequest } from '@umijs/hooks';
import { signup, getCode } from '@/services/apis'
import { useChange } from '@/hooks'
import style from './style.module.scss'

interface Props {

}

function SignupModal(props: Props): ReactElement {
  const modal = modalContainer.useContainer()
  const phone = useChange('')
  const pwd = useChange('')
  const code = useChange('')
  const school = useChange('')
  const teamName = useChange('')
  const signupR = useRequest(signup, {
    manual: true,
    onSuccess: (res, param) => {
      message.success('注册成功')
      modal.showSignupModal.setFalse()
      modal.showLoginModal.setTrue()
    }
  })
  const getCodeR = useRequest(getCode, {manual: true,})
  const jumpToLogin = () => {
    modal.showSignupModal.setFalse()
    modal.showLoginModal.setTrue()
  }
  const getVerificationCode = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    getCodeR.run(phone.value)
  }
  const validate = () => {
    let isEmpty = phone.value === '' || pwd.value === '' || school.value === '' || teamName.value === '' || code.value === ''
    // todo: regular the validate
    return isEmpty
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signupR.run(code.value, pwd.value, phone.value, school.value, teamName.value)
  }
  return (
    <form action="" className={style.container} onSubmit={handleSubmit}>
      <Input {...phone.bindEvent} placeholder='电话' prefix={<UserOutlined />} hasMsg msg='' />
      <Input {...pwd.bindEvent} placeholder='密码' type='password' prefix={<LockOutlined />} hasMsg msg='' />
      <Input {...school.bindEvent} placeholder='学校' prefix={<BankOutlined />} hasMsg msg='' />
      <Input {...teamName.bindEvent} placeholder='队伍名' prefix={<TeamOutlined />} hasMsg msg='' />
      <Input {...code.bindEvent} placeholder='验证码' prefix={<KeyOutlined />} hasMsg msg='' suffix={<VerificationCodeButton time={5} onClick={getVerificationCode} disabled={phone.value === ''} />} />
      <Button value={'注册'} type='submit' className={style.btn} disabled={validate()} />
      <div onClick={jumpToLogin} className={style.jump}>登录</div>
    </form>
  )
}

export default SignupModal

