import {
  isEmpty,
  forOwn
} from 'lodash'

export const objectToQueryString = (url, query) => {
  let _url = url

  if (!isEmpty(query)) {
    _url += '?'

    forOwn(query, (value, key) => {
      _url += `${key}=${value}&`
    })
  }

  return _url
}