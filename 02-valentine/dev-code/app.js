/* your code should go here */
var tmplCARDS= "<li> <img src='img/themeNUMBER.jpg'> <h2>See you tonight</h2><button class='opt-choose' value='themeNUMBER'>Choose</button></li> ";

var tmplIMG= "<img src='img/theme2.jpg'>";

$(document).ready(function(){
      
    for(var i=0; i<data.length; i++){
        $(".themes").append(tmplCARDS.replace(/NUMBER/g,i+1) )
    }
    
    $(".opt-choose").click(function(event){
       
        if( $("#inputTo").val()=="" || $("#inputMsg").val()=="" || $("#inputFrom").val()=="" ){
            alert("Inserire valori validi");
        }else{
        
        $(".picture").html( tmplIMG.replace("theme2", this.value ) );
        $("#preview").removeClass("hidden");
        $("#cardTo").text( $("#inputTo").val() );
        $("#cardMsg").text( $("#inputMsg").val() );
        $("#cardFrom").text( $("#inputFrom").val() );
        }
        
    })
  
});







