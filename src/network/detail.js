import {request} from "./network";

export function getProductDetailData(iid) {
  return request({
    url: '/detail',
    params: {
        iid,
    }
  })
}