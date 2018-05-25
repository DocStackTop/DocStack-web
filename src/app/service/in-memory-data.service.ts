import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const article = [
      {
          "id":1,
          "cover":"http://static.bookstack.cn/projects/the-way-to-go_ZH_CN/uploads/201802/151160659c7827ef.jpg/cover",
          "desc":"Docker — 从入门到实战",
          "title":"Docker — 从入门到实战",
          "author":"Jermine",
          "collection":true
      },{
          "id":2,
          "cover":"http://static.bookstack.cn/projects/kubernetes-handbook/uploads/201801/150de593bce388c7.jpg/cover",
          "desc":"Kubernetes中文指南/实践手册",
          "title":"Kubernetes中文指南/实践手册",
          "author":"Alice",
          "collection":true
      },{
          "id":3,
          "cover":"http://static.bookstack.cn/projects/blockchain_guide/uploads/201803/151d27ae6d7cbb36.jpg/cover",
          "desc":"区块链技术指南",
          "title":"区块链技术指南",
          "author":"Tom",
          "collection":false
      },{
          "id":4,
          "cover":"http://static.bookstack.cn/projects/Go-Web/uploads/201802/15113e2f835b9878.jpg/cover",
          "desc":"Go Web 编程",
          "title":"Go Web 编程",
          "author":"Fred",
          "collection":false
      },{
          "id":5,
          "cover":"http://static.bookstack.cn/projects/webpack-tutorial/uploads/201802/150f35c17afeed39.png/cover",
          "desc":"webpack 3 零基础入门教程",
          "title":"webpack 3 零基础入门教程",
          "author":"God"
      },{
          "id":6,
          "cover":"http://static.bookstack.cn/projects/weex/uploads/201802/150f313e37a49fcd.jpeg/cover",
          "desc":"weex中文教程",
          "title":"weex中文教程",
          "author":"Darin",
          "collection":false
      },{
          "id":7,
          "cover":"http://static.bookstack.cn/projects/es6/uploads/201712/1501a89129be0fb0.jpg/cover",
          "desc":"ECMAScript 6入门",
          "title":"ECMAScript 6入门",
          "author":"Note",
          "collection":false
      },{
          "id":8,
          "cover":"http://static.bookstack.cn/projects/go-xweb-docs-zh-CN/uploads/201803/151eb35fccfecb7a.png/cover",
          "desc":"xweb操作指南",
          "title":"xweb操作指南",
          "author":"Jermine",
          "collection":false
      },{
          "id":9,
          "cover":"http://static.bookstack.cn/projects/BottomNavigation/uploads/201803/151e60fe2535d5e5.png/cover",
          "desc":"Android 底部导航栏（Bottom navigation）规范指南",
          "title":"Android 底部导航栏（Bottom navigation）规范指南",
          "author":"small",
          "collection":false
      },{
          "id":10,
          "cover":"http://static.bookstack.cn/projects/docker_course/uploads/201803/151d57cb41bde125.png/cover",
          "desc":"Docker教程中文版本",
          "title":"Docker教程中文版本",
          "author":"小刀",
          "collection":true
      },{
          "id":11,
          "cover":"http://static.bookstack.cn/projects/JS-Sorting-Algorithm/uploads/201803/151b2fbf16082acd.png/cover",
          "desc":"十大经典排序算法",
          "title":"十大经典排序算法",
          "author":"竹大爷",
          "collection":false
      },{
          "id":12,
          "cover":"http://static.bookstack.cn/projects/zensh-AngularjsTutorial_cn/uploads/201802/151672488cd1c694.png/cover",
          "desc":"AngularJS入门教程",
          "title":"AngularJS入门教程",
          "author":"饼宝宝",
          "collection":false
      }
  ];
  const menu =[{
    title   : '一级菜单',
    key     : '1001',
    children: [
      {
        title   : '二级菜单',
        key     : '10001',
        children: [
          {
            title   : '三级菜单',
            key     : '100011',
            isLeaf: true
          },
          {
            title   : '三级菜单',
            key     : '100012',
            children: [
              {
                title   : '四级菜单',
                key     : '1000121',
                isLeaf: true
              },
              {
                title : '四级菜单',
                key   : '1000122',
                isLeaf: true
              }
            ]
          }
        ]
      }
    ]
  },{
    title   : '一级菜单',
    key     : '1002',
    children: [
      {
        title   : '二级菜单',
        key     : '10021',
        isLeaf: true
      },
      {
        title   : '二级菜单',
        key     : '10022',
        children: [
          {
            title: '三级菜单',
            key  : '100221',
            isLeaf: true
          }
        ]
      }
    ]
  },{ title: '一级菜单', key: '1003',isLeaf: true }]
    return {article,menu};
    
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/