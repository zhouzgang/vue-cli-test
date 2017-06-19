/**
 * Created by 30411 on 2016/11/29.
 */
import app from '@/App.vue'

// layout
import head from '@/views/layout/head.vue'
import center from '@/views/layout/center.vue'
import e_content from '@/views/layout/e-content.vue'
import wecome from '@/views/layout/wecome.vue'

//goods
import goods from '@/views/goods/vas.vue'

//business
import business from '@/views/business/business.vue'

// login
// import login from '../components/login/login.vue'
// import loginFrom from '../components/login/loginFrom.vue'
// import registerFrom from '../components/login/registerFrom.vue'
// import QRcode from '../components/login/qrcode.vue'

const routes = [
  {
    path: '/',
    name: app,
    components: {
      head: head,
      center: center,
    },
    children: [
      {
        path: '/',
        name: 'e_content',
        component: e_content,
        children: [
          {
            path: '/',
            name: wecome,
            component: wecome
          },
          {
            path: '/goods',
            name: goods,
            component: goods
          },
          {
            path: '/business',
            name: business,
            component: business
          }
        ]
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
