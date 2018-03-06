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

  shopHandler(number, imageRoll) {
      for (let y = 1; y < 5; y++) {
        document.getElementById("imageItem" + y).style.border = "3px solid #5C6655"
      }
      document.getElementById("imageItem" + number).style.border = "3px solid blue";
      document.getElementById("pItem" + number).style.display = "none";
      for (let x = 1; x < 7; x++) {
        document.getElementById("roll"+ x).src = "images/" +imageRoll[x-1];
      }
      document.getElementById("shopItem" + number).innerHTML = "Kies"
  }

  displayWinner(number) {
      document.getElementById("imageItem" + number).style.border = "3px solid blue";
      document.getElementById("pItem" + number).style.display = "none";
      document.getElementById("winner").style.display = "inline";
      document.getElementById("shopItem5").innerHTML = "Gekocht"
  }

  setDiceImage() {
      document.getElementById("imageItem1").style.border = "3px solid blue";
      document.getElementById("winner").style.display = "none";
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

  onDealerCanvasHandler(dealerRollArray)
  {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    ctx.clearRect(0,0, document.getElementById("canvas").width,
    document.getElementById("canvas").height);
    this.roll = [document.getElementById("roll1"), document.getElementById("roll2"), document.getElementById("roll3"),
                document.getElementById("roll4"), document.getElementById("roll5"), document.getElementById("roll6")];
    this.pos = [25, 150];
    for (var x = 0 ; x < 2; x++) {
      switch(dealerRollArray[x])
      {
        case 1:
        ctx.drawImage(this.roll[0],this.pos[x],25,100,100);
        break;
        case 2:
        ctx.drawImage(this.roll[1],this.pos[x],25,100,100);
        break;
        case 3:
        ctx.drawImage(this.roll[2],this.pos[x],25,100,100);
        break;
        case 4:
        ctx.drawImage(this.roll[3],this.pos[x],25,100,100);
        break;
        case 5:
        ctx.drawImage(this.roll[4],this.pos[x],25,100,100);
        break;
        case 6:
        ctx.drawImage(this.roll[5],this.pos[x],25,100,100);
        break;
      }
    }
      ctx.fillStyle="white";
      ctx.font = "50px Rockwell";
      ctx.fillText(dealerRollArray[2],400,90);
  }

  onUserCanvasHandler(userRollArray)
  {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");

    for (var x = 0; x < 2; x++) {
      switch(userRollArray[x])
      {
        case 1:
        ctx.drawImage(this.roll[0],this.pos[x],275,100,100);
        break;
        case 2:
        ctx.drawImage(this.roll[1],this.pos[x],275,100,100);
        break;
        case 3:
        ctx.drawImage(this.roll[2],this.pos[x],275,100,100);
        break;
        case 4:
        ctx.drawImage(this.roll[3],this.pos[x],275,100,100);
        break;
        case 5:
        ctx.drawImage(this.roll[4],this.pos[x],275,100,100);
        break;
        case 6:
        ctx.drawImage(this.roll[5],this.pos[x],275,100,100);
        break;
      }
    }

    ctx.fillStyle="#ffffff";
    ctx.font = "50px Rockwell";
    ctx.fillText(userRollArray[2],400,340);

    if (userRollArray[3])
    {
        ctx.fillText("Speler Wint!",110,210);
    }
    else
    {
      ctx.fillText("Bank Wint!",130,210);
    }
  }

}
