console.group(`String`)
let nome = prompt ("Qual seu nome?");
let nome2 = "Gabriel";
if(nome == nome2){
    console.log("Seu nome é bonito");
}else{
    console.log("Seu nome é feio");
}
console.log("Essa variavel é do tipo "+typeof(nome));
switch (nome) {
    case "Gabriel":
        console.log("Bom nome");
        break;

    default:
        console.log("Nome não encontrado");
        break;
}
console.groupEnd()
// -----------------------------------------------------------------------------------------------------------
console.group(`Number`)
let idade = 20;
let idadeMaior = 18;
if(idade >= idadeMaior){
console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}
console.log("Essa variavel é do tipo "+typeof(idade));
switch (idade) {
    case 20:
        console.log("Jovem");
        break;
        console.log("Idade não encontrada");
    default:
        break;
}
console.groupEnd()
//---------------------------------------------------------------------------------------------------
console.group(`Boolean`)
let boolean = true;
if (boolean == true) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}
console.log("Essa variavel é do tipo "+typeof(boolean));
console.groupEnd()
//---------------------------------------------------------------------------------------------------
console.group(`Arrays`)
let array = ["Gabriel", "Lucas"];
let item1 = "Gabriel";
console.log(array + " é uma variavel tipo " + typeof (array));
array.forEach(item =>{

    if (item1 == "Gabriel") {

        console.log("Achou!");

    }else {

        console.log("Não foi encontrado.");
    }
});
for (let contador = 0; contador < array.length; contador++) {
    const element = array[contador];
    
}
for (const contador of array) {
    console.log(array);
}
console.groupEnd()
//---------------------------------------------------------------------------------------------------
console.group(`Function`)

let somarNumeros = function Somar(a, b) {
    return a+b;
}
console.log(somarNumeros(2,6));
console.log("Essa variavel é do tipo "+typeof(somarNumeros));

console.groupEnd()
//---------------------------------------------------------------------------------------------------



