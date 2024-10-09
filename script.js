'use strict'
let level = 0;
let opac = 0.7;

function controlDeJoc() {
   if(level<=3){
    let randomNumber = 2
    let number = Math.floor(Math.random() * 4) + 1;
    let obiect={'.btn1':1,'.btn2':2,'.btn3':3,'.btn4':4}
    if (number === 1) {
        let randomVal = Math.floor(Math.random() * randomNumber) + 1;///nr random de blinkait
        let valoareRandomAleasa = Math.floor(Math.random()*4)+1
        const result = Object.entries(obiect).find(([key, value]) => value === valoareRandomAleasa);
        const final={result:valoareRandomAleasa}///cheie si valoarea de blink-uri     
        aprindere(randomVal);
    } else if (number === 2) {
        let randomVal = Math.floor(Math.random() * randomNumber) + 1;
        let randomVal2 = Math.floor(Math.random() * randomNumber) + 1;
        let valRandomAleasa1 = Math.floor(Math.random()*4)+1
        let valRandomAleasa2 = Math.floor(Math.random()*4)+1
    
        aprindere(randomVal, randomVal2);
    } else if (number === 3) {
        let randomVal = Math.floor(Math.random() * randomNumber) + 1;
        let randomVal2 = Math.floor(Math.random() * randomNumber) + 1;
        let randomVal3 = Math.floor(Math.random() * randomNumber) + 1;
        aprindere(randomVal, randomVal2, randomVal3);
    } else if (number === 4) {
        let randomVal = Math.floor(Math.random() * randomNumber) + 1;
        let randomVal2 = Math.floor(Math.random() * randomNumber) + 1;
        let randomVal3 = Math.floor(Math.random() * randomNumber) + 1;
        let randomVal4 = Math.floor(Math.random() * randomNumber) + 1;
        aprindere(randomVal, randomVal2, randomVal3, randomVal4);
    }
}else{
   $(`h1`).text(`Felicitari! Ati finalizat toate nivelele, apasati pe escape pentru a juca din nou`)
}
}
function recursiv(buton, repetari, callback) {
    if (repetari === 0) {
        if (callback) callback(); // Apelăm callback-ul când repetările sunt terminate
        return;
    }

    new Audio(`./sound.mp3`).play()
    $(`${buton}`).animate({ opacity: opac }, 1000, function () {
        $(`${buton}`).animate({ opacity: 1 }, 2000, function () {
            setTimeout(() => {
                recursiv(buton, --repetari, callback); // Recursie după animație
            },1000); // Mic delay între repetări
        });
    });
}

function aprindere(...variabil) {
    if (variabil.length === 1) {
        recursiv(`.btn1`, variabil[0], function () {
            jocPropriuZis(variabil[0]);
        });
    } else if (variabil.length === 2) {
        recursiv(`.btn1`, variabil[0], function () {
            recursiv(`.btn2`, variabil[1], function () {
                jocPropriuZis(variabil[0], variabil[1]);
            });
        });
    } else if (variabil.length === 3) {
        recursiv(`.btn1`, variabil[0], function () {
            recursiv(`.btn2`, variabil[1], function () {
                recursiv(`.btn3`, variabil[2], function () {
                    jocPropriuZis(variabil[0], variabil[1], variabil[2]);
                });
            });
        });
    } else if (variabil.length === 4) {
        recursiv(`.btn1`, variabil[0], function () {
            recursiv(`.btn2`, variabil[1], function () {
                recursiv(`.btn3`, variabil[2], function () {
                    recursiv(`.btn4`, variabil[3], function () {
                        jocPropriuZis(variabil[0], variabil[1], variabil[2], variabil[3]);
                    });
                });
            });
        });
    }
}

function jocPropriuZis(...variabile) {
    let nr = [0, 0, 0, 0];

    if (variabile.length === 1) {
        $(`.btn1`).on(`click`, function () {
      
               new Audio(`./sound.mp3`).play()
                $(`.btn1`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn1`).animate({ opacity: 1 });
                }, 1000);
                nr[0]++;
            
            if(nr[0]===variabile[0]){
               jQuery(`h1`).text(`Joc castigat`)
               nr = [0,0,0,0]
              
            }else if(nr[0]>variabile[0]){
                nr=[0,0,0,0]
                $(`h1`).text(`Joc pierdut`)    
                level=0
            
            }
        });
            $(`.btn2`).on(`click`, function () {
               new Audio(`./sound.mp3`).play()
               $(`.btn4`).animate({ opacity: opac });
               setTimeout(() => {
                   $(`.btn4`).animate({ opacity: 1 });
               }, 450);
        jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
               nr = [0,0,0,0];
               level=0 
        });
        $(`.btn3`).on(`click`, function () {
         new Audio(`./sound.mp3`).play()
          $(`.btn3`).animate({ opacity: opac });
          setTimeout(() => {
              $(`.btn3`).animate({ opacity: 1 });
          }, 450);
    jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
        
         nr = [0,0,0,0];
         level=0 
  });
  $(`.btn4`).on(`click`, function () {
   new Audio(`./sound.mp3`).play()
   $(`.btn4`).animate({ opacity: opac });
   setTimeout(() => {
       $(`.btn4`).animate({ opacity: 1 });
   }, 450);
   jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
   nr = [0,0,0,0];
   level=0 
});
    } else if (variabile.length === 2) {
        $(`.btn1`).on(`click`, function () {
            if (nr[0] === variabile[0]+1) {
               jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
                nr = [0,0,0,0];
                level=0
               
            } else {
               new Audio(`./sound.mp3`).play()
                $(`.btn1`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn1`).animate({ opacity: 1 });
                }, 1000);
                nr[0]++;
            }
        });
        $(`.btn2`).on(`click`, function () {
            if (nr[1] === variabile[1]+1 || nr[0] !== variabile[0]) {
               jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
               level=0
                nr = [0,0,0,0];
            } else {
               new Audio(`./sound.mp3`).play()
                $(`.btn2`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn2`).animate({ opacity: 1 });
                }, 450);
                nr[1]++;
            }
            if(nr[1]===variabile[1] && nr[0]===variabile[0]){
               jQuery(`h1`).text(`Joc castigat`)
               nr=[0,0,0,0]
            
            }
        });
        $(`.btn3`).on(`click`, function () {
         new Audio(`./sound.mp3`).play()
                $(`.btn3`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn3`).animate({ opacity: 1 });
                }, 450);
         jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
         nr = [0,0,0,0];
         level=0 
  });
  $(`.btn4`).on(`click`, function () {
   new Audio(`./sound.mp3`).play()
          $(`.btn4`).animate({ opacity: opac });
          setTimeout(() => {
              $(`.btn4`).animate({ opacity: 1 });
          }, 450);
   jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
   nr = [0,0,0,0];
   level=0 
});
     
    } else if (variabile.length === 3) {
        $(`.btn1`).on(`click`, function () {
            if (nr[0] === variabile[0]+1) {
               jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
               level=1
                nr = [0,0,0,0];
            } else {
               new Audio(`./sound.mp3`).play()
                $(`.btn1`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn1`).animate({ opacity: 1 });
                }, 450);
                nr[0]++;
            }
        });
        $(`.btn2`).on(`click`, function () {
            if (nr[1] === variabile[1]+1 || nr[0]!== variabile[0] ) {
               jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
               level=1
                nr = [0,0,0,0];
            } else {
               new Audio(`./sound.mp3`).play()
                $(`.btn2`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn2`).animate({ opacity: 1 });
                }, 450);
                nr[1]++;
            }
        });
        $(`.btn3`).on(`click`, function () {
            if (nr[2] === variabile[2]+1 ||  nr[0]!== variabile[0] ||  nr[1]!== variabile[1]  ) {
               jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
               level=1
                nr= [0,0,0,0];
            } else {
               new Audio(`./sound.mp3`).play()
                $(`.btn3`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn3`).animate({ opacity: 1 });
                }, 450);
                nr[2]++;
            }
           if(nr[0]===variabile[0] && nr[1]===variabile[1] && nr[2]===variabile[2]){
            jQuery(`h1`).text(`Joc castigat`)
            nr=[0,0,0,0]
            
           }
        });
        $(`.btn4`).on(`click`, function () {
         new Audio(`./sound.mp3`).play()
                $(`.btn4`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn4`).animate({ opacity: 1 });
                }, 450);
         jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
         nr = [0,0,0,0];
         level=0 
  });
    } else if (variabile.length === 4) {
        $(`.btn1`).on(`click`, function () {
            if (nr[0] === variabile[0]+1) {
               jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
               level=1
                nr = [0,0,0,0];
            } else {
               new Audio(`./sound.mp3`).play()
                $(`.btn1`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn1`).animate({ opacity: 1 });
                }, 450);
                nr[0]++;
            }
        });
        $(`.btn2`).on(`click`, function () {
            if (nr[1] === variabile[1]+1 ||  nr[0]!== variabile[0] ) {
               jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
               level=1
                nr = [0,0,0,0];
            } else {
               new Audio(`./sound.mp3`).play()
                $(`.btn2`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn2`).animate({ opacity: 1 });
                }, 450);
                nr[1]++;
            }
        });
        $(`.btn3`).on(`click`, function () {
            if (nr[2] === variabile[2]+1 || nr[0]!== variabile[0] || nr[1]!== variabile[1]  ) {
               jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
               level=1
               nr = [0,0,0,0];
            } else {
               new Audio(`./sound.mp3`).play()
                $(`.btn3`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn3`).animate({ opacity: 1 });
                }, 450);
                nr[2]++;
            }
         
        });
        $(`.btn4`).on(`click`, function () {
            if (nr[3] === variabile[3]+1 ||  nr[2]!== variabile[2] ||  
               nr[1]!== variabile[1] ||  nr[0]!== variabile[0] ) {
               jQuery(`h1`).text(`Ati pierdut, incercati din nou`)
               level=1
                nr = [0,0,0,0];
            } else {
               new Audio(`./sound.mp3`).play()
                $(`.btn4`).animate({ opacity: opac });
                setTimeout(() => {
                    $(`.btn4`).animate({ opacity: 1 });
                }, 450);
                nr[3]++;
            }
            if (nr[3] === variabile[3] && nr[2] === variabile[2] &&
                nr[1] === variabile[1] && nr[0] === variabile[0]){
               jQuery(`h1`).text(`Joc castigat`)
               nr=[0,0,0,0]
              
            }
        });
 
        }
      }
    


jQuery(document).on(`keydown`, function (ev) {
   if(level!==5){
    if (ev.key !== 'Escape' || ev.key !== 'Esc'){
      $(`h1`).text(`${++level}`)
        controlDeJoc();
    }else{
      level = 0
    }
    
   }
});
