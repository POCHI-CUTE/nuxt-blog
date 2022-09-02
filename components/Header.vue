<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <h2 class="title">
      <nuxt-link class="home" to="/">ブログ </nuxt-link>
    </h2>
    <div class="end">
      <ul>
        <li>
          <a href="https://github.com/POCHI-CUTE"
            ><img src="~/assets/image/GitHub-Mark-32px.png"
          /></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: rgb(160, 146, 126);
  margin: 0;
  justify-content: space-between;
}

.home {
  color: white;
}

.home:hover {
  color: blue;
}

.title {
  font-weight: 900;
  margin-left: 5%;
}

.end {
  margin-right: 5%;
}
</style>
