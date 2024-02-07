const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweet = document.getElementById("tweet");

let realData="";
let quotesData ="";

const tweetNow = ()=>
{
   let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
   window.open(tweetPost);
};
const getNewQuotes = () =>{
    let rnum = Math.floor(Math.random()*10);
    quotesData =realData[rnum];
    quotes.innerHTML = `${quotesData.text}`;

    quotesData.author = null ?
    (author.innerText = "unknown")
  : (author.innerText = `${quotesData.author}`);
};
const getQuotes = async () =>
 {
    const api ="https://type.fit/api/quotes";

        try{
        let data = await fetch(api);
        realData= await data.json();
        getNewQuotes();
        //console.log(realData);
        //console.log(realData); 
        } catch(error){}
};
tweet.addEventListener('click',tweetNow);
newQ.addEventListener('click',getNewQuotes);
getQuotes();