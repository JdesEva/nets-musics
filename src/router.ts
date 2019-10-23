import Loadable from 'react-loadable'

const routes = [
  {
    name: 'index',
    path: '/index',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Index" */ './views/index/index'),
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
    name: 'vedio',
    path: '/vedio',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Vedio" */ './views/vedio/vedio'),
      loading: () => null
    })
  },
  {
    name: 'broadcast',
    path: '/broadcast',
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Broadcast" */ './views/broadcast/broadcast'
        ),
      loading: () => null
    })
  }
]

export default routes
