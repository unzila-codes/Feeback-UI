const ratings=document.querySelectorAll(".rating");
const btn= document.getElementById("btn");
const container=document.getElementById("container");
let selectRating="";

ratings.forEach((ratingEle) => {
    ratingEle.addEventListener("click",(event) => {
        // console.log(event.target.innerText || event.target.parentNode.innerText);
        removeActive();
        selectRating=event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});

btn.addEventListener("click", ()=>{
    if(selectRating!==""){
        container.innerHTML=`<strong>Thank you</strong>
        <br><br>
        <strong>Feedback: ${selectRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>`
        
    }
})

function removeActive(){
    ratings.forEach((ratingEle)=>{
        ratingEle.classList.remove("active");
    });
}
