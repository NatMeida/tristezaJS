const aulas = [10, 25, 30];

const total1 = aulas.reduce((acumulador, atual) => {
    return acumulador + atual;
})

console.log(total1);

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
console.log(total2);


//findIndex - localiza o índice do elemento que satisfaz a condição
let frutas = ["Banana", "Maçã", "Uva", "Pêra", "Abacaxi"];
const buscaUva = frutas.findIndex(
    (fruta) => {
        return fruta === "Uva";
    }
);

console.log(buscaUva);

//find - localiza o elemento que satisfaz a condição
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 27, 46, 76, 89, 100];
let buscaMaiorQue10 = numeros.find(x => x > 10);
console.log(buscaMaiorQue10);

//includes - verifica se um elemento está contido no array
let nomesTeste = ["João", "Maria", "José", "Pedro", "Paulo"];
console.log(nomesTeste.includes("Maria"));

if (nomesTeste.includes("Maria"))
{
    console.log("Maria está na lista!");
} else { 
    console.log("Maria não está na lista!");
}

//some - verifica se algum elemento do array satisfaz a condição
console.log(nomes.Teste.some(nome => nome === "Maria"))

//every - verifica se todos os elementos do array satisfazem a condição
console.log(nomes.Teste.every(nome => nome === "Maria"))

//filter - retorna um novo array com os elementos que satisfazem a condição
console.log(nomes.Teste.filter(nome => nome === "Maria"))

