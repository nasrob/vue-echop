import { createRouter, createWebHashHistory } from "vue-router";

import AddProduct from "../views/AddProduct.vue";
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import SingleProduct from "../views/SingleProduct.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/products",
		name: "products",
		component: ProductList,
	},
	{
		path: "/product/:slug",
		name: "product",
		component: SingleProduct,
	},
	{
		path: "/add-product",
		name: "add-product",
		component: AddProduct,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
