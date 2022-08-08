/*
 * @Author: liangmin
 * @Date: 2022-08-05 15:51:35
 * @FilePath: \boll-pjOne\src\router\baseRouter.js
 * @Description: 二级路由
 */
const baseRouter = [
  {
    path: 'personCenter',
    component: () => import(/* webpackChunkName: "dt" */ '@/components/personCenter/PersonCenter.vue')    
  },
]
export default baseRouter