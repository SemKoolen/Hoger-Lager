class Model {
  constructor(){
    this.userInput ;
    this.logInfo1 ;
    this.logInfo2 ;
  }

  getInzet() {
      var inzet = document.getElementById("inzet").value;
      return inzet;
  }

  onChoiceHandler(input) {
      userInput = input;
  }

  getUserInput() {
      return this.userInput;
  }


  onLogHandler() {
      logInfo1 = logLeftElement + logInfo1;
      var info1 = document.getElementById("info1");
      info1.innerHTML = logInfo1;

      logInfo2 = logRightElement + logInfo2;
      var info2 = document.getElementById("info2");
      info2.innerHTML = logInfo2;
  }

  onLogElementHandler() {
      logLeftElement = "Inzet:<br />Keuze:<br />Bank:<br />Speler:<br />Winst:<br /><br />";
      logRightElement = inzet + "<br />" + userInput + '<br /><img src="images/roll1.png" /> + <img src="images/roll3.png" /> = ' + userTotal + '<br /><img src="images/roll6.png" /> + <img src="images/roll4.png" /> = ' + dealerTotal + "<br />" + winst + "<br /><br />";
  }

  onUserRoll() {
      var userDice1 = Math.floor((Math.random() * 6) + 1);
      var userDice2 = Math.floor((Math.random() * 6) + 1);
      var userTotal = userDice1 + userDice2;
      return userTotal;
      console.log("User rolled");
  }

  onDealerRoll() {
      dealerDice1 = Math.floor((Math.random() * 6) + 1);
      dealerDice2 = Math.floor((Math.random() * 6) + 1);
      dealerTotal = dealerDice1 + dealerDice2;
      return dealerTotal;
      console.log("Dealer Roll");
  }

  onCoinHandler() {
      inzet = document.getElementById("inzet").value;

      var listNodes = document.getElementById("AO coins").getElementsByTagName("p");
      pElement = listNodes[0];
      pElement.innerHTML  = coinsBalance;
  }

  onDiceHandler(userTotal, dealerTotal, userInput) {

      if (inzet >= '10')
      {
        console.log(inzet);

        if (userInput == "Hoger")
        {
          if (userTotal > dealerTotal)
          {
            win = true;
            coinsBalance = +coinsBalance + +inzet;
            winst = inzet;
          }
          else
          {
            win = false;
            coinsBalance -= inzet;
            winst = -inzet;
          }
        }

        else if (userInput == "Lager")
        {
          if (userTotal < dealerTotal)
          {
            win = true;
            coinsBalance = +coinsbalance + +inzet;
            winst = inzet;
          }
          else
          {
            win = false;
            coinsBalance -= inzet;
            winst = -inzet;
          }
        }
        console.log(win);
        console.log(coinsBalance);
        onCoinHandler();
      }
      else
      {
        console.log("Inzet to low!");
      }

  }
}
