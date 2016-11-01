$(function(){

    var getRandomIndex = function(){
        return Math.floor(Math.random()*(textos.length-1));
    };

    var setRandomBackgroundImage = function(){
        //Inserta una imagen de fondo de forma aleatoria con cada recarga de la web
        var backgroundTitle = "url\("+"img/turtle_"+(+Math.floor(Math.random()*7)+1)+".jpg\)";
        $("article").css("background-image",backgroundTitle);
    };

    //Inserta un consejo de forma aleatoria al pulsar el boton "Nuevo Consejo"
    $("#advice_button").click(function(){
        $("#advice_text").html("<p>"+textos[getRandomIndex()]+"</p>");
        setRandomBackgroundImage();
    });

    //inserta el primer consejo de la tortuga sabia
    $("#advice_text").html("<p>"+textos[getRandomIndex()]+"</p>");
    //inserta una imagen aleatoria al carga la pagina
    setRandomBackgroundImage();
});

var textos = ["Encuentra la palmera adecuada, come mucha fruta entre las 9 y las 12, el amanecer es un buen momento para matar enanos pelirrojos.",
    "Hay muchas cosas en el mundo que no sabes, prueba a plantar un arbol en el ano de Rajoy, muchas cosas buenas ocurrirán pues el sol se pone después de cada retardecer.",
    "Elige las fresas como si de tu avuela se tratase, no te digo que será fácil te digo que no te debo pasta, cuidado con la luna llena pues en la vida hay cosas más importantes que trabajar.",
    "¿Un consejo?, yo que se ti@, no te rayes y sal a tomar unas chupitos de mandarina.",
    "A mi me gustan los penes como las mandarinas: naranjas, bien puedes ir por la selva a las 12 de la noche sin protección porque total, vas a morir igual.",
    "Si eres infiel a tu pareja no pasa nada, plantante delante suyo con mucha autoridad y di: Cariño, te he puesto los cuernos por lo menos con 12 personas... pero ninguna me dan tan buen sexo como tu.",
    "Si la vida te calabazas, hazte un zumo, pero ya te digo yo que el zumo de calabazas es un puta mierda.",
    "Algunos dicen que la felicidad esta en la sonrisa de un niño, otros que está en la satisfacción del trabajo bien hecho, pero los más sabios saben que la felicidad esta en la pizza.",
    "No te digo que será fácil, te digo que valdrá la pena. Al igual que una serpiente repta durante un kilometro para morir aplastada bajo las ruedas de un altomóvil, tu triunfarás en la vida",
    "Las historias están bien si te las cuenta tu abuela jubilado, pero tu dejate de historias y ponte a trabajar, ¡vago de mierda!",
    "¿Cuantas polillas puede contar una persona sabia al mirar por su ventana?... Yo que se ti@",
    "El mundo animal ha sufrido durante mucho tiempo el yugo opresor de la raza humana, ya va siendo hora de que nos esclavicen y nos metan en granjas de producción en espacios muy reducidos, donde succionen nuestros fluidos corporales mientras nos ceban a piensos cargados de hormonas. Sería una justicia muy poética el porvenir.",
    "¡Eh, devuelvame mi paraguas joven gmaberro!",
    "Imagine there's no heaven. It's easy if you try. No hell below us. Above us only sky. Imagine all the people. Living for todaaaaaaaaaaaay... AHAAAAAAAAAAAAA-AAAAAHHHHHHHHHHHHHHHH...",
    "Dejad de poner frases en internet y decir que las he escrito yo. Albert Einstein",
    "Y los niños? Es que nadie piensa en los niños?!",
    "¡No hombre no!, Esos cadáveres no son de su familia, yo no soy un asesino. Con su permiso, me voy retirando con viento fresco. Besis",
    "Qué es la vida, sino un breve lapsus en el tiempo, tremendamente improbable y tremendamente efímero? No te sorprendas con grandes cosas y asombrate por las cosas pequeñas, pues mientras más vives, menos sentido tendrá tu existencia (de mierda)"];