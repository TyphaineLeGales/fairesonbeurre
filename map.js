document.addEventListener('DOMContentLoaded', function() {
  interactiveMap();
});

function interactiveMap() {
  var mx = document.getElementById('pointMichel');
  var yv = document.getElementById('pointYvon');
  var el = document.getElementById('pointErwan');
  var yvv = document.getElementById('pointYves');
  var vc = document.getElementById('pointCeline');
  var mb = document.getElementById('pointMarion');

  var pm = document.getElementById('PMichel');
  var pYvon = document.getElementById('PYvon');
  var pc= document.getElementById('PCeline');
  var pmarion= document.getElementById('PMarion');
  var pYves= document.getElementById('PYves');
  var pe= document.getElementById('PErwan');

  var vm = document.getElementById('vidMichel');
  var vidC = document.getElementById('vidCeline');
  var vYvo = document.getElementById('vidYvon');
  var vidMa = document.getElementById('vidMarion');
  var ve = document.getElementById('vidErwan');

  var nMi = document.getElementsByClassName('network Michel');
  var nYvo = document.getElementsByClassName('network Yvon');
  var nYve = document.getElementsByClassName('network Yves');
  var nM = document.getElementsByClassName('network Marion');
  var nC = document.getElementsByClassName('network Celine');
  var nE= document.getElementsByClassName('network Erwan');


  mx.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Michel & Xavier';
    pm.style.display="block";
    vm.style.display="block";
    invisible([pYvon, pc, pmarion, pYves, pe]);
    invisible([vidC, vYvo, vidMa, ve]);
    pauseVid([vidC, vYvo, vidMa, ve]);
    iNetwork(nYvo);
    iNetwork(nYve);
    iNetwork(nC);
    iNetwork(nE);
    iNetwork(nM);

  });
  mx.addEventListener('click', function() {
    for(var i=0; i<nMi.length; i++) {
      nMi[i].style.opacity="1";
    }
  });

  yv.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Yvon & Jean';
    pYvon.style.display="block";
    vYvo.style.display="block";
    invisible([pm, pc, pmarion, pYves, pe]);
    invisible([vm, vidC, vidMa, ve]);
    pauseVid([vm, vidC, vidMa, ve]);
    iNetwork(nMi);
    iNetwork(nYve);
    iNetwork(nC);
    iNetwork(nE);
    iNetwork(nM);
  });
   yv.addEventListener('click', function() {
    for(var i=0; i<nYvo.length; i++) {
      nYvo[i].style.opacity="1";
    }
  });

  el.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Erwan & Laurence';
    pe.style.display="block";
    ve.style.display="block";
    invisible([pm, pc, pmarion, pYves, pYvon]);
    invisible([vm, vidC, vYvo, vidMa]);
    pauseVid([vm, vidC, vYvo, vidMa]);
    iNetwork(nMi);
    iNetwork(nYve);
    iNetwork(nC);
    iNetwork(nYvo);
    iNetwork(nM);

  });
  el.addEventListener('click', function() {
    for(var i=0; i<nE.length; i++) {
      nE[i].style.opacity="1";
    }
  });

  yvv.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Yves & Veronique';
    pYves.style.display="block";
     invisible([pm, pc, pmarion, pe, pYvon]);
     invisible([vm, vidC, vYvo, vidMa, ve]);
     pauseVid([vm, vidC, vYvo, vidMa, ve]);
    iNetwork(nMi);
    iNetwork(nE);
    iNetwork(nC);
    iNetwork(nYvo);
    iNetwork(nM);

  });

   yvv.addEventListener('click', function() {
    for(var i=0; i<nYve.length; i++) {
      nYve[i].style.opacity="1";
    }
  });

  mb.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Marion & Benjamin';
     pmarion.style.display="block";
     vidMa.style.display="block";
    invisible([pc, pYves, pm, pe, pYvon]);
    invisible([vm, vidC, vYvo, ve]);
    pauseVid([vm, vidC, vYvo, ve]);
    iNetwork(nMi);
    iNetwork(nE);
    iNetwork(nC);
    iNetwork(nYvo);
    iNetwork(nYve);
  });

   mb.addEventListener('click', function() {
    for(var i=0; i<nM.length; i++) {
      nM[i].style.opacity="1";
    }
  });

  vc.addEventListener('mouseover', function() {
    document.getElementById("nom").textContent = 'Vincent & Celine';
    pc.style.display="block";
    vidC.style.display="block";
     invisible([pm, pYves, pmarion, pe, pYvon]);
     invisible([vm, vYvo, vidMa, ve]);
     pauseVid([vm, vYvo, vidMa, ve]);
      iNetwork(nMi);
    iNetwork(nE);
    iNetwork(nM);
    iNetwork(nYvo);
    iNetwork(nYve);
  });

   vc.addEventListener('click', function() {
    for(var i=0; i<nC.length; i++) {
      nC[i].style.opacity="1";
    }
  });

}

function invisible (params){
  for (var i=0; i<params.length; i++) {
    params[i].style.display="none";
  }
}

function iNetwork (params){
  for (var i=0; i<params.length; i++) {
    params[i].style.opacity="0";
  }
}

function pauseVid (params) {
  for (var i=0; i<params.length; i++) {
    params[i].pause();
  }
}



