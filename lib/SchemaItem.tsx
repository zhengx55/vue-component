import { defineComponent, PropType } from 'vue';
import NumberField from './fields/NumberField';
import StringField from './fields/StringField.vue';
import { Schema, SchemaTypes, FiledPropsDefine } from './types';

// assign schema render tasks to different schema components
export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    return () => {
      const { schema } = props;

      //TODD: if type is undefined, estimate type for user input

      const type = schema.type;
      let Component: any;
      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField;
          break;
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField;
          break;
        }
        default: {
          break;
        }
      }
      return <Component {...props} />;
    };
  },
});
