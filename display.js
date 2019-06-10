
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('close').addEventListener("click", closeDescription);
  toggle();
});

function toggle () {
  if(document.getElementById("toggleButton").checked == true) {
    document.getElementById('wrapper').style.backgroundColor = "#E5E9DD";
    document.getElementById('legende').style.display = "block";
    document.getElementById('podcast').style.display = "none";
  } else {
    document.getElementById('wrapper').style.backgroundColor = "#E5E9DD";
    document.getElementById('legende').style.display = "none";
    document.getElementById('podcast').style.display = "block";
  }
}

function closeDescription () {
   document.getElementById('descriptionProjet').style.display="none";
  }


