$(document).ready(function(){

    var bs = $("#boton1");

    bs.click(function(){
        $(this).fadeTo("slow", 0);
    });
  
    bs.click(function(){
        $(this).fadeTo("slow",1);
    });


  })