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

/*let npessoas = 8;
let maiorpeso = 0;
let totalpesssoas;
let maiorcem ;
let peso ;*/



/*for(let i = 1; i<=8 ; i++) {
let peso = Number(prompt("Digite o peso da " + i + "° pesssoa"))

if(peso > maiorpeso){
    maiorpeso = peso
}
total = total + peso

if (peso > 100) {
    maiorcem++
}

 
}*/

/*if (peso > maiorpeso){
    maiorpeso = peso
}
total = total + peso
if ( peso >100){
    maiorcem++
}*/

/*if ( peso > 100){
    let total=maiorpeso++
}

let totals = peso / npessoas
 
alert('O total cadastrado de pessoas é ' + npessoas + 'e ' + total + 'de pessoas pesam mais de 100kg, ' + totals )*/


/*let total = 0;
let totalf = 0;
let soma;
let filho;

for (let i = 1 ; i<=3 ; i++) {
     soma = Number(prompt("Digite o seu salario "))
     filho = Number(prompt('Digite o numero de filhos:'))
    total = total + soma
    totalf= totalf + filho
}

let mediasalario = total / 3

let mediafilho = totalf / 3

alert('a media é ' + mediasalario + 'e a média de filhos é ' + mediafilho)*/



/*let atual = prompt('Qual o seu salario?')

let genero = prompt('Qual o seu genero?')

let anos = prompt('Quantos anos voce trabalha na empresa?')

let salarionovo*/

/*if ( genero == "feminino" ){
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
}*/

/*let passeio = 0;
let acidente = 0;
let estado = 0;
let i = 0;

for ( let i = i; i<=10 ; i++){
    let passeio = prompt('Seu carro é de passseio? S/N')
    let acidente = prompt('Seu carro ja se envolveu em acidente? S/N');
    let estado = prompt('Qual o seu estado? SP/RJ')
        }
    
    if ( passeio = "S"){
        let total = total + passeio
    } 
    else if ( passeio = "N"){
        total = total *0 
    }
    if ( estado = "SP"){
        
    }



alert('Voce possui ' + total + ' carros de passeio')*/

/*let candidato1 = 0;
let candidato2 = 0;
let canidato3 =0;



for ( i = i; i<=3 ; i++ ) {
    let totalcandidatos = prompt('O candidato 1 recebeu ' + candidato1 + ' ')
}
if (totalcandidatos ==1){

}*/

/* let pessoas =8;

let maiorpessoas=0;

let media=0;

let maiorpesocadastrado=0;

let i=1;


for ( i = i; i<=3 ; i++) {
    let peso = Number(prompt('Digite o peso da ' + i + ' ° pessoa'));
    let sexo = prompt('Digite o seu sexo:');
    }
    
    let maiorpeso= peso++


    if ( peso >=100) {
        maiorpessoas = total + pessoas;
    } 
    else if ( peso >100) {
        maiorpesocadastrado = maiorpeso + peso;
    }
    
    media = peso / pessoas

    alert('Foram cadastradas no sistema ' + pessosas + ' e, ' + maiorpessoas + 'pesam mais de 100kg e a média é ' + media + ' e o maior peso cadastro é, ' + maiorpesocadastrado  ) */



/*     alert ('Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condiçao de pagamento. Utilize os codigos da tabela a seguir para ler qual a condiçao de pagamento escoliha e efetuar o calculo adequado. Codigo Condiçao de pagamento.  1 - Á vista em dinheir ou cheque, recebe 10% de desconto  2-À vista no cartão de crédito ' )
    let compra = prompt(Number('Digite o preço do produto'))
    let pagamento = prompt('Qual a sua forma de pagamento?')
    
    let dinheiro = 0;
    let desconto = 10/100;
    let desconto2 = 15/100;
    let cartao = 0;
    let vista;

    if ( compra == dinheiro ) {
        vista = compra * desconto
        let avista = vista.toLocaleString('pt-BR', {style : 'currency' , currency: 'BRL'})
        alert(`Voce recebeu 10% de desconto e sua compra deu ${avista}`)
    }
    if ( compra === dinheiro ) {
        cartao = compra 
    } */




/* 
let a = document.getElementsByClassName('mag')
a.addeventlistenner('click' , clicar)
a.addeventlistenner('mouseenter' , entrar)
a.addeventlistenner('mouseout' , sair)
 
function clicar () {
    a.innertext = 'clicou!'
    a.style.background = 'red'
}
*/

/* let nota1 = Number(prompt('Digite uma nota'))
let nota2 = Number(prompt('Digite a segunda nota?'))
let nota3 = Number(prompt('Digite a terceira nota?'))

let media
let mediatotal

media = nota1 + nota2 + nota3 
mediatotal = media / 3


if ( mediatotal >= 9) {
    alert('Nota A')
}
else if ( mediatotal >=7 && mediatotal <9){
    alert('Nota B')
}
else if (mediatotal >=6 && mediatotal <7) {
    alert('Nota C')
}
else if ( mediatotal >=4 && mediatotal <6) {
    alert('Nota D')
}
else {
    alert('Nota E')
}

alert(`A sua nota é ${mediatotal}`)
confirm('A sua nota está certa?')

 */







/*    
let cardapio = parseFloat(prompt('O cardarpio de uma casa de lanches é dado pela tabela abaixo: \n Codigo-100 Cachorro Quente Preço=R$1,70 \n Codigo 101 Bauru Simples Preço=R$2,30 \n Codigo 102 Bauru com Ovo Preço=R$2,60 \n Digite o coduto do produto que voce quer:'))
let preco = 0;

switch(cardapio) {
    case 100 :
        alert(`Voce seleciou o produto 1 (Cachorro Quente) que custa R$1,70`)
        preco = parseFloat(1.70)
        break;
        
        case 101 :
            alert (`Voce seleciou o produto 2 (Bauru Simples) que custa R$2,30`)
            preco = parseFloat(2.30)
            break;
            
            case 102 :
                alert (`Voce seleciou o produto 3 (Bauru com Ovo que custa R$2,60)`)
                preco = parseFloat(2.60)
                break;
                
                default:
                    alert ('Voce digitou a opção errada carai,volte e digite a certa se não eu vo te quebrar')
                }
                
                let quantidade = Number(prompt('Digite a quantidade desse produto que voce quer:'))
                
                let total = parseFloat(quantidade) * preco
                
                let a = total.toFixed(2).replace("." , ",")
                
                
                alert(`Voce compro o produto ${cardapio} e comprou ${quantidade} quantidades \n e o total deu R$${a}`)
                */


/*   
let tabuada = parseFloat(prompt("Digite um número"));
let tamTabuada = parseFloat(prompt("Digite o tamanho da tabuada"));
let indice = 1;
 
while(indice <= tamTabuada){
   document.write(tabuada + " x " + indice + " = " +(indice * tabuada) + "<br>");
   indice++
}
document.write("Fim da tabuada"); */
let jair = 0
let carlos = 0;
let neves = 0;
let nulo = 0;
let branco = 0;

let candidatos = parseFloat(prompt('Faça um progama que simule a urna eletronica. \n A tela a ser apresentada deverá ser da seguinte forma: \n As opções são: \n  1- Candidato Jair Rodrigues  \n 2- Candidato Carlos Luz \n 3- Candidato Neves Rocha \n 4- Nulo \n 5- Branco \n Entre com o seu voto:'))



while (candidatos != 6) {


    switch (candidatos) {

        case 1:
            
            jair = candidatos++
            break;

        case 2:
            
            carlos = candidatos++
            break;

        case 3:
            
            neves = candidatos++
            break;

        case 4:
           
            nulo = candidatos++
            break;

        case 5:
            
            candidatos = branco++
            break;

        default:
            alert('Digite um numero correto para o seu voto representado no texto')

            candidatos = parseFloat(prompt('Faça um progama que simule a urna eletronica. \n A tela a ser apresentada deverá ser da seguinte forma: \n As opções são: \n  1- Candidato Jair Rodrigues  \n 2- Candidato Carlos Luz \n 3- Candidato Neves Rocha \n 4- Nulo \n 5- Branco \n Entre com o seu voto:'))
    }
}

alert(`O candidato Jair Rodrigues recebeu ${candidatos} \n O candidato Carlos Luiz recebeu ${candidatos} \n O candidato Neves Rocha recebeu ${candidatos} \n Nulos recebeu ${candidatos} \n Branco recebeu ${candidatos}`)




