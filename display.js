
document.addEventListener('DOMContentLoaded', function() {
  toggle();
  overSlider();
});

function toggle () {
  if(document.getElementById("toggleButton").checked == true) {
    document.getElementById('legende').style.display = "none";
    document.getElementById('podcast').style.display = "block";
    document.getElementById('goToSlider').textContent = "go to pictures";

  } else {
    document.getElementById('legende').style.display = "block";
    document.getElementById('podcast').style.display = "none";
     document.getElementById('goToSlider').textContent = "go to podcast";
  }
}

function closeDescription () {
   document.getElementById('descriptionProjet').style.display="none";
  }


function overSlider () {
  document.getElementById('box').addEventListener("mouseover",function() {
    document.getElementById('goToSlider').style.opacity = "1";
  });
  document.getElementById('box').addEventListener("mouseout",function() {
    document.getElementById('goToSlider').style.opacity = "0";
  });
}


