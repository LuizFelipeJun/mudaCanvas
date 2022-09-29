var EventoMouse="";
var Canvas=document.getElementById("meuCanvas");
var contexto=Canvas.getContext("2d");
var cor = document.getElementById("cor").value;
var largura = document.getElementById("largura").value;
var ultimaPosicaoX, ultimaPosicaoY;

Canvas.addEventListener("mousedown", mouseParaBaixo);

function mouseParaBaixo() {
   EventoMouse="Mouse Está Para Baixo";
   console.log("A Função mouseParaBaixo Foi Inicializada.");
}

Canvas.addEventListener("mousemove", mouseMovendo);

function mouseMovendo(evento) {
   var posicaoAtualX=evento.clientX - Canvas.offsetLeft;
   var posicaoAtualY=evento.clientY - Canvas.offsetTop;

   if(EventoMouse == "Mouse Está Para Baixo") {
      contexto.beginPath();
      contexto.strokeStyle = cor;
      contexto.lineWidth = largura;
      contexto.moveTo(ultimaPosicaoX, ultimaPosicaoY);
      contexto.lineTo(posicaoAtualX, posicaoAtualY);
      contexto.stroke();
   }

   ultimaPosicaoX = posicaoAtualX;
   ultimaPosicaoY = posicaoAtualY;

}

Canvas.addEventListener("mouseup", mouseParaCima);

function mouseParaCima() {
   EventoMouse="Mouse Está Acima";
}

Canvas.addEventListener("mouseleave", mouseSaiu);

function mouseSaiu() {
   EventoMouse="Mouse Saiu";
}