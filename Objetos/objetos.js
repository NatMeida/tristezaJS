const objeto = require('./objeto.json');
console.log(objeto.nome);

let pessoa = {
    nome: 'João',
    idade: 20,
    cidade: 'São Paulo'
}

pessoa.cpf = "111.111.111-11";
// delete pessoa.cidade;

pessoa["natalia"] = "natalia";

let outraPessoa = {
    ...pessoa,
    nome: "Maria"
};

let curso = {
    nome: "Programação para leigos",
    horas: 40,
    disciplinas: [
        {
            nome: "Lógica de programação",
            horas: 20,
            professor: NaN
        },
        {
            nome: "Algoritmos",
            horas: 20,
            professor: "José"
        },
        {
            nome: "Linguagem de programação",
            horas: 40
        }
    ],
    calcPresenca: function (faltas) {
        this.presenca = (this.horas - faltas) / this.horas;
    }
}

// curso.calcPresenca(10);
console.log(curso.presenca);
console.log(curso.disciplinas[0].professor ?? "Não informado");

curso.provaAluno = function (nota, isBonzinho = false) {
    if (nota < 6 && isBonzinho)
        return nota * 1.1;

    return nota;
}

curso.provaAluno(5, true);
curso.provaAluno(5)

delete curso.provaAluno;
