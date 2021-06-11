
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

  //****************** Input Date ********** 
  $( function() {
    $( ".datepicker" ).datepicker();
  } );

          // ************* Function close Page **************
      
      function ClosePage(){
        document.getElementById('idstyleDvDetail').style.display='none';
        document.getElementById('dvslider').style.display='none';
         document.getElementById('dvgrid1').style.visibility='visible';
         document.getElementById('dvgrid2').style.visibility='visible';
     }

  // ************* Function Show Detail **************
  function showDetailPlan(id){
         document.getElementById('idstyleDvDetail').style.display='block';
         document.getElementById('dvslider').style.display='block';
         var val1=document.getElementById(id);
         var y = val1.getElementsByTagName("span");
         document.getElementById('NameAct').innerHTML=y[0].innerText;
         document.getElementById('dvgrid1').style.visibility='hidden';
       }
       function showDetailActivitie2(id){
         document.getElementById('idstyleDvDetail').style.display='block';
         document.getElementById('dvslider').style.display='block';
         var val2=document.getElementById(id);
         document.getElementById('NameAct').innerHTML=val2.innerText;
         document.getElementById('dvgrid2').style.visibility='hidden';
       }

//  ******************* Function Add Prix **********
function addPrix(id) {
 x= document.getElementById(id).innerText;
 y= document.getElementById("prix").innerText;
 z=parseInt(y);

 
   if(x =="+"){
  document.getElementById(id).innerHTML="-";
  document.getElementById("prix").innerHTML=z+100;
   }else{
     document.getElementById(id).innerHTML="+";
  document.getElementById("prix").innerHTML=z-100;
   }

}
            
// ************ click rows table *******

var table = document.getElementById('table1');
for(var i = 0; i < table.rows.length; i++) {
  table.rows[i].addEventListener('click', function() {
    for(var j = 0; j < this.cells.length-1; j++) {
      msg = this.cells[j].innerHTML;
    }
    document.getElementById("prix").innerHTML=msg;
    $("tr").css("background", "none");
        $(this).css("color", "#f8d001"); 
    this.style.background="#6d6d65a8";

    $("p.text1").html("+");

  });
}



// *************** Form Login *************** 
        function showModale(){        
          var valueUser = document.getElementById("ltr1");
          if(valueUser.innerText=="Login"){
         document.getElementById("id01").style.display="block";
          }else{
            showProfiel();
          }
        }
//****** Function button Login **********

document.getElementById("IdLogin").addEventListener("click", function() {
  var valInpt1 = document.getElementById("inptTxtUser").value;
  var valInpt2 = document.getElementById("inptPwUser").value;
  if (valInpt1!="" && valInpt2!=""){
    myFctBtnLog();
  }else{
    document.getElementById("SpanErreur1").style.visibility = "visible";
    document.getElementById("SpanErreur2").style.visibility = "visible";
  }
});

//******** Function Form Profiel Custemer ************
function myFctBtnLog() {
  document.getElementById("id01").style.display="none";
  document.getElementById("iconuser").style.display="inline";
  var str1 = document.getElementById("inptTxtUser").value;
  var res1 = str1.slice(0,4);  
  document.getElementById("ltr1").innerHTML = res1; 
}
//*************** Form Button  Profile *********** 
function showProfiel() {
var idall=document.getElementById("idAllsContent");
 if(idall.style.display==="none"){
  idall.style.display = "block";
  }else{
  idall.style.display = "none";
}
}



//*************** Function Form Login ************

          //********** Button Login **************
      function showFrmReg(){
        document.getElementById("tab1").style.display="none";
        document.getElementById("tab2").style.display="none";
        document.getElementById("tab3").style.display="block";
      }
      function FncBtnLogin(){
        document.getElementById("tab1").style.display="block";
        document.getElementById("tab2").style.display="none";
        document.getElementById("tab3").style.display="none";
      }
      document.getElementById("btnLog").addEventListener("click",FncBtnLogin);
      document.getElementById("BtnBack").addEventListener("click",FncBtnLogin);

      document.getElementById("btnReg").addEventListener("click",function(){
        document.getElementById("tab1").style.display="none";
        document.getElementById("tab2").style.display="block";
        document.getElementById("tab3").style.display="none";
      });
//**********End Button Login **************
         
          

//******** Evente Enter In inputs *******
var idcon= document.getElementById("contform1");
var myInputs = idcon.getElementsByTagName("input");
    var p;
    for (p = 0; p < myInputs.length; p++) {
      
      myInputs[p]
    .addEventListener("keyup", function(event) {
    event.preventDefault()
    if (window.matchMedia("(min-width: 601px)").matches) {
    if (event.keyCode === 13){
      document.getElementById("btn1").click();
       
  
  }
      }
      if (window.matchMedia("(max-width: 600px)").matches) {
      if (event.keyCode === 13){
      document.getElementById("btn2").click();
      }   
    }
});
}
                 
          //******** Function scroll *******
              if (window.matchMedia("(max-width: 600px)").matches) {
    window.onscroll = function() {myFunction()};

  function myFunction() {
     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      document.getElementById("contform1").style.display = "none";
     $(".menu2 > li a").css("color", "#f4f4f4");
   }
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
          
   var idFrm =document.getElementById("frm");
    var idfrmauto =document.getElementById("frmauto");
    var idFfrmTrip =document.getElementById("frmTrip");
    var idlblerreur=document.getElementById("lblerreur");

    if(id=="btn1" && document.getElementById("input1").style.display!="none"&& document.getElementById("input2").style.display!="none"){
      if(txt1!='' && txt2!='' && txt3!='' && txt4!=''){
        idFrm.style.display="block";
        idfrmauto.style.display="block";
        idFfrmTrip.style.display="none";
        idlblerreur.style.display="none";
      }else
        {
        idlblerreur.style.display="block";
      }
    }else if(id=="btn1" && document.getElementById("l2").style.color=="rgb(248, 208, 1)"){
      if(txt1!=''&& txt3!='' && txt4!=''){
        idFrm.style.display="block";
        idfrmauto.style.display="none";
        idFfrmTrip.style.display="block";
        idlblerreur.style.display="none";
      }else
        {
        idlblerreur.style.display="block";
      }

    }else if(id=="btn1" && document.getElementById("l3").style.color=="rgb(248, 208, 1)"){
      if(txt2!=''){
        idlblerreur.style.display="none";
        window.location="pageThree.html?text2="+document.getElementById("input2").value;
      }else
        {
        idlblerreur.style.display="block";
      }
    }else if(id=="btn1" && document.getElementById("l4").style.color=="rgb(248, 208, 1)"){
      if(txt2!=''){
       idlblerreur.style.display="none";
        window.location="pageThree.html?text2="+document.getElementById("input2").value;
      }else
        {
        idlblerreur.style.display="block";
      }
    } else if(id=="btn2" && document.getElementById("input1").style.display!="none"&& document.getElementById("input2").style.display!="none"){
      if(txt1!='' && txt2!='' && txt3!='' && txt4!=''){
       idlblerreur.style.display="none";
        document.getElementById("contform1").style.display="none";
        idFrm.style.display="block";
        idFfrmTrip.style.display="none";
        idfrmauto.style.display="block";
      }else
        {
        idlblerreur.style.display="block";
      }
    }else if(id=="btn2" && document.getElementById("link2").style.color=="rgb(248, 208, 1)"){
      if(txt1!='' && txt3!='' && txt4!=''){
        idlblerreur.style.display="none";
        document.getElementById("contform1").style.display="none";
        idFrm.style.display="block";
        idfrmauto.style.display="none";
        idFfrmTrip.style.display="block";
      }else
        {
        document.getElementById("lblerreur").style.display="block";
      }
    }else if(id=="btn2" && document.getElementById("link3").style.color=="rgb(248, 208, 1)"){
      if(txt2!=''){
        idlblerreur.style.display="none";
        window.location="pageThree.html?text2="+document.getElementById("input2").value;
      }else
        {
        idlblerreur.style.display="block";
      }
    }else if(id=="btn2" && document.getElementById("link4").style.color=="rgb(248, 208, 1)"){
      if(txt2!=''){
        idlblerreur.style.display="none";
        window.location="pageThree.html?text2="+document.getElementById("input2").value;
      }else
        {
        idlblerreur.style.display="block";
      }
    }
    else{
      return;      
    }  
  }

  


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






