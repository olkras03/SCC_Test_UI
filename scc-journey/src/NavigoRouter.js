import Navigo from 'navigo';
import store from './store';
import { compareArray } from './util.js';


const mapStateToNav = () => {
  const state = store.getState();
  const navigation = state?.navigation ?? {};
  const keys = Object.keys(navigation);
  return keys;
}

let unsubscribe;
let router;
const routes = mapStateToNav();

const updateNavigation = () => {

  if(unsubscribe === undefined) {
    unsubscribe = store.subscribe(() => {
      const newRoutes = mapStateToNav();
      if(compareArray(newRoutes, routes)){
        return;
      }

      routes = newRoutes;
      updateNavigation();
    });
  }

  router = new Navigo('/', true, '#!');

  // this.router.on('*', () => {
  //   this.route = `This is home.`;
  // });

  // router.on('*', (routeProps) => {
  //   store.dispatch({type:'NAVIGATE', payload:{
  //     address: '',
  //     value: routeProps
  //   }});
  // });

  for (const route of routes) {
    router.on(route, (routeProps) => {
      store.dispatch({type:'ROUTE_NAVIGATE', payload:{
        address: route,
        value: routeProps
      }});
    });
  }

  router.resolve();
}

updateNavigation();

export default function() {
  return router;
};
