document.addEventListener('DOMContentLoaded', function() {
  interactiveMap();
});

function interactiveMap() {
  var mx = document.getElementById('MichelXavier');
  var yv = document.getElementById('YvonJean');
  var el = document.getElementById('ErwanLaurence');
  var yvv = document.getElementById('YvesVeronique');
  var vc = document.getElementById('VincentCeline');
  var mb = document.getElementById('MarionBenjamin');

  var pm = document.getElementById('PMichel');
  var pYvon = document.getElementById('PYvon');
  var pc= document.getElementById('PCeline');
  var pmarion= document.getElementById('PMarion');
  var pYves= document.getElementById('PYves');
  var pe= document.getElementById('PErwan');


  mx.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Michel & Xavier';
    pm.style.display="block";
    invisible([pYvon, pc, pmarion, pYves, pe]);
  });

  yv.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Yvon & Jean';
    invisible([pm, pc, pmarion, pYves, pe]);
    pYvon.style.display="block";

  });

  el.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Erwan & Laurence';
    invisible([pm, pc, pmarion, pYves, pYvon]);
    pe.style.display="block";

  });

  yvv.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Yves & Veronique';
     invisible([pm, pc, pmarion, pe, pYvon]);
    pYves.style.display="block";

  });

  vc.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Vincent & Celine';
    invisible([pm, pYves, pmarion, pe, pYvon]);
     pc.style.display="block";

  });

  mb.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Marion & Benjamin';
     invisible([pc, pYves, pmarion, pe, pYvon]);
    pmarion.style.display="block";

  });

}

function invisible (params){
  for (i=0; i<params.length; i++) {
    params[i].style.display="none";
  }
}
