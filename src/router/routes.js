const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/login/admin",
        name: "AdminLogin",
        component: () => import("pages/AdminLogin.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("pages/RegisterPage.vue"),
      },
      {
        path: "/reserve",
        name: "Reserve",
        component: () => import("pages/ReservePage.vue"),
      },
      {
        path: "/news",
        name: "News",
        component: () => import("pages/NewsPage.vue"),
      },
      {
        path: "/shows",
        name: "Shows",
        component: () => import("pages/ShowtablePage.vue"),
      },
      {
        path: "/fb",
        name: "FB",
        component: () => import("pages/FBPage.vue"),
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import("pages/ContactPage.vue"),
      },
    ],
  },
  {
    path: "/admin/reserve",
    component: () => import("layouts/DashboardLayout.vue"),
    children: [
      {
        path: "/admin/reserve",
        name: "Admin",
        component: () => import("src/pages/ReserveDash.vue"),
      },
      {
        path: "/admin/user",
        name: "UsersDash",
        component: () => import("src/pages/UsersDashboard.vue"),
      },
      {
        path: "/admin/news",
        name: "NewsDash",
        component: () => import("src/pages/NewsDashboard.vue"),
      },
      {
        path: "/admin/shows",
        name: "ShowsDash",
        component: () => import("src/pages/ShowsDash.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
