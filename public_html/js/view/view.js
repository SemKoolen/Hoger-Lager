class View {
  constructor(){
  }

  onResetHandler() {
      document.getElementById("dealerRoll").style.display = "inline";
      document.getElementById("userRoll").style.display = "none";
      document.getElementById("hoger").style.display = "none";
      document.getElementById("lager").style.display = "none";
      document.getElementById("errorMessage").style.display = "none";
  }

  displayCoinsBalance(coinsBalance) {
      let listNodes = document.getElementById("AO coins").getElementsByTagName("p");
      let pElement = listNodes[0];
      pElement.innerHTML  = coinsBalance;
  }

  displayErrorMessage(message) {
      let pElement = document.getElementById("errorMessage");
      pElement.innerHTML  = message;
      document.getElementById("errorMessage").style.display = "inline";
  }

  logLeftView(logInfo1) {
      let info1 = document.getElementById("info1");
      info1.innerHTML = logInfo1;
  }

  logRightView(logInfo2) {
      let info2 = document.getElementById("info2");
      info2.innerHTML = logInfo2;
  }

  onDealerRoll() {
      document.getElementById("hoger").style.display = "inline";
      document.getElementById("lager").style.display = "inline";
      document.getElementById("dealerRoll").style.display = "none";
  }

  switchToUserRoll() {
      document.getElementById('userRoll').style.display = "inline";
      document.getElementById('hoger').style.display = "none";
      document.getElementById('lager').style.display = "none";
  }

}
