const $btn = document.getElementById('btn-kick');
const $btnUlt = document.getElementById('btn-ult');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHT:document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    ultimateCountdown: 5
}

const enemy = {
    name: 'charmander',
    defaultHP: 100,
    damageHP: 100,
    elHT:document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    ultimateCountdown: 5
}

$btn.addEventListener('click', function (){
   changeHP( random (10), character);
   changeHP( random (10), enemy);
   ultCountdown (character);
   ultCountdown (enemy);
});

$btnUlt.addEventListener('click', function (){
    changeHP( random (40), character);
    changeHP( random (40), enemy);
    ultRefresh (character, 5);
    ultRefresh (enemy, 5);
 });

function init() {
    console.log("start game");
    renderHP (character);
    renderHP (enemy);
    ultRefresh (character, 5);
    ultRefresh (enemy, 5);
}

function renderHP (person) {
    renderHPLife (person);
    renderProgressbarHP(person);
}

function renderHPLife (person) {
    person.elHT.innerHTML = person.damageHP + ' / '+ person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP (count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert("Бедный "+ person.name + " проиграл бой");
        $btn.disabled = true;
        $btnUlt.disabled = true;
    } else {
        person.damageHP-= count; 
    }  
   
    renderHP(person);
}

function ultCountdown (person, count) {
    if(person.ultimateCountdown == 1) {
        person.ultimateCountdown --;
        $btnUlt.disabled = false;
    } else {
        person.ultimateCountdown --;
    }
}

function ultRefresh (person, count){
        person.ultimateCountdown = count;
        $btnUlt.disabled = true;
}

function random (num) {
   return Math.ceil(Math.random()*num);
}

init()