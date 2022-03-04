<template>
    <el-drawer
        v-model="localValue"
        custom-class="sidebar"
        :with-header="false"
        v-bind="$attrs"
        size="inherit"
    >
        <slot />
    </el-drawer>
</template>

<script>
import { computed } from 'vue'

export default {
    name: 'SidebarComponent',

    props: {
        value: {
            type: Boolean
        }
    },

    setup(props, { emit }) {
        const localValue = computed({
            get: () => props.value,
            set: (val) => {
                emit('input', val)
            }
        })

        return {
            localValue
        }
    }
}
</script>

<style>
.sidebar.el-drawer {
    --el-drawer-padding-primary: 0px;
    @apply !cui-w-3/4;
}
</style>