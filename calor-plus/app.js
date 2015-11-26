/* your code should go here */

$(document).ready(function(){
  
    $("#btn-filter").click( function() {
        controller.init();
    });
  
});

var model = {
    
  collection: data,
    
    getWeek: function(currentCity) {
        
        var week = [];
        for(var i = 0; i < controller.getCollectionLength(); i++){
            
            /* check for city first */
            if ( this.collection[i].city != currentCity) { continue; }
            
            /* initialise new day to display */
            if( week[this.collection[i].day] == undefined ){
                week[this.collection[i].day] = {
                    "day" : this.collection[i].day,
                    "tmin" : this.collection[i].temperature,
                    "tmax" : this.collection[i].temperature,
                    "cond" : this.collection[i].condition
                };
            }
            
            /* update day's min and max temperatures */
            else{ 
                if( week[this.collection[i].day].tmin > this.collection[i].temperature){
                    week[this.collection[i].day].tmin = this.collection[i].temperature;
                }
                if( week[this.collection[i].day].tmax < this.collection[i].temperature){
                    week[this.collection[i].day].tmax = this.collection[i].temperature;
                }
            }
            
        }
        return week;        
    }
    
};

var view = {
    
    tmpl: "<li>" +
            "<div class='icon'>" +
                "<img src='img/icons/IMAGE.png'>" +      
            "</div>" +
            "<div class='stats'>" +
                "<h2>DAY</h2>" +
                "<strong>min</strong> TMINºC" +
                "<strong>max</strong> TMAXºC" + 
            "</div> " +
          "</li> ",
    
    render: function(currentWeek){
        
        /* reset div's html */
        $("#summary").html("");
        
        /* render each day */
        for( var day in currentWeek ){
            
            $("#summary").append(this.tmpl  .replace("IMAGE", currentWeek[day].cond)
                                            .replace("DAY", currentWeek[day].day)
                                            .replace("TMIN", currentWeek[day].tmin)
                                            .replace("TMAX", currentWeek[day].tmax)
                                );
        }
    }
    
};

var controller = {
    init: function(){
        var currentCity = this.getCity();
        var currentWeek = model.getWeek(currentCity);
        view.render(currentWeek);
    },
    
    getCity: function(){
        return $("select[name=slct]").val();
    },
    
    getCollectionLength: function(){
        return model.collection.length;
    }
    
};
