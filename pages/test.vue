<template>
  <div>
    <div v-show="loading">
      <loadingVue />
    </div>
  </div>
</template>

<script>
import loadingVue from '~/components/loading.vue'
export default {
  name: 'TestView',
  components: { loadingVue },
  data() {
    return {
      loading: false,
    }
  },
  methods: {},
}
</script>
