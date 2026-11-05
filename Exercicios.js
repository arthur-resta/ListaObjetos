// Exercicio 01
let personagem = {
    nome: "Arthur", 
    classe: "A",
    nivel: 10,
    força: 100,
}
console.log(personagem.nome);
console.log(personagem.classe);
console.log(personagem.nivel);
console.log(personagem.força);





// Exercicio 02

let carro ={
    marca: "chevrolet",
    modelo: "Onix",
    ano: 2021,
    cor: "prata",
    preço: 200.000,
}

console.log(`O veiculo ${carro.marca} ${carro.modelo}, ano ${carro.ano} custando apenas ${carro.preço}esta a venda`);

// Exerciocio 03

let produto ={
    nome: "Teclado",
    preço: 100,
    estoque: 20,
}

console.log(`O produto ${produto.nome}, do preço ${produto.preço} com um estoque de ${produto.estoque}esta a venda`);


// Exercicio 04
let filme = {
    titulo: "interestelar",
    ano: 2014,
    diretor:"Christopher Nolan",
    genero: "Ficção Cientifica",
}

console.log(filme.titulo);
console.log(filme.ano);
console.log(filme.diretor);
console.log(filme.genero);




// Exercicio 08

let animal ={
    nome : "Nino",
    especie: "Cachorro",
    idade: 4,
    peso : 18,
}
let vacina = true;

if (vacina == true) {
        console.log("seu cachorro esta vacinado");
        
} else {
    console.log("Seu cachorro nao esta vacinado");
    
}

// Exercicio 6
let aluno = {
    nome: "Mariana",
    nota1: 8,
    nota2: 6,
};

let media = (aluno.nota1 + aluno.nota2) / 2;

if (media >= 7) {
    console.log(" Aprovado");
} else {
    console.log("Reprovado");
}

// Exercicio 07
let produto2 ={
    nome: "Monitor",
    preco: 900,
    desconto: 15,
}
let preçofinal = (produto2.preco -(produto2.preco*(produto2.desconto/100)));
console.log(`O valor do seu produto foi de ${preçofinal}`);

// Exercicio 08

let personagem02 = {
    nome:"Guerreiro",
    vida:100,
    ataque:25,
    defesa:10,
}
let vidafinal = personagem02.vida - 30 + 10;

console.log(`A vida ficou ${vidafinal}`);

// Exercicio 09
let conta = {
    titular: "Ana",
    saldo: 1500,
    valorSaque: 200
};
let saldofinal = conta.saldo - conta.valorSaque;
if (conta.saldo - conta.valorSaque) {
    console.log(`O saldo foi concedido e o saldo restante e de ${saldofinal}`);
}
else{
    console.log("O seu saldo não e suficiente para fazer o saque");
    
}

// Exercicio 10
let atleta = {
    nome: "Carlos",
    idade: 19,
    altura: 1.85,
    pontos: 120
};
if (atleta.pontos <50) {
    console.log("Iniciante");
    
} else if (atleta.pontos > 50 && atleta.pontos <99) {
    console.log("Intermediario");
    
} else if (atleta.pontos >= 100) {
    console.log("Avançado");
    
} 
// Exercicio 11
let alunos = [
    { nome: "Ana", idade: 17 },
    { nome: "Bruno", idade: 18 },
    { nome: "Carlos", idade: 16 },
    { nome: "Daniela", idade: 19 }
];

for (let i = 0; i < alunos.length; i++) {
  console.log(`${alunos[i].nome} , idade: ${alunos[1].idade}`);
}
// Exercicio 12
let alunos01 = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniela", nota: 7 },
    { nome: "Eduardo", nota: 4 }
];
let aprovados = 0;
for(let aluno of alunos01){
    if (aluno.nota >= 7) {
    aprovados++; 
  }
}


console.log("Quantidade de alunos aprovados:", aprovados);

// Exercicio 13
let produtos = [
    { nome: "Mouse", preco: 50, quantidade: 10 },
    { nome: "Teclado", preco: 120, quantidade: 5 },
    { nome: "Monitor", preco: 900, quantidade: 3 }
];

let valordoestoque = produtos.preco * produtos.quantidade
console.log(`o valor do estoque e de ${valordoestoque}`);

// Exercicio 14 
let jogadores = [
  { nome: "Lucas", pontos: 150 },
  { nome: "Mariana", pontos: 230 },
  { nome: "Carlos", pontos: 180 },
  { nome: "Ana", pontos: 310 }
];

let maior = jogadores[0];

for (let jogador of jogadores) {
  if (jogador.pontos > maior.pontos) {
    maior = jogador;
  }
}

console.log(`Maior pontuação: ${maior.nome} com ${maior.pontos} pontos.`);