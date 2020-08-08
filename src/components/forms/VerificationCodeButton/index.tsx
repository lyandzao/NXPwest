import React, { ReactElement,useState } from 'react'
import { Button } from 'antd'
import { useCountDown } from '@/hooks'
import {useUpdateEffect} from '@umijs/hooks'
import style from './style.module.scss'
interface Props extends Icontainer{
  value?: string;
  time: number;
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>
}

function VerificationCodeButton({
  className,
  value = '',
  time,
  loading=false,
  disabled=false,
  onClick
}: Props): ReactElement {
  const [btnValue, setBtnValue] = useState('发送验证码')
  const countDown = useCountDown(time)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    countDown.start()
    onClick&&onClick(e)
  }
  useUpdateEffect(() => {
    setBtnValue(`请${countDown.count}s后重试`)
  }, [countDown.count])
  useUpdateEffect(() => {
    if (!countDown.timeStatus) {
      setBtnValue('发送验证码')
    }
  },[countDown.timeStatus])
  return (
    <Button className={`${className} ${style.container}`} loading={loading} disabled={disabled||countDown.timeStatus} onClick={handleClick}>{btnValue}</Button>    
  )
}

export default VerificationCodeButton
