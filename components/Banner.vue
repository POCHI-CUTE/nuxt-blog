<template>
  <div class="banner--frame">
    <div class="">
      <img
        class="banner--icon"
        src="~/assets/image/boss.png"
        alt="icon"
      />
    </div>
    <div class="banner--name">CURRY_RICE</div>
  </div>
</template>

<script>
export default {
  name: 'IntroBanner',
}
</script>

<style lang="scss" scoped>
.banner {
  &--frame {
    background-color: rgb(204, 247, 247);
    width: 25vw;
    height: 50vh;
    margin-right: 3vw;
    border-radius: 20px;
    border: solid #02798b;
    text-align: center;
  }
  &--icon {
    margin-top: 5vh;
    margin-left: 38%;
    margin-right: 45%;
    width: 5em;
    height: 5em;
  }
  &--name {
    font-family: serif;
  }
}
</style>
