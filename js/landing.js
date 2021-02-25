

function Test2() {
    console.log('22works!')
}

let axe = document.querySelector('.axe');
console.log(axe);
axe.addEventListener('mouseover', Test2);

let axeImg = document.querySelector('.axe > img');
console.log(axeImg)
axeImg.addEventListener('mouseover', Test2);
