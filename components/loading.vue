<template>
  <div v-if="loading">
    <div class="container">
      <div class="circle circle--1 color-pink"></div>
      <div class="circle circle--2 color-blue"></div>
      <div class="circle circle--3 color-pink"></div>
      <div class="circle circle--4 color-blue"></div>
      <div class="circle circle--5 color-pink"></div>
      <div class="circle circle--6 color-blue"></div>
      <div class="circle circle--7 color-pink"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadView',
  data: () => ({
    loading: false,
  }),
  mounted() {
    const circleAll = document.querySelectorAll('.circle')
    circleAll.forEach((elem, index) => {
      elem.classList.add('is-active')
      elem.addEventListener('animationend', () => {
        elem.classList.remove('is-active')
        setTimeout(() => {
          if (index === 0) {
            for (let i = 0; i < circleAll.length; i++) {
              circleAll[i].classList.add('is-active')
            }
          }
        })
      })
    })
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss">
@use 'sass:math';
$amount: 7;
$duration: 1s;
$colorPrimary: rgb(243, 134, 10);
$colorSecondary: rgb(238, 165, 106);

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 200px;
  aspect-ratio: 1;
  .circle {
    aspect-ratio: 1;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    &.color-pink {
      border-top: 5px solid $colorPrimary;
      border-right: 5px solid transparent;
      border-bottom: 5px solid $colorPrimary;
      border-left: 5px solid transparent;
    }

    &.color-blue {
      border-top: 5px solid $colorSecondary;
      border-right: 5px solid transparent;
      border-bottom: 5px solid $colorSecondary;
      border-left: 5px solid transparent;
    }
    @for $i from 1 through $amount {
      &--#{$i} {
        $durationDif: calc($duration - calc($i * 0.1s));
        width: percentage(
          math.div(calc(100 - calc(10 * $i)), 100)
        );
        &.is-active {
          animation: rotate $durationDif forwards;
        }
      }
    }
  }
}
@keyframes rotate {
  0%,
  20% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>
