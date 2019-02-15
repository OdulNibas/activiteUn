var content = document.getElementById('content');
var truc = document.getElementById('truc');

truc.addEventListener('click', function(){


  content.style.transform = "rotate(1250deg)";
  content.style.transition = "all 0.5s";
  content.style.backgroundColor = "#aa1728";
  content.style.borderRadius = "40%/15px";
  truc.style.transform = "rotate(-180deg)";
  truc.textContent = "euh j'ai la tête qui tourne là, buurp !!";




});
