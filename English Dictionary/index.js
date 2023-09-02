const input=document.getElementById("input");
const infotext=document.getElementById("info-text");
const meaningContainer= document.getElementById("meaning-container");
const title=document.getElementById("title");
const meaning=document.getElementById("meaning");
const audio=document.getElementById("audio");
async function fetchAPI(word){
    try {
        infotext.style.display="block";
        meaningContainer.style.display="none";  
        infotext.innerHTML=`Searching for a word ${word}`;
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result= await fetch(url).then((res)=>res.json());
        if(result.title){
            meaningContainer.style.display="block";
            infotext.style.display="none";
            title.innerText=word;
            meaning.innerText="N/A";
            audio.style.display="none"; 
        } else{
            infotext.style.display="none";   
            meaningContainer.style.display="block";
            audio.style.display="inline-flex"
            title.innerText=result[0].word;
            meaning.innerText=result[0].meanings[0].definitions[0].definition;
            audio.src=result[0].phonetics[0].audio;
            
      
        }
    } catch (error) {
        infotext.innerHTML="An error happened, Try again later";
        console.log(error);
    }
    
}

input.addEventListener("keyup", (event)=>{
    //console.log(event.target.value);//whatever u r typing it shows in console
    //console.log(event.key); //its showing in console whatever key u r pressing
    if(event.target.value && event.key === "Enter"){
        fetchAPI(event.target.value);
    }
})