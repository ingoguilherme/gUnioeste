function loadChartsOnMenu(){
	var ulCharts_cece = $("#graficos_cece");
	var ulCharts_ccsa = $("#graficos_ccsa");
	var ulCharts_cel = $("#graficos_cel");
	var ulCharts_geral = $("#graficos_geral");

	$(".chart_cece").each(function(){
		var idChart = "" + $(this).attr("id");
		var nomeChart = "" + $(this).attr("name");

		var a = $("<a></a>");
		a.text(nomeChart);
		a.attr("href","#" + idChart);

		var li = $("<li></li>");
		li.append(a);

		ulCharts_cece.append(li);
	});

	$(".chart_ccsa").each(function(){
		var idChart = "" + $(this).attr("id");
		var nomeChart = "" + $(this).attr("name");

		var a = $("<a></a>");
		a.text(nomeChart);
		a.attr("href","#" + idChart);

		var li = $("<li></li>");
		li.append(a);

		ulCharts_ccsa.append(li);
	});

	$(".chart_cel").each(function(){
		var idChart = "" + $(this).attr("id");
		var nomeChart = "" + $(this).attr("name");

		var a = $("<a></a>");
		a.text(nomeChart);
		a.attr("href","#" + idChart);

		var li = $("<li></li>");
		li.append(a);

		ulCharts_cel.append(li);
	});

	$(".chart_geral").each(function(){
		var idChart = "" + $(this).attr("id");
		var nomeChart = "" + $(this).attr("name");

		var a = $("<a></a>");
		a.text(nomeChart);
		a.attr("href","#" + idChart);

		var li = $("<li></li>");
		li.append(a);

		ulCharts_geral.append(li);
	});
	
}

function adjustGoogleFormHeight(){
	var h = $("#google_form").height();
    $("#google_form").height(h - 51);
}