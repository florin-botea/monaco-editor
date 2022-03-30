<template>
  <div id="app-wrapper" :class="appTheme">
    <header class="header">
      <button class="btn btn-secondary" @click="fileBrowser=true">+</button>
    </header>

    <div id="app-main">
      <ul v-if="openedFiles.length" class="opened d-flex bg-secondary p-1" style="overflow-y: auto">
        <li v-for="file in openedFiles" class="px-1 ml-1 rounded nowrap btn-primary" :class="{active: activeFile && activeFile.path == file.path}">{{ file.name }} <span class="close" @click="close(file)">&times;</span></li>
      </ul>
      <div class="editor">
        <Editor :diffEditor="true" original="..." :file="this.activeFile" />
      </div>
    </div>

    <FileBrowser v-if="fileBrowser" :path="fileBrowserPath" @fileOpen="onFileOpen" @projectOpen="onProjectOpen" @cancel="fileBrowser=false" />
  </div>
</template>

<script>
import FileBrowser from './components/FileBrowser';
import Editor from './components/Editor';

export default {
  components: { FileBrowser, Editor },
  data: () => ({
    appTheme: 'theme-default',
    fileBrowser: false,
    fileBrowserPath: '/',
    openedFiles: [],
    activeFile: {}
  }),
  methods: {
    onFileOpen(file) {
      this.openedFiles.push(file);
      this.activeFile = file;
    },
    onProjectOpen() {

    },
    close(file) {

    }
  }
}
</script>