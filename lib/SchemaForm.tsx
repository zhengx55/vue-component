import { defineComponent, PropType, provide } from 'vue';
import SchemaItem from './SchemaItem';
import { Schema } from './types';
import { SchemaFormContextKey } from './context';

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  name: 'SchemaForm',
  setup(props, { slots, emit, attrs }) {
    const handleChange = (v: any) => {
      props.onChange(v);
    };

    // use provide/Inject composition api to prevent circular dependencies
    const context: any = { SchemaItem };

    provide(SchemaFormContextKey, context);

    return () => {
      const { schema, value } = props;
      return (
        <SchemaItem
          schema={schema}
          rootSchema={schema}
          value={value}
          onChange={handleChange}
        />
      );
    };
  },
});
