obj = [
    {nome: 'Antonio', idade: 35, salario: 1000, premium: true},
    {nome: 'Francisca', idade: 45, salario: 2000, premium: false},
    {nome: 'Marco', idade: 30, salario: 5000, premium: true},
    {nome: 'Lena', idade: 40, salario: 10000, premium: false},
    {nome: 'Joao', idade: 23, salario: 1900, premium: true},
    {nome: 'Rosa', idade: 60, salario: 5050, premium: false},
    
]
// Primeira coisa que e entendi sobre o filter que ele sempre vai retorna um array. Uma outra coisa sobre filter sempre usa validacao 'IF'
// Filter e uma estrutura magica que facilita quando se filtra qualquer coisa de array e objertos. 
// Abaixo tem um exemplo simples.

// 1 - Foi criado um array de objetos 
// 2 - vamos fazer uma verificacao se os usuario e premium
// 3 - primeiro criamos uma nova variavel que vai recebe um objeto linkado com metodo filter().
// 4 - o metodo filter por defaulte e sempre vai retorna um boolean "TRUE ou FALSE"   
const newFilter = obj.filter((item, index, array) => {
    return item.premium;
});

const array = []; // array vazio
for(i = 0; i < 10; i++){ // criando um for que vai ate 10
    let variavel = Math.round(Math.random(1)*9); // passei um numero random para gerar numero aliatorios e um round para arredondar os valores
    array[i] = variavel; // passando um valor a cada loop 
}
// 1 - criando uma variavel que recebe array linkando um metodo filter().
// 2 - o metodo filter  
const newArray = array.filter((item)=>{ 
    if(item > 5 ){
        return item;
    }
});

console.log(newArray.sort());