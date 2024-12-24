<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './logo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.scss'
export default {
  name: 'SideBar',

  components: {
    Logo,
    SidebarItem
  },

  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      // console.log('this.$router.options.routes', this.$router.options.routes)
      console.log('routesNoHidden', this.$router.options.routes.filter(item => !item.hidden))
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },

  mounted() {
  },

  methods: {

  }
}
</script>
