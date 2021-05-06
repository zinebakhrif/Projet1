        // object-fit polyfill run
        objectFitImages();

        /* init Jarallax */
        jarallax(document.querySelectorAll('.jarallax'));


//-----------Login-----------
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    




$(document).ready(function(){
      $(".menu1 > li:not(.lien6,.lien5) a").click(function(){
      $(".menu1 > li:not(.lien6,.lien5) a").css("color", "black");
        $(this).css("color", "#f8d001"); 
      });
      });
      $(document).ready(function(){
        $(".menu2 > li a").click(function(){
        $(".menu2 > li a").css("color", "#f4f4f4");
          $(this).css("color", "#f8d001"); 
        });
        });

//    Lien 1 
$(document).ready(function(){
    $("#l1,#l2").click(function(){
      $(".container").css("width", "67%");            
      $(".divtable").css("display", "none");
      $("#lblerreur").css("display", "none");
      $("#contform2").css("display", "none");
        $("#contform1").css("display", "flex");
        $(".flex-container").css("flex", "100%");
    });
  });
//    Lien 2 
  $(document).ready(function(){
    $("#l3,#l4").click(function(){
      $(".container").css("width", "50%");
      $("#lblerreur").css("display", "none");
      $(".divtable").css("display", "none");
      $("#contform1").css("display", "none");
        $("#contform2").css("display", "flex");
    });
  });

  function reset() {
    var myCollection = document.getElementsByTagName("input");
    var i;
    for (i = 0; i < myCollection.length; i++) {
      myCollection[i].value = "";
    }
  }

  function myshow1(){
    var txt1=document.getElementById("input1").value;
    var txt2=document.getElementById("input2").value;
    var txt3=document.getElementById("input3").value;
    var txt4=document.getElementById("input4").value;
 
    if(txt1!='' && txt2!='' && txt3!='' && txt4!=''){
      document.getElementById("frm").style.display="block";
      document.getElementById("lblerreur").style.display="none";

    }else
      {
      document.getElementById("lblerreur").style.display="block";
    }
  }
  function myshow2(){
    var txt1=document.getElementById("input1").value;
    var txt2=document.getElementById("input2").value;
    var txt3=document.getElementById("input3").value;
    var txt4=document.getElementById("input4").value;
    if(txt1!='' && txt2!='' && txt3!='' && txt4!=''){
      document.getElementById("lblerreur").style.display="none";
      document.getElementById("contform1").style.display="none";
      document.getElementById("contform2").style.display="none";
      document.getElementById("frm").style.display="block";
      document.getElementById("table2").style.display="block";
      document.getElementById("table2").style.display="none";
    }else
      {
      document.getElementById("lblerreur").style.display="block";
    }
  }
  
   //function hide form and input

 
  document.getElementById("link1").addEventListener('click', myFunction1);
  document.getElementById("link2").addEventListener('click', myFunction1);

function myFunction1(){
  var x = document.getElementById("contform1");
  var y = document.getElementById("frm");
  var z = document.getElementById("contform2");
  z.style.display = "none";
  if (x.style.display == "none") {
  y.style.display = "none";
   x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

document.getElementById("link3").addEventListener('click', myFunction2);
document.getElementById("link4").addEventListener('click', myFunction2);

function myFunction2(){               
  var z= document.getElementById("contform1");
  var x = document.getElementById("contform2");
  var y = document.getElementById("frm");
  z.style.display = "none";
  if (x.style.display == "none") {
  y.style.display = "none";
   x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}



