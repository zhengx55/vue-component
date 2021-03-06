import { defineComponent } from 'vue';
import { FieldPropsDefine } from '../types';
import debounce from '../../utils/debounce';

export default defineComponent({
  name: 'StringFeild',
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      console.log(e);
      props.onChange(e.target.value);
    };
    const debounceHandleChange = debounce(handleChange, 500);
    return () => {
      return (
        <input
          type="text"
          value={props.value as any}
          onInput={debounceHandleChange}
        />
      );
    };
  },
});
