// @zzeyu

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DashboardPlugin from "./dashboard-plugin";
import "element-plus/lib/theme-chalk/index.css";

import Toast from "vue-toastification";
import { useToast } from "vue-toastification";
import Notification from "@/components/Notification";
import "vue-toastification/dist/index.css";
import { store } from "./store";
import axios from "axios";

import swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import installElementPlus from './plugins/element'


function isSessionStorageSupported() {
  var storage = window.sessionStorage;
  try {
    storage.setItem("test", "test");
    storage.removeItem("test");
    return true;
  } catch (e) {
    return false;
  }
}

if (!isSessionStorageSupported()) {
  window.location.href = "https://browser-update.org/zh/update-browser.html";
}

const options = { containerClassName: "ct-notification" };

const appInstance = createApp(App);
installElementPlus(appInstance);

const runToast = (pos, type, ownText, ownIcon) => {
  const text = "Notification";
  const icon = "ni ni-bell-55";
  const content = {
    component: Notification,
    props: {
      ownText: ownText,
      ownIcon: ownIcon,
      icon: icon,
      text: text,
      type: type,
    },
  };
  const toast = useToast();
  toast(content, {
    hideProgressBar: true,
    icon: false,
    closeButton: false,
    position: pos,
  });
};

async function showConfirmation(title, text) {
  let confirmation = await swal.fire({
    title: title,
    text: text,
    buttonsStyling: false,
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    reverseButtons: true,
    customClass: {
      confirmButton: "btn btn-danger",
      cancelButton: "btn btn-info",
    },
    icon: "warning",
    showCancelButton: true,
  });
  return confirmation.isConfirmed;
}

async function showSuccess(title, text) {
  let confirmation = await swal.fire({
    title: title,
    text: text,
    confirmButtonText: "知道了",
    buttonsStyling: false,
    customClass: {
      confirmButton: "btn btn-success",
    },
    icon: "success",
  });

  return confirmation.isConfirmed;
}

async function postStuff(backend, post_url, post_obj) {
  try {
    post_obj.auth_user = this.$store.state.id;
    post_obj.auth_key = this.$store.state.auth_key;
    let response = await axios.post(this.$BACKENDBASE[backend] + post_url, post_obj);
    let obj = response["data"];
    if (obj["status"] != "succ") {
      if (obj["message"] == "auth") throw "服务器身份校验失败";
    }
    return obj;
  } catch (e) {
    this.$store.commit("CLEAR_VARS");
    this.$router.push({ path: "/login", query: { reason: String(e) } });
    return false;
  }
}

appInstance.config.globalProperties.$CLUSTERNAME = "开发集群";
appInstance.config.globalProperties.$BACKENDBASE = {
    "svc-deploy":"https://zhmle-unisvc-deploy.dev.chohotech.com",
    "mle-registry":"https://zhmle-registry.dev.chohotech.com"
};

appInstance.config.globalProperties.$notify = runToast;
appInstance.config.globalProperties.$confirm = showConfirmation;
appInstance.config.globalProperties.$message = showSuccess;
appInstance.config.globalProperties.$post = postStuff;

appInstance.use(router);
appInstance.use(Toast, options);
appInstance.use(DashboardPlugin);
appInstance.use(store);
appInstance.mount("#app");