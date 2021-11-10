let button = document.getElementById('haButton');
let displayQuote = document.getElementById('quotesHere');

button.addEventListener('click', async function () {
  let res = await axios.get('https://api.tronalddump.io/random/quote');
  getQuote(res.data.value);
});

let getQuote = (quote) => {
  let para = document.createElement('p');
  para.textContent = quote;
  displayQuote.appendChild(para);
};
