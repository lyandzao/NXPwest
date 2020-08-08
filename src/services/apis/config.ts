/**
 * api接口
 * 以_为前缀的为get请求,其余为post
 */

export const _LOGIN = '/login' // 登录
export const SIGNUP = '/signup' // 注册
export const RESET_PWD = '/reset' // 重置密码
export const CODE = '/code' // 获取验证码

export const _USER_COMPETITION_INFO = '/my/' // /my/{comp_id}获取用户比赛信息

export const _TYPE = '/types' // 查看所有分类
export const _COMPETITION_PLAN = '/comps/' // /comps/{type_name}根据分类名查看分类下所有比赛安排
export const _COMP='/comps' // 获取所有分类名及对应的比赛

export const ALL_TEAMS='/getAllTeamByType' // 获取分类下所有队伍

export const _DRAW_LOTS = '/draw_lots' // 抽签

export const _RANK='/ranked/' // /ranked/{comp_id}排名

export const ADD_COMPETITION = '/addComp' // 增加比赛
export const ADD_SCORE = '/addScore' // 增加成绩
