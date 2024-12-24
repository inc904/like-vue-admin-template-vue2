<template>
  <div class="app-wrapper">
    <!-- <div>123</div> -->
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <Navbar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  data() {
    return {

    }
  },

  mounted() {

  },

  methods: {

  }
}
</script>
<style>
@import '~@/styles/variables.scss';

.app-wrapper {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
