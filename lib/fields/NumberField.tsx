import { defineComponent } from 'vue';
import { FiledPropsDefine } from '../types';
import debounce from '../../utils/debounce';

export default defineComponent({
  name: 'NumberField',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const num = Number(target.value);
      if (Number.isNaN(num)) {
        props.onChange(undefined);
      } else {
        props.onChange(num);
      }
    };

    const handleDebounceChange = debounce(handleChange, 1000);

    return () => (
      <input
        type="number"
        value={props.value}
        onChange={handleDebounceChange}
      />
    );
  },
});
