import { lazy } from "react";
    
    const home = lazy(() => import('@/pages/home/index.page.js'));
const favorites = lazy(() => import('@/pages/favorites/index.page.js'));
    
    export const routes = [
        { path: "/", page: home, isPublic: true, template: "blank", title: "Home", isForm: "null" },
{ path: "/favorites", page: favorites, isPublic: true, template: "blank", title: "Favorites", isForm: "null" }
    ];
    