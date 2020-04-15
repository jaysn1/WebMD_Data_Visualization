const list = new Array;
var len = list.length;


//waiting for the page to load
window.addEventListener('load', function () {
  ul = document.getElementById("stateList");
  ul.style.display = "none";
})

function addToList(){

      var x = document.getElementById("myInput");
      list.push(x.value);

      var button = document.createElement("button");
      button.classList.add("button");
      button.innerHTML = x.value;

      // 2. Append somewhere
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(button);

      button.addEventListener ("click", function() {
      body.removeChild(button);
      document.getElementById("button1").classList.remove("disabled");
      var index = list.indexOf(button.innerHTML);
      if (index !== -1) list.splice(index, 1);
      })

      if (list.length>=3) document.getElementById("button1").classList.add("disabled");
}


function mySearchFunction() {

  var input, filter, ul, li, item, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("stateList");
  
  li = ul.getElementsByTagName("p");

  if(input.value == "")
  {
    ul.style.display = "none";
  }
  else{
    for (i = 0; i < li.length; i++) {
      item = li[i];
      txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        ul.style.display = "";
        li[i].style.display = "";

        }
      else{
          li[i].style.display = "none";
        }
    }
  }

}
