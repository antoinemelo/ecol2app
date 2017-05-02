// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init Page Components
Vue.component('page-ica', {
  template: '#page-ica'
})
Vue.component('page-jrn', {
  template: '#page-jrn'
})
Vue.component('page-about', {
  template: '#page-about'
})
Vue.component('page-form', {
  template: '#page-form'
})
Vue.component('page-dynamic-routing', {
  template: '#page-dynamic-routing'
})

// Handle device ready event
// Note: You may want to check out the vue-cordova package on npm for cordova specific handling with vue - https://www.npmjs.com/package/vue-cordova
document.addEventListener('deviceready', () => {
  console.log("DEVICE IS READY!");    
}, false)

// Init App
new Vue({
  el: '#app',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: [
      {
        path: '/ica/',
        component: 'page-ica'
      },
      {
        path: '/jrn/',
        component: 'page-jrn'
      },
      {
        path: '/about/',
        component: 'page-about'
      },
      {
        path: '/form/',
        component: 'page-form'
      },
      {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: 'page-dynamic-routing'
      }
    ],
  }
});

var myApp = new Framework7({ modalPreloaderTitle: 'chargement en cours...', onAjaxStart: function (xhr) { myApp.showPreloader();}, onAjaxComplete: function (xhr) { myApp.hidePreloader();}, });

