<script setup lang="ts">
import axiosInstance from '@/lib/axios';
import { onMounted, ref } from 'vue';
import { TailwindPagination } from 'laravel-vue-pagination';
import {EyeIcon} from '@heroicons/vue/24/solid';
import type { Post } from '@/types';


type laravelData = {
  data: Post[];
  links: any;
  meta: any;
}

const laravelData = ref<laravelData>({
  data: [],
  links: {},
  meta: {},

});

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
                  <th scope="col" class="px-6 py-3 font-medium">Slug</th>
                  <th scope="col" class="px-6 py-3 font-medium">Published</th>
                  <th scope="col" class="px-6 py-3 font-medium">Created</th>
                  <th scope="col" class="px-6 py-3 font-medium">Edit/Delete</th>
              </tr>
          </thead>
          <tbody>
            <template v-if="laravelData.data?.length > 0">
              <tr v-for="post in laravelData.data" :key="post.id" class="bg-neutral-primary border-b border-default">
                  <td class="px-6 py-4">{{ post.id }}</td>
                  <td class="px-6 py-4">{{ post.title }}</td>
                  <td class="px-6 py-4">{{ post.slug }}</td>
                  <td class="px-6 py-4">{{ post.published }}</td>
                  <td class="px-6 py-4">{{ post.createdAt }}</td>
                  <td class="px-6 py-4">
                    <div class="flex space-x-4">
                      <RouterLink :to="{ name: 'postView', params: { id: post.id } }">
                        <EyeIcon class="w-5 h-5 text-blue-500 dark-text-blue-400 hover:text-blue-700" />
                      </RouterLink>
                    </div>
                  </td>
              </tr>

            </template>
          </tbody>
        </table>
        <TailwindPagination :data="laravelData" @pagination-change-page="getResults" />
    </div>
  </section>
</template>
