$(document).ready(function(){

    var regiones = $(".region");

    regiones.mouseenter(function(){
        var idRegion = $(this).attr("id");
        $("#titulo").text(idRegion);
        $(this).fadeTo("fast",0.5)
    })

    var bs = $("#boton1");

    bs.click(function(){
        $(this).fadeTo("fast", 0.5);
        $(this).fadeTo("fast", 1);
    });
    

    var bs = $("#boton2");

    bs.click(function(){
        $(this).fadeTo("fast", 0.5);
        $(this).fadeTo("fast",1);
    });

    var bs = $("#boton3");

    bs.click(function(){
        $(this).fadeTo("fast", 0.5);
        $(this).fadeTo("fast",1);
    });

    var bs = $("#boton4");

    bs.click(function(){
        $(this).fadeTo("fast", 0.5);
        $(this).fadeTo("fast",1);
    });
  })



function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
      $('#boton2').hide('fast');
      $('#boton3').hide('fast');
      $('#boton4').hide('fast');
    } else {
      x.style.display = "none";
      $('#boton2').show('fast');
      $('#boton3').show('fast');
      $('#boton4').show('fast');
    }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
      $('#boton1').hide('fast');
      $('#boton3').hide('fast');
      $('#boton4').hide('fast');
    } else {
      x.style.display = "none";
      $('#boton1').show('fast');
      $('#boton3').show('fast');
      $('#boton4').show('fast');
    }
}

function myFunction3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
        x.style.display = "block";
        $('#boton2').hide('fast');
        $('#boton1').hide('fast');
        $('#boton4').hide('fast');
    } else {
        x.style.display = "none";
        $('#boton2').show('fast');
        $('#boton1').show('fast');
        $('#boton4').show('fast');
    }
}

function myFunction4() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "none") {
        x.style.display = "block";
        $('#boton2').hide('fast');
        $('#boton3').hide('fast');
        $('#boton1').hide('fast');
    } else {
        x.style.display = "none";
        $('#boton2').show('fast');
        $('#boton3').show('fast');
        $('#boton1').show('fast');
    }
}

function myFunction5() {
  var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
        $('#boton2').hide('fast');
        $('#boton3').hide('fast');
        $('#boton1').hide('fast');
    } else {
        x.style.display = "none";
        $('#boton2').show('fast');
        $('#boton3').show('fast');
        $('#boton1').show('fast');
        $('#boton4').show('fast');
    }
}

function myFunction6() {
  var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "block";
        $('#boton2').hide('fast');
        $('#boton3').hide('fast');
        $('#boton1').hide('fast');
    } else {
        x.style.display = "none";
        $('#boton2').show('fast');
        $('#boton3').show('fast');
        $('#boton1').show('fast');
        $('#boton4').show('fast');
    }
}

function myFunction7() {
  var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
        x.style.display = "block";
        $('#boton2').hide('fast');
        $('#boton3').hide('fast');
        $('#boton1').hide('fast');
    } else {
        x.style.display = "none";
        $('#boton2').show('fast');
        $('#boton3').show('fast');
        $('#boton1').show('fast');
        $('#boton4').show('fast');
    }
}

function myFunction8() {
  var x = document.getElementById("myDIV4");
    if (x.style.display === "none") {
        x.style.display = "block";
        $('#boton2').hide('fast');
        $('#boton3').hide('fast');
        $('#boton1').hide('fast');
    } else {
        x.style.display = "none";
        $('#boton2').show('fast');
        $('#boton3').show('fast');
        $('#boton1').show('fast');
        $('#boton4').show('fast');
    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

