$(document).ready(function(){
  $("#green").click(function(){
    $("p").css("color", "green");
    $("#red").click(function(){
      $("p").css("color", "red");
      $("#blue").click(function(){
        $("p").css("color", "blue");
        });
      });
    });
  });
//$(".color").click(function(){
//on crée une variable qui récupère la valeur de l'ID de l'élément cliqué (mot clé this correspond à l'objet .color)
//  var colorDiv = $(this).attr("id");
//On selectionne notre texte et on lui applique la méthode .CSS qui prend en paramètre la couleur de l'ID de l'élément cliqué
//$("#texte").css("color", colorDiv);
//});
