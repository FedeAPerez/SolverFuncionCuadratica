/*		
		Solver de la función cuadrática.
		Versión Beta por Fede A. Pérez (@fedeaperez - Twitter)

		---- 20/12/2012 ----
		Esta herramienta fue desarrollada para su uso libre y sin restricciones, con la condición
	única de reconocer al autor de la misma.
		Sientanse completamente libres de publicarla en sus blogs, usarla en su sitio personal, 
	como herramienta escolar y como método de resolución rápida de problemas.
		Recomiendo su uso cuando se tiene la necesidad de conocer los puntos "notables" de la 
	función cuadrática, o de segundo grado.
		Cualquier sugerencia o duda sobre el programa o algoritmo : 
			- fedeaperez@hotmail.com.ar
			- Fede Pérez (Facebook)
			- @fedeaperez (Twitter)

		--------------------
		Características que aporta el Solver:
			- Identificación númerica de los puntos "notables" del gráfico de la función.
				- Raices
				- Vertice
				- Ordenada al Origen
				- Concavidad
				- Eje de simetria
			- Variabilidad dependiendo del descriminante de la misma. (b²-4ac)

		--------------------
		Próximo:
			- Gráfico de la función y de sus puntos notables.
			- Sitio web online, y posible aplicación (para moviles).
*/
$(document).ready(function(){
	$("div#start").click(function(){
		// Mayor Funcionalidad
		var dataShow = $("div#data");

		// Función principal
		var solv = function (a, b, c){

		// Raices
    	var discriminant = (b * b) + ((-4.0) * (a * c));
        if (discriminant >= 0){
			var x1 = ((-b) + Math.sqrt(discriminant)) / (2.0 * a);
			var x2 = ((-b) - Math.sqrt(discriminant)) / (2.0 * a);
			if (x1 === x2){
				dataShow.html("<Br />Las raices son iguales, y valen: " + x1); // Sí el discriminante === 0
			}else{ // Sí el discriminante >0
				dataShow.append("<Br />La primer raíz vale: " + x1);
				dataShow.append("<Br />La segunda raíz vale: " + x2);
			}	
		}else{
			dataShow.append("<Br />Las raices son imaginarias."); // Sí el discriminante < 0
		}

		// Intersección con el eje ƒ(x).
		dataShow.append("<Br />Corta al eje ƒ(x) en: " + c);

		// Concavidad de la parábola.
		var concav = function (a){
			if (a > 0){
				dataShow.append("<Br />La parábola es concava hacia arriba.");
			}else{
				dataShow.append("<Br />La parábola es concava hacia abajo.");
			}
		};
		// Llamado a la concavidad.
		concav(a);

		// Vertice y eje de la parábola.
		var vert = function (a, b, c){
			var xv = (-b) / (2.0 * a);
			var yv = a * xv * xv + b * xv + c;
        	dataShow.append("<Br />El eje de simetría se encuentra en x = " + xv);
			dataShow.append("<Br />El valor de x en el vertice es: " + xv);
			dataShow.append("<Br />El valor de ƒ(x) en el vertice es:" + yv);
		};
		// Llamado al vertice.
		vert(a, b, c);
	};

	// Datos de la ecuación, pedidos al usuario.
	confirm("Dada la ecuación de la forma: ƒ(x) = ax² + bx + c");
	var a = parseFloat(prompt("a en la ecuación: "));
	var b = parseFloat(prompt("b en la ecuación: "));
	var c = parseFloat(prompt("c en la ecuación: "));

	// Llamando a la función
	solv(a, b, c);
	dataShow.show("easing");
	});

});


// Gracias por usar y no se olviden de difundir esta herramienta. 