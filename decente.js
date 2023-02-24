  
let tecnico = ["LP", "BD", "DAW"];
let medio = ["Mecanica", "Electricidad", "Electronica"];
let formacaoCompleta = tecnico.concat(medio);

console.log("----------Arrays concatenados----------")
console.log(formacaoCompleta);



//gerando String com elementos de um array
let formacaoCompletaString = formacaoCompleta.join(" & ");
console.log("----------String gerada com elementos de um array----------")
console.log("Formação completa: " + formacaoCompletaString);

//inverter a ordem dos elementos de um array
formacaoCompleta.reverse();
console.log("----------Array invertido----------")
console.log(formacaoCompleta);

//copiando um pedaço de um array
let formacaoBasica = medio.slice(1, 2);
console.log("----------Array copiado----------")
console.log(formacaoBasica);



//sort - Organiza o array pelo unicode e modifica o array original
console.log("----------Sort----------")
const instrumentos = ["Guitarra", "Baixo", "Violão"];
console.log(instrumentos.sort());
console.log(instrumentos);

const idades = [32, 21, 33, 43, 1, 12, 8];
console.log(idades.sort());


//map

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//item = valor de cada posição do array

const novaLista = numeros.map(function(item) {
    return item * 2;
});

function double(item) {
    return item * 2;
}

// const novaLista = numeros.map((item) => item * 2);
// const novaLista = numeros.map(double);

console.log("Resultado do map: " + novaLista);


//filter
const divisiveisPor6 = numeros.map((item) => item * 2).filter((item) => item % 3 === 0);
// (lambda x: x * 2)

// .FirstOrDefault((val) => val === 5)

//item = valor do item, indice = indica do array
const novaLista2 = lista.map(function(item, indice) {
    return item + indice;
});

