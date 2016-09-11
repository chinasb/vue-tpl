import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
const router = new Router()

router.map(routes)
router.alias({
  '/': '/welcom'
})
router.start(Vue.extend({
  components: {
    app: App
  }
}), 'body')
