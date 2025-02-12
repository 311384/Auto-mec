document.addEventListener('DOMContentLoaded', () => {


const tela = document.querySelector('#tela');
const contexto = tela.getContext('2d');


tela.width = 700;
tela.height = 500;

contexto.beginPath();
contexto.moveTo(10,10);
contexto.lineTo(350,250);
contexto.stroke();

})