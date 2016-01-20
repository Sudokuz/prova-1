/* your code should go here */

var tmpl = "<li>"+
          '<div class="selfie">'+
'            <img src="PICTURE">'+    
'          </div>'+
'          <div class="stats">  '+
'            <h2>NAME <small>CATEGORY</small></h2>'+
'            <strong>Time</strong>  MINUTES mins '+
'            <strong>Selfies</strong> PHOTOS   '+ 
'          </div> '+
'          <div class="badge"> '+
'            #POSITION'+
'          </div>'+
'        </li> ';

var tmpl2 = '<li>'+
          '<div> NAME (CATEGORY) </div>' +
        '  <div>  ' +
            '<strong>Time</strong>  MINUTES mins '+
         ' </div>'+
          '<div>  '  +
            '<strong>Selfies</strong> PHOTOS'    +
          '</div> '+
          '<div> '+
            '<strong>#POSITION</strong> ' +
          '</div> '   +
'      </li>';

$(document).ready(function(){
    
    init();
  
  $("#btn-filter").click(function() {
      
      if( $("#select-filter").val() == "all") {init();}
      
      if( $("#select-filter").val() == "pro") {filter("pro");}
      
      if( $("#select-filter").val() == "amateur") {filter("amateur");}
  });
    
    
});

init = function(){
    
    $("#top-selfiers").empty();
    $("#selfiers").empty();
    
    for(var i = 0; i < Math.min(3, data.length); i++){
        
        $("#top-selfiers").append(
                
            tmpl.replace("PICTURE", data[i].pic)
                .replace("NAME", data[i].name)
                .replace("CATEGORY", data[i].category)
                .replace("MINUTES", data[i].time)
                .replace("PHOTOS", data[i].sefies)
                .replace("POSITION", (i+1))
        
        );
        
    }
    
    for(;i<data.length; i++){
        
        $("#selfiers").append(
        
            tmpl2.replace("NAME", data[i].name)
                 .replace("CATEGORY", data[i].category)
                 .replace("MINUTES", data[i].time)
                 .replace("PHOTOS", data[i].sefies)
                 .replace("POSITION", (i+1))
            
        );
        
        
    }
};

filter = function(par){
    
    $("#top-selfiers").empty();
    $("#selfiers").empty();
    var i = 0;
    for(var compl = 0; compl < Math.min(3, data.length); i++){
        if(data[i].category == par){

            $("#top-selfiers").append(
                
            tmpl.replace("PICTURE", data[i].pic)
                .replace("NAME", data[i].name)
                .replace("CATEGORY", data[i].category)
                .replace("MINUTES", data[i].time)
                .replace("PHOTOS", data[i].sefies)
                .replace("POSITION", (++compl))
        
            );
        }
        
    }
    
    for(;i<data.length; i++){
        if(data[i].category == par){
            $("#selfiers").append(
        
            tmpl2.replace("NAME", data[i].name)
                 .replace("CATEGORY", data[i].category)
                 .replace("MINUTES", data[i].time)
                 .replace("PHOTOS", data[i].sefies)
                 .replace("POSITION", (++compl))
            
            );
        }
        
    }
    
}







