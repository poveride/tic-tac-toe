function TicTacToeGame () {
    this.gameContainer = document.querySelector('#game-container'); //szukamy za pomoca qselector id obiektu //teraz zeby moc ukrywac gre w divie        
    this.xUser = 'x';  // dodane 1252
    this.oUser = 'o'; // dodane 1252
    this.currentUser = this.xUser; 
    this.win = false; 
}
//poniezj dodaje 1416
TicTacToeGame.prototype.results = [
    ['a1','b1','c1'],
    ['a2','b2','c2'],
    ['a3','b3','c3'],
    ['a1','a2','a3'],
    ['b1','b2','b3'],
    ['a1','b2','c3'],
    ['a3','b2','c1']
]; //detekcja wygrane
//dzieki temu pospodem mamy mozliwsc za kazdym razem gdy init stworzymy nowa tabelke i dodamy do dokumentu
TicTacToeGame.prototype.init = function() {
    
    const xUser = document.querySelector('#x-user').value; //1526 dodaje wciagamy z html inputa o zdefiniowanym id a konkretnie jego wartosc
    const oUser = document.querySelector('#o-user').value; //1526
    if(xUser !== oUser && !this.win) {
        this.xUser = xUser;
         this.oUser = oUser;
        const table = this.createTable();
        this.gameContainer.innerHTML = '';
        this.gameContainer.appendChild(table);
        this.currentUser = this.xUser; ////ttuaj moze brakowac mi czegos
    } else if (this.win) {
        //this.modal= new Modal('koniec gry');
        this.win = false;
        this.init();
    } else {// tu ni emam dopisać
        this.modal = new Modal('podaj rozne imiona');
    }
};
//tworzymy funkcje aby tworzyc odrazy 3 kompórki
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
    cell.dataset.value = '' ; // dataset to odpowiednik argumentu data - dodalo do komurki wlasciwosc data //do wlasciwosci valu przypisalismy pusty string // dodaje 1429 pod koniec dla sprawdzania wygranej
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
        cell.dataset.value = 'x'; //doane dla sprawdzanie wygranej //dodaje 1432 //dodaje do komorki przy kliknieciu wartosc odpowiednia dla znaku
        // kasuekmy zeby obsluzyc wygrana this.currentUser = this.oUser; // ... sprawdzami... i przelaczamy na drugiego usera
    } else {
        cell.innerHTML = '&cir;';
        cell.dataset.value = 'o'; //doane dla sprawdzanie wygranej //dodaje 1432 //dodaje do komorki przy kliknieciu wartosc odpowiednia dla znaku
        //kasuekmy zeby obsluzyc wygrana  this.currentUser = this.xUser;
    }
    const win = this.chceckResults();
    if(this.win) { //1509
        console.log('dsdsds')
        this.modal = new Modal('wygrał' + this.currentUser, this.init.bind(this)); ///1516
        
    } else {//1509
        this.currentUser = this.currentUser === this.xUser ? this.oUser : this.xUser;//1509
    }
};
TicTacToeGame.prototype.chceckResults = function () {
    let win = false;
    //const win = this.chceckResults(); //1506bbbbbbbbbbbbbb
    for (let idx =0; idx < this.results.length; idx++) {
        const resRow = this.results[idx]; //resRow to IDki
        const result = resRow.map(function(id){ //map przemapowanie tablicy
            const cell = document.querySelector('#' + id); //wyciagamy data z datasetu // dodaje to 1434 przekszatalca na stringa i jesli beda 3x lub 3 o to wygrana
            return cell.dataset.value;
        }).join(''); //bez tego wszla by tablica a metoda join scala nam elementy tablicy rozdzielajac je wartoscia która jest w nawiasie
        if(result === 'xxx' || result === 'ooo') {
            win = true;
            break;
            //console.log('wygrał uytkownik, kt');
        }
    }
    return win;
};
function Modal(message, closeCallback) {
    this.closeCallback = closeCallback;
    this.modalEl = documen.createElement('div');
    this.modalEl.className = 'modal';
    this.modalEl.innerHTML = '<p>' + message + '</p>';
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'zamknij';
    closeButton.addEventListener('click', this.close.bind(this));
    this.modalEl.appendChild(closeButton);
    document.documentElement.appendChild(this.modalEl);
    //console.log('dopisać bo tego nie mamxxxxxx') //nie mialem ale dopisałem
}

Modal.prototype.close = function() {
    this.modalEl.remove();
    if(this.closeCallback !== undefined) {
        this.closeCallback();
    }
 };

const game = new TicTacToeGame();
const button = document.querySelector('#start-game');

const xUser= document.querySelector('x-user');
const xUser= document.querySelector('o-user');

function checkNames() {
    button.disabled = (xUser.value !== '' && oUser.value !== '') {
    }
}

xUser.addEventListener('input', checkNames);
oUser.addEventListener('input', checkNames);

//wyszukujemy przycisk nadajemy listenera i dodajemy akcje
//const button = document.querySelector('#start-game'); 
button.addEventListener('click', function() {
    game.init();
});

//test comita