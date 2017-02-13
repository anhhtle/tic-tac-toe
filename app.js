var state = {
    xo: 'X',
    xScore: 0,
    oScore: 0
}

function xORo() {
    if(state.xo === 'X')
        state.xo = 'O';
    else
        state.xo = 'X';
}

function checkRow(cell){
    var row = cell.parent();
    if(row.children().eq(0).text() === row.children().eq(1).text() &&
    row.children().eq(0).text() === row.children().eq(2).text()){
        alert(`${state.xo} win!`);
        incrementScore()
    }
}

function checkColumn(cell){
    var column = cell.attr('data-column');
    var table = cell.parent().parent();
    if(table.children().first().children().eq(column).text() === table.children().eq(1).children().eq(column).text() &&
    table.children().eq(0).children().eq(column).text() === table.children().last().children().eq(column).text()){
        alert(`${state.xo} win!`);
        incrementScore()
    }
}

function checkDiagonal(){
    if(($('#1').text() !== '' && ($('#1').text() === $('#5').text() && $('#1').text() === $('#9').text())) ||
    ($('#3').text() !=='' && $('#3').text() === $('#5').text() && $('#3').text() === $('#7').text())){
        alert(`${state.xo} win!`);
        incrementScore()
    }
}

function incrementScore(){
    if(state.xo === 'X'){
        state.xScore++;
        $('.xScore').text(state.xScore);
    }
    else{
        state.oScore++;
        $('.oScore').text(state.oScore);
    }
}

function renderBoard(){
    var board = $(
        '<tr class="row-0">' +
                '<td data-column="0" id="1"></td>' +
                '<td data-column="1" id="2"></td>' +
                '<td data-column="2" id="3"></td>' +
            '</tr>' +
            '<tr class="row-1">' +
                '<td data-column="0" id="4"></td>' +
                '<td data-column="1" id="5"></td>' +
                '<td data-column="2" id="6"></td>' +
            '</tr>' +
            '<tr class="row-2">' +
                '<td data-column="0" id="7"></td>' +
                '<td data-column="1" id="8"></td>' +
                '<td data-column="2" id="9"></td>' +
            '</tr>'
    )
    $('.table-game').append(board);
}

$('.table-game').on('click', 'td', function(e){
    if($(this).text() !== 'X' && $(this).text() !== 'O') {
        $(this).text(state.xo);
        checkRow($(this));
        checkColumn($(this));
        checkDiagonal();
        xORo();
    }
})

$('button').on('click', function(e){
    $('.table-game').empty();
    renderBoard();
})

$(function(){
    renderBoard();
})