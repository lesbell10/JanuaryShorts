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

    message.innerHTML = "⬇️ CLICK BELOW FOR FULL VIDEO"

    message.style.display = "block"

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
            
            title.innerHTML = "PITTSBURGH PENGUINS<br>SINCE 2000 3 TEAMS";

            FL.textContent = "Crosby";
            FC.textContent = "Lemieux";
            FR.textContent = "Jagr";
            DL.textContent = "Letang";
            DR.textContent = "E Karlsson";
            G.textContent = "Fleury";

            sidepic.src = "/hockey_img/logos/pittsburgh.png";
        }

        if (selectedPlayer === "2") {

            title.innerHTML = "PITTSBURGH PENGUINS<br>SINCE 2000 3 TEAMS";

            FL.textContent = "Guentzel";
            FC.textContent = "Malkin";
            FR.textContent = "Kessel";
            DL.textContent = "Gonchar";
            DR.textContent = "Orpik";
            G.textContent = "Jarry";

            sidepic.src = "/hockey_img/logos/pittsburgh.png";
        }

        if (selectedPlayer === "3") {

            title.innerHTML = "PITTSBURGH PENGUINS<br>SINCE 2000 3 TEAMS";

            FL.textContent = "Kunitz";
            FC.textContent = "J Staal";
            FR.textContent = "Sykora";
            DL.textContent = "Maatta";
            DR.textContent = "Dumoulin";
            G.textContent = "M Murray";

            sidepic.src = "/hockey_img/logos/pittsburgh.png";
        }

        if (selectedPlayer === "4") {

            title.innerHTML = "COLORADO AVALANCHE<br>SINCE 2000 3 TEAMS";
            FL.textContent = "MacKinnon";
            FC.textContent = "Sakic";
            FR.textContent = "Rantanen";
            DL.textContent = "Makar";
            DR.textContent = "Foote";
            G.textContent = "P Roy";

            sidepic.src = "/hockey_img/logos/colorado.png";
        }

        if (selectedPlayer === "5") {

            title.innerHTML = "COLORADO AVALANCHE<br>SINCE 2000 3 TEAMS";
            FL.textContent = "Landeskog";
            FC.textContent = "Forsberg";
            FR.textContent = "Hejduk";
            DL.textContent = "Blake";
            DR.textContent = "D Toews";
            G.textContent = "Varlamov";

            sidepic.src = "/hockey_img/logos/colorado.png";
        }

        if (selectedPlayer === "6") {

            title.innerHTML = "COLORADO AVALANCHE<br>SINCE 2000 3 TEAMS";
            FL.textContent = "Tanguay";
            FC.textContent = "Kadri";
            FR.textContent = "Duchene";
            DL.textContent = "Byram";
            DR.textContent = "Girard";
            G.textContent = "Kuemper";

            sidepic.src = "/hockey_img/logos/colorado.png";
        }
    
        if (selectedPlayer === "7") {

            title.innerHTML = "PHILADELPHIA FLYERS<br>SINCE 2000 3 TEAMS";
            FL.textContent = "Gagne";
            FC.textContent = "Giroux";
            FR.textContent = "J Carter";
            DL.textContent = "Desjardins";
            DR.textContent = "Pronger";
            G.textContent = "C Hart";

            sidepic.src = "/hockey_img/logos/philadelphia.png";
        }

        if (selectedPlayer === "8") {

            title.innerHTML = "PHILADELPHIA FLYERS<br>SINCE 2000 3 TEAMS";
            FL.textContent = "Briere";
            FC.textContent = "M Richards";
            FR.textContent = "Voracek";
            DL.textContent = "Timonen";
            DR.textContent = "Provorov";
            G.textContent = "Bryzgalov";

            sidepic.src = "/hockey_img/logos/philadelphia.png";
        }

        if (selectedPlayer === "9") {

            title.innerHTML = "PHILADELPHIA FLYERS<br>SINCE 2000 3 TEAMS";
            FL.textContent = "LeClair";
            FC.textContent = "Couturier";
            FR.textContent = "Simmonds";
            DL.textContent = "Carle";
            DR.textContent = "Streit";
            G.textContent = "Mason";

            sidepic.src = "/hockey_img/logos/philadelphia.png";
        }

        if (selectedPlayer === "10") {

            title.innerHTML = "VEGAS GOLDEN KNIGHTS<br>SINCE 2017 3 TEAMS";
            FL.textContent = "Marchessault";
            FC.textContent = "Eichel";
            FR.textContent = "Stone";
            DL.textContent = "Pietrangelo";
            DR.textContent = "S Theodore";
            G.textContent = "MA Fleury";

            sidepic.src = "/hockey_img/logos/vegas.png";

            FL.style.left = "43%";
        }

        if (selectedPlayer === "11") {

            title.innerHTML = "VEGAS GOLDEN KNIGHTS<br>SINCE 2017 3 TEAMS";
            FL.textContent = "Stephenson";
            FC.textContent = "W Karlsson";
            FR.textContent = "R Smith";
            DL.textContent = "Schmidt";
            DR.textContent = "A Martinez";
            G.textContent = "Lehner";

            sidepic.src = "/hockey_img/logos/vegas.png";
        }

        if (selectedPlayer === "12") {

            title.innerHTML = "VEGAS GOLDEN KNIGHTS<br>SINCE 2017 3 TEAMS";
            FL.textContent = "Pacioretty";
            FC.textContent = "W Carrier";
            FR.textContent = "Tuch";
            DL.textContent = "McNabb";
            DR.textContent = "Engelland";   
            G.textContent = "A Hill";

            sidepic.src = "/hockey_img/logos/vegas.png";
        }

        if (selectedPlayer === "13") {

            title.innerHTML = "OLYMPIC HOCKEY<br>TEAM CANADA 2026";
            FL.textContent = "McDavid";
            FC.textContent = "Crosby";
            FR.textContent = "MacKinnon";
            DL.textContent = "Makar";
            DR.textContent = "Doughty";
            G.textContent = "Binnington";

            sidepic.src = "/hockey_img/logos/canada.png";
        }

        if (selectedPlayer === "14") {

            title.innerHTML = "OLYMPIC HOCKEY<br>TEAM CANADA 2026";
            FL.textContent = "Marchand";
            FC.textContent = "Celebrini";
            FR.textContent = "Marner";
            DL.textContent = "S Theodore";
            DR.textContent = "Morrissey";
            G.textContent = "Kuemper";
            
            sidepic.src = "/hockey_img/logos/canada.png";
        }

        if (selectedPlayer === "15") {

            title.innerHTML = "OLYMPIC HOCKEY<br>TEAM CANADA 2026";
            FL.textContent = "Stone";
            FC.textContent = "Reinhart";
            FR.textContent = "Point";
            DL.textContent = "Parayko";
            DR.textContent = "D Toews";
            G.textContent = "L Thompson";
            
            sidepic.src = "/hockey_img/logos/canada.png";
        }

        if (selectedPlayer === "16") {

            title.innerHTML = "OLYMPIC HOCKEY<br>TEAM CANADA 2026";
            FL.textContent = "Suzuki";
            FC.textContent = "Horvat";
            FR.textContent = "Cirelli";
            DL.textContent = "Harley";
            DR.textContent = "Sanheim";
            G.textContent = ""
            G2.style.display = "none"
            sidepic.src = "/hockey_img/logos/canada.png";
        }

        if (selectedPlayer === "17") {

            title.innerHTML = "OLYMPIC HOCKEY<br>TEAM CANADA 2026";
            FL.textContent = "Hagel";
            FC.textContent = "T Wilson";
            FR.textContent = "";
            DL.textContent = "";
            DR.textContent = "";
            G.textContent = "";

            FR2.style.display = "none";
            DL2.style.display = "none";
            DR2.style.display = "none";
            G2.style.display = "none";
            
            sidepic.src = "/hockey_img/logos/canada.png";
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
