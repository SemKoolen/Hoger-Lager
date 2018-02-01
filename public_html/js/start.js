window.onload=start

var coinsBalance = '500';
var inzet ;
var win ;

var userInput ;
var userDice1 ;
var userDice2 ;
var userTotal ;
var dealerDice1 ;
var dealerDice2 ;
var dealerTotal ;

function start() {
    console.log("Het programma is opgestart");
    onCoinHandler();
    onResetHandler();
    document.getElementById("hoger").addEventListener("click",  onHogerHandler);
    document.getElementById("lager").addEventListener("click",  onLagerHandler);
    document.getElementById("dealerRoll").addEventListener("click",  onDealerRoll);
    document.getElementById("userRoll").addEventListener("click",  onUserRoll);
}

function onCoinHandler()
{
    inzet = document.getElementById("inzet").value;

    var listNodes = document.getElementById("AO coins").getElementsByTagName("p");
    pElement = listNodes[0];
    pElement.innerHTML  = coinsBalance;
}

function onDiceHandler()
{
    inzet = document.getElementById("inzet").value;
    if (inzet >= '10')
    {
      console.log(inzet);

      if (userInput == "hoger")
      {
        if (userTotal > dealerTotal)
        {
          win = true;
          coinsBalance = +coinsBalance + +inzet;
        }
        else
        {
          win = false;
          coinsBalance -= inzet;
        }
      }

      else if (userInput == "lager")
      {
        if (userTotal < dealerTotal)
        {
          win = true;
          coinsBalance = +coinsbalance + +inzet;
        }
        else
        {
          win = false;
          coinsBalance -= inzet;
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

function onHogerHandler()
{
  console.log("Hoger invoer geregistreerd.");
  userInput = "hoger";
  document.getElementById('userRoll').style.display = "inline";
  document.getElementById('hoger').style.display = "none";
  document.getElementById('lager').style.display = "none";
}

function onLagerHandler()
{
  console.log("Lager invoer geregistreerd.")
  userInput = "lager";
  document.getElementById('userRoll').style.display = "inline";
  document.getElementById('hoger').style.display = "none";
  document.getElementById('lager').style.display = "none";
}

function onUserRoll()
{
  userDice1 = Math.floor((Math.random() * 6) + 1);
  userDice2 = Math.floor((Math.random() * 6) + 1);
  userTotal = userDice1 + userDice2;
  console.log("User rolled");
  onDiceHandler();
  onResetHandler();
}

function onDealerRoll()
{
  dealerDice1 = Math.floor((Math.random() * 6) + 1);
  dealerDice2 = Math.floor((Math.random() * 6) + 1);
  dealerTotal = dealerDice1 + dealerDice2;
  console.log("Dealer Roll");
  document.getElementById("hoger").style.display = "inline";
  document.getElementById("lager").style.display = "inline";
  document.getElementById("dealerRoll").style.display = "none";
}

function onResetHandler()
{
    document.getElementById("dealerRoll").style.display = "inline";
    document.getElementById("userRoll").style.display = "none";
    document.getElementById("hoger").style.display = "none";
    document.getElementById("lager").style.display = "none";
}
