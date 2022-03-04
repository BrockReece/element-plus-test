<template>
  <el-container class="cui-h-full">
    <el-aside class="cui-h-full cui-w-auto cui-hidden sm:cui-block">
      <NavMenu collapsable />
    </el-aside>

    <el-container>
      <el-header style="height: 56px;" class="cui-flex cui-items-center cui-px-2 sm:cui-px-4">
        <el-button @click="toggleSidebar" class="cui-mr-2 sm:cui-hidden" circle>
          <el-icon class="material-icons">
            menu
          </el-icon>
        </el-button>
        <el-input
          class="sm:cui-w-1/3 sm:cui-min-w-40 cui-w-2/3 cui-mx-2"
          placeholder="Search jobs, tasks and clients"
        >
          <template #prefix>
            <el-icon class="cui-h-full material-icons">
              search
            </el-icon>
          </template>
        </el-input>

        <div class="cui-flex-grow"></div>
        <el-dropdown :tabindex="1">
          <el-avatar :size="32" class="cui-bg-blue-500">M</el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item tabindex="1" @click="() => {}">
                Sign out
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main class="cui-bg-gray-100">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
    <Sidebar v-model="showSidebar" direction="ltr">
      <NavMenu full-width />
    </Sidebar>
  </el-container>
</template>

<script>
import { ref, watch } from 'vue'
import NavMenu from './components/NavMenu'
import Sidebar from './components/Sidebar'
import { useBreakpoints } from './compositions/viewport'

export default {
  name: 'App',

  components: { NavMenu, Sidebar },

  setup() {
    const showSidebar = ref(false)

    const breakpoints = useBreakpoints()

    watch(
      () => breakpoints.greater('sm').value,
      (val) => {
        if(val) {
          showSidebar.value = false
        }
      }
    )
  
    return {
      small: breakpoints.greater('sm'),
      showSidebar,
      toggleSidebar: () => {
        showSidebar.value = !showSidebar.value
      }
    }
  }
}
</script>

<style>
#app {
  @apply cui-h-full;
}
</style>
