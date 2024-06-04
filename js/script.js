function power() {
    let gameScreen = document.getElementById('screenOne');

    if (gameScreen.style.display == 'none'){
        gameScreen.style.display = 'block';
        gameScreen.src = 'https://www.minijogos.com.br/embed/super-mario-world-online';
    } else {
        gameScreen.style.display = 'none';
        gameScreen.src = '';
    }
}