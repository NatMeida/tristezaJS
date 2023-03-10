const pessoa = {
    nome: 'João',
    idade: 20,
    cidade: 'São Paulo',
    cpf: "111.111.111-11",
    natalia: "natalia"
}

console.log('nome' in pessoa); // true
delete pessoa.nome;
console.log('nome' in pessoa); // false


pessoa['sobrenome'] = 'Silva';
console.log('sobrenome' in pessoa); // true
