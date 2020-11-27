const click = document.querySelector(".clickBanana");
const clickMonkey = document.querySelector(".clickMonkey");
const clickMine = document.querySelector(".clickMine");
const clickFarm = document.querySelector(".clickFarm");
const clickFactory = document.querySelector(".clickFactory");
const clickBank = document.querySelector(".clickBank");

const monkeyTotal = document.querySelector(".monkeyTotal");
const mineTotal = document.querySelector(".mineTotal");
const farmTotal = document.querySelector(".farmTotal");
const factoryTotal = document.querySelector(".factoryTotal");
const bankTotal = document.querySelector(".bankTotal");

const displayScore = document.querySelector(".score span");

var score = 0;

var monkey = 0;
var mine = 0;
var farm = 0;
var factory = 0;
var bank = 0;


setInterval(() => {
    if((monkey > 0) || (mine > 0) || (farm > 0) || (factory > 0) || (bank > 0)){
        if(monkey > 0){
            score += (monkey*2);
            displayScore.textContent = score;
        } 
        if(mine > 0){
            score += (mine*8);
            displayScore.textContent = score;
        }
        if(farm > 0){
            score += (farm*20);
            displayScore.textContent = score;
        }
        if(factory > 0){
            score += (factory*46);
            displayScore.textContent = score;
        }
        if(bank > 0){
            score += (bank*46);
            displayScore.textContent = score;
        }
    }
    else{
        clearInterval();
    }
}, 1000);

click.addEventListener('click', () =>{
    score += 1;
    displayScore.textContent = score;
});


clickMonkey.addEventListener('click', () =>{
    if(score > 30){
        monkey += 1;
        score -= 30;
        displayScore.textContent = score;
        monkeyTotal.textContent = `x${monkey}`;
        bought();
    } else{
        notEnough();
    }
});

clickMine.addEventListener('click', () =>{
    if(score > 100){
        mine += 1;
        score -= 100;
        displayScore.textContent = score;
        mineTotal.textContent = `x${mine}`;
        bought();
    }
});

clickFarm.addEventListener('click', () =>{
    if(score > 1000){
        farm += 1;
        score -= 1000;
        displayScore.textContent = score;
        farmTotal.textContent = `x${farm}`;
        bought();
    }
});

clickFactory.addEventListener('click', () =>{
    if(score > 12000){
        factory += 1;
        score -= 12000;
        displayScore.textContent = score;
        factoryTotal.textContent = `x${factory}`;
        bought();
    }
});

clickBank.addEventListener('click', () =>{
    if(score > 12000){
        bank += 1;
        score -= 12000;
        displayScore.textContent = score;
        bankTotal.textContent = `x${bank}`;
        bought();
    }
});

function notEnough(){
    const show = document.querySelector('.failure');
    show.style.display = "block";
    setTimeout(() =>{
        show.style.display = "none";
    },1000)
}

function bought(){
    const show = document.querySelector('.success');
    show.style.display = "block";
    setTimeout(() =>{
        show.style.display = "none";
    },1000)
}