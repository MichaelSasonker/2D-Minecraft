
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
const toolsArr = ['pickaxe', 'axe', 'shovel'];
let tileKindArr = ['ground-tile', 'grass-tile', 'stone-tile', 'tree-leaves-tile', 'tree-wood-tile', 'cloud-tile'];


let gameHight = window.innerHeight;
let gameWidth = gameCont.clientWidth;

let rows = Math.floor(gameHight / TILE_HEIGHT);
let cols = Math.floor(gameWidth / TILE_WIDTH);


function AddMatrix() {

    if (rows != 25 || cols != 41) {
        rows = 25;
        cols = 41;
    }

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


function PickaxeFunction(e) {
    if (shovel.classList.contains('current-tool'))
        shovel.classList.remove('current-tool');
    else if (axe.classList.contains('current-tool'))
        axe.classList.remove('current-tool');
    else if (inventory.classList.contains('current-tool'))
        inventory.classList.remove('current-tool');

    e.target.classList.add('current-tool');

    gameCont.addEventListener('click', tile => {
        let tileKindRes = tileKindArr.filter(tileKind => {
            if (tile.target.classList.contains(tileKind)) {
                return (tileKind);
            }
        });

        if (tileKindRes[0] == 'stone-tile') {
            tile.target.classList.remove('stone-tile');
            if (inventory.classList[2]) {
                inventory.classList.remove(inventory.classList[2]);
            }
            inventory.classList.add('stone-tile');
        }   

    }, {once: true});
    
}

pickaxe.addEventListener('click', PickaxeFunction);

function ShovelFunction(e) {
    if (pickaxe.classList.contains('current-tool'))
        pickaxe.classList.remove('current-tool');
    else if (axe.classList.contains('current-tool'))
        axe.classList.remove('current-tool');
    else if (inventory.classList.contains('current-tool'))
        inventory.classList.remove('current-tool');    

    e.target.classList.add('current-tool');

    gameCont.addEventListener('click', tile => {
        let tileKindRes = tileKindArr.filter(tileKind => {
            if (tile.target.classList.contains(tileKind)) {
                return (tileKind);
            }
        });

        if (tileKindRes[0] == 'ground-tile') {
            tile.target.classList.remove('ground-tile');
            if (inventory.classList[2]) {
                inventory.classList.remove(inventory.classList[2]);
            }
            inventory.classList.add('ground-tile');
        }
        else if (tileKindRes[0] == 'grass-tile') {
            tile.target.classList.remove('grass-tile');
            if (inventory.classList[2]) {
                inventory.classList.remove(inventory.classList[2]);
            }
            inventory.classList.add('grass-tile');
        } 
    }, {once: true});
}

shovel.addEventListener('click', ShovelFunction);


function AxeFunction(e) {
    if (shovel.classList.contains('current-tool'))
        shovel.classList.remove('current-tool');
    else if (pickaxe.classList.contains('current-tool'))
        pickaxe.classList.remove('current-tool');
    else if (inventory.classList.contains('current-tool'))
        inventory.classList.remove('current-tool');

    e.target.classList.add('current-tool');

    gameCont.addEventListener('click', tile => {
        let tileKindRes = tileKindArr.filter(tileKind => {
            if (tile.target.classList.contains(tileKind)) {
                return (tileKind);
            }
        });

        if (tileKindRes[0] == 'tree-wood-tile') {
            tile.target.classList.remove('tree-wood-tile');
            if (inventory.classList[2]) {
                inventory.classList.remove(inventory.classList[2]);
            }
            inventory.classList.add('tree-wood-tile');
        }
        else if (tileKindRes[0] == 'tree-leaves-tile') {
            tile.target.classList.remove('tree-leaves-tile');
            if (inventory.classList[2]) {
                inventory.classList.remove(inventory.classList[2]);
            }
            inventory.classList.add('tree-leaves-tile');
        }

    }, {once: true});

    
}
axe.addEventListener('click', AxeFunction);


function InventoryFunction(e) {
    if (shovel.classList.contains('current-tool'))
        shovel.classList.remove('current-tool');
    else if (pickaxe.classList.contains('current-tool'))
        pickaxe.classList.remove('current-tool');
    else if (axe.classList.contains('current-tool'))
        axe.classList.remove('current-tool');

    e.target.classList.add('current-tool');

    let chosenTileKind = [];
    chosenTileKind = tileKindArr.filter(tileKind => {
        if (Object.values(e.target.classList).indexOf(tileKind) > -1)
        {
            return (tileKind);
        }
    }); 

    gameCont.addEventListener('click', (tile) => {
    
        if (!Object.values(tile.target.classList).includes('ground-tile') &&
            !Object.values(tile.target.classList).includes('grass-tile') &&
            !Object.values(tile.target.classList).includes('stone-tile') &&
            !Object.values(tile.target.classList).includes('tree-leaves-tile') &&
            !Object.values(tile.target.classList).includes('tree-wood-tile') &&
            !Object.values(tile.target.classList).includes('cloud-tile')) {

            e.target.classList.remove(chosenTileKind[0]);
            tile.target.classList.add(chosenTileKind[0]);
        }
    
    }, {once: true})
}

inventory.addEventListener('click', InventoryFunction);


/*-------------------------------------------------------------------*/
function MainFunction() {
    'use strict';
    let gameArrRes = AddMatrix();

    SetGround(gameArrRes);
    SetStone(gameArrRes);
    SetGrass(gameArrRes);
    SetTreeWood(gameArrRes);
    SetTreeleaves(gameArrRes);
    SetCloud(gameArrRes);

}; MainFunction();