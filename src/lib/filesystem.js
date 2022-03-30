// android system mock for desktop
let mock = !window.fileSystem;

if (!window.fileSystem) {
  window.fileSystem = {
    index(path) {
      return {
        success: true,
        data: [
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/bar', type: 1, name: 'bar' },
          { path: 'foo/baz.js', type: 0, name: 'baz.js' },
        ]
      }
    },
    show(path) {
      return {
        success: true,
        data: 'foo bar baz'
      }
    }
  }
}


export default {
  index(path) {
    return this._call('index', path);
  },
  show(path) {
    return this._call('show', path);
  },
  _call(m, args) {
    return new Promise((resolve, reject) => {
      try {
        let res = window.fileSystem[m](args);
        if (mock) {
          new Promise(r => setTimeout(() => resolve(res), 1000));
          resolve(res)
        } else {
          resolve(JSON.parse(res));
        }
      } catch (e) {
        reject(e);
      }
    });
  }
}
