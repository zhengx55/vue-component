<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup="props">
import { ref, defineProps } from 'vue';
import { FiledPropsDefine, Schema } from '../types';

const props = defineProps(FiledPropsDefine);
const handleChange = (e: any) => {
  console.log(e);
  props.onChange(e.target.value);
};
</script>
