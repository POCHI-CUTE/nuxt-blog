<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post">{{ body }}</div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = await $axios.$get(`/${params.slug}`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.API_SECRET_KEY,
      },
    })
    return data
  },
}
</script>
