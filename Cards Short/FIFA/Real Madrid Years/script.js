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

   // =======================
// REAL MADRID — FIFA1
// =======================

if (selectedPlayer === "1") {
    title.innerHTML = "REAL MADRID <br>TOP 5 1995-2000";
    nation.textContent = "Spain";
    club.textContent = "Real Madrid";
    position.textContent = "Striker";
    stats.innerHTML = "1st";
    playerImage.src = "/football_img/players/raul.webp";
}
else if (selectedPlayer === "2") {
    title.innerHTML = "REAL MADRID<br>TOP 5 1995-2000";
    nation.textContent = "Brazil";
    club.textContent = "Real Madrid";
    position.textContent = "Left Back";
    stats.innerHTML = "2nd";
    playerImage.src = "/football_img/players/r carlos.webp";
}
else if (selectedPlayer === "3") {
    title.innerHTML = "REAL MADRID<br>TOP 5 1995-2000";
    nation.textContent = "Spain";
    club.textContent = "Real Madrid";
    position.textContent = "Goalkeeper";
    stats.innerHTML = "3rd";
    playerImage.src = "/football_img/players/casillas.webp";
}
else if (selectedPlayer === "4") {
    title.innerHTML = "REAL MADRID<br>TOP 5 1995-2000";
    nation.textContent = "Spain";
    club.textContent = "Real Madrid";
    position.textContent = "Centre Back";
    stats.innerHTML = "4th";
    playerImage.src = "/football_img/players/hierro.webp";
}
else if (selectedPlayer === "5") {
    title.innerHTML = "REAL MADRID<br>TOP 5 1995-2000";
    nation.textContent = "Netherlands";
    club.textContent = "Real Madrid";
    position.textContent = "Central Midfielder";
    stats.innerHTML = "5th";
    playerImage.src = "/football_img/players/seedorf.webp";
}
else if (selectedPlayer === "6") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2000-2005";
    nation.textContent = "France";
    club.textContent = "Real Madrid";
    position.textContent = "Attacking Midfielder";
    stats.innerHTML = "1st";
    playerImage.src = "/football_img/players/zidane.webp";
}
else if (selectedPlayer === "7") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2000-2005";
    nation.textContent = "Brazil";
    club.textContent = "Real Madrid";
    position.textContent = "Striker";
    stats.innerHTML = "2nd";
    playerImage.src = "/football_img/players/ronaldo.webp";
}
else if (selectedPlayer === "8") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2000-2005";
    nation.textContent = "Portugal";
    club.textContent = "Real Madrid";
    position.textContent = "Right Winger";
    stats.innerHTML = "3rd";
    playerImage.src = "/football_img/players/figo.webp";
}
else if (selectedPlayer === "9") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2000-2005";
    nation.textContent = "Spain";
    club.textContent = "Real Madrid";
    position.textContent = "Goalkeeper";
    stats.innerHTML = "4th";
    playerImage.src = "/football_img/players/casillas.webp";
}
else if (selectedPlayer === "10") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2000-2005";
    nation.textContent = "Brazil";
    club.textContent = "Real Madrid";
    position.textContent = "Left Back";
    stats.innerHTML = "5th";
    playerImage.src = "/football_img/players/r carlos.webp";
}
else if (selectedPlayer === "11") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2005-2010";
    nation.textContent = "Spain";
    club.textContent = "Real Madrid";
    position.textContent = "Goalkeeper";
    stats.innerHTML = "1st";
    playerImage.src = "/football_img/players/casillas.webp";
}
else if (selectedPlayer === "12") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2005-2010";
    nation.textContent = "Italy";
    club.textContent = "Real Madrid";
    position.textContent = "Centre Back";
    stats.innerHTML = "2nd";
    playerImage.src = "/football_img/players/cannavaro.webp";
}
else if (selectedPlayer === "13") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2005-2010";
    nation.textContent = "Spain";
    club.textContent = "Real Madrid";
    position.textContent = "Centre Back";
    stats.innerHTML = "3rd";
    playerImage.src = "/football_img/players/ramos.webp";
}
else if (selectedPlayer === "14") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2005-2010";
    nation.textContent = "Spain";
    club.textContent = "Real Madrid";
    position.textContent = "Striker";
    stats.innerHTML = "4th";
    playerImage.src = "/football_img/players/raul.webp";
}
else if (selectedPlayer === "15") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2005-2010";
    nation.textContent = "Brazil";
    club.textContent = "Real Madrid";
    position.textContent = "Left Back";
    stats.innerHTML = "5th";
    playerImage.src = "/football_img/players/r carlos.webp";
}
else if (selectedPlayer === "16") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2010-2015";
    nation.textContent = "Portugal";
    club.textContent = "Real Madrid";
    position.textContent = "Forward";
    stats.innerHTML = "1st";
    playerImage.src = "/football_img/players/c ronaldo.webp";
}
else if (selectedPlayer === "17") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2010-2015";
    nation.textContent = "Spain";
    club.textContent = "Real Madrid";
    position.textContent = "Centre Back";
    stats.innerHTML = "2nd";
    playerImage.src = "/football_img/players/ramos.webp";
}
else if (selectedPlayer === "18") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2010-2015";
    nation.textContent = "Spain";
    club.textContent = "Real Madrid";
    position.textContent = "Goalkeeper";
    stats.innerHTML = "3rd";
    playerImage.src = "/football_img/players/casillas.webp";
}
else if (selectedPlayer === "19") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2010-2015";
    nation.textContent = "Croatia";
    club.textContent = "Real Madrid";
    position.textContent = "Central Midfielder";
    stats.innerHTML = "4th";
    playerImage.src = "/football_img/players/modric.webp";
}
else if (selectedPlayer === "20") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2010-2015";
    nation.textContent = "France";
    club.textContent = "Real Madrid";
    position.textContent = "Striker";
    stats.innerHTML = "5th";
    playerImage.src = "/football_img/players/benzema.webp";
}
else if (selectedPlayer === "21") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2015-2020";
    nation.textContent = "Portugal";
    club.textContent = "Real Madrid";
    position.textContent = "Forward";
    stats.innerHTML = "1st";
    playerImage.src = "/football_img/players/c ronaldo.webp";
}
else if (selectedPlayer === "22") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2015-2020";
    nation.textContent = "Spain";
    club.textContent = "Real Madrid";
    position.textContent = "Centre Back";
    stats.innerHTML = "2nd";
    playerImage.src = "/football_img/players/ramos.webp";
}
else if (selectedPlayer === "23") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2015-2020";
    nation.textContent = "Croatia";
    club.textContent = "Real Madrid";
    position.textContent = "Central Midfielder";
    stats.innerHTML = "3rd";
    playerImage.src = "/football_img/players/modric.webp";
}
else if (selectedPlayer === "24") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2015-2020";
    nation.textContent = "France";
    club.textContent = "Real Madrid";
    position.textContent = "Striker";
    stats.innerHTML = "4th";
    playerImage.src = "/football_img/players/benzema.webp";
}
else if (selectedPlayer === "25") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2015-2020";
    nation.textContent = "Brazil";
    club.textContent = "Real Madrid";
    position.textContent = "Left Back";
    stats.innerHTML = "5th";
    playerImage.src = "/football_img/players/marcelo.webp";
}
else if (selectedPlayer === "26") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2020-2025";
    nation.textContent = "France";
    club.textContent = "Real Madrid";
    position.textContent = "Striker";
    stats.innerHTML = "1st";
    playerImage.src = "/football_img/players/benzema.webp";
}
else if (selectedPlayer === "27") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2020-2025";
    nation.textContent = "Brazil";
    club.textContent = "Real Madrid";
    position.textContent = "Forward";
    stats.innerHTML = "2nd";
    playerImage.src = "/football_img/players/vini jr.webp";
}
else if (selectedPlayer === "28") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2020-2025";
    nation.textContent = "England";
    club.textContent = "Real Madrid";
    position.textContent = "Attacking Midfielder";
    stats.innerHTML = "3rd";
    playerImage.src = "/football_img/players/bellingham.webp";
}
else if (selectedPlayer === "29") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2020-2025";
    nation.textContent = "Croatia";
    club.textContent = "Real Madrid";
    position.textContent = "Central Midfielder";
    stats.innerHTML = "4th";
    playerImage.src = "/football_img/players/modric.webp";
}
else if (selectedPlayer === "30") {
    title.innerHTML = "REAL MADRID<br>TOP 5 2020-2025";
    nation.textContent = "Belgium";
    club.textContent = "Real Madrid";
    position.textContent = "Goalkeeper";
    stats.innerHTML = "5th";
    playerImage.src = "/football_img/players/courtois.webp";
}

}
document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
