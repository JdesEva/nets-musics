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
  }
]

export default routes
