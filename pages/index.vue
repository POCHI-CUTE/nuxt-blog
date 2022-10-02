<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1 class="blogbasecolor">ALL POST</h1>

    <div class="article--banner">
      <ul class="article--whole">
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/${content.id}`">
            <blog-article :content="content"></blog-article>
          </nuxt-link>
        </li>
      </ul>

      <banner></banner>
    </div>
    <pagenation :pager="pager" :current="Number(page)" />
  </div>
</template>

<script>
import blogArticle from '~/components/article.vue'
import Banner from '~/components/Banner.vue'
import pagenation from '~/components/pagenation.vue'

export default {
  name: 'TopPage',
  components: {
    blogArticle,
    pagenation,
    Banner,
  },
  async asyncData({ $axios, $config, params }) {
    const page = params.p || '1'
    const limit = 10
    const data = await $axios.$get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `/?limit=${limit}&offset=${(page - 1) * limit}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: {
          'X-MICROCMS-API-KEY': $config.apiKey,
        },
      }
    )
    return {
      ...data,
      page,
      pager: [
        ...Array(Math.ceil(data.totalCount / limit)).keys(),
      ],
    }
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

.article {
  &--whole {
    background-color: rgb(204, 247, 247);
    margin-left: 5%;
    margin-right: 5%;
    width: 90vw;
  }
  &--banner {
    display: flex;
  }
}
</style>

<style>
body {
  margin: 0;
}
</style>
