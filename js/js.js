
        /* init Jarallax */
        jarallax(document.querySelectorAll('.jarallax'));


//----------- Login-----------
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


    
//********** Button Like **********/
function BtnLike(elmnt) {
  if(elmnt.style.background == "white")
  {
    elmnt.style.background="red";
    elmnt.style.color="white";
  }else{
    elmnt.style.background="white";
    elmnt.style.color="red"; 
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
    $("#l1").click(function(event){
      event.preventDefault();
      $(".container").css("width", "67%");
      $(".divtable").css("display", "none");
       $("#btn3").css("display", "none");
       $("#btn2").css("display", "none");
      $("#btn1").css("display", "block");
      $("#lblerreur").css("display", "none");
        $("#contform1").css("display", "flex");
        $("#input1").css("display", "flex");
        $("#input2").css("display", "flex");
        $("#input3").css("display", "flex");
        $("#input4").css("display", "flex");
        $("#input2").css("border-right", "1px solid #a8a383");
        $(".flex-container").css("flex", "100%");
    });
  });
  $(document).ready(function(){
    $("#l2").click(function(event){
      event.preventDefault();
      $(".container").css("width", "67%");
      $(".divtable").css("display", "none");
      $(".flex-container3").css("display", "none");
      $("#frmTrip").css("display", "block");
       $("#btn2").css("display", "none");
      $("#btn1").css("display", "block");
      $("#lblerreur").css("display", "none");
        $("#contform1").css("display", "flex");
        $("#input1").css("display", "flex");
        $("#input3").css("display", "flex");
        $("#input4").css("display", "flex");
        $("#input2").css("display", "none");
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
      $("#btn1").css("display", "block");
      $("#contform1").css("display", "flex");
        $("#input1").css("display", "none");
        $("#input3").css("display", "none");
        $("#input4").css("display", "none");
        $("#input2").css("display", "flex");
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

  function myshow(id){
    var txt1=document.getElementById("input1").value;
    var txt2=document.getElementById("input2").value;
    var txt3=document.getElementById("input3").value;
    var txt4=document.getElementById("input4").value;

    if(id=="btn1" && document.getElementById("input1").style.display!="none"&& document.getElementById("input2").style.display!="none"){
      if(txt1!='' && txt2!='' && txt3!='' && txt4!=''){
        document.getElementById("frm").style.display="block";
        document.getElementById("frmauto").style.display="flex";
        document.getElementById("frmTrip").style.display="none";
        document.getElementById("lblerreur").style.display="none"; 
      }else
        {
        document.getElementById("lblerreur").style.display="block";
      }
    }else if(id=="btn1" && document.getElementById("l2").style.color=="rgb(248, 208, 1)"){
      if(txt1!=''&& txt3!='' && txt4!=''){
        document.getElementById("frm").style.display="block";
        document.getElementById("frmauto").style.display="none";
        document.getElementById("frmTrip").style.display="block";
        document.getElementById("lblerreur").style.display="none";
      }else
        {
        document.getElementById("lblerreur").style.display="block";
      }

    }else if(id=="btn1" && document.getElementById("l3").style.color=="rgb(248, 208, 1)"){
      if(txt2!=''){
        document.getElementById("lblerreur").style.display="none";
        window.location="pageThree.html?text2="+document.getElementById("input2").value;
      }else
        {
        document.getElementById("lblerreur").style.display="block";
      }
    }else if(id=="btn1" && document.getElementById("l4").style.color=="rgb(248, 208, 1)"){
      if(txt2!=''){
        document.getElementById("lblerreur").style.display="none";
        window.location="pageThree.html?text2="+document.getElementById("input2").value;
      }else
        {
        document.getElementById("lblerreur").style.display="block";
      }
    } else if(id=="btn2" && document.getElementById("input1").style.display!="none"&& document.getElementById("input2").style.display!="none"){
      if(txt1!='' && txt2!='' && txt3!='' && txt4!=''){
        document.getElementById("lblerreur").style.display="none";
        document.getElementById("contform1").style.display="none";
        document.getElementById("frm").style.display="block";
        document.getElementById("frmTrip").style.display="none";
        document.getElementById("frmauto").style.display="flex";
        document.getElementById("table2").style.display="block";
        document.getElementById("table2").style.display="none";
      }else
        {
        document.getElementById("lblerreur").style.display="block";
      }
    }else if(id=="btn2" && document.getElementById("link2").style.color=="rgb(248, 208, 1)"){
      if(txt1!='' && txt3!='' && txt4!=''){
        document.getElementById("lblerreur").style.display="none";
        document.getElementById("contform1").style.display="none";
        document.getElementById("frm").style.display="block";
        document.getElementById("frmauto").style.display="none";
        document.getElementById("frmTrip").style.display="block";
      }else
        {
        document.getElementById("lblerreur").style.display="block";
      }
    }else if(id=="btn2" && document.getElementById("link3").style.color=="rgb(248, 208, 1)"){
      if(txt2!=''){
        document.getElementById("lblerreur").style.display="none";
        window.location="pageThree.html?text2="+document.getElementById("input2").value;
      }else
        {
        document.getElementById("lblerreur").style.display="block";
      }
    }else if(id=="btn2" && document.getElementById("link4").style.color=="rgb(248, 208, 1)"){
      if(txt2!=''){
        document.getElementById("lblerreur").style.display="none";
        window.location="pageThree.html?text2="+document.getElementById("input2").value;
      }else
        {
        document.getElementById("lblerreur").style.display="block";
      }
    }
    else{
      return;      
    }  
  }





  // function myshow(id){
  //   if(id=="btn1"){
  //     var txt1=document.getElementById("input1").value;
  //     var txt2=document.getElementById("input2").value;
  //     var txt3=document.getElementById("input3").value;
  //     var txt4=document.getElementById("input4").value;
  //     if(txt1!='' && txt2!='' && txt3!='' && txt4!=''){
  //       document.getElementById("frm").style.display="block";
  //       document.getElementById("lblerreur").style.display="none";
  
  //     }else
  //       {
  //       document.getElementById("lblerreur").style.display="block";
  //     }
  //   }else if(id=="btn2"){
  //     var txt1=document.getElementById("input1").value;
  //     var txt2=document.getElementById("input2").value;
  //     var txt3=document.getElementById("input3").value;
  //     var txt4=document.getElementById("input4").value;
  //     if(txt1!='' && txt2!='' && txt3!='' && txt4!=''){
  //       document.getElementById("lblerreur").style.display="none";
  //       document.getElementById("contform1").style.display="none";
  //       document.getElementById("frm").style.display="block";
  //       document.getElementById("table2").style.display="block";
  //       document.getElementById("table2").style.display="none";
  //     }else
  //       {
  //       document.getElementById("lblerreur").style.display="block";
  //     }
  //   }else{
  //     return;      
  //   }  
  // }
  


  $(document).ready(function(){
    $("#link1").click(function(){
      $("#input1").show();
      $("#input2").show();
      $("#input3").show();
      $("#input4").show();
      $("#btn2").show();
      $("#contform1").toggle();
      $("#frm").hide();
    });
  });
  $(document).ready(function(){
    $("#link2").click(function(){
      $("#input1").show();
      $("#input3").show();
      $("#input2").hide();
      $("#input4").show();
      $("#btn2").show();
      $("#contform1").toggle();
      $("#frm").hide();
    });
  });
  $(document).ready(function(){
    $("#link3").click(function(){
      $("#contform1").toggle();
      $("#frm").hide();
      $("#btn2").show();
      $("#input1").hide();
      $("#input3").hide();
      $("#input4").hide();
      $("#input2").show();
    });
  });
  $(document).ready(function(){
    $("#link4").click(function(){
      $("#contform1").toggle();
      $("#btn2").show();
      $("#frm").hide();
      $("#input1").hide();
      $("#input3").hide();
      $("#input4").hide();
      $("#input2").show();
    });
  });






