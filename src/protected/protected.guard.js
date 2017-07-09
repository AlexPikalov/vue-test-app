import Vue from 'vue'

export function protectedGuard(to, from, next) {
  let authorized = Vue.session.isAuthorized();
  if (authorized) {
    return next()
  } else {
    console.debug(`[Protected Guard]: User unauthorized to proceed to '${to.path}'`)
    return next('/login')
  }
}