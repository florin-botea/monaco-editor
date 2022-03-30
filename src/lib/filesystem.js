// android system mock for desktop
let mock = !window.fileSystem;

if (!window.fileSystem) {
  window.fileSystem = {
    index(path) {
      return JSON.parse('{"success":true,"sharedPath":"\/storage\/emulated\/0","data":[{"path":"\/storage\/emulated\/0\/tempdat","type":1,"name":"tempdat","isEmpty":false},{"path":"\/storage\/emulated\/0\/paw","type":1,"name":"paw","isEmpty":false},{"path":"\/storage\/emulated\/0\/ksweb.js","type":0,"name":"ksweb.js","isEmpty":false},{"path":"\/storage\/emulated\/0\/MIUI","type":1,"name":"MIUI","isEmpty":false},{"path":"\/storage\/emulated\/0\/Ringtones","type":1,"name":"Ringtones","isEmpty":false},{"path":"\/storage\/emulated\/0\/Alarms","type":1,"name":"Alarms","isEmpty":true},{"path":"\/storage\/emulated\/0\/Notifications","type":1,"name":"Notifications","isEmpty":true},{"path":"\/storage\/emulated\/0\/Download","type":1,"name":"Download","isEmpty":false},{"path":"\/storage\/emulated\/0\/.aptoide","type":1,"name":".aptoide","isEmpty":false},{"path":"\/storage\/emulated\/0\/did","type":0,"name":"did","isEmpty":true},{"path":"\/storage\/emulated\/0\/Recordings","type":1,"name":"Recordings","isEmpty":true},{"path":"\/storage\/emulated\/0\/Documents","type":1,"name":"Documents","isEmpty":true},{"path":"\/storage\/emulated\/0\/htdocs","type":1,"name":"htdocs","isEmpty":false},{"path":"\/storage\/emulated\/0\/Android","type":1,"name":"Android","isEmpty":false},{"path":"\/storage\/emulated\/0\/Movies","type":1,"name":"Movies","isEmpty":false},{"path":"\/storage\/emulated\/0\/.tmpsu","type":0,"name":".tmpsu","isEmpty":true},{"path":"\/storage\/emulated\/0\/dctp","type":0,"name":"dctp","isEmpty":true},{"path":"\/storage\/emulated\/0\/.backups","type":1,"name":".backups","isEmpty":false},{"path":"\/storage\/emulated\/0\/DCIM","type":1,"name":"DCIM","isEmpty":false},{"path":"\/storage\/emulated\/0\/downloaded_rom","type":1,"name":"downloaded_rom","isEmpty":true},{"path":"\/storage\/emulated\/0\/Music","type":1,"name":"Music","isEmpty":false},{"path":"\/storage\/emulated\/0\/dev","type":1,"name":"dev","isEmpty":false},{"path":"\/storage\/emulated\/0\/Audiobooks","type":1,"name":"Audiobooks","isEmpty":true},{"path":"\/storage\/emulated\/0\/downloaded_apex","type":1,"name":"downloaded_apex","isEmpty":true},{"path":"\/storage\/emulated\/0\/.fe_tmp","type":0,"name":".fe_tmp","isEmpty":true},{"path":"\/storage\/emulated\/0\/kickwebinfo","type":1,"name":"kickwebinfo","isEmpty":false},{"path":"\/storage\/emulated\/0\/com.xiaomi.bluetooth","type":1,"name":"com.xiaomi.bluetooth","isEmpty":false},{"path":"\/storage\/emulated\/0\/Pictures","type":1,"name":"Pictures","isEmpty":false},{"path":"\/storage\/emulated\/0\/MiVideoDownload","type":1,"name":"MiVideoDownload","isEmpty":true}]}')
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
