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

    if (selectedPlayer === "0") {

        // write best players name and pts from each player
        FL.textContent = ""; // write player name from fl
        FC.textContent = ""; // write player name from fc
        FR.textContent = ""; // write player name from fr
        DL.textContent = ""; // write player name from dl
        DR.textContent = ""; // write player name from dr
        G.textContent = ""; // write player name from g

        FL3.textContent = " PTS"; // write pts from fl
        FC3.textContent = " PTS"; // write pts from fc player
        FR3.textContent = " PTS"; // write pts from fr player
        DL3.textContent = " PTS"; // write pts from dl player
        DR3.textContent = " PTS"; // write pts from dr player
        G3.textContent = "BEST STATS"; // do nothing

        sidepic.src = "/NHL/hockey_img/logos/nhl.png"; // city team
        manager.innerHTML += ""; // head coach
        substitutes.innerHTML += ", ,  | ,  | "; // write subs: fr,fr,fr,df,df,g
    }

    if (selectedPlayer === "1") {


        FL.textContent = "Demidov";
        FC.textContent = "Suzuki";
        FR.textContent = "Caufield";
        DL.textContent = "Hutson";
        DR.textContent = "Dobson";
        G.textContent = "Montembeault";

        FL3.textContent = "19 PTS"; //  fl total pts
        FC3.textContent = "28 PTS"; // fc total pts
        FR3.textContent = "26 PTS"; // fr total pts
        DL3.textContent = "20 PTS"; // dl total pts
        DR3.textContent = "16 PTS"; // dr total pts
        G3.textContent = "BEST STATS"; // do nothing

        sidepic.src = "/NHL/hockey_img/logos/montreal.png";
        manager.innerHTML += "Martin St Louis";
        substitutes.innerHTML += "Slafkovsky, Kapanen, Newhook | Matheson, Carrier | Dobes"
    }

    if (selectedPlayer === "2") {


        FL.textContent = "MacKinnon";
        FC.textContent = "Crosby";
        FR.textContent = "Celebrini";
        DL.textContent = "Hutson";
        DR.textContent = "E Karlsson";
        G.textContent = "Dobes";

        FL3.textContent = "14 PTS";
        FC3.textContent = "14 PTS";
        FR3.textContent = "15 PTS";
        DL3.textContent = "9 PTS";
        DR3.textContent = "9 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/NHL/hockey_img/logos/nhlpng";
    }

    if (selectedPlayer === "3") {

        title.innerHTML = "NHL POINTS LEADERS<br>ON DEC 1ST 2025";

        FL.textContent = "Bedard";
        FC.textContent = "MacKinnon";
        FR.textContent = "Celebrini";
        DL.textContent = "Makar";
        DR.textContent = "Fox";
        G.textContent = "Wallstedt";

        FL3.textContent = "37 PTS";
        FC3.textContent = "44 PTS";
        FR3.textContent = "37 PTS";
        DL3.textContent = "32 PTS";
        DR3.textContent = "26 PTS";
        G3.textContent = ".938%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "4") {

        title.innerHTML = "NHL POINTS LEADERS<br>ON DEC 1ST 2025";
        FL.textContent = "Robertson";
        FC.textContent = "McDavid";
        FR.textContent = "Carlsson";
        DL.textContent = "Werenski";
        DR.textContent = "Morrissey";
        G.textContent = "D Cooley";

        FL3.textContent = "35 PTS";
        FC3.textContent = "36 PTS";
        FR3.textContent = "34 PTS";
        DL3.textContent = "24 PTS";
        DR3.textContent = "24 PTS";
        G3.textContent = ".931%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "5") {

        title.innerHTML = "NHL POINTS LEADERS<br>ON DEC 1ST 2025";
        FL.textContent = "Nylander";
        FC.textContent = "Necas";
        FR.textContent = "Rantanen";
        DL.textContent = "Chychrun";
        DR.textContent = "Q Hughes";
        G.textContent = "Wedgewood";

        FL3.textContent = "32 PTS";
        FC3.textContent = "33 PTS";
        FR3.textContent = "33 PTS";
        DL3.textContent = "23 PTS";
        DR3.textContent = "22 PTS";
        G3.textContent = ".921%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
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
