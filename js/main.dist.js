'use strict';

var slugs = ['power', 'insulation', 'materials', 'design', 'graywater'];
var toggles = { power: 0, insulation: 0, materials: 0, design: 0, graywater: 0 };

var _loop = function _loop(i) {
  var el = document.getElementById(slugs[i] + '-link');
  el.addEventListener('mouseenter', function () {
    document.getElementById(slugs[i] + '-img').classList.add('img--show');
    document.getElementById('overall-img').classList.add('img--dim');
  }, false);
  el.addEventListener('mouseleave', function () {
    document.getElementById(slugs[i] + '-img').classList.remove('img--show');
    document.getElementById('overall-img').classList.remove('img--dim');
  }, false);

  var _loop2 = function _loop2(j) {
    var dl = document.getElementById(slugs[i] + '-info-' + j);
    dl.addEventListener('mouseenter', function () {
      document.getElementById(slugs[i] + '-item-info-img-' + j).classList.add('img--show-h');
      document.getElementById(slugs[i] + '-section-img').classList.add('img--hide-h');
      document.getElementById(slugs[i] + "-main-img").classList.add('img--hide-h');
      if (!(toggles[slugs[i]] == 0 || toggles[slugs[i]] == j)) {
        document.getElementById(slugs[i] + '-item-info-img-' + toggles[slugs[i]]).classList.add('img--hide-h');
      }
    }, false);
    dl.addEventListener('mouseleave', function () {
      document.getElementById(slugs[i] + '-item-info-img-' + j).classList.remove('img--show-h');
      document.getElementById(slugs[i] + '-section-img').classList.remove('img--hide-h');
      document.getElementById(slugs[i] + "-main-img").classList.remove('img--hide-h');
      document.getElementById(slugs[i] + '-item-info-img-1').classList.remove('img--hide-h');
      document.getElementById(slugs[i] + '-item-info-img-2').classList.remove('img--hide-h');
    }, false);
    dl.addEventListener('click', function () {
      document.getElementById(slugs[i] + '-info-' + j).classList.toggle('selected');
      if (document.getElementById(slugs[i] + '-info-' + toggles[slugs[i]]) && toggles[slugs[i]] != j) document.getElementById(slugs[i] + '-info-' + toggles[slugs[i]]).classList.toggle('selected');
      document.getElementById(slugs[i] + '-item-info-img-' + j).classList.toggle('img--show');

      if (toggles[slugs[i]] == 0 || toggles[slugs[i]] == j) {
        document.getElementById(slugs[i] + '-section-img').classList.toggle('img--hide');
        document.getElementById(slugs[i] + "-main-img").classList.toggle('img--hide');
      } else {
        document.getElementById(slugs[i] + '-item-info-img-' + toggles[slugs[i]]).classList.remove('img--show');
      }
      toggles[slugs[i]] = toggles[slugs[i]] == j ? 0 : j;
    }, false);
  };

  for (var j = 1; j < 3; j++) {
    _loop2(j);
  }
};

for (var i = 0; i < slugs.length; i++) {
  _loop(i);
}
