window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

var app = Vue.createApp({
    template: '<fileBrowser/>',
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
});

app.component('fileBrowser', {
    template: document.querySelector('#fileBrowser')
});

app.mount('#app');