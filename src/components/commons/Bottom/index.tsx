/**
 * @ Author: zao
 * @ Create Time: 2020-03-20
 * @ Modified by: zao
 * @ Description: 页面底部，可添加版权信息
 */

import React, { ReactElement } from 'react';
import { bottomLink } from '@/constant'
import style from './style.module.scss';

interface Props extends Icontainer{
  
}

function Bottom({ className }: Props): ReactElement {
  return (
    <div className={`${style.wrapper} ${className}`}>
      <div className={style.container}>
        <div className={style.contact}>联系我们</div>
        <div className={style.logoContainer}>
          <a href={bottomLink.nxpLink} className={style.nxpLogo}>{}</a>
          <div className={style.QRLogo}></div>
          <a href={bottomLink.cquptLink} className={style.cquptLogo}>{}</a>
        </div>
      </div>
    </div>
  )
}

export default Bottom
