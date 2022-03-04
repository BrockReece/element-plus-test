import { useBreakpoints as useVueBreakpoints, breakpointsTailwind } from '@vueuse/core'

export const useBreakpoints = () => {
    return useVueBreakpoints(breakpointsTailwind)
}
