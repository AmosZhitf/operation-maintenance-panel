<template>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
        <side-bar>
            <template v-slot:links>
                <user-menu></user-menu>
                <sidebar-item
                    :link="{
                        name: $t('sidebar.workflow'),
                        icon: 'now-ui-icons design_vector',
                    }"
                >
                    <sidebar-item
                        :link="{
                            name: $t('sidebar.checkContent'),
                            path: '/pages/workflow',
                        }"
                    ></sidebar-item>
                    <sidebar-item
                        :link="{
                            name: 'abc',
                            path: '/pages/workflowa',
                        }"
                    ></sidebar-item>
                </sidebar-item>
            </template>
        </side-bar>
        <div class="main-panel">
            <top-navbar></top-navbar>
            <router-view name="header"></router-view>

            <div
                :class="{ content: !$route.meta.hideContent }"
                @click="toggleSidebar"
            >
                <router-view></router-view>
            </div>
            <content-footer v-if="!$route.meta.hideFooter"></content-footer>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-new */
// import PerfectScrollbar from "perfect-scrollbar";
// import "perfect-scrollbar/css/perfect-scrollbar.css";

// function hasElement(className) {
//   return document.getElementsByClassName(className).length > 0;
// }
//
// function initScrollbar(className) {
//   if (hasElement(className)) {
//     new PerfectScrollbar(`.${className}`);
//   } else {
//     // try to init it later in case this component is loaded async
//     setTimeout(() => {
//       initScrollbar(className);
//     }, 100);
//   }
// }

import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import UserMenu from "./extra/UserMenu.vue";

export default {
    components: {
        TopNavbar,
        ContentFooter,
        UserMenu,
    },
    data() {
        return {
            content: "content123",
        };
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        },
    },
    mounted() {
        // let docClasses = document.body.classList;
        // let isWindows = navigator.platform.startsWith("Win");
        // if (isWindows) {
        //   // if we are on windows OS we activate the perfectScrollbar function
        //   initScrollbar("sidebar");
        //   initScrollbar("sidebar-wrapper");
        //
        //   docClasses.add("perfect-scrollbar-on");
        // } else {
        //   docClasses.add("perfect-scrollbar-off");
        // }
    },
};
</script>
<style lang="scss"></style>
