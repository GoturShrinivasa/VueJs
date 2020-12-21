import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import store from "@/store";
Vue.use(Router)

export default new Router({
  mode: "history",
  linkExactActiveClass: "activeClassForNavigationContent",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      props: true
    },
    {
      path:'/destination/:slug',
      name:'DestinationDetail',
      props: true,
      component: () => import(/* WebPackChunkName: "DestinationDetails" */ "../Views/DestinationDetails"),
      children: [
        {
          path: ":experienceSlug",
          name: "experienceDetails",
          props: true,
          component: () => import(/* WebPackChunkName: "experienceDetails" */ "../Views/ExperienceDetails")
        }
      ],
      beforeEnter: (to, from, next) => {
        const exists = store.destinations.find(
          destination => destination.slug === to.params.slug
        );
        if (exists) {
          next();
        } else {
          next({ name: "notFound" });
        }
      }
    },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */
        "../views/NotFound")
    }
  ]
})
