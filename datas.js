const hoje = new Date();

console.log(hoje);
console.log(typeof hoje);

const data = new Date("1994-12-12 12:00:00");
console.log({ data });

const data2 = new Date(1994, 11, 12, 12, 00, 00);
console.log(data2);

const data3 = new Date(0); // 01/01/1970 Timestamp unix ou época unix
console.log(data3);

const data4 = new Date("25 feb 2023 12:00:00");
console.log({ data4 });

const diff = hoje.getTime() - data4.getTime();
const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log({ dias });

const months = {
    0: "Janeiro",
    1: "Fevereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11: "Dezembro"
}

console.log(months[hoje.getMonth()]);

hoje = new Date();
var meses = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];

var mesTextual = meses[mes];

var hora = hoje.getHours();
var minuto = hoje.getMinutes();
var segundo = hoje.getSeconds();

console.log('${hora}:${minuto}:${segundo}');

//comparação de datas
var datax = new Date("2019-01-01");
var datay = new Date("2019-01-02");

if (datax < datay) {
    console.log("datax é menor que datay");
}




