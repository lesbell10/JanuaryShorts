const playerDropdown = document.querySelector(".yearSelector");
let selectedPlayer = playerDropdown.value;

const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const FL3 = document.getElementById("FL3");
const FC = document.getElementById("FC");
const FC2 = document.getElementById("FC2");
const FC3 = document.getElementById("FC3");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const FR3 = document.getElementById("FR3");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const DL3 = document.getElementById("DL3");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const DR3 = document.getElementById("DR3");
const G = document.getElementById("G");
const G2 = document.getElementById("G2");
const G3 = document.getElementById("G3");
const sidepic = document.querySelector(".sidepic");
const message = document.querySelector(".message")
const title = document.querySelector(".title")

document.addEventListener("DOMContentLoaded", () => {
    // Load the saved year from localStorage
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
        playerDropdown.value = savedYear;
        selectedPlayer = savedYear;  // Update selectedPlayer
        updatePlayerInfo();  // Automatically update the player info based on the saved year
    }
});

function updatePlayerInfo() {

    selectedPlayer = playerDropdown.value;

    // title.innerHTML = "NHL BEST<br>PLAYERS 2024-25"
    title.style.fontSize = "41px"
    document.querySelector("select").style.fontSize = "32px";
    sidepic.style.borderRadius = "15px"
    sidepic.style.boxShadow = "none"
    sidepic.style.width = "130px"
    sidepic.style.top = "700px"
    sidepic.style.left = "700px"

    FL.style.left = "46%"
    FC.style.left = "61%"
    FR.style.left = "76%"
    DL.style.left = "53.5%"
    DR.style.left = "68.5%"
    G.style.left = "61%"

    FL2.style.border = "1px solid black"
    FC2.style.border = "1px solid black"
    FR2.style.border = "1px solid black"
    DL2.style.border = "1px solid black"
    DR2.style.border = "1px solid black"
    G2.style.border = "1px solid black"

    FL3.textContent = "";
    FC3.textContent = "";
    FR3.textContent = "";
    DL3.textContent = "";
    DR3.textContent = "";
    G3.textContent = "";

    message.innerHTML = "most minutes played"
    message.style.display = "none"

        if (selectedPlayer === "100") {

            title.innerHTML = "<br>SINCE 2000 3 TEAMS";
            FL.textContent = "";
            FC.textContent = "";
            FR.textContent = "";
            DL.textContent = "";
            DR.textContent = "";
            G.textContent = "";

            sidepic.src = "/hockey_img/logos/.png";
        }

       /* =========================
   GNHl — ELITE LINEUPS
   Bunches 1–10
   (players + sidepic only)
========================= */

if (selectedPlayer == "1") {
    FL.textContent = "McDavid";
    FC.textContent = "Gretzky";
    FR.textContent = "Crosby";
    DL.textContent = "Lidstrom";
    DR.textContent = "Makar";
    G.textContent  = "Brodeur";

    sidepic.src = "/hockey_img/logos/nhl.png";
}

if (selectedPlayer == "2") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Lemieux";
    FR.textContent = "Jagr";
    DL.textContent = "Chara";
    DR.textContent = "Bourque";
    G.textContent  = "Hasek";

    sidepic.src = "/hockey_img/logos/nhl.png";
}

if (selectedPlayer == "3") {
    FL.textContent = "Mackinnon";
    FC.textContent = "Sakic";
    FR.textContent = "Selanne";
    DL.textContent = "E Karlsson";
    DR.textContent = "S Niedermayer";
    G.textContent  = "P Roy";

    sidepic.src = "/hockey_img/logos/nhl.png";
}

if (selectedPlayer == "4") {
    FL.textContent = "Draisaitl";
    FC.textContent = "Yzerman";
    FR.textContent = "Forsberg";
    DL.textContent = "Q Hughes";
    DR.textContent = "Pronger";
    G.textContent  = "Price";

    sidepic.src = "/hockey_img/logos/nhl.png";
}

if (selectedPlayer == "5") {
    FL.textContent = "St Louis";
    FC.textContent = "Matthews";
    FR.textContent = "Kucherov";
    DL.textContent = "Hedman";
    DR.textContent = "Josi";
    G.textContent  = "Lundqvist";

    sidepic.src = "/hockey_img/logos/nhl.png";
}

    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";

        FL2.src = "/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey_img/players/" + G.textContent + ".jpg";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    updatePlayerInfo();
});

const container = document.querySelector('.short');
const xPositionDisplay = document.getElementById('x-position');

// Trackmousemovement on the entire document
container.addEventListener('mousemove', (event) => {
    const x = event.clientX; // Get the X-coordinate relative to the viewport
    xPositionDisplay.innerHTML = `left: ${x - 200}px`;
});

// Clear the X display when themouse leaves the window (optional)
container.addEventListener('mouseleave', () => {
    xPositionDisplay.innerHTML = "";
});

// ---------- STATS -----------------

// FL3.textContent = " PTS";
// FC3.textContent = " PTS";
// FR3.textContent = " PTS";
// DL3.textContent = " PTS";
// DR3.textContent = " PTS";
// G3.textContent = "SAVES: 100%";
