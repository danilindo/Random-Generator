var quotes= [
  " 'Just get a job? Why don't I strap on my job helmet, squeeze down a job cannon, and fire off into jobland, where jobs grow on jobbies?!' -Charlie Kelly ",
  " 'Well, when I showed up this morning I didn't have a formal resume on me so I was sort of hoping the photograph of Mr. Jenner could represent the standard of excellece I'm hoping to bring to this position.' -Charlie Kelly'",
  " 'Hello fellow American. This you should vote me. I leave power. Good. Thank you. Thank you. If you vote me, I'm hot. Taxes, they'll be lower. Son. The Democratic vote for me is right thing to do Philadelphia. So do.' -Dennis Reynolds reading Charlie Kelly",
  " 'If animals have taught me anything, it's that you can easily die, very quickly under a bus and on the side of the road' - Charlie Kelly",
  " 'I'm familiar with carpentry and I don't know who my father is. So am I the messiah? I don't know, I could be. I'm not ruling it out.' -Charlie Kelly'"
];

var wiseWord = document.querySelector('.wise-word-button');
var clear = document.querySelector('.clear-wise-word-button');
var wise = document.querySelector('.wise');

wiseWord.addEventListener('click', appendQuote);
clear.addEventListener('click', removeQuote);

function appendQuote() {
  var random = Math.floor(Math.random() * quotes.length);
  var quote = quotes[random];
  wise.innerText = quote;
}

function removeQuote() {
  wise.innerText = "";
}
