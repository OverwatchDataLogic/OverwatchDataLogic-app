import request from '../utils/request'

export function query() {
  return request.get('https://cnodejs.org/api/v1/topics')
}

export function create() {
  return request.post('https://cnodejs.org/api/v1/topics')
}