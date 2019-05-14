
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('close').addEventListener("click", closeDescription, false);

function closeDescription () {
   document.getElementById('descriptionProjet').style.display="none";
  }
});
