function loadChartsOnMenu(){
	var ulCharts = $("#graficos");

	var charts = $(".menu_chart");

	$(".menu_chart").each(function(){
		var idChart = "" + $(this).attr("id");
		var nomeChart = "" + $(this).attr("name");

		var a = $("<a></a>");
		a.text(nomeChart);
		a.attr("href","#" + idChart);

		var li = $("<li></li>");
		li.append(a);

		ulCharts.append(li);
	});
	
}

function adjustGoogleFormHeight(){
	var h = $("#google_form").height();
    $("#google_form").height(h - 51);
}