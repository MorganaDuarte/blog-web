<template>
  <div>
    <app-header></app-header>
    <router-view class="container"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    'app-header': Header
  }
}
</script>

<style>

</style>
