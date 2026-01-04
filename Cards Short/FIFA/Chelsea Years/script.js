const playerDropdown = document.querySelector(".yearSelector");
let selectedPlayer = playerDropdown.value;

document.addEventListener("DOMContentLoaded", () => {
    // Load the saved year from localStorage
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
        playerDropdown.value = savedYear;
        selectedPlayer = savedYear;  // Update selectedPlayer
        displayPlayerInfo();  // Automatically update the player info based on the saved year
    }
});

function switchTheme(theme) {
    // Remove any existing theme classes
    document.body.classList.remove("fifa-color", "nba-color", "nhl-color");

    // Add the new theme class
    document.body.classList.add(`${theme}-color`);
}

function displayPlayerInfo() {
    switchTheme("fifa");
    const nation = document.querySelector(".nation");
    const club = document.querySelector(".club");
    const position = document.querySelector(".position");
    const playerImage = document.querySelector(".playerImage")
    const stats = document.querySelector(".stats")
    const sidepic = document.querySelector(".sidepic")
    const title = document.querySelector(".title")

    // club.style.fontSize = "28px"


    // sidepic.src = "/football_img/logos/soccer ball.webp"
    // if (selectedPlayer === "100") {
    //     birthDate.textContent = "";
    //     nation.textContent = "";
    //     club.textContent = "";
    //     position.textContent = "";
    //     playerImage.src = "";
    // }

    nation.textContent = ""
    club.textContent = ""
    stats.innerHTML = ""

    // sidepic.style.bottom = "30px"
    // stats.style.bottom = "200px"
    document.querySelector(".short").style.background = " linear-gradient(135deg, darkgrey 20%, #00ff66 100%)";
    document.querySelector(".playerInfo").style.border = "1px solid white"
    document.querySelector("select").style.fontSize = "20px"
    document.querySelector(".club").style.fontSize = "23px"

    nation.style.display = "block"
    club.style.display = "block"

    function Size(dropSize) {
        playerDropdown.style.fontSize = dropSize + "px";
    }

    // FIFA 1 — CHELSEA PLAYERS

    // FIFA1 — CHELSEA LEGENDS SELECT (1–30)

    if (selectedPlayer === "1") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 1995-2000";
        nation.textContent = "Italy";
        club.textContent = "Chelsea";
        position.textContent = "Forward";
        stats.innerHTML = "1st";
        playerImage.src = "/football_img/players/zola.webp";
    }
    else if (selectedPlayer === "2") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 1995-2000";
        nation.textContent = "Netherlands";
        club.textContent = "Chelsea";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "2nd";
        playerImage.src = "/football_img/players/gullit.webp";
    }
    else if (selectedPlayer === "3") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 1995-2000";
        nation.textContent = "England";
        club.textContent = "Chelsea";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "3rd";
        playerImage.src = "/football_img/players/wise.webp";
    }
    else if (selectedPlayer === "4") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 1995-2000";
        nation.textContent = "France";
        club.textContent = "Chelsea";
        position.textContent = "Centre Back";
        stats.innerHTML = "4th";
        playerImage.src = "/football_img/players/desailly.webp";
    }
    else if (selectedPlayer === "5") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 1995-2000";
        nation.textContent = "England";
        club.textContent = "Chelsea";
        position.textContent = "Left Back";
        stats.innerHTML = "5th";
        playerImage.src = "/football_img/players/le saux.webp";
    }
    else if (selectedPlayer === "6") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2000-2005";
        nation.textContent = "England";
        club.textContent = "Chelsea";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "1st";
        playerImage.src = "/football_img/players/lampard.webp";
    }
    else if (selectedPlayer === "7") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2000-2005";
        nation.textContent = "England";
        club.textContent = "Chelsea";
        position.textContent = "Centre Back";
        stats.innerHTML = "2nd";
        playerImage.src = "/football_img/players/terry.webp";
    }
    else if (selectedPlayer === "8") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2000-2005";
        nation.textContent = "Ivory Coast";
        club.textContent = "Chelsea";
        position.textContent = "Striker";
        stats.innerHTML = "3rd";
        playerImage.src = "/football_img/players/drogba.webp";
    }
    else if (selectedPlayer === "9") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2000-2005";
        nation.textContent = "France";
        club.textContent = "Chelsea";
        position.textContent = "Centre Back";
        stats.innerHTML = "4th";
        playerImage.src = "/football_img/players/gallas.webp";
    }
    else if (selectedPlayer === "10") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2000-2005";
        nation.textContent = "Italy";
        club.textContent = "Chelsea";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "5th";
        playerImage.src = "/football_img/players/cudicini.webp";
    }
    else if (selectedPlayer === "11") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2005-2010";
        nation.textContent = "England";
        club.textContent = "Chelsea";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "1st";
        playerImage.src = "/football_img/players/lampard.webp";
    }
    else if (selectedPlayer === "12") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2005-2010";
        nation.textContent = "Ivory Coast";
        club.textContent = "Chelsea";
        position.textContent = "Striker";
        stats.innerHTML = "2nd";
        playerImage.src = "/football_img/players/drogba.webp";
    }
    else if (selectedPlayer === "13") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2005-2010";
        nation.textContent = "England";
        club.textContent = "Chelsea";
        position.textContent = "Centre Back";
        stats.innerHTML = "3rd";
        playerImage.src = "/football_img/players/terry.webp";
    }
    else if (selectedPlayer === "14") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2005-2010";
        nation.textContent = "Czech Republic";
        club.textContent = "Chelsea";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "4th";
        playerImage.src = "/football_img/players/cech.webp";
    }
    else if (selectedPlayer === "15") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2005-2010";
        nation.textContent = "England"; 
        club.textContent = "Chelsea";
        position.textContent = "Left Back";
        stats.innerHTML = "5th";
        playerImage.src = "/football_img/players/a cole.webp";
    }
    else if (selectedPlayer === "16") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2010-2015";
        nation.textContent = "Belgium";
        club.textContent = "Chelsea";
        position.textContent = "Left Winger";
        stats.innerHTML = "1st";
        playerImage.src = "/football_img/players/hazard.webp";
    }
    else if (selectedPlayer === "17") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2010-2015";
        nation.textContent = "England";
        club.textContent = "Chelsea";
        position.textContent = "Centre Back";
        stats.innerHTML = "2nd";
        playerImage.src = "/football_img/players/terry.webp";
    }
    else if (selectedPlayer === "18") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2010-2015";
        nation.textContent = "Spain";
        club.textContent = "Chelsea";
        position.textContent = "Right Back";
        stats.innerHTML = "3rd";
        playerImage.src = "/football_img/players/azpilicueta.webp";
    }
    else if (selectedPlayer === "19") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2010-2015";
        nation.textContent = "Brazil";
        club.textContent = "Chelsea";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "4th";
        playerImage.src = "/football_img/players/ramires.webp";
    }
    else if (selectedPlayer === "20") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2010-2015";
        nation.textContent = "Spain";
        club.textContent = "Chelsea";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "5th";
        playerImage.src = "/football_img/players/fabregas.webp";
    }
    else if (selectedPlayer === "21") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2015-2020";
        nation.textContent = "Belgium";
        club.textContent = "Chelsea";
        position.textContent = "Left Winger";
        stats.innerHTML = "1st";
        playerImage.src = "/football_img/players/hazard.webp";
    }
    else if (selectedPlayer === "22") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2015-2020";
        nation.textContent = "France";
        club.textContent = "Chelsea";
        position.textContent = "Defensive Midfielder";
        stats.innerHTML = "2nd";
        playerImage.src = "/football_img/players/kante.webp";
    }
    else if (selectedPlayer === "23") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2015-2020";
        nation.textContent = "Belgium";
        club.textContent = "Chelsea";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "3rd";
        playerImage.src = "/football_img/players/courtois.webp";
    }
    else if (selectedPlayer === "24") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2015-2020";
        nation.textContent = "Spain";
        club.textContent = "Chelsea";
        position.textContent = "Right Back";
        stats.innerHTML = "4th";
        playerImage.src = "/football_img/players/azpilicueta.webp";
    }
    else if (selectedPlayer === "25") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2015-2020";
        nation.textContent = "Spain";
        club.textContent = "Chelsea";
        position.textContent = "Striker";
        stats.innerHTML = "5th";
        playerImage.src = "/football_img/players/di costa.webp";
    }
    else if (selectedPlayer === "26") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2020-2025";
        nation.textContent = "England";
        club.textContent = "Chelsea";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "1st";
        playerImage.src = "/football_img/players/palmer.webp";
    }
    else if (selectedPlayer === "27") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2020-2025";
        nation.textContent = "Ecuador";
        club.textContent = "Chelsea";
        position.textContent = "Defensive Midfielder";
        stats.innerHTML = "2nd";
        playerImage.src = "/football_img/players/caicedo.webp";
    }
    else if (selectedPlayer === "28") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2020-2025";
        nation.textContent = "Argentina";
        club.textContent = "Chelsea";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "3rd";
        playerImage.src = "/football_img/players/enzo f.webp";
    }
    else if (selectedPlayer === "29") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2020-2025";
        nation.textContent = "France";
        club.textContent = "Chelsea";
        position.textContent = "Defensive Midfielder";
        stats.innerHTML = "4th";
        playerImage.src = "/football_img/players/kante.webp";
    }
    else if (selectedPlayer === "30") {
        title.innerHTML = "CHELSEA TOP 5<br>PLAYERS 2020-2025";
        nation.textContent = "England";
        club.textContent = "Chelsea";
        position.textContent = "Right Back";
        stats.innerHTML = "5th";
        playerImage.src = "/football_img/players/r james.webp";
    }
}
document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
