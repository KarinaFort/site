
var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var squares = document.getElementsByClassName('square');

mudarJogador('X')

function selectSquare(id) {
    if (vencedor !== null) {
        return;
    }

    var square = document.getElementById(id);
    if (square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = jogador;
    square.style.color = '#031926';

    if (jogador === 'X') {
        jogador = 'O';
    }else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencedor();

}


function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
    var squares1 = document.getElementById('1');
    var squares2 = document.getElementById('2');
    var squares3 = document.getElementById('3');
    var squares4 = document.getElementById('4');
    var squares5 = document.getElementById('5');
    var squares6 = document.getElementById('6');
    var squares7 = document.getElementById('7');
    var squares8 = document.getElementById('8');
    var squares9 = document.getElementById('9');

    if (checaSequencia(squares1, squares2, squares3)) {
        modeColorSquare(squares1, squares2, squares3);
        mudarVencedor(squares1);
        return;
    }

    if (checaSequencia(squares4, squares5, squares6)) {
        modeColorSquare(squares4, squares5, squares6);
        mudarVencedor(squares4);
        return;
    }
    if (checaSequencia(squares7, squares8, squares9)) {
        modeColorSquare(squares7, squares8, squares9);
        mudarVencedor(squares7);
        return;
    }
    if (checaSequencia(squares1, squares5, squares9)) {
        modeColorSquare(squares1, squares5, squares9);
        mudarVencedor(squares1);
        return;
    }
    if (checaSequencia(squares1, squares4, squares7)) {
        modeColorSquare(squares1, squares4, squares7);
        mudarVencedor(squares1);
        return;
    }
    if (checaSequencia(squares2, squares5, squares8)) {
        modeColorSquare(squares2, squares5, squares8);
        mudarVencedor(squares2);
        return;
    }
    if (checaSequencia(squares3, squares6, squares9)) {
        modeColorSquare(squares3, squares6, squares9);
        mudarVencedor(squares3);
        return;
    }
    if (checaSequencia(squares3, squares5, squares7)) {
        modeColorSquare(squares3, squares5, squares7);
        mudarVencedor(squares5);
        return;
    }
    if (checaSequencia(squares1, squares5, squares9)) {
        modeColorSquare(squares1, squares9, squares9);
        mudarVencedor(squares9);
        return;
    }
}

function mudarVencedor(square) {
    vencedor = square.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;

}

function modeColorSquare(squares1, squares2, squares3) {
    squares1.style.background = '#97FF83';
    squares2.style.background = '#97FF83';
    squares3.style.background = '#97FF83';
}



function checaSequencia(squares1, squares2, squares3) {
    var eIgual = false;

    if (squares1.innerHTML !== '-' && squares1.innerHTML === squares2.innerHTML && squares2.innerHTML === squares3.innerHTML ) {
        eIgual = true;
    }

    return eIgual;

}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = ' ';

    for(var i = 1; i <=9; i ++) {
        var square = document.getElementById(i);
        square.style.background = '#D6C9C9';
        square.style.color = '#D6C9C9';
        square.innerHTML = '-';

    }
 mudarJogador('X')

}

