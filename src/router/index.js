import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Project from '../views/ProjectView.vue';

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/project", name: "Project", component: Project },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
   linkActiveClass: 'active',
});

export default router;
