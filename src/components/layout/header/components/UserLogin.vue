<template>
  <div class="login-container">
    <ElAvatar
      :size="35"
      round
      class="bg-gray-200"
      :src="userProfile?.avatarUrl ?? ''"
    ></ElAvatar>
    <span
      class="login-title"
      v-if="isLogin"
      @click="showLogout = !showLogout"
      >{{ userProfile.nickname }}</span
    >
    <span class="login-title" @click="showLogin = true" v-else>点击登录</span>
    <div class="logout" v-if="showLogout">
      <span @click="clickLogout">退出登录</span>
    </div>
  </div>
  <el-dialog
    class="dialog-container"
    v-model="showLogin"
    title="登录"
    width="330px"
    append-to-body
  >
    <div class="QR-container" v-if="showQRCode">
      <img width="225" height="225" :src="qrImg" />
      <span style="text-align: center; padding: 1rem 0">{{ qrMsg }}</span>
      <p style="color: #82aaff; cursor: pointer" @click="clickBack">返回</p>
    </div>
    <div v-else>
      <el-input
        size="large"
        placeholder="手机号码"
        :prefix-icon="Phone"
        v-model="username"
      />
      <el-input
        size="large"
        class="password-box"
        placeholder="登录密码"
        :prefix-icon="Lock"
        v-model="password"
      />

      <button
        @click="loginSubmit"
        class="button-box"
        style="border-radius: 5px"
      >
        登录(暂不可用)
      </button>

      <button
        @click="scanTologinSubmit"
        class="button-box"
        style="border-radius: 5px"
      >
        扫码登录
      </button>

      <button
        @click="visitorLoginSubmit"
        class="button-box"
        style="border-radius: 5px"
      >
        游客登录(相当于不登录)
      </button>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import { Lock, Phone } from "@icon-park/vue-next";
import userStore from "@/store/modules/user";

const store = useStore();
const qrImg = computed(() => store.getters.qrImg);
const qrState = computed(() => store.getters.qrState);
const userAccount = computed(() => store.getters.userAccount);
const userProfile = computed(() => store.getters.userProfile);
const isLogin = computed(() => store.getters.showLogin);
let username = ref<string>("");
let password = ref<string>("");
let showLogout = ref<boolean>(false);
let showLogin = ref<boolean>(false);
let showQRCode = ref<boolean>(false);

const qrMsg = computed(() => {
  switch (qrState.value) {
    case 800:
      return "二维码过期";
    case 801:
      return "请使用APP扫码登录";
    case 802:
      return "授权中";
    case 803:
      store.dispatch("user/fetchLoginStatus");
      showLogin.value = false;
      return "授权成功";
    default:
      return "请使用APP扫码登录";
  }
});

// 扫码登录
const scanTologinSubmit = () => {
  showQRCode.value = true;
  store.dispatch("user/fetchQRCodeLogin");
};

// 退出登录
const clickLogout = () => {
  store.dispatch("user/fetchLogOut");
  showLogout.value = false;
};

const clickBack = () => {
  showQRCode.value = false;
};

const loginSubmit = () => {
  alert("暂不可用");
};

const visitorLoginSubmit = () => {
  alert("此登录等价于不登录, 望知...");
  store.dispatch("user/fetchVisitorLogin");
};

onMounted(() => {
  store.dispatch("user/fetchLoginStatus");
});
</script>

<style lang="scss" scoped>
.login-container {
  color: #fff;
  margin-right: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  .login-title {
    font-size: 0.9rem;
    margin-left: 0.5rem;
    &:hover {
      color: #34d399;
    }
  }

  .logout {
    position: absolute;
    background-color: #363636;
    padding: 1rem 2rem;
    border-radius: 1rem;
    top: 4rem;
    right: 8.5rem;
    &:hover {
      color: #34d399;
    }
  }
}

.password-box {
  margin-top: 1.25rem;
}

.button-box {
  display: flex;
  height: 2rem;
  width: 100%;
  margin-top: 1.45rem;
  padding: 1.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border-style: none;
  background-color: #059669;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  --tw-text-opacity: 1;
  color: #fff;
}

.button-box:hover {
  background-color: #047857;
}

:deep(.el-dialog__header) {
  padding: 20px;
  padding-bottom: 10px;
  margin-right: 16px;
  word-break: break-all;
}

:deep(.el-dialog__body) {
  padding: calc(var(--el-dialog-padding-primary) + 10px)
    var(--el-dialog-padding-primary);
  color: var(--el-text-color-regular);
  font-size: var(--el-dialog-content-font-size);
  word-break: break-all;
}

.QR-container {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
}
</style>
