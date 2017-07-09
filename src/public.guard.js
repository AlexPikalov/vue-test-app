import Vue from 'vue'

export function publicGuard(to, from, next) {
  let authorized = Vue.session.isAuthorized();
  if (authorized) {
    console.debug(`[Protected Guard]: User already logged in`)
    return next('/')
  } else {
    return next()
  }
}