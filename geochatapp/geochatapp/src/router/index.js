import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },

    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      // to( chat component), next (where do you want to redirect), from(homepage which is the welcome component)
      beforeEnter: (to, from, next) => {
          // console.log(to.params.name)
          if(to.params.name){
            next()
          } else{
            next({
              name: 'Welcome'
            })
          }
      }
    }
  ]
})
