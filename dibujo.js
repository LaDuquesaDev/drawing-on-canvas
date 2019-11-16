var texto = document.getElementById("texto_formulario"); // getElementById se utiliza para enlazar el archivo js con html
var boton = document.getElementById("boton_formulario");
boton.addEventListener("click", dibujoPorClick); // Aqui determinamos bajo que evento el "Boton" traera la funcion
var dibujo = document.getElementById("dibujito");
var ancho_canvas = dibujo.width;
var lienzo = dibujo.getContext("2d"); // Definimos el contexto del dibujo (2d) que sera trazado con la variable lienzo


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value); //parseInt convierte el texto en numero
  var l = 0;
  var xinicial, yfinal;
  var colorlinea = "red";
  var espacio = ancho_canvas / lineas;
  var borde = ancho_canvas - 1;

  for(l = 0; l < lineas; l++) // for se utiliza para hacer ciclos, hay otros como while o do while
  {
    xinicial = espacio * l;
    yinicial = espacio * l;
    xfinal = espacio * (l + 1)
    yfinal = 500 - (l * espacio)
    dibujarLinea("red", 500, yinicial, xfinal, 0);
    dibujarLinea("orange", 0, yinicial, xfinal, 500);
    dibujarLinea("blue", xinicial, 500, 500, yfinal);
    dibujarLinea("green", 0, yfinal, xfinal, 0);
  }

  dibujarLinea("black", ancho_canvas, ancho_canvas, ancho_canvas, 1);
  dibujarLinea("black", ancho_canvas, 1, 1, 1);
  dibujarLinea("black", 1, 1, 1, ancho_canvas);
  dibujarLinea("black", 1, ancho_canvas, ancho_canvas, ancho_canvas);
  console.log("Linea " + l);

}
