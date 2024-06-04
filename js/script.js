let gameScreen = document.getElementById('screenOne');
let controls = document.getElementById('popup-controls');

function power() {
    if (gameScreen.style.display == 'none'){
        gameScreen.style.display = 'block';
        gameScreen.src = 'https://www.minijogos.com.br/embed/super-mario-world-online';
        controls.style.display = 'none';
    } else {
        gameScreen.style.display = 'none';
        gameScreen.src = '';
        controls.style.display = 'none';
    }
}

function showcontrols() {
    if (controls.style.display == 'none'){
        gameScreen.style.display = 'none';
        gameScreen.src = '';

        controls.style.display = 'flex';
    } else {
        controls.style.display = 'none';

        gameScreen.style.display = 'block';
        gameScreen.src = 'https://www.minijogos.com.br/embed/super-mario-world-online';
    }
}