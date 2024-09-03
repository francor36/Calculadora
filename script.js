const display= document.querySelector("#display");
const botones= document.querySelectorAll("button");

botones.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(btn.id === "="){
            display.value = eval(display.value);
        } else if (btn.id === "AC"){
            display.value = "";
        } else {
            display.value += btn.id
        }
    })
})