//$(document).ready(function(){
  $("#green, #red,#blue").mouseenter(function(){
    var divColor = $(this).attr("id");
    $("#texte").css("color", divColor);
  });
    $("#green, #red,#blue").mouseout(function(){
      $("#texte").css("color", "black");
    });
  //j'applique à la fois deux événements à mes div qui ont les id (#red, #blue, #green)
  //la méthode on() me permet d'appliquer deux évenements à la fois
  //$("#green, #red,#blue").on("mouseenter mouseleave",(function(){
  //je récupère les valeurs des id des éléments cliqués
  //var divColor = $(this).attr("id");
  //j'applique les valeurs récupérées à mon texte
  //$("#text").toggleClass(divColor);
  //});
  //la méthode .toggleClass() ajoute une classe déjà déclarée dans mon .css à mon texte
