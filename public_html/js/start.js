window.onload=start

var coinsBalance = '500';
var inzet ;
var win ;
var winst ;

var userInput ;
var userDice1 ;
var userDice2 ;
var userTotal ;
var dealerDice1 ;
var dealerDice2 ;
var dealerTotal ;

var logLeftElement ;
var logRechtsElement ;
var rounds = 0;

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

function onHogerHandler()
{
  console.log("Hoger invoer geregistreerd.");
  userInput = "Hoger";
  document.getElementById('userRoll').style.display = "inline";
  document.getElementById('hoger').style.display = "none";
  document.getElementById('lager').style.display = "none";
}

function onLagerHandler()
{
  console.log("Lager invoer geregistreerd.")
  userInput = "Hager";
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
  onLogElementHandler();
  onLogHandler();
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

function onLogHandler()
{
        var logInfo1 = "";
        logInfo1 = logLeftElement + logInfo1;
        var info1 = document.getElementById("info1");
        info1.innerHTML = logInfo1;

        var logInfo2 = "";
        logInfo2 = logRightElement + logInfo2;
        var info2 = document.getElementById("info2");
        info2.innerHTML = logInfo2;
}

function onLogElementHandler()
{
    logLeftElement = "Inzet:<br />Keuze:<br />Bank:<br />Speler:<br />Winst:<br /><br />";
    logRightElement = inzet + "<br />" + userInput + '<br /><img src="images/roll1.png" /> + <img src="images/roll3.png" /> = ' + userTotal + '<br /><img src="images/roll6.png" /> + <img src="images/roll4.png" /> = ' + dealerTotal + "<br />" + winst + "<br /><br />";
    rounds += 1;
    console.log(rounds);
}
