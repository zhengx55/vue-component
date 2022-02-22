import { defineComponent } from 'vue';
import { FiledPropsDefine, Schema } from '../types';
import { useVJSFContext } from '../context';

export default defineComponent({
  name: 'ArrayField',
  props: FiledPropsDefine,
  setup(props) {
    const context = useVJSFContext();

    const handleMultiTypeChange = (v: any, index: number) => {
      const { value } = props;
      const arr = Array.isArray(value) ? value : [];
      arr[index] = v;
      props.onChange(arr);
    };
    return () => {
      const { schema, rootSchema, value } = props;
      const SchemaItem = context.SchemaItem;
      const isMultiType = Array.isArray(schema.items);

      if (isMultiType) {
        const items: Schema[] = schema.items as any;

        const arr = Array.isArray(value) ? value : [];
        return items.map((s: Schema, index: number) => {
          return (
            <SchemaItem
              schema={s}
              key={index}
              value={arr[index]}
              rootSchema={rootSchema}
              onChange={(v: any) => handleMultiTypeChange(v, index)}
            />
          );
        });
      }
      return <div>hello</div>;
    };
  },
});
