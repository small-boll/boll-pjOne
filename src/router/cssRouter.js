/*
 * @Author: liangmin
 * @Date: 2022-08-05 15:51:35
 * @FilePath: \boll-pjOne\src\router\cssRouter.js
 * @Description: 二级路由
 */
const baseRouter = [
  {
    path: 'CssBorder',
    component: () => import(/* webpackChunkName: "dt" */ '@/components/cssBorder/CssBorder.vue')    
  }
]
export default baseRouter