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
    // title.innerHTML = "NHL BEST<br>ON JAN 1ST 2026"
    document.querySelector("select").style.fontSize = "32px";
    sidepic.style.borderRadius = "15px"
    sidepic.style.boxShadow = "none"
    sidepic.style.width = "130px"
    sidepic.style.top = "700px"
    sidepic.style.left = "700px"

    FL.style.left = "46%"
    FC.style.left = "61%"
    FR.style.right = "37.5%"
    DL.style.left = "53.5%"
    DR.style.left = "68.5%"
    G.style.left = "61%"

    FL2.style.border = "1px solid black"
    FC2.style.border = "1px solid black"
    FR2.style.border = "1px solid black"
    DL2.style.border = "1px solid black"
    DR2.style.border = "1px solid black"
    G2.style.border = "1px solid black"

    FL2.style.display = "block"
    FC2.style.display = "block"
    FR2.style.display = "block"
    DL2.style.display = "block"
    DR2.style.display = "block"
    G2.style.display = "block"

    FL3.textContent = "";
    FC3.textContent = "";
    FR3.textContent = "";
    DL3.textContent = "";
    DR3.textContent = "";
    G3.textContent = "";

    // message.innerHTML = "⬇️ CLICK BELOW FOR FULL VIDEO"
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


    if (selectedPlayer === "1") {

        FL.textContent = "M Tkachuk";
        FC.textContent = "Matthews";
        FR.textContent = "Eichel";
        DL.textContent = "Q Hughes";
        DR.textContent = "Werenski";
        G.textContent = "Hellebuyck";

        FR.style.right = "39%"

        sidepic.src = "/hockey_img/logos/usa.webp";
    }



    if (selectedPlayer === "2") {

        FL.textContent = "B Tkachuk";
        FC.textContent = "C Keller";
        FR.textContent = "K Connor";
        DL.textContent = "Slavin";
        DR.textContent = "McAvoy";
        G.textContent = "Oettinger";

        FR.style.right = "37.5%"

        sidepic.src = "/hockey_img/logos/usa.webp";
    }



    if (selectedPlayer === "3") {

        FL.textContent = "JT Miller";
        FC.textContent = "Larkin";
        FR.textContent = "Guentzel";
        DL.textContent = "S Jones";
        DR.textContent = "Sanderson";
        G.textContent = "Swayman";

        FR.style.right = "37.5%"

        sidepic.src = "/hockey_img/logos/usa.webp";
    }



    if (selectedPlayer === "4") {

        FL.textContent = "B Tkachuk";
        FC.textContent = "Boldy";
        FR.textContent = "T Thompson";
        DL.textContent = "Hanifin";
        DR.textContent = "Faber";
        G.textContent = "";
        G2.style.display = "none";

        FR.style.right = "37.5%"

        sidepic.src = "/hockey_img/logos/usa.webp";
    }


    if (selectedPlayer === "5") {

        FL.textContent = "Trocheck";
        FC.textContent = "Nelson";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";
        FR2.style.display = "none";
        DL2.style.display = "none";
        DR2.style.display = "none";
        G2.style.display = "none";

        FR.style.right = "37.5%"

        sidepic.src = "/hockey_img/logos/usa.webp";
    }

    if (selectedPlayer === "200") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FR.style.right = "37.5%"

        sidepic.src = "/hockey_img/logos/.png";
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
