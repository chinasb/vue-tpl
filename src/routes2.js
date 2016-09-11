import Welcom from './components/welcom'
import Home from './components/hello'
import Error from './components/error'
export default{
  '*': {
    component: Error
  },
  '/welcom': {
    component: Welcom
  },
  '/home': {
    component: Home
  }
}
