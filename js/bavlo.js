var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {return "<strong>"+d+"</strong> <span style='color:red'></span>";})

var svg = d3.select("#bavlo")
			.selectAll("path")
			.on("mouseover", function(d){
		          d3.select(this).style("opacity",1);
		          svg.call(tip);
		          //console.log(this.id);
		          tip.show(this.id);
				    })
			.on("mouseout", function(d) {
			          d3.select(this).style("opacity",0.1);
			          tip.hide();
				    });
