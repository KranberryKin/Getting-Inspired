import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandBoxApi } from "../Services/AxiousSandboxApi.js"

async function _setBackgroundImg() {
  let res = await sandBoxApi.get('images')
  // @ts-ignore
  ProxyState.image = new Image(res.data)
  ProxyState.imageUrl = ProxyState.image.url
  document.getElementById('backgroundImgStyle').innerHTML = `
  body {
    background-image: url('${ProxyState.imageUrl}');
    background-repeat: no-repeat;
    background-size: cover;
  }
  `
}

export class BackgroundController{
  constructor(){
    console.log('Hello From Background Controller');
    this.setBackgroundImg()
  }
  setBackgroundImg() {
    _setBackgroundImg()
  }
}