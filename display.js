
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('close').addEventListener("click", closeDescription, false);
  toggle();
  closeDescription();
});

function toggle () {
  if(document.getElementById("toggleButton").checked == true) {
    document.getElementById('wrapper').style.backgroundColor = "#F9E998";
  } else {
    document.getElementById('wrapper').style.backgroundColor = "#E5E9DD";
  }
}

function closeDescription () {
   document.getElementById('descriptionProjet').style.display="none";
  }
