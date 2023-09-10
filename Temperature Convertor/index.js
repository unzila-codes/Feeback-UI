const celsius=document.getElementById("celsius")
const fahrenheit=document.getElementById("fahrenheit")
const kelvin=document.getElementById("kelvin")

function calculateTemp(event){
    const currentVal = +event.target.value;
    switch (event.target.name) {
        case "celsius":
            kelvin.value = (currentVal + 273.32).toFixed(2);
            fahrenheit.value=(currentVal * 1.8 + 32).toFixed(2)
            break;
        case "fahrenheit":
            celsius.value=((currentVal-32)/1.8).toFixed(2)
            kelvin.value = ((currentVal - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsius.value=(currentVal - 273.32).toFixed(2)
            fahrenheit.value = ((currentVal - 273.32)* 1.8 + 32).toFixed(2);
            break;
        default:
            break;
    }
}