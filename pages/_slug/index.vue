<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post">{{ body }}</div>
    <p class="category">{{ categories && categories.name }}</p>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params, $config }) {
    const data = await $axios.$get(`/${params.slug}`, {
      headers: {
        'X-MICROCMS-API-KEY': $config.apiKey,
      },
    })
    return data
  },
}
</script>
