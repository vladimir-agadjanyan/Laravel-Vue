<script setup lang="ts">
  import {useAuthStore} from "@/store/auth";
  
  const { login } = useAuthStore();
</script>

<template>
  <h1 class="text-3xl text-slate-300 p-4">Login Page</h1>
  <div class="max-w-md mx-auto bg-slate-700 rounded-lg p-4">
    <FormKit type="form" submit-label="Login" @submit="login">
      <FormKit type="email" label="Email" name="email"
        input-class="max-w-[25em] h-5 px-3 rounded-md border" label-class="!text-white"/>
      <FormKit type="password" label="Password" name="password"
        input-class="w-100 h-5 px-3 rounded-md border" label-class="!text-white"/>
    </FormKit>
  </div>
</template>