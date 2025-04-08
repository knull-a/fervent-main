export const mainMenuRoutes = [
  {
    name: 'О компании',
    path: '/about',
    meta: {
      layout: 'LayoutMain',
    },
    component: () => import('@/views/AboutView.vue'),
  },
  {
    name: 'Вопрос-ответ',
    path: '/faq',
    meta: {
      layout: 'LayoutMain',
    },
    component: () => import('@/views/FaqView.vue'),
  },
  {
    name: 'Контакты',
    path: '/contacts',
    meta: {
      layout: 'LayoutMain',
    },
    component: () => import('@/views/ContactsView.vue'),
  },
  {
    name: 'Гарантия аутентичности',
    path: '/guarantee',
    meta: {
      layout: 'LayoutMain',
    },
    component: () => import('@/views/GuaranteeView.vue'),
  },
]

export const mainCategoryRoutes = [
  {
    name: 'Обувь',
    path: '/category/shoes',
    meta: { layout: 'LayoutMain' },
    component: () => import('@/views/CategoryView.vue'),
  },
  {
    name: 'Одежда',
    path: '/category/clothing',
    meta: { layout: 'LayoutMain' },
    component: () => import('@/views/CategoryView.vue'),
  },
  {
    name: 'Аксессуары',
    path: '/category/accessories',
    meta: { layout: 'LayoutMain' },
    component: () => import('@/views/CategoryView.vue'),
  },
  {
    name: 'Бренды',
    path: '/brands',
    meta: { layout: 'LayoutMain' },
    component: () => import('@/views/CategoryView.vue'),
  },
  {
    name: 'Новинки',
    path: '/new-arrivals',
    meta: { layout: 'LayoutMain' },
    component: () => import('@/views/CategoryView.vue'),
  },
  {
    name: 'Скидки',
    path: '/sale',
    meta: { layout: 'LayoutMain' },
    component: () => import('@/views/CategoryView.vue'),
  },
]

export default [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'LayoutMain',
    },
    component: () => import('@/views/HomeView.vue'),
  },
  ...mainMenuRoutes,
]
