<template>
  <div class="login-container">
    <ElAvatar
      size="small"
      round
      class="bg-gray-200"
      :src="profile?.avatarUrl ?? ''"
    ></ElAvatar>
    <span class="login-title" v-if="isLogin">{{ profile.nickname }}</span>
    <span class="login-title" @click="showLogin = true" v-else>点击登录</span>
  </div>
  <el-dialog
    class="dialog-container"
    v-model="showLogin"
    title="登录"
    width="330px"
    append-to-body
  >
    <div>
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
        登录
      </button>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Lock, Phone } from "@icon-park/vue-next";

let username = ref<string>("");
let password = ref<string>("");
let isLogin = ref<boolean>(false);
let showLogin = ref<boolean>(false);

const loginSubmit = () => {};
</script>

<style lang="scss" scoped>
.login-container {
  color: #fff;
  margin-right: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #34d399;
  }

  .login-title {
    font-size: 0.8rem;
    margin-left: 0.5rem;
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
</style>
