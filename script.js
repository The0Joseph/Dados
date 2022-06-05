
let id = 0;

let btnJugar = document.getElementById("jugar");

let dadito = document.getElementById("dadito");

let bgTotal = document.getElementById("bgTotal");
let total = document.getElementById("total");

let recolector = null;

function getRamdonNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setResult(elementTd){
    
    let numeroRandom = getRamdonNumber(1,7);
    elementTd.innerText = numeroRandom;
    dadito.src = "../img/dado"+numeroRandom+".svg";
    recolector += numeroRandom;
}

function setfocos(id, style){
    if (id == 1 ) {
        style.classList.add('ballOff')
    }
    else if (id == 2 ) {
        style.classList.add('ballOff')
    }
    else if (id == 3 ) {
        style.classList.add('ballOff')
        return true;
    }
}

btnJugar.addEventListener('click', function(){
    btnJugar.disabled = true;
    dadito.src = "../img/dadoO.svg"
    id++;
    if (id > 3) {
        dadito.classList.add('dado-block');
        setTimeout(function(){
            dadito.classList.remove('dado-block');
            btnJugar.disabled = true;
            total.innerText = recolector;
        },1000) 
    }else{
        dadito.classList.add('dado');
        setTimeout(function(){
            let ballid = document.getElementById("ballid0"+id);
            let puntos = document.getElementById("puntos"+id);
            btnJugar.disabled = false;
            dadito.classList.remove('dado');
            setResult(puntos);
            setfocos(id, ballid);
            if (setfocos(id, ballid)) {
                total.innerText = recolector;
                if (recolector <= 5) {
                    bgTotal.classList.add('bg-danger');
                }else if(recolector > 5 && recolector <= 11 ){
                    bgTotal.classList.add('bg-warning');
                    bgTotal.style.color = "black";
                }
                else if(recolector > 11 && recolector <= 18 ){
                    bgTotal.classList.add('bg-success');
                }
            }
            console.log(id);
            console.log("ballid0"+id)
        },1000) 
    }
})

/*

 puntaje > 0 && puntaje <= 5
||puntaje > 5 && puntaje <= 11
|| puntaje > 11 && puntaje <= 18



function setResult(){
    let numeroRandom = getRamdonNumber(1,7);
    let element = document.createElement('li');
    element.innerText += `${numeroRandom}`;
    document.getElementById('contenedorResultados').append(element);
    recolector += numeroRandom;
}

*/








