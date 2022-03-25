const nome = prompt('Qual o seu nome?');
const msgnome = `${nome}`;
const idade = prompt('Quantos anos você tem?');
const msgidade = `${idade}`;
const linguagem = prompt('Qual linguagem de programação você está estudando?');
const msglinguagem = `${linguagem}`;
alert('Olá '+msgnome+' você tem '+msgidade+' anos e já está aprendendo '+msglinguagem+'!');
alert('Você gosta de estudar '+msglinguagem+' ?');
const gosta = prompt('Digite: 1-SIM ou 2-NÃO');
if(gosta == 1){
	alert(' Muito bom! Continue estudando e você terá muito sucesso.');
}else{
	alert('Ahh que pena... Já tentou aprender outras linguagens?');
}


