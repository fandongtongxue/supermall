import {request} from "./network";

export function getMultiData() {
  return request({
    // url: '/home/multidata'
    url: '/multidata.json'
  })
}

export function getProductData(type, page) {
  return request({
    // url: '/home/data',
    url: '/sell.json',
    params: {
      type,
      page
    }
  })
}