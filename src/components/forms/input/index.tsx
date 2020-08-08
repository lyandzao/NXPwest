import React, { ReactElement } from 'react'
import style from './style.module.scss'
interface Props extends Icontainer {
  // input类型
  type?: 'text' | 'password';
  // input的值
  value?: string;
  // placeholder
  placeholder?: string;
  // input的前缀
  prefix?: string | React.ReactNode;
  // input的后缀
  suffix?: React.ReactNode;
  // input的只读状态
  readonly?: boolean;
  // input的错误提示信息
  hasMsg?: boolean;
  msg?: string | React.ReactNode;
  // input的一些事件
  onChange?: (e: React.ChangeEvent<HTMLElement>) => any;
  onblur?: (e: React.FocusEvent<HTMLElement>) => any;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => any;
  onInput?: (e: any) => any;
}

function Input({
  className,
  type = 'text',
  value = '',
  placeholder = '',
  prefix,
  suffix,
  readonly = false,
  hasMsg = false,
  msg,
  onChange = () => { },
  onblur = () => { },
  onFocus = () => { },
  onInput = () => { }
}: Props): ReactElement {

  return (
    <div className={`${className} ${style.container}`}>
      <div className={style.main}>
        <div className={style.left} style={{ paddingRight: suffix?114:0}}>
          <div className={style.input}>
            {/* 前缀 */}
            {prefix ? <div className={style.prefix}>{prefix}</div> : null}
            {/* input */}
            <input type={type} value={value} placeholder={placeholder} onInput={onInput} onChange={onChange} onBlur={onblur} onFocus={onFocus} readOnly={readonly}  />
          </div>
          {/* 后缀 */}
          {suffix ? <span style={{width:'114px'}} className={style.suffix}>{suffix}</span> : null}
        </div>

        {/* 错误提示信息 */}
        {hasMsg ? <span className={style.msg}>{msg}</span> : null}
      </div>

    </div>
  )
}

export default Input
