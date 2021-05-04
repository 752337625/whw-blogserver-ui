const indexRoute = [
  { path: "/", redirect: { name: "sign" } },
  {
    path: "/index",
    name: "index",
    component: () => import(/* webpackChunkName: "index" */ "@/views/index"),
    children: [
      {
        path: "/articlelists",
        name: "articleLists",
        component: () =>
          import(
            /* webpackChunkName: "articleLists" */ "@/components/article/articleLists"
          )
      },
      {
        path: "/articleadd",
        name: "articleAdd",
        component: () =>
          import(
            /* webpackChunkName: "articleLists" */ "@/components/article/articleAdd"
            )
      }
    ]
  }
];
export default indexRoute;
