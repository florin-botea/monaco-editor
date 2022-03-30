<template>
  <div id="app-wrapper" :class="appTheme">
    <header class="header">
      <button class="btn btn-secondary" @click="fileBrowser=true">+</button>
    </header>

    <FileBrowser v-if="fileBrowser" :path="fileBrowserPath" @fileOpen="onFileOpen" @projectOpen="onProjectOpen" />
  </div>
</template>

<script>
import FileBrowser from './components/FileBrowser';

export default {
  components: { FileBrowser },
  data: () => ({
    appTheme: 'theme-default',
    fileBrowser: 1,
    fileBrowserPath: '/',
  }),
  methods: {
    onFileOpen(file) {
      alert(file.content);
    },
    onProjectOpen() {

    },
  }
}
</script>