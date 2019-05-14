
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('close').addEventListener("click", closeDescription, false);

function closeDescription () {
   document.getElementById('descriptionProjet').style.display="none";
  }
});

function detailFarmer () {
  document.getElementById('wrapper').style.backgroundColor = "red";
}

function pictureFarmerOn () {
  document.getElementById('picture').style.display = "block";
  console.log('on');
}

function pictureFarmerOff () {
  document.getElementById('picture').style.display = "none";
  console.log('off');
}
