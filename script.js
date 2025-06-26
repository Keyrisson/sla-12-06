function soma(){

let numero_um =  parseInt(document.getElementById('primeiro_numero').value);
let numero_dois = parseInt(document.getElementById('segundo_numero').value);

let soma_numero = numero_um + numero_dois;

document.getElementById("resultado").textContent= 'Resultado:' + soma_numero;
}
function subtrair(){

let numero_um =  parseInt(document.getElementById('primeiro_numero').value);
let numero_dois = parseInt(document.getElementById('segundo_numero').value);

let subtrair_numero = numero_um - numero_dois;

document.getElementById("resultado").textContent= 'Resultado:' + subtrair_numero;   
}
function multiplicacao(){

let numero_um =  parseInt(document.getElementById('primeiro_numero').value);
let numero_dois = parseInt(document.getElementById('segundo_numero').value);

let multiplicacao_numero = numero_um * numero_dois;

document.getElementById("resultado").textContent= 'Resultado:' + multiplicacao_numero;   
}
function dividir(){

let numero_um =  parseInt(document.getElementById('primeiro_numero').value);
let numero_dois = parseInt(document.getElementById('segundo_numero').value);

if(numero_dois == 0){
    alert("não pode dividir por zero");
    return
}
let dividir_numero = numero_um / numero_dois;

document.getElementById("resultado").textContent= 'Resultado:' + dividir_numero;   
}
function maior(){
    
    let numero_um =  parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);
    if(numero_um>numero_dois){
        document.getElementById("resultado").textContent= 'O maior é ' + numero_um;
        return;
    }else if(numero_dois>numero_um){
        document.getElementById("resultado").textContent= 'O maior é ' + numero_dois;
        return;
    }else{
        document.getElementById("resultado").textContent= 'São iguai'; 
    }
}
