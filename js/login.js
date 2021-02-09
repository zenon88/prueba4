/*Regresa a inicio de sesion */
$(".close-btn").click(function() {
    $("#contenedor-registro").fadeOut(800, function() {
        $("#contenedor-login").fadeIn(800);
    });
});

$(".close-btn-socio").click(function() {
    $("#contenedor-socios").fadeOut(800, function() {
        $("#contenedor-login").fadeIn(800);
    });
});



/*$("#registrar").click(function() {
    $("#contenedor-login").fadeOut(function() {
        $("#contenedor-registro").fadeIn();
    });
});*/


/*Contenedor Registrar*/
$("#registrar").click(function() {
    $("#contenedor-login").fadeOut(function() {
        $("#contenedor-registro").fadeIn();
    });
});