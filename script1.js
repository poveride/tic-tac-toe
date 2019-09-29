function Modal(message) { //funkcaj modal która jest konstrutorem i przekazujemy jej argument message
    this.modalEl = document.createElement('div'); //createElement tworzy nowy element html który ma metody np className
    this.modalEl.className = 'modal'; //do elementu z wiersza wyzej dodajemy klase modal w tej linijce
    this.modalEl.innerHTML = '<p>' + message + '</p>'; //inner to co po prawej stronie = ma wrzócić dośrodka tego elementu z linijka powyżej
    const closeButton = document.createElement('button');
    closeButton.innerText= 'Zamknij';
    closeButton.addEventListener('click', this.close.bind(this));  //click czeka na zdazenie klikniecie //po przecinku podajemy co ma sie dziac po wystapieniu zdarzenia click //bind wskazuje na kontekst obiektu modal który pekazujemy funkcji close // bo inaczej fukcja pracowala by w zakresie funkcji addEventListener
    this.modalEl.appendChild(closeButton);
    document.documentElement.appendChild(this.modalEl); //odwołujemy się do   //document to sam dokument HTML a znacznikiem BODY est documentElement

}
Modal.prototype.close = function(){
    this.modalEl.remove();
};
const modal = new Modal('lorem ipsum');