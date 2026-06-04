<script setup lang="ts">
import axiosInstance from '@/lib/axios';
import router from '@/router';
import type { FormKitNode } from '@formkit/core';
import { AxiosError } from 'axios';

type PostForm = {
  title: string;
  body: string;
}
const CreatePost = async(payLoad: PostForm, node?: FormKitNode ) => {
    try {
      await axiosInstance.post('/dashboard/posts', payLoad);
      router.push('/dashboard/posts');
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status === 422) {
        node?.setErrors([], e.response?.data.errors);
    }
  }
}
</script>

<template>
  <h1 class="text-3xl text-slate-300 p-4">Create Post</h1>
  <div class="max-w-md mx-auto bg-slate-700 rounded-lg p-4">
    <FormKit type="form" submit-label="Create " @submit="CreatePost">
      <FormKit type="text" label="Title" name="title" input-class="max-w-[25em] h-5 px-3 rounded-md border" label-class="!text-white"/>
      <FormKit type="textarea" label="Body" name="body" input-class="max-w-[25em] h-5 px-3 rounded-md border" label-class="!text-white"/>
    </FormKit>
  </div>
</template>
