import { createApp, defineComponent, h } from 'vue';
import App from './App';

// const App = defineComponent({
//   render() {
//     // h 函数使用简例
//     // name, attr, child attr -> VNODE
//     return h('div', { id: 'app' }, [
//       h('img', { alt: 'Vue logo', src: './assets/logo.png' }),
//     ]);
//   },
// });

// SFC 开发模式

createApp(App).mount('#app');
