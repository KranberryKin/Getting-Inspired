import { sandBoxApi } from "../Services/AxiousSandboxApi.js";

async function _setQuote() {
  let res = await sandBoxApi.get('quotes')
  document.getElementById('quoteId').innerHTML = `
  <p>"${res.data.content}"</p>
  <div id="authorID" style="display: none">By : ${res.data.author}</div>
  `
  document.getElementById('quoteStyle').innerHTML = `
  #quoteId #authorId{
    display: none;
  }
  #quoteId:hover #authorID{
    display: block;
  }
  `
}

export class QuoteController{
  constructor(){
    this.setQuote()
  }

  setQuote() {
    _setQuote()
  }
}