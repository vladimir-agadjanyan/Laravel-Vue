<script setup lang="ts">
import axiosInstance from '@/lib/axios';
import { watch } from 'vue';
import { ref } from 'vue';
import type { Post } from '@/types';

const props = defineProps<{
  id: string;
}>();

const post = ref<Post | null>(null);

const getPost = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/dashboard/posts/${id}`);
    post.value = data.data;
  } catch (error) {
    console.error(error);
  }
}

watch(
  () => props.id,
  (id) => getPost(id),
  { immediate: true }
);

</script>

<template>
  <h1 class="text-3xl text-slate-500 p-4">{{post?.title}}</h1>
  <span class="text-sm text-slate-500 p-4">Created at: {{ post?.createdAt }}</span>
  <div class="max-w-[24em] mx-auto bg-slate-700 rounded-lg p-4">
    <p class="text-slate-300">
      {{post?.body}}
    </p>

  </div>

</template>
