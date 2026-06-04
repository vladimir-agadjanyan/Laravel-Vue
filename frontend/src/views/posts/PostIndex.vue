<script setup lang="ts">
import axiosInstance from '@/lib/axios';
import { onMounted, ref } from 'vue';
import { TailwindPagination } from 'laravel-vue-pagination';

type Post = {
  id: number;
  title: string;
  is_published: boolean;
}

const laravelData = ref({});

const getResults = async (page = 1) => {
    const {data} = await axiosInstance.get(`/dashboard/posts?page=${page}`);
    laravelData.value = await data;
}

 onMounted(async() => {
  await getResults();
 })

</script>
<template>
  <div class="flex p-4 justify-end">
    <RouterLink :to="{ name: 'postCreate' }">Create</RouterLink>
  </div>
  <section>
    <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table class="w-full text-sm text-left rtl:text-right text-body">
          <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
              <tr>
                  <th scope="col" class="px-6 py-3 font-medium">ID</th>
                  <th scope="col" class="px-6 py-3 font-medium">Title</th>
                  <th scope="col" class="px-6 py-3 font-medium">Published</th>
                  <th scope="col" class="px-6 py-3 font-medium">Actions</th>
              </tr>
          </thead>
          <tbody>
            <template v-if="laravelData.data?.length > 0">
              <tr v-for="post in laravelData.data" :key="post.id" class="bg-neutral-primary border-b border-default">
                  <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                      {{ post.id }}
                  </th>
                  <td class="px-6 py-4">
                      {{ post.title }}
                  </td>
                  <td class="px-6 py-4">
                      {{ post.is_published }}
                  </td>
                  <td class="px-6 py-4">
                      Edit/Delete
                  </td>
              </tr>

            </template>
          </tbody>
        </table>
        <TailwindPagination :data="laravelData" @pagination-change-page="getResults" />
    </div>
  </section>
</template>
