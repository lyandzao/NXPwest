import React, { ReactElement } from 'react'
import { Button } from 'antd'
import style from './style.module.scss'
interface Props extends Icontainer{
  value?: string;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
  onClick?: (e: any) => void;
  loading?: boolean;
}

function MyButton(props: Props): ReactElement {
  return (
    <Button className={`${style.container} ${props.className}`} type='primary' htmlType={props.type} disabled={props.disabled} onClick={props.onClick} loading={props.loading}>
      {props.value}
    </Button>
  )
}

export default MyButton
