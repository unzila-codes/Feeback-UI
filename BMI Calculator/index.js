const btn= document.getElementById("btn");
const output=document.getElementById("output");
const weightCondition=document.getElementById("weight-condition")

function CalculateBMI(event){
    const height=document.getElementById("height").value / 100;
    const weight=document.getElementById("weight").value;
    const bmi = weight/(height*height);
    output.value=bmi;
    if(bmi<18.5){
        weightCondition.innerHTML="Under Weight";
    }else if (bmi >=18.5 && bmi <= 24.9){
        weightCondition.innerHTML="Normal Weight";
    }
    else if (bmi >=25 && bmi <= 29.9){
        weightCondition.innerHTML="Over Weight";
    }else if(bmi >=30){
        weightCondition.innerHTML="Obesity";
    }
    
}

btn.addEventListener("click", CalculateBMI);