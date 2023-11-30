/*let num1 = prompt("Digite um número:");

let num2 = prompt("Digite outro número:");

let op = prompt("Digite uma operação matematica:");

let soma;

if(op == "+"){
    soma = Number(num1) + Number(num2);
}else if(op == "-"){
    soma = Number(num1) - Number(num2);
}else if(op =="*"){
    soma = Number(num1) * Number(num2);
}else if(op =="/"){
    soma = Number(num1) / Number(num2);
}else{
    alert('Informe uma op válida');
}

==>Comparaçao

alert('A soma da op é ' +soma);
*/

/*let a = prompt('Digite um numero')

let b = prompt('Digite outro numero')

let c = prompt('Digite mais um numero')

let d = prompt('Digite mais um outro numero')

let soma;

soma = (Number(a) + Number(b) + Number(c) + Number(d))/4;*/


/*if( op =="+"){
    soma = Number(a) + Number(b)
}else if( == "-"){
    
}
if( op =="/"){
    soma = Number(c) + Number(d)
}else if ( == "*"){
    
}*/

/*alert('A soma da op é' + soma)*/


/*let a = prompt('Quantos kms percorreu o seu carro?')

let b = prompt('Quantos dias voce rodou?')

let soma = ( Number(a)*0.20) + ( Number(b)*90)

alert('Você precisa pagar ' + soma )*/

/*let a = prompt('Quantos kms voce deseja percorrer?')

let km = 0.50

let m = 0.45

let soma


if(a <= 200){
    soma = Number(a) * Number(km)
}else if(a > 200){
    soma = Number(a) * Number(m)
}

alert('A soma é ' + soma)*/


/*let a =   prompt('Digite uma nota')

let b =  prompt('Digite outra nota')

let soma

soma = (Number(a) + Number(b) ) /2

if( soma <=4.9){
    alert('Voce foi reprovado')
}
else if( soma >=5 && soma <=6.9)
{
    alert('Voce esta em recuperaçao')}
else{ 
    alert('Voce esta aprovado')
}


alert('A sua nota é de ' +soma)*/



/*let nome = prompt ("Digite seu nome")
let salario = Number (prompt ("Digite seu salário"))
let idade = Number (prompt ("Digite sua idade de empresa"))
let total
if ( idade <= 3 ) {
    total = salario * 1.03
}else if( idade >= 4 && salario <= 10){
    total = salario * 1.125
}
else{
    total = salario * 1.2
}
 
alert ("você funcionário " + nome + " com " + idade + 'anos de impresa '+ "seu novo salario é de " + total)*/



/*let largura = prompt('Digite a largura do terreno')

let comprimento = prompt('Digite o comprimento do terreno')

let total = Number(largura) * Number(comprimento)

if ( total <100){
    alert('Terreno Popular')
}else if ( total >=100 && total <=500){
    alert('Terreno Master')
}else {
    alert('Terreno Vip')
}

alert(" A sua area é" + total + "e o seu terreno é" + total)*/


/*let atividade = prompt('Quantas horas de atividade fisica você fez neste mês?') 


let cliente = 0.05



let total

if ( atividade <=10) {
    total= atividade * 2
}else if ( atividade >10 && atividade <=20) {
    total = atividade * 5 
}else ( atividade >20 ) {
    total = atividade * 10
}

resultado = atividade + cliente

alert(' você praticou ' + atividade + ' horas por mes de atividade fisicia e ganhou ' + resultado + ' reais')*/


/*let atual = prompt('Qual o seu salario?')

let genero = prompt('Qual o seu genero?')

let anos = prompt('Quantos anos voce trabalha na empresa?')

let salarionovo

if ( genero == "feminino" ){
    if( anos <15){
        salarionovo = Number(atual) * 0.05
    }
    else if ( anos >=15 && anos <=20){
        salarionovo = Number(atual) * 0.12
    }
    else  {
        salarionovo = Number(atual) * 0.23
    }
}
if ( genero == "masculino" ){  
        if (anos <20){
            salarionovo = Number(atual) * 0.03
        }
        else if ( anos >=20 && anos <=30){
            salarionovo = Number(atual) * 0.13
        }
        else {
            salarionovo = Number(atual) * 0.25
        }
}   

alert('O seu novo salario é de ' + salarionovo)*/

/*let peso = prompt('Qual o seu peso?')

let altura = prompt('Qual sua altura?')


let soma = Number(peso) / Number(altura) **2


if (soma <18.5) {
    alert('Abaixo do peso')
}
else if ( soma >=18.5 && soma <=25 ){
    alert('Peso ideal')
}
else if ( soma >25 && soma <=30){
    alert('Sobrepeso')
}
else if (soma >30 && soma <=40){
    alert('Obesidade')
}
else {
    alert('Obesidade Morbída ' + soma)
}*/

/*function mostrarTabuada() {
    // cria referencia aos elementos da pagina
    let inNumero = document.getElementById('inNumero');
    let outTabuada = document.getElementById('outTabuada');

    //converte conteudo do campo inNumero
    let numero = Number(inNumero.value);

    // valida o numero 
    if (numero ==0 || isNaN(numero)) {
        alert("Informe um numero valido");
        inNumero.focus();
        isNumero.value = "";
    }

    //cria uma variavel do tipo string, que irá concatenar a resposta
    let resposta = "";

    //cria um laço de repetição
    for (let i = 1; i <=10; i++) {
        //a variavel resposta vai acumulando os novos conteudos
        resposta = resposta + numero + " X " + i + " = " + numero * i + "\n"
    }

    // o conteudo da tag pre é alterado para exibir a tabuada do num
    outTabuada.textContent = resposta;
}

    //cria referencia ao botão e apos associa function ao evento click
    let btMostrar = document.getElementById ('btMostrar');
    btMostrar.addEventListener("click", mostrarTabuada)*/

/*function listaNumeros(){
    //cria referencia aos elemtetos que a funciotion ira manipular 
    let inNumero = document.getElementById('inNumero');
    let outResposta = document.getElementById('outResposta');

    let numero = Number(inNumero.value); //obtem o numero informado 
    // verifica validade do numero 
    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        inNumero = ""
    }
    // inicializa variavel resposta
    let resposta = " Entre " + numero + " e 1: ";
    // cria um for decrescente
    for (let i = numero; i > 0; i = i -1) {
        // resposta vai acumulando numero (e virgulas)
        resposta = resposta + i  + ", ";
    }
    // altera o conteudo de outResposta
    outResposta.textContent = resposta ;
}
    // referencia elemtno e apos associa function ao evento click
    let btDecrescer = document.getElementById("btDecrescer");
    btDecrescer.addEventListener("click" , listaNumeros)*/


    /*function menosNumero(){
        let inNumero = document.getElementById('inNumero');
        let outResposta = document.getElementById('outResposta');

        let numero = Number(inNumero.value);

        if (numero == 0 || isNaN(numero)){
            alert("Informe um numero valido");
            inNumero.focus();
            inNumero = ""
        }
        let resposta = " Menos 10 :";

        for (let i = numero; i >= 0; i = i - 10) {
            resposta = resposta + i + ",";
        }
        outResposta.textContent = resposta ;
    }
    let btDecrescer = document.getElementById("btDecrescer");
    btDecrescer.addEventListener("click" , menosNumero);*/

    let npessoas = 8;
    let maiorpeso = 0;
    let totalpesssoas;
    let maiorcem ;
    let peso ;
    


    for(let i = 1; i<=8 ; i++) {
    let peso = Number(prompt("Digite o peso da " + i + "° pesssoa"))

    /*if(peso > maiorpeso){
        maiorpeso = peso
    }
    total = total + peso

    if (peso > 100) {
        maiorcem++
    }*/

    
}

    /*if (peso > maiorpeso){
        maiorpeso = peso
    }
    total = total + peso
    if ( peso >100){
        maiorcem++
    }*/

    if ( peso > 100){
        let total=maiorpeso++
    }

    let totals = peso / npessoas
    
    alert('O total cadastrado de pessoas é ' + npessoas + 'e ' + total + 'de pessoas pesam mais de 100kg, ' + totals )


    



