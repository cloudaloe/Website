//
// some page-level rendering functions
//

var clientCodeDebug = 'low'; 
var data;

function initializeBackground() {
	// benign page load transitions	
	d3.select("body").transition()
		.style("background-color", "#2a2a2a")
		.duration(500).ease("linear"); }

function initializeChartSpace() {
// benign page load transitions
var chartSpace = d3.select("#chartSpace");
chartSpace.style("display", "inherit");
chartSpace.transition().style("margin-top", "10%").duration(1500).ease("cubic-in-out");	
}

function hideQuestionBar() {
	d3.select("#questionContainer").style("display","none");
}
		