AOS.init();

const dataDoEvento = new Date("Sep 20, 2024 20:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const dataAtual = new Date();
    const timeStampAtual = dataAtual.getTime();

    const distanciaEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    // 1 dia em milissegundos -- (1000 * 60 * 60 * 24);
    const diasAteOEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaEvento % horaEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaEvento % minutosEmMs) / segundosEmMs);

    document.querySelector('#contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}min ${segundosAteOEvento}s`;

    if(distanciaEvento < 0) {
        clearInterval(contaAsHoras);
        document.querySelector('#contador').innerHTML = `Hoje é o meu aniversário!`;
    }
}, 1000);