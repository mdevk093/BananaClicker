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
const psecond = document.querySelector(".psecond");

const displayMonkey = document.querySelector(".monkeyPrice");
const displayMine = document.querySelector(".minePrice");
const displayFarm = document.querySelector(".farmPrice");
const displayFactory = document.querySelector(".factoryPrice");
const displayBank = document.querySelector(".bankPrice");

var score = 0;
var persecond = 0;

var monkey = 0;
var monkeyPrice = 30;
var mine = 0;
var minePrice = 100;
var farm = 0;
var farmPrice = 100;
var factory = 0;
var factoryPrice = 12000;
var bank = 0;
var bankPrice = 69000;

var speed = 100;
var interval = 1;


setInterval(() => {
    if((monkey > 0) || (mine > 0) || (farm > 0) || (factory > 0) || (bank > 0)){
        if(monkey > 0){
            score += (monkey*2);
            //displayScore.textContent = score;
        } 
        if(mine > 0){
            score += (mine*8);
            //displayScore.textContent = score;
        }
        if(farm > 0){
            score += (farm*20);
            //displayScore.textContent = score;
        }
        if(factory > 0){
            score += (factory*46);
            //displayScore.textContent = score;
        }
        if(bank > 0){
            score += (bank*46);
            //displayScore.textContent = score;
        }
    }
    else{
        clearInterval();
    }
}, 1000);

if(persecond > 1){
    speed = 500;
}
if(persecond > 10){
    speed = 100;
}
if(persecond > 100 ){
    interval = 10;
}

let output = 0;
setInterval(() =>{
    if(output < score){
        displayScore.textContent = output;
        output+= interval;
    } else {
        clearInterval();
    }
},speed);



click.addEventListener('click', () =>{
    score += 1;
    //displayScore.textContent = score;
    click.style.transition = "0.3s"
    click.style.transform = "translate(-50%, -60%)";
    setTimeout(() =>{
        click.style.transform = "translate(-50%, -50%)";
    },300)
    
});


clickMonkey.addEventListener('click', () =>{
    clickMonkey.style.transition = "0.3s"
    clickMonkey.style.transform = "translateY(-10px)";
    setTimeout(() =>{
        clickMonkey.style.transform = "translateY(0px)";
    },300);

    if(score >= monkeyPrice){
        monkey += 1;
        score -= monkeyPrice;
        output -= monkeyPrice;
        displayScore.textContent = score;
        monkeyPrice = Math.ceil(monkeyPrice * 1.2);
        persecond += 2;
        monkeyTotal.textContent = `x${monkey}`;
        psecond.textContent = persecond;
        displayMonkey.textContent = monkeyPrice;
        bought();
    } else{
        notEnough();
    }
});

clickMine.addEventListener('click', () =>{
    clickMine.style.transition = "0.3s"
    clickMine.style.transform = "translateY(-10px)";
    setTimeout(() =>{
        clickMine.style.transform = "translateY(0px)";
    },300);
    if(score >= minePrice){
        mine += 1;
        score -= minePrice;
        output -= minePrice;
        displayScore.textContent = score;
        minePrice = Math.ceil(minePrice * 1.2);
        persecond += 8;
        mineTotal.textContent = `x${mine}`;
        psecond.textContent = persecond;
        displayMine.textContent = minePrice;
        console.log(minePrice, displayMine.textContent);
        bought();
    } else{
        notEnough();
    }
});

clickFarm.addEventListener('click', () =>{
    clickFarm.style.transition = "0.3s"
    clickFarm.style.transform = "translateY(-10px)";
    setTimeout(() =>{
        clickFarm.style.transform = "translateY(0px)";
    },300);
    if(score >= farmPrice){
        farm += 1;
        score -= farmPrice;
        output -= farmPrice;
        displayScore.textContent = score;
        farmPrice = Math.ceil(farmPrice * 1.2);
        persecond += 20;
        psecond.textContent = persecond;
        farmTotal.textContent = `x${farm}`;
        displayFarm.textContent = farmPrice;
        bought();
    } else{
        notEnough();
    }
});

clickFactory.addEventListener('click', () =>{
    clickFactory.style.transition = "0.3s"
    clickFactory.style.transform = "translateY(-10px)";
    setTimeout(() =>{
        clickFactory.style.transform = "translateY(0px)";
    },300);
    if(score >= factoryPrice){
        factory += 1;
        score -= factoryPrice;
        output -= factoryPrice;
        displayScore.textContent = score;
        factoryPrice = Math.ceil(factoryPrice * 1.2);
        persecond += 46;
        factoryTotal.textContent = `x${factory}`;
        psecond.textContent = persecond;
        displayFactory.textContent = factoryPrice;
        bought();
    } else{
        notEnough();
    }
});

clickBank.addEventListener('click', () =>{
    clickBank.style.transition = "0.3s"
    clickBank.style.transform = "translateY(-10px)";
    setTimeout(() =>{
        clickBank.style.transform = "translateY(0px)";
    },300);
    if(score >= bankPrice){
        bank += 1;
        score -= bankPrice;
        output -= bankPrice;
        displayScore.textContent = score;
        bankPrice = Math.ceil(bankPrice * 1.2);
        persecond += 112;
        psecond.textContent = persecond;
        bankTotal.textContent = `x${bank}`;
        displayBank.textContent = bankPrice;
        bought();
    } else{
        notEnough();
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


