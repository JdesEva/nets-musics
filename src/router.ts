import Loadable from 'react-loadable'

const routes = [
  {
    name: 'index',
    path: '/index',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "Index" */ './views/main/mian'),
      loading: () => null
    })
  },
  {
    name: 'music',
    path: '/music',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Music" */ './views/music/music'),
      loading: () => null
    })
  },
  {
    name: 'radio',
    path: '/radio',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Radio" */ './views/radio/radio'),
      loading: () => null
    })
  },
  {
    name: 'rank',
    path: '/rank',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "Rank" */ './views/rank/rank'),
      loading: () => null
    })
  },
  {
    name: 'singer',
    path: '/singer',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Singer" */ './views/singer/singer'),
      loading: () => null
    })
  },
  {
    name: 'latest',
    path: '/latest',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Latest" */ './views/latest/latest'),
      loading: () => null
    })
  }
]

export default routes
