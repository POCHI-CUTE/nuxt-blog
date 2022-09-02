<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="article">
    <div class="wholetitle">
      <h1 class="title">{{ data.title }}</h1>
      <div class="published">{{ data.publishedAt }}</div>
      <p class="category">{{ data.categories && data.categories.name }}</p>
    </div>
    <div v-html="$sanitize(parsedMd)"></div>
  </main>
</template>

<script>
import { marked } from 'marked'

export default {
  async asyncData({ $axios, params, $config }) {
    const data = await $axios.$get(`/${params.slug}`, {
      headers: {
        'X-MICROCMS-API-KEY': $config.apiKey,
      },
    })
    console.log(data)
    const parsedMd = marked(data.body ? data.body : '')
    return { data, parsedMd }
  },
}
</script>

<style lang="scss" scoped>
.article {
  margin-left: 5% !important;
  margin-right: 5% !important;
}
.title {
  margin-bottom: 0;
}
.published,
.category {
  font-size: small;
  font: italic small-caps bold cursive;
  margin-bottom: 0;
  margin-top: 0;
}
.wholetitle {
  border-bottom: 1px solid;
}
</style>
