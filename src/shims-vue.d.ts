/* eslint-disable */
declare module "vue3-clipboard";
declare module "@sipec/vue3-tags-input";
declare module "monaco-editor-vue3";
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}