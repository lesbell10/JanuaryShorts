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
    const savedYear = localStorage.getItem("selectedPlayer");
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

/* =======================
   BNHL — SINCE 1995 (3 TEAMS PER ERA)
======================= */

/* =======================
   1995–2000
======================= */

if (selectedPlayer === "1") { // Team 1
    title.innerHTML = "MONTREAL CANADIENS<br>1995-2000";
    FL.textContent = "S Koivu";
    FC.textContent = "Damphousse";   // C
    FR.textContent = "Recchi";
    DL.textContent = "Brisebois";
    DR.textContent = "Desjardins";
    G.textContent  = "P Roy";

    FC.style.left = "58%";
}

else if (selectedPlayer === "2") { // Team 2
    title.innerHTML = "MONTREAL CANADIENS<br>1995-2000";
    FL.textContent = "Rucinsky";
    FC.textContent = "Keane";        // C
    FR.textContent = "Savage";
    DL.textContent = "Rivet";
    DR.textContent = "Souray";
    G.textContent  = "J Thibault";
}

else if (selectedPlayer === "3") { // Team 3
    title.innerHTML = "MONTREAL CANADIENS<br>1995-2000";
    FL.textContent = "Turgeon";
    FC.textContent = "Juneau";       // C
    FR.textContent = "Petrov";
    DL.textContent = "Ludwig";
    DR.textContent = "M Schneider";
    G.textContent  = "Hackett";
}


/* =======================
   2000–2005
======================= */

else if (selectedPlayer === "4") { // Team 1
    title.innerHTML = "MONTREAL CANADIENS<br>2000-2005";
    FL.textContent = "Ribeiro";
    FC.textContent = "S Koivu";      // C
    FR.textContent = "Kovalev";
    DL.textContent = "Markov";
    DR.textContent = "Souray";
    G.textContent  = "J Theodore";
}

else if (selectedPlayer === "5") { // Team 2
    title.innerHTML = "MONTREAL CANADIENS<br>2000-2005";
    FL.textContent = "Zednik";
    FC.textContent = "Perreault";    // C
    FR.textContent = "Bulis";
    DL.textContent = "Rivet";
    DR.textContent = "Brisebois";
    G.textContent  = "Hackett";
}

else if (selectedPlayer === "6") { // Team 3
    title.innerHTML = "MONTREAL CANADIENS<br>2000-2005";
    FL.textContent = "Audette";
    FC.textContent = "Juneau";       // C
    FR.textContent = "Dackell";
    DL.textContent = "Traverse";
    DR.textContent = "Quintal";
    G.textContent  = "Aebischer";
}


/* =======================
   2005–2010
======================= */

else if (selectedPlayer === "7") { // Team 1
    title.innerHTML = "MONTREAL CANADIENS<br>2005-2010";
    FL.textContent = "Kovalev";
    FC.textContent = "S Koivu";      // C
    FR.textContent = "Plekanec";
    DL.textContent = "Markov";
    DR.textContent = "Souray";
    G.textContent  = "Price";
}

else if (selectedPlayer === "8") { // Team 2
    title.innerHTML = "MONTREAL CANADIENS<br>2005-2010";
    FL.textContent = "Ryder";
    FC.textContent = "Higgins";      // C
    FR.textContent = "Gomez";
    DL.textContent = "Komisarek";
    DR.textContent = "Hamrlik";
    G.textContent  = "Halak";
}

else if (selectedPlayer === "9") { // Team 3
    title.innerHTML = "MONTREAL CANADIENS<br>2005-2010";
    FL.textContent = "Latendresse";
    FC.textContent = "Lang";         // C
    FR.textContent = "A Kostitsyn";
    DL.textContent = "Gill";
    DR.textContent = "Streit";
    G.textContent  = "Huet";
}


/* =======================
   2010–2015
======================= */

else if (selectedPlayer === "10") { // Team 1
    title.innerHTML = "MONTREAL CANADIENS<br>2010-2015";
    FL.textContent = "Pacioretty";
    FC.textContent = "Plekanec";     // C
    FR.textContent = "Gallagher";
    DL.textContent = "PK Subban";
    DR.textContent = "Markov";
    G.textContent  = "Price";
}

else if (selectedPlayer === "11") { // Team 2
    title.innerHTML = "MONTREAL CANADIENS<br>2010-2015";
    FL.textContent = "Galchenyuk";
    FC.textContent = "Eller";        // C
    FR.textContent = "D Desharnais";
    DL.textContent = "Emelin";
    DR.textContent = "Gorges";
    G.textContent  = "Budaj";
}

else if (selectedPlayer === "12") { // Team 3
    title.innerHTML = "MONTREAL CANADIENS<br>2010-2015";
    FL.textContent = "Gionta";
    FC.textContent = "Briere";       // C
    FR.textContent = "Moen";
    DL.textContent = "R Diaz";
    DR.textContent = "Weaver";
    G.textContent  = "Tokarski";
}


/* =======================
   2015–2020
======================= */

else if (selectedPlayer === "13") { // Team 1
    title.innerHTML = "MONTREAL CANADIENS<br>2015-2020";
    FL.textContent = "Pacioretty";
    FC.textContent = "Danault";      // C
    FR.textContent = "Gallagher";
    DL.textContent = "Weber";
    DR.textContent = "Petry";
    G.textContent  = "Price";
}

else if (selectedPlayer === "14") { // Team 2
    title.innerHTML = "MONTREAL CANADIENS<br>2015-2020";
    FL.textContent = "Drouin";
    FC.textContent = "Suzuki";       // C
    FR.textContent = "Byron";
    DL.textContent = "Chiarot";
    DR.textContent = "Kulak";
    G.textContent  = "J Allen";
}

else if (selectedPlayer === "15") { // Team 3
    title.innerHTML = "MONTREAL CANADIENS<br>2015-2020";
    FL.textContent = "Galchenyuk";
    FC.textContent = "M Domi";       // C
    FR.textContent = "A Shaw";
    DL.textContent = "Alzner";
    DR.textContent = "Jo Benn";
    G.textContent  = "Niemi";
}


/* =======================
   2020–2025
======================= */

else if (selectedPlayer === "16") { // Team 1
    title.innerHTML = "MONTREAL CANADIENS<br>2020-2025";
    FL.textContent = "Caufield";
    FC.textContent = "Suzuki";       // C
    FR.textContent = "Slafkovsky";
    DL.textContent = "Matheson";
    DR.textContent = "Guhle";
    G.textContent  = "Montembeault";
}

else if (selectedPlayer === "17") { // Team 2
    title.innerHTML = "MONTREAL CANADIENS<br>2020-2025";
    FL.textContent = "Newhook";
    FC.textContent = "Dach";         // C
    FR.textContent = "J Anderson";
    DL.textContent = "D Savard";
    DR.textContent = "Xhekaj";
    G.textContent  = "J Allen";
}

else if (selectedPlayer === "18") { // Team 3
    title.innerHTML = "MONTREAL CANADIENS<br>2020-2025";
    FL.textContent = "J Roy";
    FC.textContent = "J Evans";      // C
    FR.textContent = "Gallagher";
    DL.textContent = "Harris";
    DR.textContent = "Kovacevic";
    G.textContent  = "C Primeau";
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
    localStorage.setItem("selectedPlayer", playerDropdown.value);

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
