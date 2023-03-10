const pessoa = {
    nome: 'João',
    idade: 20,
    cidade: 'São Paulo',
    cpf: "111.111.111-11",
    natalia: "natalia"
}

const { idade, natalia, ...pessoa2 } = pessoa;
console.log(pessoa2);

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const [a, b, c, ...resto] = arr;
console.log(resto);
