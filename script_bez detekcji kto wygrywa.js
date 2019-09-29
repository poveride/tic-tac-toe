function TicTacToeGame () {
    this.gameContainer = document.querySelector('#game-container'); //szukamy za pomoca qselector id obiektu //teraz zeby moc ukrywac gre w divie        
    this.xUser = 'x';  // dodane 1252
    this.oUser = 'o'; // dodane 1252
    this.currentUser = this.xUser; 
}
//dzieki temu pospodem mamy mozliwsc za kazdym razem gdy init stworzymy nowa tabelke i dodamy do dokumentu
TicTacToeGame.prototype.init = function() {
    const table = this.createTable();
    this.gameContainer.innerHTML = '';
    this.gameContainer.appendChild(table);
}
//tworzymy funkcje aby tworzyc odrazy 3 kompurki
TicTacToeGame.prototype.createTable = function () {  //create table to nasza nazwa stworzylismy w obrebie tictactoegame metode create Table
    const table = document.createElement('table'); // to na koniec po poniższych
    ['1','2','3'].forEach(function(rowId) {
        const row = this.createRow(rowId);
        table.appendChild(row);
    }.bind(this));
    return table;

};
TicTacToeGame.prototype.createRow = function (rowId) {
    const row = document.createElement('tr'); //tworzymy wiersz
    ['a','b','c'].forEach(function (col) {//tworzymy tablice z nazwami naszych kolumn // //dodajemy do wiersza 3 komórki pętlą //musimy odwolać się dokonkretnego elementu po ID
        const cell = this.createCell(col+ rowId); // chcemy yutworzyc nowa komurke na która mmay juz funkce // potem dodajemy col
        row.appendChild(cell);
}.bind(this)); // bindujemy do zakresu a nie do fukcji forEach
return row;
}; 
TicTacToeGame.prototype.createCell = function (id) { 
    const cell = document.createElement('td'); //1 tworzymy komorkę 
    cell.className = 'cell'; //2 nadajemy klasę 
    cell.id = id; //dużo później dodane
    cell.addEventListener('click', this.cellClickHandler.bind(this)); //bindujemy zeby zakres funkcji ponizej byl by zakresem tylko tej obok
    return cell; //3 zwracamy komórkę
}
TicTacToeGame.prototype.cellClickHandler = function (event) {
    const cell = event.target; 
    if(cell.innerHTML !== '') {
        return;
    }
    if(this.currentUser=== this.xUser) {
        cell.innerHTML = '&times;'; //umieszczamy zawartosc &times;-to znak krzyzyk
        this.currentUser = this.oUser; // ... sprawdzami... i przelaczamy na drugiego usera
    } else {
        cell.innerHTML = '&cir;';
        this.currentUser = this.xUser;
    }

}
function Modal(message) {}

Modal.prototype.close = function() {};

const game = new TicTacToeGame();

//wyszukujemy przycisk nadajemy listenera i dodajemy akcje
const button = document.querySelector('#start-game'); 
button.addEventListener('click', function() {
    game.init();
});