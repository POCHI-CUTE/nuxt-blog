<template>
  <div class="article">
    <h1 class="article__title">{{ content.title }}</h1>
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
  width: 80%;
  text-align: start;
  margin: 0 auto;
  border-bottom: thick double #02798b;

  &__title {
    height: 100%;
    color: black;
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
