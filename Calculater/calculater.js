let screen = document.getElementById("inputarea")
let buttons = document.querySelectorAll("button")
let screenValue= "";
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;
        if(buttonText == "X"){
            buttonText = "*";
            screen.value += buttonText
        }
        
        else if(buttonText == "C"){
            screen.value = screenValue
        }

        else if(buttonText == "="){
            screen.value = eval(screen.value)
            screen.value == screenValue;
        }
        else{
            screen.value += buttonText
        
        }

        
    })
}
