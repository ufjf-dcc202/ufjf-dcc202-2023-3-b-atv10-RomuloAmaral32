console.log('modulo joaoEMaria')
let joao =1;
let maria =2;
function getMaria(){
return maria;
}
function getJoao(){
return joao;
}
function setJoao(novovalor){
    if(novovalor>0){
        joao = novovalor;
    }
    else{
        joao =0;
    }
}
function setMaria(novovalor){
    if(novovalor>0){
        maria = novovalor;
    }
    else{
        maria =0;
    }
}
function deJoaoParaMaria(){
maria+=joao;
joao=0;
}
function deMariaParaJoao(){
joao+=maria;
maria=0;
}
export{
    getMaria, getJoao, setJoao, setMaria, deJoaoParaMaria, deMariaParaJoao
}