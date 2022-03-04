<template>
    <el-menu :collapse="collapsable ? collapseMenu : false" class="nav-menu" :class="{ 'nav-menu--full-width': fullWidth }">
        <el-menu-item route="/dashboard/work">
            <img style="height: 23px; width: 23px;" src="../assets/logo.png" />
        </el-menu-item>
        <router-link to="/dashboard/work" custom v-slot="{ navigate, isActive }">
            <el-menu-item index="1" :class="{ 'is-active': isActive }" @click="navigate">
            <el-icon class="material-icons">
                dashboard
            </el-icon>
            <template #title>
                Dashboard
            </template>
            </el-menu-item>
        </router-link>
        <el-sub-menu index="2">
            <template #title>
            <el-icon class="material-icons">
                assessment
            </el-icon>
            <span>Work Management</span>
            </template>
            <router-link to="/work" custom v-slot="{ isActive, navigate }">
            <el-menu-item index="3" :class="{ 'is-active': isActive }" @click="navigate">
                My work
            </el-menu-item>
            </router-link>
            <router-link to="/work/completed" custom v-slot="{ isActive, navigate }">
            <el-menu-item index="4" :class="{ 'is-active': isActive }" @click="navigate">
                Completed tasks
            </el-menu-item>
            </router-link>
        </el-sub-menu>
        <el-tooltip
            v-if="collapsable"
            placement="right"
            :content="collapseMenu ? 'Expand menu' : 'Collapse menu'"
        >
            <el-menu-item index="5" class="expand" :class="{ 'is-active': false }" @click.capture="toggleCollapse">
                <el-icon class="material-icons">
                {{
                    collapseMenu ? 'chevron_right' : 'chevron_left'
                }}
                </el-icon>
            </el-menu-item>
        </el-tooltip>
    </el-menu>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'NavMenu',
    props: {
        collapsable: {
            type: Boolean,
            default: false
        },
        fullWidth: {
            type: Boolean,
            default: false
        }
    },
    setup() {
            const collapseMenu = ref(true)
            return {
                collapseMenu,
                toggleCollapse: () => {
                    collapseMenu.value = !collapseMenu.value
                }
            }
    }
}
</script>

<style lang="scss" scoped>
.expand.is-active {
    color: inherit;
}
.nav-menu {
    @apply cui-h-full;

    &:not(.nav-menu--full-width) {
        :deep(.el-icon.el-sub-menu__icon-arrow) {
            position: initial;
            margin-top: 1px;
            @apply cui-ml-6;
        }
    }
}
</style>
