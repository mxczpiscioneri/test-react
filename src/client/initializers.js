import { Promise } from 'es6-promise'

if (/PhantomJS/.test(window.navigator.userAgent))
  window.Promise = Promise