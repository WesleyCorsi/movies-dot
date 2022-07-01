import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/MovieHome.vue";
import MoviesList from "@/views/MoviesList";
import MovieCheckout from "@/views/MovieCheckout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/movies",
    children: [
      {
        path: "/movies",
        name: "movie",
        component: MoviesList,
      },
      {
        path: "/checkout",
        name: "moviecheckout",
        component: MovieCheckout,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
