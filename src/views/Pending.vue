<template>
    <el-container class="md:cui-w-2/3">
        <el-main>
            <el-card shadow="never">
                <div class="cui-flex cui-mb-5 cui-items-center">
                    <h3 class="cui-text-lg cui-font-semibold cui-flex-grow">
                        1. Upload your ID
                    </h3>
                    <div>
                        <el-icon class="material-icons" size="large">
                            check
                        </el-icon>
                    </div>
                </div>
                <p class="cui-text-gray-500">
                    We need to verify who you are. Please upload a valid form of ID (Driving license, Passport or National ID card)
                </p>
                <div class="cui-flex cui-pt-5">
                    <div class="cui-flex cui-flex-grow cui-items-center">
                        <img class="cui-rounded cui-h-11 cui-w-11 cui-bg-gray-300 cui-mr-3" src="https://i.pravatar.cc/300"  />
                        <span class="cui-text-xs cui-text-gray-500">john-passport-pick-2022.jpg</span>
                        <el-button class="cui-mx-1" type="text" size="small">Remove</el-button>
                    </div>
                    <el-button type="primary" size="large">
                        UPLOAD
                        <el-icon class="el-icon--right material-icons" size="large">
                            file_upload
                        </el-icon>
                    </el-button>
                </div>
            </el-card>

            <el-card class="cui-my-3" shadow="never">
                <template #header>
                    <div class="cui-flex cui-items-center">
                        <h3 class="cui-flex-grow cui-text-xl cui-font-semibold">Select your areas of expertise</h3>
                        <el-button circle>
                            <el-icon class="material-icons">
                                close
                            </el-icon>
                        </el-button>
                    </div>
                </template>
                    <div class="cui-mb-3">
                        <el-input size="large" v-model="search" placeholder="Search" clearable>
                            <template #prefix>
                                <el-icon class="cui-h-full cui-mr-2 material-icons" size="large">
                                    search
                                </el-icon>
                            </template>
                        </el-input>
                    </div>
                    <div style="max-height: 500px;" class="cui-overflow-auto cui-mb-3">
                        <el-tree
                            ref="list"
                            :filter-node-method="filterVertical"
                            :expand-on-click-node="false"
                            check-on-click-node
                            :indent="0"
                            @check="handleCheck"
                            :data="data"
                            node-key="id"
                            default-expand-all
                            class="list"
                        >
                            <template #default="{ data, node }">
                                <div class="cui-px-2 cui-py-2 cui-flex cui-w-full cui-items-center" :class="{ 'cui-mt-2': data.children }">
                                    <p class="cui-flex-grow" :class="{ 'cui-font-semibold': data.children }">
                                        {{ data.label }}
                                        <span v-if="data.children && !node.indeterminate">
                                            (all)
                                        </span>
                                    </p>
                                    <el-checkbox name="data" v-model="node.checked" :indeterminate="node.indeterminate" size="large" @click.prevent />
                                </div>
                            </template>
                        </el-tree>
                    </div>
                <el-tag class="cui-mr-2 cui-mb-2" v-for="(skill, index) in selected" :key="index" size="large" closable @close="removeVertical(skill)">
                    {{ skill.label }}
                </el-tag>
            </el-card>

             <el-card class="cui-my-3" shadow="never">
                <div class="cui-flex">
                    <div class="cui-flex-grow">
                        <el-switch
                            class="cui-mr-2"
                            v-model="switchData.defaultOn"
                            active-text="On"
                            inactive-text="Off"
                        />
                    </div>
                    <div class="cui-flex-grow cui-items-center">
                        <el-switch
                            class="cui-mr-2"
                            v-model="switchData.defaultOff"
                            active-text="On"
                            inactive-text="Off"
                        />
                    </div>
                    <div class="cui-flex-grow cui-items-center">
                        <el-switch
                            class="cui-mr-2"
                            v-model="switchData.defaultOff"
                            active-text="Show hidden items"
                        />
                    </div>
                </div>
            </el-card>

            <el-card class="cui-my-3" shadow="never">
                <div class="cui-flex cui-flex-col">
                    <el-radio-group v-model="radioData.radio">
                        <div class="cui-flex cui-flex-col"> 
                            <el-radio :label="1">
                                Bender Rodríguez
                            </el-radio>
                            <el-radio :label="2">
                                Turanga Leela
                            </el-radio>
                            <el-radio :label="3">
                                Philip J. Fry
                            </el-radio>
                        </div>
                    </el-radio-group>
                    <el-divider />
                    <el-radio-group v-model="radioData.radio">
                        <el-radio :label="1">
                            Bender Rodríguez
                        </el-radio>
                        <el-radio :label="2">
                            Turanga Leela
                        </el-radio>
                        <el-radio :label="3">
                            Philip J. Fry
                        </el-radio>
                    </el-radio-group>
                    <el-divider />
                    <el-radio-group v-model="radioData.radio">
                        <el-radio :label="1" border>
                            Bender Rodríguez
                        </el-radio>
                        <el-radio :label="2" border>
                            Turanga Leela
                        </el-radio>
                        <el-radio :label="3" border>
                            Philip J. Fry
                        </el-radio>
                    </el-radio-group>
                    <el-divider />
                    <el-radio-group v-model="radioData.radio">
                        <el-radio-button :label="1">
                            Bender Rodríguez
                        </el-radio-button>
                        <el-radio-button :label="2">
                            Turanga Leela
                        </el-radio-button>
                        <el-radio-button :label="3">
                            Philip J. Fry
                        </el-radio-button>
                    </el-radio-group>
                </div>
            </el-card>


            <el-card class="cui-my-3" shadow="never">
                <div class="grow-flex cui-flex-col">
                    <div class="cui-w-full cui-my-3">
                        <el-date-picker v-model="dateData.dateRange" start-placeholder="Start date" end-placeholder="End date" type="daterange" />
                    </div>
                    <el-divider />
                    <div class="cui-w-full cui-my-3">
                        <el-date-picker v-model="dateData.date" placeholder="Select date" />
                    </div>
                    <el-divider />
                    <div class="cui-w-full cui-my-3">
                        <el-date-picker v-model="dateData.dateTime" placeholder="Select date time" type="datetime" />
                    </div>
                    <el-divider />
                    <div class="cui-w-full cui-my-3">
                        <el-time-picker v-model="dateData.time" placeholder="Select time" />
                    </div>
                </div>
            </el-card>
        </el-main>
    </el-container>
</template>

<script>
import { ref, watch, reactive } from 'vue'

export default {
    name: 'PendingDashboard',

    setup() {
        const search = ref('')
        const list = ref()
        const selected = ref([])
        const switchData = reactive({
            defaultOn: true,
            defaultOff: false
        })
        const dateData = reactive({
            date: null,
            dateRange: null,
            dateTime: null,
            time: null
        })

        const radioData = reactive({
            radio: null
        })

        const handleCheck = (_node, data) => {
            selected.value = data.checkedNodes.filter((node) => !node.children?.length)
        }

        const removeVertical = (vertical) => {
            selected.value = selected.value.filter((selectedNode) => (
                selectedNode.id !== vertical.id
            ))
            list.value?.setChecked(vertical.id, false)
        }

        watch(search, (val) => {
            list.value?.filter(val)
        })

        const filterVertical = (search, node) => {
            return node.label.toLowerCase().indexOf(search.toLowerCase()) !== -1
        }

        const data = [
                    {
                        id: '1',
                        label: 'Creative & design',
                        children: [
                            {
                                id: '2',
                                label: 'Asset design'
                            },
                            {
                                id: '3',
                                label: 'Visual design'
                            },
                            {
                                id: '4',
                                label: 'Web design'
                            }
                        ]
                    },
                    {
                        id: '5',
                        label: 'Data',
                        children: [
                            {
                                id: '6',
                                label: 'Analytics'
                            },
                            {
                                id: '7',
                                label: 'Data engineering'
                            },
                            {
                                id: '8',
                                label: 'Data science'
                            }
                        ]
                    },
                    {
                        id: '9',
                        label: 'E-commerce',
                        children: [
                            {
                                id: '10',
                                label: 'Amazon'
                            },
                            {
                                id: '11',
                                label: 'Shopify'
                            },
                            {
                                id: '12',
                                label: 'E-commerce other'
                            }
                        ]
                    }
                ]

        return {
            search,
            list,
            data,
            selected,
            handleCheck,
            removeVertical,
            filterVertical,
            switchData,
            dateData,
            radioData
        }
    }
}
</script>

<style scoped>
:deep(.el-tree-node__content) {
    @apply cui-h-auto;
}
:deep(.el-tree-node__expand-icon) {
    @apply cui-hidden;
}

</style>