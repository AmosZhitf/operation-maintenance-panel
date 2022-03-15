import { createRouter, createWebHashHistory } from "vue-router";
import DashboardLayout from "../views/dashboard/layout/DashboardLayout.vue";
import NotFound from "../views/generalViews/NotFoundPage.vue";
import WorkflowPage from '../views/dashboard/workflow/Workflow.vue';
import DefaultHeader from "../views/dashboard/headers/DefaultHeader";

let pagesMenu = {
    path: "/pages",
    component: DashboardLayout,
    redirect: "/pages/workflow",
    name: "Pages",
    children: [
        {
            path: "workflow",
            name: "workflow page",
            components: { default: WorkflowPage, header: DefaultHeader },
        },
        {
            path: "workflowa",
            name: "workflowa page",
            components: { default: WorkflowPage, header: DefaultHeader },
        },
    ],
};

const routes = [
    {
        path: "/",
        redirect: "/pages/workflow",
        name: "Home",
    },
    pagesMenu,
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: "active",
    routes,
});

export default router;
