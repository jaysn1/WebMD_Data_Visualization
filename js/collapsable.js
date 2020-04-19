function min_max(id){
    all_elems = ['search bar', 'bubble chart', 'map', 'bavlo'];

    if(document.getElementById(id).style.height != "100%"){
      document.getElementById(id).style.height = '100%';
      document.getElementById(id).style.width = '90%';
      
      selected_elem = all_elems.filter(x => !Array(id).includes(x));
      for (i in selected_elem){document.getElementById(selected_elem[i]).style.display="none";}
      document.getElementById(id).style.display = "block";
    }
    else{
      document.getElementById(id).style.height = '90%';
      if(id=='bubble chart'){document.getElementById(id).style.width = '20%';}
        else{document.getElementById(id).style.width = '60%';}

      for (i in all_elems){
        document.getElementById(all_elems[i]).style.display="block";
      }
    
    }
}