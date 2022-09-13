/*
 * @Author: liangmin
 * @Date: 2022-08-10 16:13:39
 * @FilePath: \boll-pjOne\src\layout\menuList.js
 * @Description: 菜单文件
 */
export default [
  {
    name: 'folder1',
    lable: '文件夹一',
    path: '',
    icon: '',
    children: [
      {
        name: 'personCenter',
        lable: '个人中心',
        path: '/layout/personCenter',
        icon: 'personCenter',
      },
      {
        name: 'Three3D',
        lable: '3D',
        path: '/layout/Three3D',
        icon: 'example',
      },
    ]
  },
  {
    name: 'folder2',
    lable: 'css边框',
    path: '',
    icon: '',
    children: [
      {
        name: 'CssBorder',
        lable: '边框',
        path: '/layout/CssBorder',
        icon: 'CssBorder',
      },
    ]
  }
]