
/* CRIANDO UMA FUNÇÃO*/

function updateTime() {
    const timeDiv = document.querySelector("#time");
    const dataNew = new Date();

const horas =  String(dataNew.getHours()).padStart(2, "0");
const min = String(dataNew.getMinutes()).padStart(2, "0");
const seg = String(dataNew.getSeconds()).padStart(2, "0");


    // IMPRIMIR INFORMAÇÕES NA TELA //
   timeDiv.textContent = `${horas}: ${min}: ${seg}`;


   
}

setInterval(updateTime, 1000);
// CHAMAR A FUNÇÃO//
updateTime();