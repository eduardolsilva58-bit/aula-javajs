// // if e else, else if, swith
// // looping
// // array (funções nativas)
// // objeto
// // funções 
// // var, lrt e const
// // dicas: +=
// // concentração
// // defer

// condicionais
//let nome = "eduardo"
//let idade = 21
//let maiorDeidade = true
//let saldo = 10000

//if(idade >= 18    ){
//  console.log("Sou maior de idade");

//}
//else{
// console.log("Sou menor de idade" );

//}
// Condicional composta

//if(saldo < 1000){
// console.log ("fique em casa");
//}
//else if(saldo >= 1000 && saldo < 5000){
//console.log ("Sair pra festa");
//
//else{ //console.log ("guarda dinheiro");
//}

//let urserAge = Number (prompt("Digite sua idade"));
//if(urserAge > 0){
 // console.log ("Numero invalido");
//}
//else if( urserAge > 0 && urserAge < 12){ 
//console.log ("você e uma criança");
//}

//else if(urserAge >= 12  && urserAge < 18){
   // console.log ("Você e um adolensente");
//}
//else if (userAge > 18 && userAge < 60){
   // console.log("voce e um adulto");
//
//else if (userAge >= 60){ 
//console.log("voce e um idoso");
//}

//peso é altura//

//let height=Number (pront("digite seu peso"));
//let weight=Number (pront ("digite sua altura"));
//let imc = weight / (height*height); 
//imc  = imc .toFixed(2)

//if(imc <= 0){
   // alert("IMC invalido");
// }
 //else if (imc <18.5){
   // alert(imc + "abaixo do peso normal");
 //}
 //else if (imc <18. && imc < 24.9){
 ///   alert(imc + "peso normal");
// }
 //else if (imc <25.0 && imc < 29.9){
    //alert(imc + "obesidade classe");
// }
 
 //else if (imc <30.0 && imc <34.9){ 
   // alert(imc + "obesidade classe");
// }

//else if (imc <35.0 && imc <39.9){ 
   // alert(imc + "obesidade classe");
 //}// alert(imc + "obesidade classe")
 //else if (imc <40.0 && imc){  ;

//}


let opcao = Number (prompt ("digite uma opcao de 1 a 7:"));
switch (opcao){
      
    case 1:
        alert("Domingo");
        break;
    case 2:
        alert("Segunda");
        break;
    case  3:
        alert("Terça");
        break
    case  4:
        alert("Quarta");
        break
    case  5:
        alert("Quinta");
        break
    case  6:
        alert("Sexta");
        break
    case  7:
        alert("sabado");
        break;
} 
// atividade 4 //

let opcao1 = Number(prompt ("Digite seu peso"));
let opcao2 = Number(prompt("digite sua altura"));
let imc = (opcao1*opcao2);
imc .toFixed(2);
switch(true) {
    case imc <18.5:
        alert("abaixo do peso");
        break
        case (imc > 18.5 && imc < 24.9) :
            break
        alert("Peso aequado");
        case imc > 25.0 && imc < 29.9:
            break
        alert("Acima do pseo");
        case imc > 30.0 && imc  < 34.9:
            break
        alert("Obesidade 1");
        case imc > 35.0 && imc < 39.9:
            break
        alert("Obesidade 2");
        case imc > 40.0:
            break
        alert("Obesidade 3");
}













 


    
