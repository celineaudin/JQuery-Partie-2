$(document).ready(function(){
  $("input").focus(function(){
    $("input").css("border", "2px solid green");
  });
  $("input").blur(function(){
    $("input").css("border", "2px solid red");
  });
});
