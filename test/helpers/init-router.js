import VueRouter from 'vue-router';

export default {
  initRouter: (localVue, configs) => {
    localVue.use(VueRouter);
    const router = new VueRouter(configs);
    return router;
  },
};
