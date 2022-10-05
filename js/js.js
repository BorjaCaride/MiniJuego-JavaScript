function dibujabalon() {
    //para limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //seleccionamos imagen
    var image = new Image();
    image.src = "img/pelota.png";
    //para mover la bola
    x += dx;
    y += dy;

    //para que choque con la pala
    if ((y+dy > canvas.height -65) && x-55 < palax && palax < x +55){
        dy = -dy;
    }



    if (x + dx < -5 || x + dx > canvas.width - 45) {
        dx = -dx;
    }
    //para que de mensaje si da abajo o arriba
    if (x + dx < -5 || x + dx > canvas.width - 45){
        dx = -dx;
    }
    if (y + dy < -5 ){
        dy = -dy;
    } else if (y + dy > canvas.height - 43){
        alert('FIN DEL JUEGO');
        window.close();
    }
    campoFutbol();
    dibujapala();
    ctx.drawImage(image, x, y, 50, 50);
   // ctx.drawImage(pelota, x2, y2, 50, 50);
    if (derpulsa && palax < canvas.width - palaw){
        palax += 7;
    }
    else if (izqpulsa && palax > 0){
        palax -= 7;
    }



    //de en la pala



}


function campoFutbol(){
    ctx.beginPath();
    //circulo central
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
    ctx.arc(600, 300, 150, 0, 2 * Math.PI);
    //el fill es para el relleno del circulo
    ctx.stroke();

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
    ctx.arc(600, 300, 150, 0, 2 * Math.PI);
    //el fill es para el relleno del circulo
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'white';
    ctx.fill();
    ctx.moveTo(600, 0);
    ctx.lineTo(600, 1200);
 /*   ctx.lineTo(500, 370);
    ctx.lineTo(300, 370);*/
    ctx.stroke();

}



function dibujapala(){
    ctx.beginPath();

    //palax es la posicion x de la pala y el 20 es para que la pala no toque el canvas
    ctx.rect(palax, canvas.height -20,palaw,palah);
    ctx.fillStyle = "#525bff";
    ctx.fill();
    ctx.closePath();
}
function keyDownHandler (e){

    if (e.keyCode == 39){
        derpulsa = true;
    }
    else if (e.keyCode == 37) {
        izqpulsa = true;
    }
}
function keyUpHandler(e){

    if (e.keyCode == 39){
        derpulsa = false;
    }
    else if (e.keyCode == 37) {
        izqpulsa = false;
    }
}











