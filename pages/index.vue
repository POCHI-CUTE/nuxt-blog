<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1 class="blogbasecolor">ALL POST</h1>

    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <blog-article :content="content"></blog-article>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import blogArticle from '~/components/article.vue'

export default {
  name: 'TopPage',
  components: {
    blogArticle,
  },
  async asyncData({ $axios, $config }) {
    const data = await $axios.$get(
      // your-service-id部分は自分のサービスidに置き換えてください
      '/',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: {
          'X-MICROCMS-API-KEY': $config.apiKey,
        },
      }
    )
    return data
  },
}
</script>

<style lang="scss" scoped>
$basecolor: #00a816;

@mixin basearrange {
  display: flex;
  font-size: 40px;
  height: 60px;
  align-items: center;
  justify-content: center;
}

.blogbasecolor {
  @include basearrange();
}
</style>

<style>
body {
  margin: 0;
}
</style>
