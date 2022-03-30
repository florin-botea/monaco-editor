<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <div class="d-flex justify-content-between w-100">
          <h3 class="px-2 semi-bold nowrap" style="overflow-x: auto;">/&nbsp;
          <template v-for="file in breadcrumbs">
            <span @click="show(file)">{{ file.name }}</span>&nbsp;/&nbsp;
          </template></h3>
          <button class="btn btn-secondary" @click="$emit('cancel')">&times;</button>
        </div>
      </div>
      <div class="modal-body scrollable">
        <div>
          <ul class="p-2">
            <li v-for="file in files" class="py-2 border-b" @click="show(file)">
              <i class="fa-solid fa-folder" v-if="file.type==1"></i>
              <i class="fa-solid fa-file" v-else></i>
              {{ file.name }}</li>
          </ul>
        </div>
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
    sharedPath: '/',
    files: [],
    current: {
      path: '/',
    },
  }),
  computed: {
    breadcrumbs() {
      if (this.current.path == '/' || this.current.path == this.sharedPath) {
        return [];
      }
      let parts = this.current.path.replace(this.sharedPath, '').split('/').filter(x => x);
      let breadcrumbs = [];
      let parentPath = this.sharedPath[this.sharedPath.length-1] == '/' ? this.sharedPath : this.sharedPath + '/';
      parts.forEach(p => {
        parentPath += '/' + p;
        breadcrumbs.push({
          name: p,
          path: parentPath,
          type: 1
        });
      });

      return breadcrumbs;
      let path = this.path.split('/');
      path.pop();
      path = path.join('/');
      return {
        path: path,
        type: 1
      };
    }
  },
  methods: {
    show(file) {
      if (file.type == 1) {
        this.fileSystem.index(file.path)
        .then(res => {
          this.current = file;
          this.files = res.data;
          this.sharedPath = res.sharedPath;
        })
      }
      else {
        this.fileSystem.show(file.path)
        .then(res => {
          this.$emit('fileOpen', res.data);
        })
      }
    }
  }
}
</script>