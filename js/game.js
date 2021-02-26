
const TILE_HEIGHT = 40;
const TILE_WIDTH = 40;

let body = document.body;
let gameCont = document.querySelector('.game-container');
let tile = document.createElement('div');
let pickaxe = document.querySelector('.pickaxe');
let shovel = document.querySelector('.shovel');
let axe = document.querySelector('.axe');
let inventory = document.querySelector('.inventory');
let tools = document.querySelectorAll('.tools-des');


let gameHight = window.innerHeight;
let gameWidth = gameCont.clientWidth;

let rows = Math.floor(gameHight / TILE_HEIGHT);
let cols = Math.floor(gameWidth / TILE_WIDTH);

function AddMatrix() {

    gameCont.style.setProperty('--game-cols', cols);
    gameCont.style.setProperty('--game-rows', rows);

    let gameArr = [];

    for (let i = 0; i < rows; ++i) {
        gameArr[i] = [];
        for (let j = 0; j < cols; ++j) {
            gameArr[i][j] = document.createElement('div');
            gameArr[i][j].classList.add('tile');
            gameCont.insertAdjacentElement('afterbegin', gameArr[i][j]);
        }
    }

    return (gameArr);
}

function SetGround(matrix) {
    for (let i = 0; i < rows - 19; ++i) {
        for (let j = 0; j < cols; ++j) {
            matrix[i][j].classList.add('ground-tile');
        }
    }
}

function SetStone(matrix) {

    for (let i = rows - 18; i < rows - 16; ++i) {
        for (let j = cols - 5; j > cols - 7; --j) {
            matrix[i][j].classList.add('stone-tile');
        }
    }

    for (let i = rows - 18; i < rows - 15; ++i) {
        for (let j = 2; j < cols - 37; ++j) {
            matrix[i][j].classList.add('stone-tile');
        }
    }
}

function SetGrass(matrix) {

    for (let i = rows - 19; i < rows - 18; ++i) {
        for (let j = 0; j < cols; ++j) {
            matrix[i][j].classList.add('grass-tile');
        }
    }
}


function SetTreeWood(matrix) {

    for (let i = rows - 18; i < rows - 12; ++i) {
        for (let j = 20; j < cols - 20; ++j) {
            matrix[i][j].classList.add('tree-wood-tile');
        }
    }
}

function SetTreeleaves(matrix) {

    for (let i = rows - 12; i < rows - 8; ++i) {
        for (let j = 18; j < cols - 18; ++j) {
            matrix[i][j].classList.add('tree-leaves-tile');
        }
    }
}

function SetCloud(matrix) {

    for (let i = rows - 4; i < rows - 2; ++i) {
        for (let j = 26; j < cols - 11; ++j) {
            matrix[i][j].classList.add('cloud-tile');
        }
    }

    for (let i = rows - 2; i < rows - 1; ++i) {
        for (let j = 27; j < cols - 12; ++j) {
            matrix[i][j].classList.add('cloud-tile');
        }
    }

    for (let i = rows - 4; i < rows - 3; ++i) {
        for (let j = 30; j < cols - 10; ++j) {
            matrix[i][j].classList.add('cloud-tile');
        }
    }

    for (let i = rows - 4; i < rows - 3; ++i) {
        for (let j = 25; j < cols - 10; ++j) {
            matrix[i][j].classList.add('cloud-tile');
        }
    }
}

// let toolsArr = [];
// function AddToolToArr(arr) {
//     for (let i = 0; i < tools.length - 2; ++i) {
//         arr[i].push(tools[i]);
//     }
//     console.log('toolsArr is: ', arr);
// }

pickaxe.addEventListener('click', (e) => {
    if (shovel.classList.contains('current-tool'))
        shovel.classList.remove('current-tool');
    else if (axe.classList.contains('current-tool')) 
        axe.classList.remove('current-tool');

    pickaxe.classList.add('current-tool');   
});

shovel.addEventListener('click', (e) => {
    if (pickaxe.classList.contains('current-tool')) 
        pickaxe.classList.remove('current-tool');
    else if (axe.classList.contains('current-tool')) 
        axe.classList.remove('current-tool');   

    shovel.classList.add('current-tool'); 
});

axe.addEventListener('click', (e) => {
    if (shovel.classList.contains('current-tool')) 
        shovel.classList.remove('current-tool');
    else if (pickaxe.classList.contains('current-tool')) 
        pickaxe.classList.remove('current-tool');

    axe.classList.add('current-tool');   
});



/*-------------------------------------------------------------------*/
function MainFunction() {
    'use strict';
    let gameArrRes = AddMatrix();
    console.log(gameArrRes);

    SetGround(gameArrRes);
    SetStone(gameArrRes);
    SetGrass(gameArrRes);
    SetTreeWood(gameArrRes);
    SetTreeleaves(gameArrRes);
    SetCloud(gameArrRes);

    // AddToolToArr(toolsArr);

}; MainFunction();