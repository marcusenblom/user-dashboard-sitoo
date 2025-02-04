import routes from "./routes";

export type NavRoute = {
    path: string;
    name: string;
    icon?: string;
};

const navRoutes: NavRoute[] = [
    { ...routes.users, icon: "/img/nav-icons/users.svg" },
    { ...routes.products, icon: "/img/nav-icons/products.svg" },
    { ...routes.manufacturers, icon: "/img/nav-icons/manufacturers.svg" },
];

export default navRoutes;
