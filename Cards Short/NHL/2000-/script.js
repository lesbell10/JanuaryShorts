const playerDropdown = document.querySelector(".yearSelector");
let selectedPlayer = playerDropdown.value;

document.addEventListener("DOMContentLoaded", () => {
    // Load the saved year from localStorage
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
        playerDropdown.value = savedYear;
        selectedPlayer = savedYear;  // Update selectedPlayer
        displayPlayerInfo();  // Automatic<br>ally update the player info based on the saved year     
    }
});

function displayPlayerInfo() {
    document.body.classList.add("nhl-color");
    const nation = document.querySelector(".nation");
    const club = document.querySelector(".club");
    const position = document.querySelector(".position");
    const playerImage = document.querySelector(".playerImage")
    const stats = document.querySelector(".stats")
    const sidepic = document.querySelector(".sidepic")
    const title = document.querySelector(".title")
    const message = document.querySelector(".message")

    sidepic.src = "/NHL/hockey_img/logos/quebec.png"

    nation.textContent = ""
    club.textContent = ""
    stats.innerHTML = ""
    message.style.display = "block";
    // sidepic.style.bottom = "80px"
    // stats.style.bottom = "190px"
    // document.querySelector(".playerInfo").style.height = "675px"
    playerDropdown.style.fontSize = "20px"

    club.style.display = "block"
    nation.style.display = "block"

    function Size(dropSize) {
        playerDropdown.style.fontSize = dropSize + "px";
    }

    if (selectedPlayer === "1") {
        title.innerHTML = "ANAHEIM DUCKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/kariya.jpg";

    } else if (selectedPlayer === "2") {
        title.innerHTML = "ANAHEIM DUCKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/getzlaf.jpg";

    } else if (selectedPlayer === "3") {
        title.innerHTML = "ANAHEIM DUCKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Finland";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Right Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/selanne.jpg";

    } else if (selectedPlayer === "4") {
        playerDropdown.style.fontSize = "19.5px";
        title.innerHTML = "ANAHEIM DUCKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Sweden";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/S niedermayer.jpg";

    } else if (selectedPlayer === "5") {
        title.innerHTML = "ANAHEIM DUCKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/pronger.jpg";

    } else if (selectedPlayer === "6") {
        playerDropdown.style.fontSize = "18.75px";
        title.innerHTML = "ANAHEIM DUCKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/giguere.jpg";
    }
    // allo
    if (selectedPlayer === "7") {
        title.innerHTML = "UTAH MAMMOTHS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Utah Mammoths";
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/keller.jpg";

    } else if (selectedPlayer === "8") {
        title.innerHTML = "UTAH MAMMOTHS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Arizona Coyotes";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/roenick.jpg";

    } else if (selectedPlayer === "9") {
        title.innerHTML = "UTAH MAMMOTHS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Arizona Coyotes";
        position.textContent = "Right Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/doan.jpg";

    } else if (selectedPlayer === "10") {
        title.innerHTML = "UTAH MAMMOTHS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Sweden";
        club.textContent = "Arizona Coyotes";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/ekman-larsson.jpg";

    } else if (selectedPlayer === "11") {
        title.innerHTML = "UTAH MAMMOTHS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/yandle.jpg";

    } else if (selectedPlayer === "12") {
        title.innerHTML = "UTAH MAMMOTHS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Arizona Coyotes";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/m smith.jpg";
        // allo
    } else if (selectedPlayer === "13") {
        title.innerHTML = "BOSTON BRUINS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Boston Bruins";
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/marchand.jpg";

    } else if (selectedPlayer === "14") {
        title.innerHTML = "BOSTON BRUINS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Boston Bruins";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/bergeron.jpg";

    } else if (selectedPlayer === "15") {
        title.innerHTML = "BOSTON BRUINS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Czech Republic";
        club.textContent = "Boston Bruins";
        position.textContent = "Right Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/pastrnak.jpg";

    } else if (selectedPlayer === "16") {
        title.innerHTML = "BOSTON BRUINS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Slovakia";
        club.textContent = "Boston Bruins";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/chara.jpg";

    } else if (selectedPlayer === "17") {
        title.innerHTML = "BOSTON BRUINS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Boston Bruins";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/mcavoy.jpg";

    } else if (selectedPlayer === "18") {
        title.innerHTML = "BOSTON BRUINS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Boston Bruins";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/t thomas.jpg";
    }
    // allo
    if (selectedPlayer === "19") {
        title.innerHTML = "BUFFALO SABRES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Austria";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/vanek.jpg";

    } else if (selectedPlayer === "20") {
        title.innerHTML = "BUFFALO SABRES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Philadelphia Flyers";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/briere.jpg";

    } else if (selectedPlayer === "21") {
        title.innerHTML = "BUFFALO SABRES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Right Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/pominville.jpg";

    } else if (selectedPlayer === "22") {
        title.innerHTML = "BUFFALO SABRES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/b campbell.jpg";

    } else if (selectedPlayer === "23") {
        title.innerHTML = "BUFFALO SABRES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Sweden";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/dahlin.jpg";

    } else if (selectedPlayer === "24") {
        title.innerHTML = "BUFFALO SABRES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Czech Republic";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/hasek.jpg";

    } else if (selectedPlayer === "25") {
        title.innerHTML = "CALGARY FLAMES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Columbus Blue Jackets"; // Gaudreau current team
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/j gaudreau.jpg";

    } else if (selectedPlayer === "26") {
        title.innerHTML = "CALGARY FLAMES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Calgary Flames";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/monahan.jpg";

    } else if (selectedPlayer === "27") {
        title.innerHTML = "CALGARY FLAMES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Calgary Flames";
        position.textContent = "Right Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/iginla.jpg";

    } else if (selectedPlayer === "28") {
        title.innerHTML = "CALGARY FLAMES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Calgary Flames";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/giordano.jpg";

    } else if (selectedPlayer === "29") {
        title.innerHTML = "CALGARY FLAMES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Calgary Flames";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/regehr.jpg";

    } else if (selectedPlayer === "30") {
        title.innerHTML = "CALGARY FLAMES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Finland";
        club.textContent = "Calgary Flames";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/kiprusoff.jpg";

    } else if (selectedPlayer === "31") {
        title.innerHTML = "CAROLINA HURRICANES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Finland";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Center";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/s aho.jpg";

    } else if (selectedPlayer === "32") {
        title.innerHTML = "CAROLINA HURRICANES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/brind'amour.jpg";

    } else if (selectedPlayer === "33") {
        title.innerHTML = "CAROLINA HURRICANES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Center";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/e staal.jpg";

    } else if (selectedPlayer === "34") {
        title.innerHTML = "CAROLINA HURRICANES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/slavin.jpg";

    } else if (selectedPlayer === "35") {
        title.innerHTML = "CAROLINA HURRICANES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/wesley.jpg";

    } else if (selectedPlayer === "36") {
        title.innerHTML = "CAROLINA HURRICANES<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/c ward.jpg";

    } else if (selectedPlayer === "37") {
        title.innerHTML = "CHICAGO BLACKHAWKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/sharp.jpg";

    } else if (selectedPlayer === "38") {
        title.innerHTML = "CHICAGO BLACKHAWKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/j toews.jpg";

    } else if (selectedPlayer === "39") {
        title.innerHTML = "CHICAGO BLACKHAWKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Right Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/p kane.jpg";

    } else if (selectedPlayer === "40") {
        title.innerHTML = "CHICAGO BLACKHAWKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/keith.jpg";

    } else if (selectedPlayer === "41") {
        title.innerHTML = "CHICAGO BLACKHAWKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/seabrook.jpg";

    } else if (selectedPlayer === "42") {
        title.innerHTML = "CHICAGO BLACKHAWKS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/crawford.jpg";

    } else if (selectedPlayer === "43") {
        title.innerHTML = "COLORADO AVALANCHE<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/mackinnon.jpg";

    } else if (selectedPlayer === "44") {
        title.innerHTML = "COLORADO AVALANCHE<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/sakic.jpg";

    } else if (selectedPlayer === "45") {
        title.innerHTML = "COLORADO AVALANCHE<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Sweden";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/forsberg.jpg";

    } else if (selectedPlayer === "46") {
        title.innerHTML = "COLORADO AVALANCHE<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/blake.jpg";

    } else if (selectedPlayer === "47") {
        title.innerHTML = "COLORADO AVALANCHE<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/makar.jpg";

    } else if (selectedPlayer === "48") {
        title.innerHTML = "COLORADO AVALANCHE<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/p roy.jpg";

    } else if (selectedPlayer === "49") {
        title.innerHTML = "COLUMBUS BLUE JACKETS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Columbus Blue Jackets";
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/nash.jpg";

    } else if (selectedPlayer === "50") {
        title.innerHTML = "COLUMBUS BLUE JACKETS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Columbus Blue Jackets";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/jenner.jpg";

    } else if (selectedPlayer === "51") {
        title.innerHTML = "COLUMBUS BLUE JACKETS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Columbus Blue Jackets";
        position.textContent = "Right Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/atkinson.jpg";

    } else if (selectedPlayer === "52") {
        title.innerHTML = "COLUMBUS BLUE JACKETS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Columbus Blue Jackets";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/s jones.jpg";

    } else if (selectedPlayer === "53") {
        title.innerHTML = "COLUMBUS BLUE JACKETS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Columbus Blue Jackets";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/werenski.jpg";

    } else if (selectedPlayer === "54") {
        title.innerHTML = "COLUMBUS BLUE JACKETS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Russia";
        club.textContent = "Columbus Blue Jackets";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/bobrovsky.jpg";

    } else if (selectedPlayer === "55") {
        title.innerHTML = "DALLAS STARS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Dallas Stars";
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/benn.jpg";

    } else if (selectedPlayer === "56") {
        title.innerHTML = "DALLAS STARS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Dallas Stars";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/modano.jpg";

    } else if (selectedPlayer === "57") {
        title.innerHTML = "DALLAS STARS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Dallas Stars";
        position.textContent = "Center";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/seguin.jpg";

    } else if (selectedPlayer === "58") {
        title.innerHTML = "DALLAS STARS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Finland";
        club.textContent = "Dallas Stars";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/heiskanen.jpg";

    } else if (selectedPlayer === "59") {
        title.innerHTML = "DALLAS STARS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Russia";
        club.textContent = "Dallas Stars";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/zubov.jpg";

    } else if (selectedPlayer === "60") {
        title.innerHTML = "DALLAS STARS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Dallas Stars";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/turco.jpg";

    } else if (selectedPlayer === "61") { // Datsyuk
        title.innerHTML = "DETROIT RED WINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Russia";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Center";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/datsyuk.jpg";

    } else if (selectedPlayer === "62") { // Yzerman
        title.innerHTML = "DETROIT RED WINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/yzerman.jpg";

    } else if (selectedPlayer === "63") { // Fedorov
        title.innerHTML = "DETROIT RED WINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Russia";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Center";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/fedorov.jpg";

    } else if (selectedPlayer === "64") { // Lidstrom
        title.innerHTML = "DETROIT RED WINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Sweden";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/lidstrom.jpg";

    } else if (selectedPlayer === "65") { // Chelios
        title.innerHTML = "DETROIT RED WINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/chelios.jpg";

    } else if (selectedPlayer === "66") { // Hasek
        title.innerHTML = "DETROIT RED WINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Czech Republic";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/hasek.jpg";
    }
    // NHL1 — unified player info blocks (67–120)
    else if (selectedPlayer === "67") { // Nugent-Hopkins
        title.innerHTML = "EDMONTON OILERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/nugent-hopkins.jpg";

    } else if (selectedPlayer === "68") { // McDavid
        title.innerHTML = "EDMONTON OILERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/mcdavid.jpg";

    } else if (selectedPlayer === "69") { // Draisaitl
        title.innerHTML = "EDMONTON OILERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Germany";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/draisaitl.jpg";

    } else if (selectedPlayer === "70") { // Nurse
        title.innerHTML = "EDMONTON OILERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/nurse.jpg";

    } else if (selectedPlayer === "71") { // Bouchard
        title.innerHTML = "EDMONTON OILERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/bouchard.jpg";

    } else if (selectedPlayer === "72") { // Roloson
        title.innerHTML = "EDMONTON OILERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/roloson.jpg";

    } else if (selectedPlayer === "73") { // Huberdeau
        playerDropdown.style.fontSize = "17.5px";
        title.innerHTML = "FLORIDA PANTHERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Calgary Flames";
        position.textContent = "Left Wing";
    stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/huberdeau.jpg";

    } else if (selectedPlayer === "74") { // Barkov
        playerDropdown.style.fontSize = "18.5px";
        title.innerHTML = "FLORIDA PANTHERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Finland";
        club.textContent = "Florida Panthers";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/barkov.jpg";

    } else if (selectedPlayer === "75") { // Tkachuk
        title.innerHTML = "FLORIDA PANTHERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Florida Panthers";
        position.textContent = "Left Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/m tkachuk.jpg";

    } else if (selectedPlayer === "76") { // Ekblad
        title.innerHTML = "FLORIDA PANTHERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Florida Panthers";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/ekblad.jpg";

    } else if (selectedPlayer === "77") { // Forsling
        title.innerHTML = "FLORIDA PANTHERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Sweden";
        club.textContent = "Florida Panthers";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/forsling.jpg";

    } else if (selectedPlayer === "78") { // Luongo (retired)
        title.innerHTML = "FLORIDA PANTHERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Florida Panthers";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/luongo.jpg";

    } else if (selectedPlayer === "79") { // Brown (retired)
        title.innerHTML = "LOS ANGELES KINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Kings";
        position.textContent = "Right Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/d brown.jpg";

    } else if (selectedPlayer === "80") { // Kopitar
        title.innerHTML = "LOS ANGELES KINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Slovenia";
        club.textContent = "Los Angeles Kings";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/kopitar.jpg";

    } else if (selectedPlayer === "81") { // Carter (retired)
        title.innerHTML = "LOS ANGELES KINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/j carter.jpg";

    } else if (selectedPlayer === "82") { // Doughty
        title.innerHTML = "LOS ANGELES KINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Los Angeles Kings";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/doughty.jpg";

    } else if (selectedPlayer === "83") { // Martinez (retired)
        title.innerHTML = "LOS ANGELES KINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/a martinez.jpg";

    } else if (selectedPlayer === "84") { // Quick
        title.innerHTML = "LOS ANGELES KINGS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "New York Rangers";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/quick.jpg";

    } else if (selectedPlayer === "85") { // Kaprizov
        title.innerHTML = "MINNESOTA WILD<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Russia";
        club.textContent = "Minnesota Wild";
        position.textContent = "Left Wing";
    stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/kaprizov.jpg";

    } else if (selectedPlayer === "86") { // M Koivu (retired)
        title.innerHTML = "MINNESOTA WILD<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Finland";
        club.textContent = "Columbus Blue Jackets";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/m koivu.jpg";

    } else if (selectedPlayer === "87") { // Gaborik (retired)
        title.innerHTML = "MINNESOTA WILD<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Slovakia";
        club.textContent = "Los Angeles Kings";
        position.textContent = "Right Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/gaborik.jpg";

    } else if (selectedPlayer === "88") { // Suter
        title.innerHTML = "MINNESOTA WILD<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "St Louis Blues";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/suter.jpg";

    } else if (selectedPlayer === "89") { // Spurgeon
        title.innerHTML = "MINNESOTA WILD<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Minnesota Wild";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/spurgeon.jpg";

    } else if (selectedPlayer === "90") { // Backstrom (retired)
        title.innerHTML = "MINNESOTA WILD<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Finland";
        club.textContent = "Minnesota Wild";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/backstrom.jpg";

    } else if (selectedPlayer === "91") { // Suzuki
        title.innerHTML = "MONTREAL CANADIENS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Center";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/suzuki.jpg";

    } else if (selectedPlayer === "92") { // S Koivu (retired)
        title.innerHTML = "MONTREAL CANADIENS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Finland";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/s koivu.jpg";

    } else if (selectedPlayer === "93") { // Kovalev (retired)
        title.innerHTML = "MONTREAL CANADIENS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Russia";
        club.textContent = "Florida Panthers";
        position.textContent = "Right Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/kovalev.jpg";

    } else if (selectedPlayer === "94") { // Markov (retired)
        title.innerHTML = "MONTREAL CANADIENS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Russia";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/markov.jpg";

    } else if (selectedPlayer === "95") { // Weber
        title.innerHTML = "MONTREAL CANADIENS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/weber.jpg";

    } else if (selectedPlayer === "96") { // Price
        title.innerHTML = "MONTREAL CANADIENS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/price.jpg";
    } else if (selectedPlayer === "97") { // Forsberg
        title.innerHTML = "NASHVILLE PREDATORS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Sweden";
        club.textContent = "Nashville Predators";
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/forsberg.jpg";

    } else if (selectedPlayer === "98") { // Fisher (retired -> last team)
        title.innerHTML = "NASHVILLE PREDATORS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Nashville Predators";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/fisher.jpg";

    } else if (selectedPlayer === "99") { // Kariya (retired -> last team)
        title.innerHTML = "NASHVILLE PREDATORS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "St Louis Blues";
        position.textContent = "Left Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/kariya.jpg";

    } else if (selectedPlayer === "100") { // Weber (current contract)
        title.innerHTML = "NASHVILLE PREDATORS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/weber.jpg";

    } else if (selectedPlayer === "101") { // Josi
        title.innerHTML = "NASHVILLE PREDATORS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Switzerland";
        club.textContent = "Nashville Predators";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/josi.jpg";

    } else if (selectedPlayer === "102") { // Rinne (retired -> last team)
        title.innerHTML = "NASHVILLE PREDATORS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Finland";
        club.textContent = "Nashville Predators";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/rinne.jpg";

    } else if (selectedPlayer === "103") { // Parise (retired -> last team)
        title.innerHTML = "NEW JERSEY DEVILS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/parise.jpg";

    } else if (selectedPlayer === "104") { // Hughes
        title.innerHTML = "NEW JERSEY DEVILS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "New Jersey Devils";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/j hughes.jpg";

    } else if (selectedPlayer === "105") { // Elias (retired -> last team)
        title.innerHTML = "NEW JERSEY DEVILS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Czech Republic";
        club.textContent = "New Jersey Devils";
        position.textContent = "Left Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/elias.jpg";

    } else if (selectedPlayer === "106") { // Niedermayer (retired -> last team)
        playerDropdown.style.fontSize = "19.5px";
        title.innerHTML = "NEW JERSEY DEVILS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/s niedermayer.jpg";

    } else if (selectedPlayer === "107") { // Stevens (retired -> last team)
        title.innerHTML = "NEW JERSEY DEVILS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "New Jersey Devils";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/stevens.jpg";

    } else if (selectedPlayer === "108") { // Brodeur (retired -> last team)
        title.innerHTML = "NEW JERSEY DEVILS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "New Jersey Devils";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/brodeur.jpg";

    } else if (selectedPlayer === "109") { // Nelson
        title.innerHTML = "NEW YORK ISLANDERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "New York Islanders";
        position.textContent = "Center";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/nelson.jpg";

    } else if (selectedPlayer === "110") { // Tavares
        title.innerHTML = "NEW YORK ISLANDERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/tavares.jpg";

    } else if (selectedPlayer === "111") { // Bailey (retired -> last played team)
        title.innerHTML = "NEW YORK ISLANDERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "New York Islanders";
        position.textContent = "Right Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/bailey.jpg";

    } else if (selectedPlayer === "112") { // Leddy
        title.innerHTML = "NEW YORK ISLANDERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "San Jose Sharks";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/leddy.jpg";

    } else if (selectedPlayer === "113") { // Pelech
        title.innerHTML = "NEW YORK ISLANDERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Canada";
        club.textContent = "New York Islanders";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/pelech.jpg";

    } else if (selectedPlayer === "114") { // Sorokin
        title.innerHTML = "NEW YORK ISLANDERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Russia";
        club.textContent = "New York Islanders";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/sorokin.jpg";

    } else if (selectedPlayer === "115") { // Kreider
        title.innerHTML = "NEW YORK RANGERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "New York Rangers";
        position.textContent = "Left Wing";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/kreider.jpg";

    } else if (selectedPlayer === "116") { // Zibanejad
        title.innerHTML = "NEW YORK RANGERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Sweden";
        club.textContent = "New York Rangers";
        position.textContent = "Center";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/zibanejad.jpg";

    } else if (selectedPlayer === "117") { // Panarin
        title.innerHTML = "NEW YORK RANGERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Left Wing";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/panarin.jpg";

    } else if (selectedPlayer === "118") { // Fox
        title.innerHTML = "NEW YORK RANGERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "New York Rangers";
        position.textContent = "Defenceman";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/fox.jpg";

    } else if (selectedPlayer === "119") { // McDonagh
        title.innerHTML = "NEW YORK RANGERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "USA";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Defenceman";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/mcdonagh.jpg";

    } else if (selectedPlayer === "120") { // Lundqvist (retired -> last team)
        title.innerHTML = "NEW YORK RANGERS<br>TOP PLAYERS SINCE 2000";
        nation.textContent = "Sweden";
        club.textContent = "New York Rangers";
        position.textContent = "Goaltender";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/lundqvist.jpg";

    }

    if (selectedPlayer === "121") {
        nation.textContent = "Canada";
        club.textContent = "Ottawa Senators";
        position.textContent = "Left Wing";
        title.innerHTML = "OTTAWA SENATORS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/b tkachuk.jpg";
    
    } else if (selectedPlayer === "122") {
        nation.textContent = "Canada";
        club.textContent = "Ottawa Senators";
        position.textContent = "Center";
        title.innerHTML = "OTTAWA SENATORS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/spezza.jpg";
    
    } else if (selectedPlayer === "123") {
        nation.textContent = "Sweden";
        club.textContent = "Ottawa Senators";
        position.textContent = "Right Wing";
        title.innerHTML = "OTTAWA SENATORS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/alfredsson.jpg";
    
    } else if (selectedPlayer === "124") {
        nation.textContent = "Sweden";
        club.textContent = "Ottawa Senators";
        position.textContent = "Defenceman";
        title.innerHTML = "OTTAWA SENATORS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/e karlsson.jpg";
    
    } else if (selectedPlayer === "125") {
        nation.textContent = "Canada";
        club.textContent = "Ottawa Senators";
        position.textContent = "Defenceman";
        title.innerHTML = "OTTAWA SENATORS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/redden.jpg";
    
    } else if (selectedPlayer === "126") {
        nation.textContent = "Canada";
        club.textContent = "Ottawa Senators";
        position.textContent = "Goaltender";
        title.innerHTML = "OTTAWA SENATORS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/c anderson.jpg";
    
    } else if (selectedPlayer === "127") {
        nation.textContent = "Canada";
        club.textContent = "Philadelphia Flyers";
        position.textContent = "Left Wing";
        title.innerHTML = "PHILADELPHIA FLYERS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/gagne.jpg";
    
    } else if (selectedPlayer === "128") {
        nation.textContent = "Canada";
        club.textContent = "Philadelphia Flyers";
        position.textContent = "Center";
        title.innerHTML = "PHILADELPHIA FLYERS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/giroux.jpg";
    
    } else if (selectedPlayer === "129") {
        nation.textContent = "Canada";
        club.textContent = "Philadelphia Flyers";
        position.textContent = "Center";
        title.innerHTML = "PHILADELPHIA FLYERS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/m richards.jpg";
    
    } else if (selectedPlayer === "130") {
        nation.textContent = "Canada";
        club.textContent = "Philadelphia Flyers";
        position.textContent = "Defenceman";
        title.innerHTML = "PHILADELPHIA FLYERS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/desjardins.jpg";
    
    } else if (selectedPlayer === "131") {
        nation.textContent = "Canada";
        club.textContent = "Philadelphia Flyers";
        position.textContent = "Defenceman";
        title.innerHTML = "PHILADELPHIA FLYERS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/pronger.jpg";
    
    } else if (selectedPlayer === "132") {
        nation.textContent = "Czechia";
        club.textContent = "Philadelphia Flyers";
        position.textContent = "Goaltender";
        title.innerHTML = "PHILADELPHIA FLYERS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/cechmanek.jpg";
    
    } else if (selectedPlayer === "133") {
        nation.textContent = "USA";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Left Wing";
        title.innerHTML = "PITTSBURGH PENGUINS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/guentzel.jpg";
    
    } else if (selectedPlayer === "134") {
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        title.innerHTML = "PITTSBURGH PENGUINS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/crosby.jpg";
    
    } else if (selectedPlayer === "135") {
        nation.textContent = "Russia";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        title.innerHTML = "PITTSBURGH PENGUINS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/malkin.jpg";
    
    } else if (selectedPlayer === "136") {
        nation.textContent = "Russia";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Defenceman";
        title.innerHTML = "PITTSBURGH PENGUINS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/gonchar.jpg";
    
    } else if (selectedPlayer === "137") {
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Defenceman";
        title.innerHTML = "PITTSBURGH PENGUINS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/letang.jpg";
    
    } else if (selectedPlayer === "138") {
        playerDropdown.style.fontSize = "19.25px";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Goaltender";
        title.innerHTML = "PITTSBURGH PENGUINS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/fleury.jpg";
    
    } else if (selectedPlayer === "139") {
        nation.textContent = "Canada";
        club.textContent = "San Jose Sharks";
        position.textContent = "Left Wing";
        title.innerHTML = "SAN JOSE SHARKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/marleau.jpg";
    
    } else if (selectedPlayer === "140") {
        nation.textContent = "Canada";
        club.textContent = "San Jose Sharks";
        position.textContent = "Center";
        title.innerHTML = "SAN JOSE SHARKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/thornton.jpg";
    
    } else if (selectedPlayer === "141") {
        nation.textContent = "USA";
        club.textContent = "San Jose Sharks";
        position.textContent = "Right Wing";
        title.innerHTML = "SAN JOSE SHARKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/pavelski.jpg";
    
    } else if (selectedPlayer === "142") {
        nation.textContent = "Canada";
        club.textContent = "San Jose Sharks";
        position.textContent = "Defenceman";
        title.innerHTML = "SAN JOSE SHARKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/burns.jpg";
    
    } else if (selectedPlayer === "143") {
        playerDropdown.style.fontSize = "17.5px";
        nation.textContent = "Canada";
        club.textContent = "San Jose Sharks";
        position.textContent = "Defenceman";
        title.innerHTML = "SAN JOSE SHARKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/vlasic.jpg";
    
    } else if (selectedPlayer === "144") {
        nation.textContent = "Russia";
        club.textContent = "San Jose Sharks";
        position.textContent = "Goaltender";
        title.innerHTML = "SAN JOSE SHARKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/nabokov.jpg";
    
    } else if (selectedPlayer === "145") {
        nation.textContent = "Canada";
        club.textContent = "Seattle Kraken";
        position.textContent = "Left Wing";
        title.innerHTML = "SEATTLE KRAKEN<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/mccann.jpg";
    
    } else if (selectedPlayer === "146") {
        nation.textContent = "Canada";
        club.textContent = "Seattle Kraken";
        position.textContent = "Center";
        title.innerHTML = "SEATTLE KRAKEN<br>TOP PLAYERS SINCE 2021";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/gourde.jpg";
    
    } else if (selectedPlayer === "147") {
        nation.textContent = "Canada";
        club.textContent = "Seattle Kraken";
        position.textContent = "Right Wing";
        title.innerHTML = "SEATTLE KRAKEN<br>TOP PLAYERS SINCE 2021";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/eberle.jpg";
    
    } else if (selectedPlayer === "148") {
        nation.textContent = "Canada";
        club.textContent = "Seattle Kraken";
        position.textContent = "Defenceman";
        title.innerHTML = "SEATTLE KRAKEN<br>TOP PLAYERS SINCE 2021";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/dunn.jpg";
    
    } else if (selectedPlayer === "149") {
        nation.textContent = "Sweden";
        club.textContent = "Seattle Kraken";
        position.textContent = "Defenceman";
        title.innerHTML = "SEATTLE KRAKEN<br>TOP PLAYERS SINCE 2021";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/larsson.jpg";
    
    } else if (selectedPlayer === "150") {
        nation.textContent = "Germany";
        club.textContent = "Seattle Kraken";
        position.textContent = "Goaltender";
        title.innerHTML = "SEATTLE KRAKEN<br>TOP PLAYERS SINCE 2021";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/grubauer.jpg";
    
    } else if (selectedPlayer === "151") {
        nation.textContent = "Sweden";
        club.textContent = "St Louis Blues";
        position.textContent = "Left Wing";
        title.innerHTML = "ST LOUIS BLUES<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/a steen.jpg";
    
    } else if (selectedPlayer === "152") {
        nation.textContent = "USA";
        club.textContent = "St Louis Blues";
        position.textContent = "Right Wing";
        title.innerHTML = "ST LOUIS BLUES<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/tkachuk.jpg";
    
    } else if (selectedPlayer === "153") {
        playerDropdown.style.fontSize = "18.75px";
        nation.textContent = "Russia";
        club.textContent = "St Louis Blues";
        position.textContent = "Right Winger";
        title.innerHTML = "ST LOUIS BLUES<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/tarasenko.jpg";
    
    } else if (selectedPlayer === "154") {
        nation.textContent = "Canada";
        club.textContent = "St Louis Blues";
        position.textContent = "Defenceman";
        title.innerHTML = "ST LOUIS BLUES<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/pietrangelo.jpg";
    
    } else if (selectedPlayer === "155") {
        nation.textContent = "Canada";
        club.textContent = "St Louis Blues";
        position.textContent = "Defenceman";
        title.innerHTML = "ST LOUIS BLUES<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/pronger.jpg";
    
    } else if (selectedPlayer === "156") {
        nation.textContent = "Canada";
        club.textContent = "St Louis Blues";
        position.textContent = "Goaltender";
        title.innerHTML = "ST LOUIS BLUES<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/binnington.jpg";
    
    } else if (selectedPlayer === "157") {
        nation.textContent = "Canada";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Wing";
        title.innerHTML = "TAMPA BAY LIGHTNING<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/st louis.jpg";
    
    } else if (selectedPlayer === "158") {
        playerDropdown.style.fontSize = "19.8px";
        nation.textContent = "Canada";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Center";
        title.innerHTML = "TAMPA BAY LIGHTNING<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/lecavalier.jpg";
    
    } else if (selectedPlayer === "159") {
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Wing";
        title.innerHTML = "TAMPA BAY LIGHTNING<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/kucherov.jpg";
    
    } else if (selectedPlayer === "160") {
        nation.textContent = "Sweden";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Defenceman";
        title.innerHTML = "TAMPA BAY LIGHTNING<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/hedman.jpg";
    
    } else if (selectedPlayer === "161") {
        nation.textContent = "Canada";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Defenceman";
        title.innerHTML = "TAMPA BAY LIGHTNING<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/boyle.jpg";
    
    } else if (selectedPlayer === "162") {
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Goaltender";
        title.innerHTML = "TAMPA BAY LIGHTNING<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/vasilevskiy.jpg";
    
    } else if (selectedPlayer === "163") {
        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Right Wing";
        title.innerHTML = "TORONTO MAPLE LEAFS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/marner.jpg";
    
    } else if (selectedPlayer === "164") {
        nation.textContent = "USA";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        title.innerHTML = "TORONTO MAPLE LEAFS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/matthews.jpg";
    
    } else if (selectedPlayer === "165") {
        nation.textContent = "Sweden";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        title.innerHTML = "TORONTO MAPLE LEAFS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/sundin.jpg";
    
    } else if (selectedPlayer === "166") {
        nation.textContent = "Czechia";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Defenceman";
        title.innerHTML = "TORONTO MAPLE LEAFS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/kaberle.jpg";
    
    } else if (selectedPlayer === "167") {
        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Defenceman";
        title.innerHTML = "TORONTO MAPLE LEAFS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/rielly.jpg";
    
    } else if (selectedPlayer === "168") {
        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Goaltender";
        title.innerHTML = "TORONTO MAPLE LEAFS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/belfour.jpg";
    
    } else if (selectedPlayer === "169") {
        nation.textContent = "Sweden";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Left Wing";
        title.innerHTML = "VANCOUVER CANUCKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/d sedin.jpg";
    
    } else if (selectedPlayer === "170") {
        nation.textContent = "Sweden";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Center";
        title.innerHTML = "VANCOUVER CANUCKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/h sedin.jpg";
    
    } else if (selectedPlayer === "171") {
        nation.textContent = "Sweden";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Left Wing";
        title.innerHTML = "VANCOUVER CANUCKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/naslund.jpg";
    
    } else if (selectedPlayer === "172") {
        nation.textContent = "Sweden";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Defenceman";
        title.innerHTML = "VANCOUVER CANUCKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/edler.jpg";
    
    } else if (selectedPlayer === "173") {
        nation.textContent = "USA";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Defenceman";
        title.innerHTML = "VANCOUVER CANUCKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/q hughes.jpg";
    
    } else if (selectedPlayer === "174") {
        nation.textContent = "Canada";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Goaltender";
        title.innerHTML = "VANCOUVER CANUCKS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/luongo.jpg";
    
    } else if (selectedPlayer === "175") {
        nation.textContent = "Sweden";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Center";
        title.innerHTML = "VEGAS GOLDEN KNIGHTS<br>TOP PLAYERS SINCE 2017";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/w karlsson.jpg";
    
    } else if (selectedPlayer === "176") {
        nation.textContent = "USA";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Center";
        title.innerHTML = "VEGAS GOLDEN KNIGHTS<br>TOP PLAYERS SINCE 2017";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/eichel.jpg";
    
    } else if (selectedPlayer === "177") {
        nation.textContent = "Canada";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Right Wing";
        title.innerHTML = "VEGAS GOLDEN KNIGHTS<br>TOP PLAYERS SINCE 2017";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/stone.jpg";
    
    } else if (selectedPlayer === "178") {
        nation.textContent = "Canada";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Defenceman";
        title.innerHTML = "VEGAS GOLDEN KNIGHTS<br>TOP PLAYERS SINCE 2017";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/pietrangelo.jpg";
    
    } else if (selectedPlayer === "179") {
        nation.textContent = "Canada";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Defenceman";
        title.innerHTML = "VEGAS GOLDEN KNIGHTS<br>TOP PLAYERS SINCE 2017";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/s theodore.jpg";
    
    } else if (selectedPlayer === "180") {
        nation.textContent = "Canada";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Goaltender";
        title.innerHTML = "VEGAS GOLDEN KNIGHTS<br>TOP PLAYERS SINCE 2017";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/a hill.jpg";
    
    } else if (selectedPlayer === "181") {
        playerDropdown.style.fontSize = "18.25px";
        nation.textContent = "Russia";
        club.textContent = "Washington Capitals";
        position.textContent = "Left Wing";
        title.innerHTML = "WASHINGTON CAPITALS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL";
        playerImage.src = "/hockey_img/players/ovechkin.jpg";
    
    } else if (selectedPlayer === "182") {
        playerDropdown.style.fontSize = "19px";
        nation.textContent = "Sweden";
        club.textContent = "Washington Capitals";
        position.textContent = "Center";
        title.innerHTML = "WASHINGTON CAPITALS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FC";
        playerImage.src = "/hockey_img/players/backstrom.jpg";
    
    } else if (selectedPlayer === "183") {
        nation.textContent = "USA";
        club.textContent = "Washington Capitals";
        position.textContent = "Right Wing";
        title.innerHTML = "WASHINGTON CAPITALS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/oshie.jpg";
    
    } else if (selectedPlayer === "184") {
        nation.textContent = "USA";
        club.textContent = "Washington Capitals";
        position.textContent = "Defenceman";
        title.innerHTML = "WASHINGTON CAPITALS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/carlson.jpg";
    
    } else if (selectedPlayer === "185") {
        nation.textContent = "USA";
        club.textContent = "Washington Capitals";
        position.textContent = "Defenceman";
        title.innerHTML = "WASHINGTON CAPITALS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/m green.jpg";
    
    } else if (selectedPlayer === "186") {
        nation.textContent = "USA";
        club.textContent = "Washington Capitals";
        position.textContent = "Goaltender";
        title.innerHTML = "WASHINGTON CAPITALS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/holtby.jpg"; //BRADEN HOLTBY
    
    } else if (selectedPlayer === "187") {
        nation.textContent = "Russia";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Left Wing";
        title.innerHTML = "WINNIPEG JETS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FL"; //ILYA KOVALCHUK
        playerImage.src = "/hockey_img/players/kovalchuk.jpg";
    
    } else if (selectedPlayer === "188") {
        nation.textContent = "Canada";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Center";
        title.innerHTML = "WINNIPEG JETS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FC"; //MARK SCHEIFELE
        playerImage.src = "/hockey_img/players/scheifele.jpg";
    
    } else if (selectedPlayer === "189") {
        nation.textContent = "Canada";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Right Wing";
        title.innerHTML = "WINNIPEG JETS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "FR";
        playerImage.src = "/hockey_img/players/wheeler.jpg";
    
    } else if (selectedPlayer === "190") {
        nation.textContent = "Canada";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Defenceman";
        title.innerHTML = "WINNIPEG JETS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DL";
        playerImage.src = "/hockey_img/players/byfuglien.jpg";
    
    } else if (selectedPlayer === "191") {
        nation.textContent = "Canada";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Defenceman";
        title.innerHTML = "WINNIPEG JETS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "DR";
        playerImage.src = "/hockey_img/players/morrissey.jpg";
    
    } else if (selectedPlayer === "192") {
        playerDropdown.style.fontSize = "18.5px";
        nation.textContent = "USA";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Goaltender";
        title.innerHTML = "WINNIPEG JETS<br>TOP PLAYERS SINCE 2000";
        stats.innerHTML = "G";
        playerImage.src = "/hockey_img/players/hellebuyck.jpg";
    }
}
    document.querySelector(".yearSelector").addEventListener("change", () => {

        selectedPlayer = playerDropdown.value;  // Update selectedPlayer
        localStorage.setItem("selectedYear", playerDropdown.value);

        displayPlayerInfo();
    });
