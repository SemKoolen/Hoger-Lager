class Controller {
   constructor() {
      this.model = new Model();
      this.view = new View();
      this.view.displayCoinsBalance(this.model.getCoinBalance());
      this.view.onResetHandler();
      document.getElementById("hoger").addEventListener("click", (e) => this.model.onChoiceHandler("Hoger"));
      document.getElementById("hoger").addEventListener("click", (e) => this.view.switchToUserRoll());
      document.getElementById("lager").addEventListener("click", (e) => this.model.onChoiceHandler("Lager"));
      document.getElementById("lager").addEventListener("click", (e) => this.view.switchToUserRoll());
      document.getElementById("dealerRoll").addEventListener("click", (e) => this.reactOnDealerRoll());
      document.getElementById("userRoll").addEventListener("click", (e) => this.reactOnUserRoll());
   }

   reactOnUserRoll() {
     switch (this.model.checkInzetValue()){
        case "Inzet te hoog":
            console.log(this.model.checkInzetValue());
            this.view.displayErrorMessage("Inzet kan niet hoger zijn dan het aantal AO coins in je bezit");
            break;

        case "Inzet te laag":
            console.log(this.model.checkInzetValue());
            this.view.displayErrorMessage("Inzet kan niet lager zijn dan 10 AO coins");
            break;

        case "none":
            this.userRoll = this.model.onUserRoll();
            this.userInput = this.model.getUserInput();
            this.winValue = this.model.onDiceHandler(this.userRoll, this.dealerRoll, this.userInput)
            this.model.onCoinHandler(this.winValue);
            this.view.displayCoinsBalance(this.model.getCoinBalance());
            this.view.onResetHandler();
            this.view.logLeftView(this.model.onLogLeftHandler());
            this.view.logRightView(this.model.onLogRightHandler());
            break;
     }
   }

   reactOnDealerRoll() {
     this.dealerRoll = this.model.onDealerRoll();
     this.view.onDealerRoll();
   }

}
