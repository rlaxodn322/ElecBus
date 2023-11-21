export const routes = [
  {
    router: '/auth/login',
    active: '/icons/sidebar/user_active.svg',
    default: '/icons/sidebar/user_default.svg',
    name: 'Login',
  },
  {
    router: '/',
    active: '/icons/sidebar/dashboard_active.svg',
    default: '/icons/sidebar/dashboard_default.svg',
    name: 'Dashboard',
  },
  {
    router: '/auth/buslist',
    active: '/icons/sidebar/bus_active.svg',
    default: '/icons/sidebar/bus_default.svg',
    name: '버스관리',
  },
  {
    router: '/auth/businfo',
    active: '/icons/sidebar/error_active.svg',
    default: '/icons/sidebar/error_default.svg',
    name: '오류관리',
  },
];
