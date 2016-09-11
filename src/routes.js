export default{
  '*': {
    component: function (resolve) {
      require(['./components/error.vue'], resolve)
    }
  },
  '/welcom': {
    component: function (resolve) {
      require(['./components/welcom.vue'], resolve)
    }
  },
  '/home': {
    component: function (resolve) {
      require(['./components/hello.vue'], resolve)
    }
  }
}
