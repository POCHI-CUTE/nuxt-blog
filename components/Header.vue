<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="justify-between bg-orange-300 flex">
    <h1 class="w-3/12 m-5">
      <a href="/">ブログ </a>
    </h1>
    <div class="w-5/12 m-5">
      <ul class="flex justify-end">
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

<style>
a[href='/'] {
  color: white;
}

a[href='/']:hover {
  color: blue;
}
</style>
