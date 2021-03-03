/**
Censo Municipal
Para un censo municipal debemos cargar los datos de TODAS las mascotas 
de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperatuta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio
de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
 */
function probarEjercicio() {
	//1ro declaramos variables
	var tipoDeMascota;
	var tipoDePelaje;
	var edadMascota;
	var nombreDeMascota;
	var raza;
	var pesoDeMascota;
	var estadoClinico;
	var temperaturaCorporalDeMascota;


	//2do validamos
	do {
		tipoDeMascota = prompt("Ingrese el tipo de mascota: (perro - gato - otros cosa)");
	} while (tipoDeMascota != "perro" && tipoDeMascota != "gato" && tipoDeMascota != "otra cosa")

	console.log("tipo mascota: " + tipoDeMascota);
	do {
		tipoDePelaje=prompt("Ingrese el tipo de pelaje: (corto - largo - sin pelo)");
	} while (tipoDePelaje != "corto" && tipoDePelaje != "largo" && tipoDePelaje != "sin pelo");
	
	console.log("tipo de pelaje: "+tipoDePelaje);

	do {
		edadMascota=parseInt(prompt("Ingrese la edad de su mascota: "));
	} while (isNaN(edadMascota))

	console.log("edad mascota: "+edadMascota);

	do {
		nombreDeMascota=prompt("Ingrese el nombre de su mascota: ");
	} while (isNaN(nombreDeMascota)==false)

	console.log("nombre mascota: "+nombreDeMascota);

	do {
		raza=prompt("Ingrese la raza de su mascota: ");
	} while (isNaN(raza)==false)

	console.log("raza: "+raza);

	do{
		pesoDeMascota=parseInt(prompt("Ingrese el peso de su mascota: "));
	}while(isNaN(pesoDeMascota))

	console.log("peso masco: "+pesoDeMascota);

	do {
		estadoClinico=prompt("ingrese el estado clinico de su mascota: (enfermo - internado - adopcion)");
	} while (isNaN(estadoClinico)==false)

	console.log(estadoClinico);

	do {
		temperaturaCorporalDeMascota=parseInt(prompt("ingrese la temperatura de su mascota"));
	} while (isNaN(temperaturaCorporalDeMascota)==false)
	console.log(temperaturaCorporalDeMascota);





}