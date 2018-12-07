function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
var w1 = [];
var w2 = [];
var started = false;
var lottSpeed = 50;
var lottTime = 600;
var los1 = true;
var los2 = true;
var los3 = true;
var time = 0;
var modal = document.getElementById('myModal');
var modal_close = document.getElementsByClassName("close")[0];
var losowania = 0;
var specjalne = 0;
var volume = 1;

w1 = new Array(10);
    w1[0] = "zdjęcie jakiejś tkaniny";
    w1[1] = "zdjęcie komputera";
    w1[2] = "film z komputera";
    w1[3] = "śmieszna morda moja";
    w1[4] = "widok z okna";
    w1[5] = "coś do jedzenia";
    w1[6] = "zdjęcie zeszytu";
    w1[7] = "zdjęcie z Grecji";
    w1[8] = "zdjęcie pokoju";
    w1[9] = "zdjęcie dowolnego przedmiotu z biurka";
    w1[10] = "coś innego wymyśl se ";


var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var ryjceDiv = document.getElementById("ryjce");
var progress = document.getElementById("progress");
var stats = document.getElementById("stats");
var keywords = document.getElementById("keywords");

function start() {
    if (started == false) {
        started = true;
        b1.innerHTML = "";
        b2.innerHTML = "";
        b3.innerHTML = "";
        lottSpeed = 50;
        lottTime = 600;
        los1 = true;
        los2 = true;
        los3 = true;
        time = 0;
		p1.style.width = "0%";
		p2.style.width = "0%";
		p3.style.width = "0%";
        setTimeout(losowanko, 3300);
    };
}

function losowanko() {
    if (los1){
        b1.innerHTML = Math.floor(getRandomArbitrary(2, 11));
		p1.style.width = (time/100)*100 + "%";
	}
    if (los2){
        b2.innerHTML = w1[Math.floor(getRandomArbitrary(0, w1.length))];
		p2.style.width = ((time-80)/20)*100 + "%";
	}
    if (los3){
        b3.innerHTML = w2[Math.floor(getRandomArbitrary(0, w2.length))];
		p3.style.width = ((time-100)/20)*100 + "%";
    }
    time += 1;
    if (time == 100){
		p1.style.width = "100%";
        los1 = false;
	}
    if (time == 100){
		p2.style.width = "100%";
        los2 = false;
	}
    if (time == 100){
		p3.style.width = "100%";
        los3 = false;
	}
    if (los3) {
        progress.innerHTML = "trwa losowanko (" + Math.floor((time / 100) * 100) + "%)";
        setTimeout(losowanko, lottSpeed);
    }
    else {
        progress.innerHTML = "no, idź zdjęcie zrobić";
        started = false;

    }
}