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

      playMove(unites: number): void {
        if (unites === this.previousMove) {
          this.errorMessage = "Impossible de prendre cette valeur.";
          return;
        }

        this.errorMessage = '';
        this.remaining -= unites;
        this.previousMove = unites;

        if (this.remaining <= 0) {
            alert(`${this.currentPlayer} a perdu !`);
            this.resetGame();
            return;
          }
        
        this.currentPlayer = this.currentPlayer === 'Joueur 1' ? 'Joueur 2' : 'Joueur 1';
        this.updateUI();
}
        resetGame(): void {
            this.remaining = 10;
            this.currentPlayer = 'Joueur 1';
            this.previousMove = 0;
            this.errorMessage = '';
            this.updateUI();
  }
        private updateUI(): void {
            const statusElement = document.getElementById('status')!;
            const errorElement = document.getElementById('error-message')!;

            statusElement.textContent = `Joueur actuel : ${this.currentPlayer} | Reste : ${this.remaining}`;
            errorElement.textContent = this.errorMessage;
        }
}

