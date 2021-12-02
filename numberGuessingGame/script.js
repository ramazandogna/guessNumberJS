//guess number game
var hakSayisi = 0;
var rastgeleSayi = 0;
var _guess = document.querySelector(".guess");
var _newGame = document.querySelector(".newGame");
var _result = document.querySelector(".result");
var _number = document.querySelector(".number");

_newGame.onclick = yeni;
_guess.onclick = tahmin;


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function yeni() {
    rastgeleSayi = randomInt(0, 10);
    hakSayisi = 3;
    _result.innerHTML = "";
    _number.value = "";
    _guess.disabled = false;
    _number.disabled = false;
    _newGame.disabled = true;
}

function tahmin() {
    if (hakSayisi == 0) return;
    var girilenSayi = parseInt(_number.value);
    var mesaj = "";
    if (isNaN(girilenSayi)) return;

    if (rastgeleSayi > girilenSayi) {
        mesaj = "Daha BÜYÜK değer deneyin";
    } else if (girilenSayi > rastgeleSayi) {
        mesaj = "Daha küçük değer deneyin";
    } else {
        mesaj = "Tebrikler!!!";
        _guess.disabled = true;
        _newGame.disabled = false;
    }
    hakSayisi--;
    _result.innerHTML = mesaj
    _result.innerHTML += "<br />"
    _result.innerHTML += "Kalan hak sayısı : " + hakSayisi
    if (hakSayisi == 0) {
        _guess.disabled = true;
        _newGame.disabled = false;
        mesaj = "Kaybettin Yallah."
    }
}

//function of guess number game
function tahmin() {
    if (hakSayisi == 0) return;
    var girilenSayi = parseInt(_number.value); //parseint sayının ondalık kısmını atıyor
    var mesaj = "";
    if (isNaN(girilenSayi)) return; //The isNaN() function determines whether a value is NaN or not.

    if (rastgeleSayi > girilenSayi) {
        mesaj = "Daha BÜYÜK değer deneyin";
    } else if (girilenSayi > rastgeleSayi) {
        mesaj = "Daha küçük değer deneyin";
    } else {
        mesaj = "Tebrikler!!!";
        _guess.disabled = true;
        _newGame.disabled = false;
    }
    hakSayisi--;
    _result.innerHTML = mesaj
    _result.innerHTML += "<br />"
    _result.innerHTML += "Kalan hak sayısı : " + hakSayisi
    if (hakSayisi == 0) {
        _guess.disabled = true;
        _newGame.disabled = false;
    }
}
