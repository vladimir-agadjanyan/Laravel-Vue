<script setup lang="ts">
  import {useAuthStore} from "@/store/auth";
  
  const { register } = useAuthStore();
</script>

<template>
  <h1 class="text-3xl text-slate-300 p-4"> Register Page</h1>
  <div class="max-w-md mx-auto bg-slate-700 rounded-lg p-4">
    <FormKit type="form" submit-label="Register" @submit="register">
      <FormKit type="text" label="Name" name="name" label-class="!text-white" input-class="w-100 h-5 px-3 rounded-md border" />
      <FormKit type="email" label="Email" name="email" label-class="!text-white" input-class="w-100 h-5 px-3 rounded-md border" />
      <FormKit type="password" label="Password" name="password" label-class="!text-white" input-class="w-100 h-5 px-3 rounded-md border" />
      <FormKit type="password" label="Password Confirmation" name="password_confirmation" label-class="!text-white" input-class="w-100 h-5 px-3 rounded-md border"/>
    </FormKit>
  </div>
</template>
