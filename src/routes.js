import Login from './Login.vue'
import Signup from './Signup.vue'
import NotFound from './NotFound.vue'
import Protected from './protected/Protected.vue'
import protectedRoutes from './protected/protected.routes'

import { protectedGuard } from './protected/protected.guard.js'
import { publicGuard } from './public.guard.js'

export default {
  routes: [
    {
      path: '/login',
      component: Login,
      beforeEnter: publicGuard
    },
    {
      path: '/signup',
      component: Signup,
      beforeEnter: publicGuard
    },
    { 
      path: '/',
      component: Protected,
      beforeEnter: protectedGuard,
      children: protectedRoutes
    },
    {
      path: '/[.*]',
      component: NotFound
    }
  ]
}