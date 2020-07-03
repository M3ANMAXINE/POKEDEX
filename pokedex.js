
$("#btn").click(function() {
$("#idImagen").empty()
$("#nombre").empty()
$("#type").empty()
// $("#type2").empty()
// $("#peso").empty()
$("#stat0").empty()
$("#stat1").empty()
$("#stat2").empty()
$("#stat3").empty()
$("#stat4").empty()
$("#stat5").empty()


var idPokedex = $("#procurar").val();



$.ajax({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/" + idPokedex + "/",

}).done(function (dato){ 

   var poks = [];
   var poks2 = [];

    $("#idImagen").append("<img src='" + dato.sprites.front_default + "'>");
    $("#nombre").append("Name:" + "<h5>" + dato.name + "</h5>");
    $("#type").append("Type:" + "<h5>" + dato.types[0].type.name + "</h5>");
    $("#stat0").append("<h4>" + dato.stats[0].base_stat + "</h4>" );
    $("#stat1").append("<h4>" + dato.stats[1].base_stat + "</h4>" );
    $("#stat2").append("<h4>" + dato.stats[2].base_stat + "</h4>" );
    $("#stat3").append("<h4>" + dato.stats[3].base_stat + "</h4>" );
    $("#stat4").append("<h4>" + dato.stats[4].base_stat + "</h4>" );
    $("#stat5").append("<h4>" + dato.stats[5].base_stat + "</h4>" );





    // $("#type2").append("<h5>" + dato.types[1].type.name + "</h5>")
    // $("#peso").append("<h5>" + dato.weight + "</h5>")

    
for(var i = 0; i < dato.stats.length; i++){ poks[i] = dato.stats[i].stat.name;}

for(var r = 0; r < dato.stats.length; r++){ poks2[r] = dato.stats[r].base_stat;}   




   
    
       //

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light1", // "light1", "light2", "dark1", "dark2"
	title:{
		text:  dato.name
    },
   	axisY: {
		title: "VALUE"
    },
    
	data: [{    

		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
        legendText: "STATS",
		dataPoints: [      
            { y: poks2[0], label: poks[0]},
            { y: poks2[1], label: poks[1]},
            { y: poks2[2], label: poks[2]},
            { y: poks2[3], label: poks[3]},
            { y: poks2[4], label: poks[4]},
            { y: poks2[5], label: poks[5]},
           
		]
	}]
});
chart.render();

 });
 });

