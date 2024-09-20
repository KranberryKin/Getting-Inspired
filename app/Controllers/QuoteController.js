import { quotes } from "../Data/quotes.js"

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

async function _setQuote() {
  let res = getRandomQuote();
  document.getElementById('quoteId').innerHTML = `
  <div class="card-quote">
  <p>"${res.Quote}"</p>
  <div id="authorID" style="display: none">By : ${res.Author}</div>
  </div>
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