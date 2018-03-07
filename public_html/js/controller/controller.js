class Controller {
   constructor() {
      this.model = new Model();
      this.view = new View();
      this.view.displayCoinsBalance(this.model.getCoinBalance());
      this.view.onResetHandler();
      this.view.setDiceImage();
      this.model.getImageRoll("1");
      document.getElementById("hoger").addEventListener("click", (e) => this.model.onChoiceHandler("Hoger"));
      document.getElementById("hoger").addEventListener("click", (e) => this.view.switchToUserRoll());
      document.getElementById("lager").addEventListener("click", (e) => this.model.onChoiceHandler("Lager"));
      document.getElementById("lager").addEventListener("click", (e) => this.view.switchToUserRoll());
      document.getElementById("dealerRoll").addEventListener("click", (e) => this.reactOnDealerRoll());
      document.getElementById("userRoll").addEventListener("click", (e) => this.reactOnUserRoll());
      document.getElementById("shopItem1").addEventListener("click", (e) => this.onShopHandler("1"));
      document.getElementById("shopItem2").addEventListener("click", (e) => this.onShopHandler("2"));
      document.getElementById("shopItem3").addEventListener("click", (e) => this.onShopHandler("3"));
      document.getElementById("shopItem4").addEventListener("click", (e) => this.onShopHandler("4"));
      document.getElementById("shopItem5").addEventListener("click", (e) => this.onShopHandler("5"));
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
            this.userRollArray = this.model.getUserRoll(this.winValue);
            this.view.onUserCanvasHandler(this.userRollArray);
            this.view.displayCoinsBalance(this.model.getCoinBalance());
            this.view.onResetHandler();
            this.view.logLeftView(this.model.onLogLeftHandler());
            this.view.logRightView(this.model.onLogRightHandler());
            break;
     }
   }

   reactOnDealerRoll() {
     this.dealerRoll = this.model.onDealerRollMaster();
     this.dealerRollArray = this.model.getDealerRoll();
     this.view.onDealerRoll();
     this.view.onDealerCanvasHandler(this.dealerRollArray);
   }

   onShopHandler(clicked) {
     if (this.model.hasEnoughMoney(clicked)) {
       if (clicked == 5) {
         this.view.displayWinner(clicked);
         this.view.displayCoinsBalance(this.model.getCoinBalance());
       } else {
         this.imageRoll = this.model.getImageRoll(clicked);
         this.view.shopHandler(clicked, this.imageRoll);
         this.view.displayCoinsBalance(this.model.getCoinBalance());
       }
     } else {
       this.
       this.view.displayShopError();
     }

   }

}
