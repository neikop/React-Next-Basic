import { Home } from 'views/Home';
import { Market } from 'views/Market';

const privateRoute = {
  home: {
    path: '/home',
    component: Home,
  },
  market: {
    path: '/market',
    component: Market,
  },
};

export default privateRoute;
