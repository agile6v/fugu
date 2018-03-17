import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

  {
    path: '/job',
    component: Layout,
    children: [{ path: 'index', component: _import('job/index'), name: 'job', meta: { title: 'job', icon: 'international' }}]
  },

  {
    path: '/cluster',
    component: Layout,
    redirect: 'noredirect',
    name: 'cluster',
    meta: {
      title: 'cluster',
      icon: 'table'
    },
    children: [
      { path: 'mesos', component: _import('cluster/mesos'), name: 'mesos', meta: { title: 'mesos', icon: 'table' }},
      { path: 'kubernetes', component: _import('cluster/kubernetes'), name: 'kubernetes', meta: { title: 'kubernetes', icon: 'table' }},
      { path: 'swarm', component: _import('cluster/swarm'), name: 'swarm', meta: { title: 'swarm', icon: 'table' }}
    ]
  },

  {
    path: '/settings',
    component: Layout,
    redirect: 'noredirect',
    name: 'settings',
    meta: {
      title: 'settings',
      icon: 'table'
    },
    children: [
      { path: 'user', component: _import('settings/user'), name: 'user', meta: { title: 'user', icon: 'table' }},
      { path: 'language', component: _import('settings/language'), name: 'language', meta: { title: 'language', icon: 'table' }},
      { path: 'server', component: _import('settings/server'), name: 'server', meta: { title: 'server', icon: 'table' }}
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
