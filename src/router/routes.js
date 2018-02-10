import Find from '@/components/Find';
import Register from '@/components/Register';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Find,
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
  },  {
    path: '/register',
    name: 'Register',
    component: Register,
  },

];
export default routes;
