$(document).ready(function(){

    var regiones = $(".region");

    regiones.mouseenter(function(){
        var idRegion = $(this).attr("id");
        $("#titulo").text(idRegion);
        $(this).fadeTo("fast",0.5)
    })

    var bs = $("#boton1");

    bs.click(function(){
        $(this).fadeTo("fast", 0);
        $(this).fadeTo("fast",1);
    });
    

    var bs = $("#boton2");

    bs.click(function(){
        $(this).fadeTo("slow", 0);
        $(this).fadeTo("slow",1);
    });

    var bs = $("#boton3");

    bs.click(function(){
        $(this).fadeTo("slow", 0);
        $(this).fadeTo("slow",1);
    });

    var bs = $("#boton4");

    bs.click(function(){
        $(this).fadeTo("slow", 0);
        $(this).fadeTo("slow",1);
    });


  })



