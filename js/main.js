let slugs = ['power', 'insulation', 'materials', 'design', 'graywater']
      let toggles = {power: 0, insulation: 0, materials: 0, design: 0, graywater: 0}
      for(let i=0; i < slugs.length; i++) {
        let el = document.getElementById(slugs[i]+'-link')
        el.addEventListener('mouseenter', function() {
          document.getElementById(slugs[i]+'-img').classList.add('img--show');
          document.getElementById('overall-img').classList.add('img--dim');
        }, false);
        el.addEventListener('mouseleave', function() {
          document.getElementById(slugs[i]+'-img').classList.remove('img--show');
          document.getElementById('overall-img').classList.remove('img--dim');
        }, false);
        for(let j = 1; j < 3; j++) {
          let dl = document.getElementById(slugs[i]+'-info-'+j)
          if (dl) {
            dl.addEventListener('mouseenter', function() {
                document.getElementById(slugs[i]+'-item-info-img-'+j).classList.add('img--show-h');
                document.getElementById(slugs[i]+'-section-img').classList.add('img--hide-h');
                document.getElementById(slugs[i]+"-main-img").classList.add('img--hide-h');
                if (!(toggles[slugs[i]] == 0 || toggles[slugs[i]] == j)) {
                document.getElementById(slugs[i]+'-item-info-img-'+toggles[slugs[i]]).classList.add('img--hide-h');
                }
            }, false);
            dl.addEventListener('mouseleave', function() {
                document.getElementById(slugs[i]+'-item-info-img-'+j).classList.remove('img--show-h');
                document.getElementById(slugs[i]+'-section-img').classList.remove('img--hide-h');
                document.getElementById(slugs[i]+"-main-img").classList.remove('img--hide-h');
                document.getElementById(slugs[i]+'-item-info-img-1').classList.remove('img--hide-h');
                document.getElementById(slugs[i]+'-item-info-img-2').classList.remove('img--hide-h');
            }, false);
            dl.addEventListener('click', function() {
                document.getElementById(slugs[i]+'-info-'+j).classList.toggle('selected');

                if(document.getElementById(slugs[i]+'-info-'+toggles[slugs[i]]) && toggles[slugs[i]] != j ) document.getElementById(slugs[i]+'-info-'+toggles[slugs[i]]).classList.toggle('selected');
                
                document.getElementById(slugs[i]+'-item-info-img-'+j).classList.toggle('img--show');
                

                
                if (toggles[slugs[i]] == 0 || toggles[slugs[i]] == j) {
                    document.getElementById(slugs[i]+'-section-img').classList.toggle('img--hide');
                    document.getElementById(slugs[i]+"-main-img").classList.toggle('img--hide');
                    document.getElementById(slugs[i]+'-item-info-detail-text-p-'+j).classList.toggle('text--show');
                } else {
                    document.getElementById(slugs[i]+'-item-info-img-'+toggles[slugs[i]]).classList.remove('img--show');
                    document.getElementById(slugs[i]+'-item-info-detail-text-p-'+j).classList.toggle('text--show');
                    document.getElementById(slugs[i]+'-item-info-detail-text-p-'+toggles[slugs[i]]).classList.remove('text--show');
                }
                toggles[slugs[i]] = toggles[slugs[i]] == j ? 0 : j;

            }, false);
          }
        }
      }