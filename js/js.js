//    Lien 1 
$(document).ready(function(){
    $("#l1,#l2").click(function(){
      $(".container").css("width", "80%");
      $("#input2").css("border-right", "2px solid #a8a383");
      $("#contform2").css("display", "none");
        $("#contform1").css("display", "flex");
        $(".flex-container").css("flex", "100%");
    });
  });
//    Lien 2 
  $(document).ready(function(){
    $("#l3,#l4").click(function(){
      $("#contform1").css("display", "none");
        $("#contform2").css("display", "flex");
        $("#input2").css("border-right", "none");
        $(".container").css("width", "70%");
    });
  });

