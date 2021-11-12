let button = document.getElementById('haButton');
let displayQuote = document.getElementById('quotesHere');

button.addEventListener('click', async function () {
  let res = await axios.get('https://api.tronalddump.io/random/quote');

  getQuote(res.data.value);
});

let getQuote = (quote) => {
  let para = document.createElement('p');

  para.innerHTML = quote;
  displayQuote.appendChild(para);
  if (displayQuote.children.length > 1) {
    para.previousSibling.remove();
  }
};

/*
  I want to press the button have the first quote removed and the next quote come up. 
*/
