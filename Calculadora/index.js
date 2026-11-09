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