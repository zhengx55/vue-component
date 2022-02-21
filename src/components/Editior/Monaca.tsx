import {
  defineComponent,
  ref,
  onMounted,
  watch,
  onBeforeUnmount,
  shallowReadonly,
  shallowRef,
} from 'vue';

import * as Monaco from 'monaco-editor';

import type { PropType, Ref } from 'vue';

import { createUseStyles } from 'vue-jss';

export default defineComponent({
  props: {
    code: {
      type: String as PropType<string>,
      required: true,
    },
    onChange: {
      type: Function as PropType<
        (value: string, event: Monaco.editor.IModelContentChangedEvent) => void
      >,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const editorRef = shallowRef();
    const containerRef = ref();
    let _subscription: Monaco.IDisposable | undefined;
    let __prevent_trigger_change_event = false;

    onMounted(() => {
      const editor = (editorRef.value = Monaco.editor.create(
        containerRef.value,
        {
          value: props.code,
          language: 'json',
          formatOnPaste: true,
          tabSize: 2,
          minimap: {
            enabled: false,
          },
        }
      ));

      _subscription = editor.onDidChangeModelContent((e) => {
        if (!__prevent_trigger_change_event) {
          props.onChange(editor.getValue(), e);
        }
      });
    });

    onBeforeUnmount(() => {
      if (_subscription) {
        _subscription.dispose();
      }
    });

    watch(
      () => props.code,
      (v) => {
        const editor = editorRef.value;
        const model = editor.getModel();
        if (v !== model.getValue()) {
        }
      }
    );
  },
});
