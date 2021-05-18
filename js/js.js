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
    $("#l1,#l2").click(function(event){
      event.preventDefault();
      $(".container").css("width", "67%");
      $(".divtable").css("display", "none");
       $("#btn3").css("display", "none");
      $("#btn1").css("display", "block");
      $("#lblerreur").css("display", "none");
        $("#contform1").css("display", "flex");
        $("#input1").css("display", "flex");
        $("#input3").css("display", "flex");
        $("#input4").css("display", "flex");
        $("#input2").css("border-right", "1px solid #a8a383");
        $(".flex-container").css("flex", "100%");
    });
  });
//    Lien 2 
  $(document).ready(function(){
    $("#l3,#l4").click(function(event){
      event.preventDefault();
      $("#lblerreur").css("display", "none");
      $(".container").css("width", "50%");
      $(".divtable").css("display", "none");
      $("#btn3").css("display", "block");
      $("#btn1").css("display", "none");
      $("#lblerreur").css("display", "none");
      $("#contform1").css("display", "flex");
        $("#input1").css("display", "none");
        $("#input3").css("display", "none");
        $("#input4").css("display", "none");
        $("#input2").css("border-right", "none");
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
      document.getElementById("frm").style.display="block";
      document.getElementById("table2").style.display="block";
      document.getElementById("table2").style.display="none";
    }else
      {
      document.getElementById("lblerreur").style.display="block";
    }
  }
  


  $(document).ready(function(){
    $("#link1").click(function(){
      $("#input1").show();
      $("#input3").show();
      $("#input4").show();
      $("#contform1").toggle();
      $("#frm").hide();
      $("#contform2").hide();
    });
  });
  $(document).ready(function(){
    $("#link2").click(function(){
      $("#input1").show();
      $("#input3").show();
      $("#input4").show();
      $("#contform1").toggle();
      $("#frm").hide();
      $("#contform2").hide();
    });
  });
  $(document).ready(function(){
    $("#link3").click(function(){
      $("#contform1").toggle();
      $("#frm").hide();
      $("#input1").hide();
      $("#input3").hide();
      $("#input4").hide();
    });
  });
  $(document).ready(function(){
    $("#link4").click(function(){
      $("#contform1").toggle();
      $("#frm").hide();
      $("#input1").hide();
      $("#input3").hide();
      $("#input4").hide();
    });
  });


   //******************* code scroll vertical
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  console.log('do work');
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});



