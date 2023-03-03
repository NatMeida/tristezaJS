let pessoa = {
    nome: 'João',
    idade: 20,
    cidade: 'São Paulo'
}

pessoa.cpf = "111.111.111-11";

delete pessoa.cidade;

pessoa["natalia"] = "natalia";

for (let i = 0; i < 10; i++) {
    pessoa[i] = i;
}

pessoa[1]
