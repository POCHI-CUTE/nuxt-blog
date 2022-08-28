<template>
  <div class="article">
    <h1 class="article__title">{{ content.title }}</h1>
    <p class="article__body">{{ content.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogArticle',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.article {
  height: 80px;
  width: 30em;
  text-align: start;
  margin: 0 auto;
  border-bottom: thick double #f1bc80;

  &__title {
    display: -webkit-box;
    font-size: 30px;
  }

  &__body {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 20px;
    color: rgb(155, 155, 155);
  }
}
</style>
