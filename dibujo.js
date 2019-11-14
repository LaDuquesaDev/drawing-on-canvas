var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 60;
var l = 0;
var xinicial, yfinal;
var colorlinea = "red";

for(l = 0; l < lineas; l++)
{
  xinicial = 10 * l;
  yinicial = 10 * l;
  xfinal = 10 * (l + 1)
  yfinal = 500 - (l * 10)
  dibujarLinea("red", 500, yinicial, xfinal, 0);
  dibujarLinea("orange", 0, yinicial, xfinal, 500);
  dibujarLinea("blue", xinicial, 500, 500, yfinal);
  dibujarLinea("green", 0, yfinal, xfinal, 0);
}

dibujarLinea("black", 499, 499, 499, 1);
dibujarLinea("black", 499, 1, 1, 1);
dibujarLinea("black", 1, 1, 1, 499);
dibujarLinea("black", 1, 499, 499, 499);
consola.log("Linea " + l);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
