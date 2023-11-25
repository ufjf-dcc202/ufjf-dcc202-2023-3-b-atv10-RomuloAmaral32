let maria=2;
let joao=1;
function getMaria(){
    return maria;
}
function getJoao(){
    return joao;
}

function setMaria(valor){
    maria=valor;
}

function setJoao(vaor){
    joao=valor;
}

function deJoaoParaMaria(){
    maria=maria+joao;
    joao=0;
}

function deMariaParaJoao(){
    joao=joao+maria;
    maria=0;
}