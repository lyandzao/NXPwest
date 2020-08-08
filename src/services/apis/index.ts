import * as config from './config'
import { get, post } from '../axios'

/**
 * 登录
 * @param phone 账号
 * @param password 密码
 */
export const login = (phone: string, password: string) => get(config._LOGIN, {
  params: {
    password,
    phone
  }
})

/**
 * 注册
 * @param code 验证码
 * @param password 密码
 * @param phone 手机号
 * @param school 学校名
 * @param teamName 队伍名
 */
export const signup = (code: string, password: string, phone: string, school: string,
  teamName: string) => post(config.SIGNUP, {
    data: {
      code,
      password,
      phone,
      school,
      teamName
    }
  })

/**
 * 重置密码
 * @param code 验证码
 * @param newPassword 新密码
 * @param phone 电话
 */
export const resetPwd = (code: string, newPassword: string, phone: string) => post(config.RESET_PWD, {
  data: {
    code,
    newPassword,
    phone
  }
})

/**
 * 获取验证码
 * @param phone 电话
 */
export const getCode = (phone: string) => post(config.CODE, {
  data: {
    phone
  }
})

/**
 * 获取用户比赛信息
 * @param comp_id 比赛id
 */
export const getUserCompetitionInfo = (comp_id: string) => get(config._USER_COMPETITION_INFO + comp_id)

/**
 * 查看所有分类
 */
export const getAllTypes = () => get(config._TYPE)

/**
 * 根据分类名查看分类下所有比赛安排
 * @param type_name 比赛类名
 */
export const getCompetitionPlanByClassName = (type_name: string) => get(config._COMPETITION_PLAN + type_name)

/**
 * 抽签
 * @param comp_id 比赛ID
 * @param phone 手机号
 */
export const drawLots = (comp_id: string, phone: string) => get(config._DRAW_LOTS, {
  params: {
    comp_id,
    phone
  }
})

export const getRanked = (comp_id: string) => get(config._RANK + comp_id)

// 获取所有比赛和分类名
export const getAllComps = () => get(config._COMP)

export const getAllTeams = (typeName: string) => post(config.ALL_TEAMS, {
  params: {
    teamTypeName: typeName
  }
})

/**
 * 
 * @param compName 比赛名
 * @param drawLotsTime 抽签截至时间
 * @param place 场地
 * @param teamTypeName 队伍分类名 
 * @param timeInfo 比赛时间 
 */
export const addCompetition = (compName: string, drawLotsTime: string, place: string, teamTypeName: string, timeInfo: string) => post(config.ADD_COMPETITION, {
  data: {
    compName,
    drawLotsTime,
    place,
    teamTypeName,
    timeInfo
  }
})

/**
 * 增加成绩
 * @param compName 比赛名
 * @param schoolName 学校名
 * @param scroeTime 用时
 * @param teamName 队伍名
 * @param teamTypeName 队伍分类名
 */
export const addScore = (compName: string, schoolName: string, scroeTime: string, teamName: string, teamTypeName: string) => post(config.ADD_SCORE, {
  data: {
    compName,
    schoolName,
    scroeTime,
    teamName,
    teamTypeName
  }
})