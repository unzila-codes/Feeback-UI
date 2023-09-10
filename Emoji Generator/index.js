const btn=document.getElementById("btn");
const emojiName=document.getElementById("emoji-name");
const apiURL="https://emoji-api.com/emojis?access_key=f96d103bfe20d1c7666c584dea41aa91cfeea591";

const emoji=[];
async function getEmoji(){
    let response =await fetch (apiURL);
    data=await response.json();
    // console.log(data);
    for (let i=0; i<1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
    
}

getEmoji();
console.log(emoji);

btn.addEventListener("click",()=>{
    const randomNumber= Math.floor(Math.random()*emoji.length);
    btn.innerText=emoji[randomNumber].emojiName;
    emojiName.innerText=emoji[randomNumber].emojiCode ;
});
