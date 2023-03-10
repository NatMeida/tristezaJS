const curso = {
    nome: "Programação para leigos",
    horas: 40
};

const curso2 = {
    nome: "Lógica de Programação",
    horas: 60
}

// Pass by reference
const curso3 = curso; // O objeto é referenciado
curso3.nome = "Programação para leigos 2";

console.log(curso.nome); // Valor original foi alterado


// Pass by value
const curso4 = { ...curso2 }; // O objeto é copiado
curso4.nome = "Lógica de Programação 2";

console.log(curso2.nome); // Valor original não foi alterado

