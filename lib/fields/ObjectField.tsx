import { defineComponent, inject } from 'vue';

import { FiledPropsDefine } from '../types';

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup() {
    const context = inject('item-component');
    return () => {
      return null;
    };
  },
});
