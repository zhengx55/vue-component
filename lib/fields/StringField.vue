<template>
  <input type="text" :value="value" @input="handleInputChange" />
</template>

<script lang="ts" setup="props">
import { ref } from 'vue';
import { FiledPropsDefine } from '../types';
import debounce from '../../utils/debounce';

// eslint-disable-next-line no-undef
const props = defineProps(FiledPropsDefine);

const handleChange = (e: any) => {
  props.onChange(e.target.value);
};

const handleInputChange = debounce(handleChange, 1000);
</script>
