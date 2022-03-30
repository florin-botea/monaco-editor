<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <div class="d-flex justify-content-between w-100">
          <h3 class="px-2 semi-bold">{{ current.path }}</h3>
          <button class="btn btn-secondary">&times;</button>
        </div>
      </div>
      <div class="modal-body">
        <ul class="p-2">
          <li v-for="file in files" class="py-2 border-b" @click="show(file)">
            <i class="fa-solid fa-folder" v-if="file.type==1"></i>
            <i class="fa-solid fa-file" v-else></i>
             {{ file.name }}</li>
        </ul>
      </div>
      <div class="modal-footer">
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: { type: String, default: '/' },
  },
  created() {
    let name = '/';
    if (this.path != '/') {
      name = this.path.explode('/');
      name = name[name.length -1];
    }
    this.show({
      path: this.path,
      name: name,
      type: 1,
    });
  },
  data: () => ({
    files: [],
    current: {
      path: '/',
    },
  }),
  // computed: {
  //   parent() {
  //     if (this.current.path == '/') {
  //       return null;
  //     }
  //     let path = this.path.explode('/');
  //     path.pop();
  //     path = path.join('/');
  //     return {
  //       path: path,
  //       type: 1
  //     };
  //   }
  // },
  methods: {
    show(file) {
      if (file.type == 1) {
        this.fileSystem.index(file)
        .then(res => {
          this.current = file;
          this.files = res.data;
        })
      }
      else {
        this.fileSystem.show(file)
        .then(res => {
          this.$emit('fileOpen', res.data);
        })
      }
    }
  }
}
</script>