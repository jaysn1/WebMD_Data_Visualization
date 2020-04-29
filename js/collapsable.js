function min_max(id){
    all_elems = ['search bar', 'bubble chart', 'map', 'bavlo'];
    console.log(id);
    if(document.getElementById(id).style.height != "100%"){

      document.getElementById(id).style.height = '100%';
      document.getElementById(id).style.width = '90%';
    
      parent_width = document.getElementById(id).clientWidth;
      d3.select(document.getElementById(id).getElementsByClassName('min_max')[0]).style("right", -parent_width);

      selected_elem = all_elems.filter(x => !Array(id).includes(x));
      for (i in selected_elem){document.getElementById(selected_elem[i]).style.display="none";}
      //document.getElementsBy

      document.getElementById(id).style.display = "block";
      console.log(id);
      if(id == 'bubble chart'){
        document.getElementById(id).style['margin-left'] = "0%";
        document.getElementById(id).style['margin-top'] = "0%";
        generate(med_review);
      }
      else if(id=='map'){
        d3.select('#legend-rect').remove();
        d3.select('#legend-text1').remove();
        d3.select('#legend-text2').remove();
        d3.select('#legend-circle1').remove();
        d3.select('#legend-circle2').remove();
        var legend = d3.select("#map").select("svg");
        var width = parseInt(legend.style("width"));
        var height = parseInt(legend.style("height"));

          legend.append("rect").attr("id", "legend-rect")
          .attr("height", 55)
          .attr("width", 100)
          .attr("x", width*0.9)
          .attr("y", height*0.85)
          .attr("fill",  "#DDDDDD")
          .style("stroke", "black")
          .style("rx", 5);

          legend.append("circle").attr("id", "legend-circle1")
          .attr("cx", width*0.91)
          .attr("cy", height*0.875)
          .style("fill", "green")
          .attr("r", 4.5);

          legend.append("text").attr("id", "legend-text1")
          .attr("x", width*0.94)
          .attr("y", height*0.88)
          .attr("text-anchor", "middle")
          .text("Medicines");

          legend.append("circle").attr("id", "legend-circle2")
          .attr("cx", width*0.91)
          .attr("cy", height*0.91)
          .style("fill", "red")
          .attr("r", 4.5);

          legend.append("text").attr("id", "legend-text2")
          .attr("x", width*0.94)
          .attr("y", height*0.915)
          .attr("text-anchor", "middle")
          .text("Symptoms");
      }
    }
    else{
      if(id=='bubble chart'){
        document.getElementById(id).style.width = '80%';
        document.getElementById(id).style.height = '60%';
        document.getElementById(id).style['margin-left'] = "10%";
        document.getElementById(id).style['margin-top'] = "2%";
        generate(medicines);
      }
      else if(id=='bavlo'){
        document.getElementById(id).style.width = '18%';
        document.getElementById(id).style.height = '80%';
      }
      else if(id=='map'){
        document.getElementById(id).style.width = '80%';
        document.getElementById(id).style.height = '80%';
        document.getElementById(id).style['margin-left'] = "1%";
        d3.select('#legend-rect').remove();
        d3.select('#legend-text1').remove();
        d3.select('#legend-text2').remove();
        d3.select('#legend-circle1').remove();
        d3.select('#legend-circle2').remove();
        
        var legend = d3.select("#map").select("svg");
        var width = parseInt(legend.style("width"));
        var height = parseInt(legend.style("height"));

          legend.append("rect").attr("id", "legend-rect")
          .attr("height", 55)
          .attr("width", 100)
          .attr("x", width*0.9)
          .attr("y", height*0.85)
          .attr("fill",  "#DDDDDD")
          .style("stroke", "black")
          .style("rx", 5);

          legend.append("circle").attr("id", "legend-circle1")
          .attr("cx", width*0.91)
          .attr("cy", height*0.88)
          .style("fill", "green")
          .attr("r", 4.5);

          legend.append("text").attr("id", "legend-text1")
          .attr("x", width*0.94)
          .attr("y", height*0.89)
          .attr("text-anchor", "middle")
          .text("Medicines");

          legend.append("circle").attr("id", "legend-circle2")
          .attr("cx", width*0.91)
          .attr("cy", height*0.92)
          .style("fill", "red")
          .attr("r", 4.5);

          legend.append("text").attr("id", "legend-text2")
          .attr("x", width*0.94)
          .attr("y", height*0.93)
          .attr("text-anchor", "middle")
          .text("Symptoms");
      }
      else{
        document.getElementById(id).style.width = '60%';
      }
      for (i in all_elems){
        document.getElementById(all_elems[i]).style.display="block";
        parent_width = document.getElementById(all_elems[i]).clientWidth;
      }
      change_bubble();
      set_x();
    }
}

function set_x(){
  all_elems = ['bubble chart', 'map'];
  for (i in all_elems){
      parent_width = document.getElementById(all_elems[i]).clientWidth;
      d3.select(document.getElementById(all_elems[i]).getElementsByClassName('min_max')[0]).style("right", -parent_width+10);
      document.getElementById(all_elems[i]).getElementsByClassName('min_max')[0].style.display = "block";
  }
}