

//    Lien 1 
$(document).ready(function(){
    $("#l1,#l2").click(function(){
      $("contentform").css("display", "block");
      $(".divtable").css("display", "none");
      $(".container").css("width", "80%");
      $("#contform2").css("display", "none");
        $("#contform1").css("display", "flex");
        $(".flex-container").css("flex", "100%");
      $(".header .navbar:last-child").css("z-index", "1");     

    });
  });
//    Lien 2 
  $(document).ready(function(){
    $("#l3,#l4").click(function(){
      $("contentform").css("display", "block");
      $(".divtable").css("display", "none");
      $("#contform1").css("display", "none");
        $("#contform2").css("display", "flex");
        $(".container").css("width", "70%");
      $(".header .navbar:last-child").css("z-index", "1");     

    });
  });

  $(document).ready(function(){
    $("#btn1").click(function(){
      $(".header .navbar:last-child").css("z-index", "2");     
      $(".divtable").css("transition", "max-height 0.6s, padding 0.6s");
      $(".divtable").css("display", "block");
    });
  });
  $(document).ready(function(){
    $("#btn2").click(function(){
      $("contentform").css("display", "block");
      $("#contform1").css("display", "none");
      $(".header .navbar:last-child").css("z-index", "2");     
      $(".divtable").css("transition", "max-height 0.6s, padding 0.6s");
      $(".divtable").css("display", "block");
      $(".flex-item-left").css("display", "block");
      $(".flex-item-right").css("display", "none");
    });
  });

  // $(document).ready(function(){
  //   $("#btn2").click(function(){
  //     $(".divtable").css("transition", "max-height 0.6s, padding 0.6s");
  //     $(".flex-item-left").css("display", "block");
  //     $(".flex-item-right").css("display", "none");
  //     $("#contform1").css("display", "none");
  //     $("#contform2").css("display", "flex");
  //   });
  // });

