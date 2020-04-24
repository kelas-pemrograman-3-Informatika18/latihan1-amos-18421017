
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: 'Register', component: () => import('pages/Register.vue') }
    ]
},
{
  path: '/',
  component: () => import('layouts/Mainlayout.vue'),
  children: [
      { path: 'home', name: 'dashboard', component: () => import('pages/Index.vue') }, 
      { path: 'inputjadwal', name: 'inputJadwal', component: () => import('pages/InputJadwal.vue') }    
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
