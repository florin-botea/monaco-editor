<template>
  <div id="app">
    <MonacoEditor
      theme="vs-dark"
      language="javascript"
      :options="options"
      v-model="file.content"
    ></MonacoEditor>
  </div>
</template>
 
<script>
import MonacoEditor from 'monaco-editor-vue';
export default {
  name: "App",
  components: {
    MonacoEditor
  },
  props: {
    file: {
      type: Object,
    }
  },
  data() {
    return {
      options: {
        //Monaco Editor Options
      }
    }
  }
};
</script>