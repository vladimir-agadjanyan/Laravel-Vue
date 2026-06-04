<script setup lang="ts">
import {useAuthStore} from "@/store/auth";
import { onMounted } from "vue";

const auth = useAuthStore();

onMounted(() => {
  auth.getUser();
});
</script>

<template>
  <div class="w-full max-w-screen-xl mx-auto px-4">
    <h1 class="text-3xl text-slate-700">Dashboard</h1>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-lg text-slate-600">Welcome back, {{ auth.user?.name }}</p>
        <p class="text-sm text-slate-600"> {{ auth.user?.email }}</p>
      </div>
      <button @click="auth.logout" class="btn btn-pimary">Logout</button>
    </div>
  </div>

</template>
