import { defineComponent } from 'vue';
import { FieldPropsDefine } from '../types';
import debounce from '../../utils/debounce';

export default defineComponent({
  name: 'NumberField',
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      const value = e.target.value;
      const num = Number(value);
      if (Number.isNaN(num)) {
        props.onChange(undefined);
      } else {
        props.onChange(num);
      }
    };

    const handleDebounceChange = debounce(handleChange, 500);

    return () => {
      const { value } = props;
      return <input type="text" value={value} onInput={handleDebounceChange} />;
    };
  },
});
