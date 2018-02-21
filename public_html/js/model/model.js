class Model {
  constructor(){
    this.userInput ;
    this.logInfo1 = "";
    this.logInfo2 = "";
    this.inzet ;
    this.userTotal ;
    this.dealerTotal ;
    this.winst ;
    this.coinBalance = 500 ;
  }

  getInzet() {
      var inzet = document.getElementById("inzet").value;
      return inzet;
  }

  checkInzetValue(event) {
    let value = document.getElementById("inzet").value ;
    let min = 10;
    let max = this.coinBalance;
    console.log("mouseleave");
    console.log("min: " + min);
    console.log("max: " + max);
    console.log("value: " + value)

    if(value > max) {
        document.getElementById("inzet").value = max;
        console.log("To high inzet detected");
        var errorMessage = "Inzet te hoog";
    }
    else if(value < min) {
        document.getElementById("inzet").value = min;
        console.log("To low inzet detected");
        errorMessage = "Inzet te laag";
    }
    else {
        errorMessage = "none"
    }
      return errorMessage;
  }


  getCoinBalance() {
      return this.coinBalance;
  }

  onChoiceHandler(input) {
      this.userInput = input;
  }

  getUserInput() {
      return this.userInput;
  }


  onLogLeftHandler() {
      let logLeftElement = "Inzet:<br />Keuze:<br />Bank:<br />Speler:<br />Winst:<br /><br />";

      this.logInfo1 = logLeftElement + this.logInfo1;
      return this.logInfo1;
  }

  onLogRightHandler() {

      let dice = [this.dealerDice1, this.dealerDice2, this.userDice1, this.userDice2];
      let diceImage = new Array(4);
      debugger;
      for (var x = 0; x < 4; x++) {
        switch (dice[x]) {
          case 1:
              diceImage[x] = "images/roll1.png";
              break;
          case 2:
              diceImage[x] = "images/roll2.png";
              break;
          case 3:
              diceImage[x] = "images/roll3.png";
              break;
          case 4:
              diceImage[x] = "images/roll4.png";
              break;
          case 5:
              diceImage[x] = "images/roll5.png";
              break;
          case 6:
              diceImage[x] = "images/roll6.png";
              break;
        }
      }

      let logRightElement = this.inzet + "<br />" + this.userInput + '<br /><img src=' + diceImage[0] + ' /> + <img src=' + diceImage[1] + ' /> = ' + this.dealerTotal + '<br /><img src=' + diceImage[2] + ' /> + <img src=' + diceImage[3] + ' /> = ' + this.userTotal + "<br />" + this.winst + "<br /><br />";

      this.logInfo2 = logRightElement + this.logInfo2;
      return this.logInfo2;
  }


  onUserRoll() {
      this.userDice1 = Math.floor((Math.random() * 6) + 1);
      this.userDice2 = Math.floor((Math.random() * 6) + 1);
      this.userTotal = this.userDice1 + this.userDice2;
      console.log("User rolled");
      return this.userTotal;
  }

  getUserRoll(winValue) {
    let userRollArray = [this.userDice1, this.userDice2, this.userTotal, winValue];
    return userRollArray;
  }

  onDealerRoll() {
      this.dealerDice1 = Math.floor((Math.random() * 6) + 1);
      this.dealerDice2 = Math.floor((Math.random() * 6) + 1);
      this.dealerTotal = this.dealerDice1 + this.dealerDice2;
      console.log("Dealer Rolled");
      return this.dealerTotal;
  }

  getDealerRoll() {
    let dealerRollArray = [this.dealerDice1, this.dealerDice2, this.dealerTotal];
    return dealerRollArray;
  }

  onCoinHandler(win) {
      this.inzet = document.getElementById("inzet").value;

      if (win == true) {
        this.coinBalance = +this.coinBalance + +this.inzet;
        this.winst = this.inzet;
        console.log("New coin balance: " + this.coinBalance);
      } else if(win == false) {
        this.coinBalance -= this.inzet;
        this.winst = -this.inzet;
        console.log("New coin balance: " + this.coinBalance);
      }

  }

  onDiceHandler(userTotal, dealerTotal, userInput) {

      let inzet = document.getElementById("inzet").value;
      if (inzet >= '10')
      {
        console.log("Inzet: " + inzet);

        if (userInput == "Hoger")
        {
          if (userTotal > dealerTotal)
          {
            return true;
          }
          else
          {
            return false;
          }
        }

        else if (userInput == "Lager")
        {
          if (userTotal < dealerTotal)
          {
            return true;
          }
          else
          {
            return false;
          }
        }
      }
      else
      {
        console.log("Inzet to low!");
      }

  }
}
