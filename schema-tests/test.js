const Ajv = require('ajv');
const ajv = new Ajv();

// ajv 校验json-schema
const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
  },
  required: ['foo'],
  additionalProperties: false,
};

// 自定义format
ajv.addFormat('test', (data) => {
  return data === 'haha';
});

// 自定义关键字

const data = 'haha';
const valid = ajv.validate(schema, data);
if (!valid) console.log(ajv.errors);
