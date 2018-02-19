class Controller {
   constructor() {
      this.model = new Model();
      this.view = new View();
      this.view.displayCoinsBalance(500);
      this.view.onResetHandler();
      document.getElementById("hoger").addEventListener("click",  this.model.onChoiceHandler("Hoger"));
      document.getElementById("lager").addEventListener("click",  this.model.onChoiceHandler("Lager"));
      document.getElementById("hoger").addEventListener("click",  this.view.switchToUserRoll());
      document.getElementById("lager").addEventListener("click",  this.view.switchToUserRoll());
      document.getElementById("dealerRoll").addEventListener("click",  this.reactOnDealerRoll());
      document.getElementById("userRoll").addEventListener("click",  this.reactOnUserRoll());
   }

   reactOnUserRoll() {
     this.userRoll = this.model.onUserRoll();
     this.userInput = this.model.getUserInput();
     this.model.onDiceHandler(this.userRoll, this.dealerRoll, this.userInput);
     this.view.onResetHandler();
     this.model.onLogElementHandler();
     this.model.onLogHandler();
   }

   reactOnDealerRoll() {
     this.dealerRoll = this.model.onDealerRoll();
     this.view.onDealerRoll();
   }

}
