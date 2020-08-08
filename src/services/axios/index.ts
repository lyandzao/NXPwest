import { message } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';

import instance from './instance';

interface Iopt extends AxiosRequestConfig {
  ifHandleError?: boolean; // 统一处理错误
  ifCanceled?: boolean;
  msg?: string;
}

const request = async (opt: Iopt) => {

  const options: Iopt = {
    method: 'get',
    ifHandleError: true,
    ifCanceled: false,
    ...opt
  }

  try {
    const res = await instance(options);
    // return res
    return Promise.resolve(res)
  } catch (err) {
    if (options.ifHandleError) {
      message.error(err.message || err.msg || '请求失败!')
    }
    // throw new Error(err.message);
    return Promise.reject(new Error(err.message))
  }
}

export const get = (url: string, opt?: Iopt) => {
  return request({
    method: 'GET',
    url,
    params: opt?.params,
    headers: opt?.headers,
    msg: opt?.msg
  })
}
export const post = (url: string, opt?: Iopt, multipart?: boolean) => {
  let contentType: string = 'application/x-www-form-urlencoded;charset=UTF-8'
  if (multipart) {
    contentType = 'multipart/form-data;charset=UTF-8'
  }
  return request({
    method: 'post',
    url,
    data: opt?.data,
    headers: {
      'Content-Type': contentType
    },
    msg: opt?.msg
  })
}

export const deleteFile = (url: string, opt?: Iopt) => {

  return request({
    method: 'DELETE',
    url,
    data: opt?.data,
    msg: opt?.msg
  })
}
