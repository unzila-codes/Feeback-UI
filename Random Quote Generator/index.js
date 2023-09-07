const btn=document.getElementById("btn");
const quote=document.getElementById("quote");
const author=document.getElementById("author");

const apiURL="https://api.quotable.io/random";

async function getQuote(){
    try {
        btn.innerText="Loading..."
        btn.disabled=true;
        btn.style.cursor="not-allowed";
        const response=await fetch (apiURL);
        const data=await response.json();
        quote.innerText=data.content;
        author.innerText="~"+data.author;
        btn.innerText="get a quote"
        btn.disabled=false;
        btn.style.cursor="pointer"
        
    } catch (error) {
        quote.innerText="An Error happened.Try Again later"
        author.innerText="An Error happened";
        console.log(error);
        btn.innerText="get a quote"
        btn.disabled=false;
        btn.style.cursor="pointer"
    }
}

btn.addEventListener("click", getQuote);
