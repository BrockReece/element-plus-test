<template>
    <div style="height: 200vh;">
        <h1 class="cui-text-xl cui-mb-2">{{ title }}</h1>
        <div class="cui-flex cui-items-center">
            <el-date-picker
                v-model="date"
                type="daterange"
            />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
   name: 'DashboardPage',

    props: {
        title: {
            type: String,
            required: true
        }
    },

    setup() {
        const date = ref()

        return {
            date
        }
    }
}
</script>
