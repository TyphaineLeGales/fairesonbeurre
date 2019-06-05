document.addEventListener('DOMContentLoaded', function() {
  interactiveMap();
});

function interactiveMap() {
  var mx = document.getElementById('MichelXavier');
  var yv = document.getElementById('YvonJean');
  var el = document.getElementById('ErwanLaurence');
  var bp = document.getElementById('BrunoPascal');
  var yvv = document.getElementById('YvesVeronique');
  var vc = document.getElementById('VincentCeline');
  var mb = document.getElementById('MarionBenjamin');

  var nom = document.getElementById("nom");
  var hec = document.getElementById("hectares");
  var troupeau = document.getElementById("troupeau");
  var litrage = document.getElementById("litrage");

  mx.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Michel et Xavier';
    hec.textContent = "68 hectares";
    troupeau.textContent= "83 jersey";
    litrage.textContent= "600 00 Litres";
  });

  yv.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Yvon et Jean';
    hec.textContent = "122 hectares";
    troupeau.textContent= "90 Bretonne Pie Noire";
    litrage.textContent= "200 00 Litres";
  });

  el.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Erwan et Laurence';
    hec.textContent = "";
    troupeau.textContent= "";
    litrage.textContent= "";
  });

  bp.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Bruno et Pascal';
    hec.textContent = "";
    troupeau.textContent= "";
    litrage.textContent= "";
  });

  yvv.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Yves et Veronique';
    hec.textContent = "";
    troupeau.textContent= "";
    litrage.textContent= "";
  });

  vc.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Vincent et Celine';
    hec.textContent = "";
    troupeau.textContent= "";
    litrage.textContent= "";
  });

  mb.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Marion et Benjamin';
    hec.textContent = "";
    troupeau.textContent= "";
    litrage.textContent= "";
  });

}

