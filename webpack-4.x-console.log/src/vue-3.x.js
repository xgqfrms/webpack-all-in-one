import { ref, reactive } from 'vue';

export default {
    setup(props, context) {
        const val = ref('example');
        const obj = reactive({
            count: 0,
        });
        const evtHandler = () => {/*...*/}
        return {
            val,
            obj,
            evtHandler,
        };
    },
};
