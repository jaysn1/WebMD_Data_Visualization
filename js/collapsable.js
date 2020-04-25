function min_max(id){
    all_elems = ['search bar', 'bubble chart', 'map', 'bavlo'];
    
    if(document.getElementById(id).style.height != "100%"){

      document.getElementById(id).style.height = '100%';
      document.getElementById(id).style.width = '90%';
    
      parent_width = document.getElementById(id).clientWidth;
      d3.select(document.getElementById(id).getElementsByClassName('min_max')[0]).style("right", -parent_width);

      selected_elem = all_elems.filter(x => !Array(id).includes(x));
      for (i in selected_elem){document.getElementById(selected_elem[i]).style.display="none";}
      document.getElementById(id).style.display = "block";
      console.log(id);
      if(id == 'bubble chart'){
        generate(med_review);
      }
    }
    else{
      document.getElementById(id).style.height = '90%';
      if(id=='bubble chart'){document.getElementById(id).style.width = '20%';}
        else{document.getElementById(id).style.width = '60%';}
      if(id == 'bubble chart'){
        generate(med_review);
      }
      for (i in all_elems){
        document.getElementById(all_elems[i]).style.display="block";
        parent_width = document.getElementById(all_elems[i]).clientWidth;
      }
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