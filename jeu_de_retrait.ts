class Jeu {
    private remaining: number;
    private currentPlayer: string;
    private previousMove: number;
    private errorMessage: string;
  
    constructor() {
        this.remaining = 10;
        this.currentPlayer = 'Joueur 1';
        this.previousMove = 0;
        this.errorMessage = '';
      }
}