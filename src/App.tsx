import { defineComponent, ref, Ref, reactive, watchEffect } from 'vue';
import { createUseStyles } from 'vue-jss';

export default defineComponent({
  setup() {
    const selectedRef: Ref<number> = ref(0);
  },
});
