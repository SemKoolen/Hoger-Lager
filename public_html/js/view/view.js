class View {
  constructor(){

  }

  onResetHandler()
  {
      document.getElementById("dealerRoll").style.display = "inline";
      document.getElementById("userRoll").style.display = "none";
      document.getElementById("hoger").style.display = "none";
      document.getElementById("lager").style.display = "none";
  }

  displayCoinsBalance(coinsBalance)
  {
      var listNodes = document.getElementById("AO coins").getElementsByTagName("p");
      pElement = listNodes[0];
      pElement.innerHTML  = coinsBalance;
  }

  onDealerRoll()
  {
      document.getElementById("hoger").style.display = "inline";
      document.getElementById("lager").style.display = "inline";
      document.getElementById("dealerRoll").style.display = "none";
  }

  switchToUserRoll()
  {
      document.getElementById('userRoll').style.display = "inline";
      document.getElementById('hoger').style.display = "none";
      document.getElementById('lager').style.display = "none";
  }

}
