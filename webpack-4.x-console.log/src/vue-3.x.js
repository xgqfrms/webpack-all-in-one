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
    // setup() {
    //     const a = ref(1);
    //     const b = computed(() => a.value * 2);
    //     return {
    //         a,
    //         b,
    //     };
    // },
    // setup() {
    //     const site = ref('xgqfrms.xyz');
    //     watchEffect(() => {
    //         console.log(site.value);
    //     });
    //     return {
    //         site,
    //     };
    // },
    // template
    // <div ref='example'> Example Div </div>
    // script
    // setup() {
    //     const example = ref('xgqfrms.xyz');
    //     // wait for DOM to mount
    //     onMounted(() => {
    //         console.log(example.value);
    //     });
    //     return {
    //         example,
    //     };
    // },
};
