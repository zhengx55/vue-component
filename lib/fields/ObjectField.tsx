import { defineComponent } from 'vue';
import { useVJSFContext } from '../context';

import { FieldPropsDefine } from '../types';
import { isObject } from '../utils';

// const SchemaItemHelper = defineComponent({ props: FieldPropsDefine });
// type SchemaItemDefine = typeof SchemaItemHelper;

export default defineComponent({
  name: 'ObjectField',
  props: FieldPropsDefine,
  setup(props) {
    const context = useVJSFContext();

    const handleObjectFieldChange = (key: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {};
      if (v === undefined) {
        delete value[key];
      } else {
        value[key] = v;
      }
      props.onChange(value);
    };

    return () => {
      const { schema, rootSchema, value } = props;
      const { SchemaItem } = context;
      const properties = schema.properties || {};
      const currentValue: any = isObject(value) ? value : {};
      return Object.keys(properties).map((k: string, index: number) => {
        return (
          <SchemaItem
            schema={properties[k]}
            rootSchema={rootSchema}
            value={currentValue[k]}
            key={index}
            onChange={(v: any) => handleObjectFieldChange(k, v)}
          />
        );
      });
    };
  },
});
