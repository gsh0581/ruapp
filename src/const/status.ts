export const HTTP_STATUS = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

// promise status
export const SUCCESS = { success:'success'}
export const FAIL = { fail:'fail'}
export const COMPLETE = { complete:'complete'}

export const PROMISE_STATUS = {
  success: 'success',
  fail: 'fail',
  complete: 'complete'
}

export const RESULT_STATUS = {
  SUCCESS:0,
  SIGNATURE_FAILED: 1000  // 签名失败
}
export enum OrderStatus {
  '新订单',
  '已送达',
  '已取消',
  '配送中...',
}
export enum PayStatus {
  '未付款',
  '已付款'
}
