const btn = document.querySelectorAll("button")
const imp = document.getElementById("resultado")

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", ()=> {
        const btnValue = btn[i].textContent;
        if(btnValue === "C"){
            limpioResultado();
        }
        else if(btnValue === "="){
            calcular();
        }
        else if(btnValue === "⌫"){
            retroceder();
        }
        else{
            mostrarValor(btnValue);
        }
    })
}

function limpioResultado(){
    imp.value = "";
}

function calcular(){
    imp.value = eval(imp.value);
}

function mostrarValor(btnValue){
    imp.value += btnValue; 
}

function retroceder(){
    if (imp.value.length >= 1){
        imp.value = imp.value.slice(0, (imp.value.length - 1));
    }else{
        imp.value = "Error de tecleado!!";
        setTimeout(function() {
            imp.value = "";
        }, 3000);
    }
}