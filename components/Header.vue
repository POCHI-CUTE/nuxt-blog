<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <nuxt-link class="home" to="/"
      ><img
        src="~/assets/image/boss.png"
        alt="icon"
        class="icon"
      />
    </nuxt-link>
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
  display: flex;
  align-items: center;
  margin-left: 2%;
}

.home:hover {
  color: blue;
}

.end {
  margin-right: 5%;
}

.home > .icon {
  width: 45px;
  height: 45px;
  &:hover {
    width: 50px;
    height: 50px;
  }
}
</style>
