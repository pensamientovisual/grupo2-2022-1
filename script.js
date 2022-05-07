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



function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function myFunction3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function myFunction4() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

