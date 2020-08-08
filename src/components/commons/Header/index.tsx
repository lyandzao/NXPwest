import React, { ReactElement } from 'react';

import {
  Dropdown,
  Menu,
} from 'antd';
import {
  NavLink,
  useHistory,
} from 'react-router-dom';

import { userContainer, modalContainer } from '@/store';

import style from './style.module.scss';

interface Props extends Icontainer {

}

function Header(props: Props): ReactElement {
  const user = userContainer.useContainer()
  const modal = modalContainer.useContainer()
  const history = useHistory()

  // 退出登录
  const quitLogin = () => {
    user.setIsLogin(false)
    user.setInfo(draft=>draft={})
    history.push('/')
  }
  // 登录的下拉菜单
  const loginMenu: ReactElement = (
    <Menu>
      <Menu.Item onClick={() => modal.showSignupModal.setTrue()}>
        注册
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={() => modal.showLoginModal.setTrue()}>
        登录
      </Menu.Item>
    </Menu>
  )
  // 个人中心的下拉菜单
  const myCenterMenu: ReactElement = (
    <Menu>
      <Menu.Item onClick={() => modal.showUpdatePwdModal.setTrue()}>
        修改密码
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={quitLogin}>
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <div className={`${props.className} ${style.container}`}>
      <modal.Modal/>
      <div className={style.left}>
        <a href="/" className={style.logo}>{''}</a>
      </div>
      <div className={style.right}>
        <nav>
          <li><NavLink to='/' exact={true} activeClassName={style.active}>首页</NavLink></li>
          <li><NavLink to='/competition' activeClassName={style.active}>比赛安排</NavLink></li>
          <li><NavLink to='/volunteer' activeClassName={style.active}>志愿者</NavLink></li>
          <li><NavLink to='/accommodation' activeClassName={style.active}>食宿安排</NavLink></li>
          {user.isLogin
            ?
            (
              <li className={style.center}>
                <Dropdown overlay={myCenterMenu}>
                  <NavLink to='/center' activeClassName={style.active} >个人中心</NavLink>
                </Dropdown>
              </li>
            )
            :
            (
              <li className={style.login}>
                <Dropdown overlay={loginMenu}>
                  <a>登录</a>
                </Dropdown></li>
            )}
        </nav>
      </div>
    </div>
  )
}

export default Header
