import { computed, defineComponent } from 'vue';
import NumberField from './fields/NumberField';
import StringField from './fields/StringField';
import ObjectField from './fields/ObjectField';
import ArrayField from './fields/ArrayField';
import { SchemaTypes, FiledPropsDefine } from './types';
import { retrieveSchema } from './utils';

// assign schema render tasks to different schema components
export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    const retrieveSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props;
      return retrieveSchema(schema, rootSchema, value);
    });

    return () => {
      const { schema, rootSchema, value } = props;
      //TODD: if type is undefined, estimate type for user input
      const retrieveSchema = retrieveSchemaRef.value;
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
        case SchemaTypes.OBJECT: {
          Component = ObjectField;
          break;
        }
        case SchemaTypes.ARRAY: {
          Component = ArrayField;
          break;
        }
        default: {
          break;
        }
      }
      return <Component {...props} schema={retrieveSchema} />;
    };
  },
});
