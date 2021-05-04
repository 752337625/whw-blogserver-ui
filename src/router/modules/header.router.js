const headerRouter = [
	{
	  path: "/sign",
	  name: "sign",
	  component: () => import(/* webpackChunkName: "sign" */ "@/views/sign")
	},

];
export default headerRouter;
