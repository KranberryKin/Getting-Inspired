import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Weather').Weather} */
  // @ts-ignore
  weather = {
    temp: 0,
    cover: '',
    icon:'',
    city: '',
    country: ''
  }
  todo = []
  
  User = 'quinn'
  apiUrl = 'https://bcw-sandbox.herokuapp.com/api'
  /** @type {import('./Models/Image').Image} */
  image = {
    url:'',
    author:''
  }
  imageUrl = ''
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
