

var w = d3.select("body").node().getBoundingClientRect().width
var h = d3.select("body").node().getBoundingClientRect().height
var svg = d3.select("#hi")
			.append("svg")
						.attr("width",w)
			.attr("height",h)
			.append("g")
			.attr("width",w)
			.attr("height",h)

for(var i = 0; i < 8290; i++){
	// conso
	// console.log(Math.random()*w)
	var x1 = Math.random()
	var w1 = x1*w
	if((x1 < 0.2 || x1 > 0.8) || (x1 >= 0.6 && x1 < 0.7)){
		
		svg.append("line")
			.attr("x1", w1)
			.attr("x2",w1)
			.attr("y1",0)
			.attr("y2",0)
			.datum({"hi":h, "hii": hii(w1)})
			.attr("class","hi")		
	}
	else if((x1 >= 0.2 && x1 < 0.3) || (x1 >= 0.5 && x1 < 0.6) || (x1 >= 0.7 && x1 < 0.8)){
		svg.append("line")
			.attr("x1", w1)
			.attr("x2",w1)
			.attr("y1",0)
			.attr("y2",0)
			.datum({"hi":h*.2, "hii": hii(w1)})
			.attr("class","hi")	
		svg.append("line")
			.attr("x1", w1)
			.attr("x2",w1)
			.attr("y1",h*.8)
			.attr("y2",h*.8)
			.datum({"hi":h, "hii": hii(w1)})
			.attr("class","hi")	
	}
	else if(x1 >= 0.3 && x1 < 0.5){
		svg.append("line")
			.attr("x1", w1)
			.attr("x2",w1)
			.attr("y1",0)
			.attr("y2",0)
			.datum({"hi":h*.4, "hii": hii(w1)})
			.attr("class","hi")	
		svg.append("line")
			.attr("x1", w1)
			.attr("x2",w1)
			.attr("y1",h*.54)
			.attr("y2",h*.54)
			.datum({"hi":h, "hii": hii(w1)})
			.attr("class","hi")	
	}	


}
function hii(w){
	var sign = Math.floor(Math.random()*2) == 1 ? 1 : -1;
	var prob = (Math.random() < 0.6)
	if(prob){return w}
	else{ return sign*Math.random()*20 + w }
}
d3.selectAll("line.hi")
		.append("text")
            .text("No tax")
              .attr("class","hii")
              .style("font-weight","300")
              .style("font-style","italic")
              // .attr("x",)
              // .attr("dy",2 * 5.9)
              // .attr("transform","rotate(-90)")
d3.selectAll("line.hi")
	.style("stroke-width", function(){ return Math.random() * 3})
	.style("stroke", "e5f7ff")
	.transition()
	.style("opacity",function(){
		var hi = Math.random();
		if(hi <= 0.97){ return 0}
		else{ return Math.random()/2}
	})
	.delay(function(){ return Math.random() * 112000})
	.duration(function(){ return Math.random() * 1100})
	.attr("y2", function(){
		return d3.select(this).datum().hi
	})
	.attr("x2", function(){ return d3.select(this).datum().hii})


