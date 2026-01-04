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
    title.innerHTML = "NHL BEST<br>ON JAN 1ST 2026"
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

    FL3.textContent = "";
    FC3.textContent = "";
    FR3.textContent = "";
    DL3.textContent = "";
    DR3.textContent = "";
    G3.textContent = "";

    message.innerHTML = "⬇️ CLICK BELOW FOR FULL VIDEO"
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

    // 1) ANAHEIM DUCKS
    if (selectedPlayer == "1") {
        title.innerHTML += " #1"
        FL.textContent = "C Gauthier";
        FC.textContent = "Carlsson";
        FR.textContent = "Terry";
        DL.textContent = "LaCombe";
        DR.textContent = "Trouba";
        G.textContent = "Dostal";

        FL3.textContent = "38 PTS";
        FC3.textContent = "42 PTS";
        FR3.textContent = "38 PTS";
        DL3.textContent = "23 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/anaheim.png";

        FR.style.right = "39.5%"
    }

    // 2) BOSTON BRUINS
    if (selectedPlayer == "2") {
        title.innerHTML += " #1"
        FL.textContent = "Zacha";
        FC.textContent = "Geekie";
        FR.textContent = "Pastrnak";
        DL.textContent = "McAvoy";
        DR.textContent = "Lohrei";
        G.textContent = "Swayman";

        FL3.textContent = "26 PTS";
        FC3.textContent = "41 PTS";
        FR3.textContent = "44 PTS";
        DL3.textContent = "20 PTS";
        DR3.textContent = "15 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/boston.png";
    }

    // 3) BUFFALO SABRES
    if (selectedPlayer == "3") {
        title.innerHTML += " #1"
        FR.textContent = "Tuch";
        FC.textContent = "T Thompson";
        FL.textContent = "J Doan";
        DL.textContent = "Dahlin";
        DR.textContent = "Byram";
        G.textContent = "Luukkonen";

        FR3.textContent = "32 PTS";
        FC3.textContent = "37 PTS";
        FL3.textContent = "26 PTS";
        DL3.textContent = "28 PTS";
        DR3.textContent = "20 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/buffalo.png";

        FC.style.left = "59%"
        FR.style.right = "40%"
    }

    // 4) CALGARY FLAMES
    if (selectedPlayer == "4") {
        title.innerHTML += " #2"
        FL.textContent = "Backlund";
        FC.textContent = "Kadri";
        FR.textContent = "Coronato";
        DL.textContent = "R Andersson";
        DR.textContent = "Weegar";
        G.textContent = "D Cooley";

        FL3.textContent = "25 PTS";
        FC3.textContent = "32 PTS";
        FR3.textContent = "22 PTS";
        DL3.textContent = "26 PTS";
        DR3.textContent = "14 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/calgary.png";

        DL.style.left = "51%"
    }

    // 5) CAROLINA HURRICANES
    if (selectedPlayer == "5") {
        title.innerHTML += " #2"
        FL.textContent = "Jarvis";
        FC.textContent = "S Aho";
        FR.textContent = "Svechnikov";
        DL.textContent = "Gostisbehere";
        DR.textContent = "K Miller";
        G.textContent = "Bussi";

        FL3.textContent = "29 PTS";
        FC3.textContent = "35 PTS";
        FR3.textContent = "27 PTS";
        DL3.textContent = "29 PTS";
        DR3.textContent = "14 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/carolina.png";

        DL.style.left = "50%"
    }

    // 6) CHICAGO BLACKHAWKS
    if (selectedPlayer == "6") {
        title.innerHTML += " #2"
        FL.textContent = "T Bertuzzi";
        FC.textContent = "Bedard";
        FR.textContent = "Burakovsky";
        DL.textContent = "Levshunov";
        DR.textContent = "Crevier";
        G.textContent = "Knight";

        FL3.textContent = "29 PTS";
        FC3.textContent = "44 PTS";
        FR3.textContent = "23 PTS";
        DL3.textContent = "18 PTS";
        DR3.textContent = "12 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/chicago.png";
    }


    // 7) COLORADO AVALANCHE
    if (selectedPlayer == "7") {
        title.innerHTML += " #3"
        FL.textContent = "Lehkonen";
        FC.textContent = "MacKinnon";
        FR.textContent = "Necas";
        DL.textContent = "Makar";
        DR.textContent = "Malinski";
        G.textContent = "Wedgewood";

        FL3.textContent = "32 PTS";
        FC3.textContent = "70 PTS";
        FR3.textContent = "51 PTS";
        DL3.textContent = "45 PTS";
        DR3.textContent = "22 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/colorado.png";

        FR.style.right = "39%"
    }


    // 8) COLUMBUS BLUE JACKETS
    if (selectedPlayer == "8") {
        title.innerHTML += " #3"
        FL.textContent = "Voronkov";
        FC.textContent = "Fantilli";
        FR.textContent = "Marchenko";
        DL.textContent = "Werenski";
        DR.textContent = "Mateychuk";
        G.textContent = "Greaves";

        FL3.textContent = "25 PTS";
        FC3.textContent = "25 PTS";
        FR3.textContent = "31 PTS";
        DL3.textContent = "40 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/columbus.png";

    }

    // 9) DALLAS STARS
    if (selectedPlayer == "9") {
        title.innerHTML += " #3"
        FL.textContent = "Robertson";
        FC.textContent = "Johnston";
        FR.textContent = "Rantanen";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "DeSmith";

        FL3.textContent = "46 PTS";
        FC3.textContent = "45 PTS";
        FR3.textContent = "54 PTS";
        DL3.textContent = "35 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/dallas.png";
    }

    // 10) DETROIT RED WINGS
    if (selectedPlayer == "10") {
        title.innerHTML += " #4"
        FL.textContent = "Raymond";
        FC.textContent = "Larkin";
        FR.textContent = "DeBrincat";
        DL.textContent = "Seider";
        DR.textContent = "Sandin-P";
        G.textContent = "Talbot";

        FL3.textContent = "43 PTS";
        FC3.textContent = "37 PTS";
        FR3.textContent = "40 PTS";
        DL3.textContent = "31 PTS";
        DR3.textContent = "15 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/detroit.png";
    }
    // 11) EDMONTON OILERS
    if (selectedPlayer == "11") {
        title.innerHTML += " #4"
        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "Nugent-H";
        DL.textContent = "Bouchard";
        DR.textContent = "Ekholm";
        G.textContent = "Jarry";

        FL3.textContent = "57 PTS";
        FC3.textContent = "70 PTS";
        FR3.textContent = "32 PTS";
        DL3.textContent = "37 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/edmonton.png";
    }
    // 12) FLORIDA PANTHERS
    if (selectedPlayer == "12") {
        title.innerHTML += " #4"
        FL.textContent = "Marchand";
        FC.textContent = "Reinhart";
        FR.textContent = "Verhaeghe";
        DL.textContent = "S Jones";
        DR.textContent = "Ekblad";
        G.textContent = "Bobrovsky";

        FL3.textContent = "45 PTS";
        FC3.textContent = "43 PTS";
        FR3.textContent = "28 PTS";
        DL3.textContent = "24 PTS";
        DR3.textContent = "15 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/florida.png";
    }
    // 13) LOS ANGELES KINGS
    if (selectedPlayer == "13") {
        title.innerHTML += " #5"
        FL.textContent = "Fiala";
        FC.textContent = "Kempe";
        FR.textContent = "Byfield";
        DL.textContent = "B Clarke";
        DR.textContent = "Edmundson";
        G.textContent = "Kuemper";

        FL3.textContent = "25 PTS";
        FC3.textContent = "32 PTS";
        FR3.textContent = "21 PTS";
        DL3.textContent = "18 PTS";
        DR3.textContent = "14 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/los angeles.png";
    }
    // 14) MINNESOTA WILD
    if (selectedPlayer == "14") {
        title.innerHTML += " #5"
        FL.textContent = "Kaprizov";
        FC.textContent = "Johansson";
        FR.textContent = "Boldy";
        DL.textContent = "Q Hughes";
        DR.textContent = "Faber";
        G.textContent = "Wallstedt";

        FL3.textContent = "47 PTS";
        FC3.textContent = "32 PTS";
        FR3.textContent = "47 PTS";
        DL3.textContent = "30 PTS";
        DR3.textContent = "21 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/minnesota.png";
    }
    // 15) MONTREAL CANADIENS
    if (selectedPlayer == "15") {
        title.innerHTML += " #5"
        FL.textContent = "Demidov";
        FC.textContent = "Suzuki";
        FR.textContent = "Caufield";
        DL.textContent = "Hutson";
        DR.textContent = "Dobson";
        G.textContent = "Dobes";

        FL3.textContent = "33 PTS";
        FC3.textContent = "44 PTS";
        FR3.textContent = "39 PTS";
        DL3.textContent = "38 PTS";
        DR3.textContent = "27 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/montreal.png";
    }
    // 16) NASHVILLE PREDATORS
    if (selectedPlayer == "16") {
        title.innerHTML += " #6"
        FL.textContent = "F Forsberg";
        FC.textContent = "O'Reilly";
        FR.textContent = "Evangelista";
        DL.textContent = "Josi";
        DR.textContent = "Blankenburg";
        G.textContent = "Saros";

        FL3.textContent = "31 PTS";
        FC3.textContent = "34 PTS";
        FR3.textContent = "29 PTS";
        DL3.textContent = "17 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/nashville.png";
    }
    // 17) NEW JERSEY DEVILS
    if (selectedPlayer == "17") {
        title.innerHTML += " #6"
        FL.textContent = "Bratt";
        FC.textContent = "Hischier";
        FR.textContent = "Meier";
        DL.textContent = "L Hughes";
        DR.textContent = "Nemec";
        G.textContent = "J Allen";

        FL3.textContent = "31 PTS";
        FC3.textContent = "31 PTS";
        FR3.textContent = "24 PTS";
        DL3.textContent = "21 PTS";
        DR3.textContent = "18 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/new jersey.png";

        FR.style.right = "39%"
    }
    // 18) NEW YORK ISLANDERS
    if (selectedPlayer == "18") {
        title.innerHTML += " #6"
        FL.textContent = "A Lee";
        FC.textContent = "Horvat";
        FR.textContent = "Barzal";
        DL.textContent = "Schaefer";
        DR.textContent = "Pulock";
        G.textContent = "Rittich";

        FL3.textContent = "25 PTS";
        FC3.textContent = "33 PTS";
        FR3.textContent = "30 PTS";
        DL3.textContent = "25 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/ny islanders.png";
    }
    // 19) NEW YORK RANGERS
    if (selectedPlayer == "19") {
        title.innerHTML += " #7"
        FL.textContent = "Panarin";
        FC.textContent = "Zibanejad";
        FR.textContent = "Cuylle";
        DL.textContent = "A Fox";
        DR.textContent = "Gavrikov";
        G.textContent = "Shesterkin";

        FL3.textContent = "41 PTS";
        FC3.textContent = "30 PTS";
        FR3.textContent = "23 PTS";
        DL3.textContent = "28 PTS";
        DR3.textContent = "15 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/ny rangers.png";
    }
    // 20) OTTAWA SENATORS
    if (selectedPlayer == "20") {
        title.innerHTML += " #7"
        FL.textContent = "Cozens";
        FC.textContent = "Stutzle";
        FR.textContent = "Batherson";
        DL.textContent = "Sanderson";
        DR.textContent = "Spence";
        G.textContent = "Ullmark";

        FL3.textContent = "29 PTS";
        FC3.textContent = "41 PTS";
        FR3.textContent = "37 PTS";
        DL3.textContent = "27 PTS";
        DR3.textContent = "13 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/ottawa.png";
    }
    // 21) PHILADELPHIA FLYERS
    if (selectedPlayer == "21") {
        title.innerHTML += " #7"
        FL.textContent = "Dvorak";
        FC.textContent = "Zegras";
        FR.textContent = "Konecny";
        DL.textContent = "Drysdale";
        DR.textContent = "Sanheim";
        G.textContent = "Vladar";

        FL3.textContent = "25 PTS";
        FC3.textContent = "39 PTS";
        FR3.textContent = "36 PTS";
        DL3.textContent = "18 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/philadelphia.png";
    }
    // 22) PITTSBURGH PENGUINS
    if (selectedPlayer == "22") {
        title.innerHTML += " #8"
        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Rust";
        DL.textContent = "E Karlsson";
        DR.textContent = "Letang";
        G.textContent = "S Skinner";

        FL3.textContent = "29 PTS";
        FC3.textContent = "40 PTS";
        FR3.textContent = "34 PTS";
        DL3.textContent = "28 PTS";
        DR3.textContent = "19 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/pittsburgh.png";

        FR.style.right = "40.5%"

    }
    // 23) SAN JOSE SHARKS
    if (selectedPlayer == "23") {
        title.innerHTML += " #8"
        FL.textContent = "Eklund";
        FC.textContent = "Celebrini";
        FR.textContent = "W Smith";
        DL.textContent = "Orlov";
        DR.textContent = "Klingberg";
        G.textContent = "Nedeljkovic";

        FL3.textContent = "26 PTS";
        FC3.textContent = "62 PTS";
        FR3.textContent = "29 PTS";
        DL3.textContent = "20 PTS";
        DR3.textContent = "16 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/san jose.png";
    }
    // 24) SEATTLE KRAKEN
    if (selectedPlayer == "24") {
        title.innerHTML += " #8"
        FL.textContent = "Eberle";
        FC.textContent = "Stephenson";
        FR.textContent = "Tolvanen";
        DL.textContent = "Dunn";
        DR.textContent = "Montour";
        G.textContent = "Grubauer";

        FL3.textContent = "25 PTS";
        FC3.textContent = "24 PTS";
        FR3.textContent = "25 PTS";
        DL3.textContent = "20 PTS";
        DR3.textContent = "16 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/seattle.png";

        FC.style.left = "59%"
    }
    // 25) ST. LOUIS BLUES
    if (selectedPlayer == "25") {
        title.innerHTML += " #9"
        FL.textContent = "Buchnevich";
        FC.textContent = "Thomas";
        FR.textContent = "Neighbours";
        DL.textContent = "Faulk";
        DR.textContent = "Fowler";
        G.textContent = "Hofer";

        FL3.textContent = "21 PTS";
        FC3.textContent = "29 PTS";
        FR3.textContent = "17 PTS";
        DL3.textContent = "20 PTS";
        DR3.textContent = "14 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/st louis.png";
    }
    // 26) TAMPA BAY LIGHTNING
    if (selectedPlayer == "26") {
        title.innerHTML += " #9"
        FL.textContent = "Hagel";
        FC.textContent = "Guentzel";
        FR.textContent = "Kucherov";
        DL.textContent = "D Raddysh";
        DR.textContent = "D'Astous";
        G.textContent = "Vasilevskiy";

        FL3.textContent = "34 PTS";
        FC3.textContent = "39 PTS";
        FR3.textContent = "51 PTS";
        DL3.textContent = "29 PTS";
        DR3.textContent = "13 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/tampa bay.png";
    }
    // 27) TORONTO MAPLE LEAFS
    if (selectedPlayer == "27") {
        title.innerHTML += " #9"
        FL.textContent = "Knies";
        FC.textContent = "Tavares";
        FR.textContent = "Nylander";
        DL.textContent = "Rielly";
        DR.textContent = "Ekman-Larsson";
        G.textContent = "Woll";

        FL3.textContent = "35 PTS";
        FC3.textContent = "36 PTS";
        FR3.textContent = "41 PTS";
        DL3.textContent = "25 PTS";
        DR3.textContent = "23 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/toronto.png";
    }
    // 28) UTAH MAMMOTH
    if (selectedPlayer == "28") {
        title.innerHTML += " #10"
        FL.textContent = "Guenther";
        FC.textContent = "Schmaltz";
        FR.textContent = "C Keller";
        DL.textContent = "Sergachev";
        DR.textContent = "Marino";
        G.textContent = "Vejmelka";

        FL3.textContent = "32 PTS";
        FC3.textContent = "33 PTS";
        FR3.textContent = "33 PTS";
        DL3.textContent = "26 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/utah.png";
    }
    // 29) VANCOUVER CANUCKS
    if (selectedPlayer == "29") {
        title.innerHTML += " #10"
        FL.textContent = "Sherwood";
        FC.textContent = "E Pettersson";
        FR.textContent = "Garland";
        DL.textContent = "Hronek";
        DR.textContent = "Buium";
        G.textContent = "Demko";

        FL3.textContent = "20 PTS";
        FC3.textContent = "23 PTS";
        FR3.textContent = "22 PTS";
        DL3.textContent = "22 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/vancouver.png";

        FC.style.left = "59.5%"
    }
    // 30) VEGAS GOLDEN KNIGHTS
    if (selectedPlayer == "30") {
        title.innerHTML += " #10"
        FL.textContent = "Stone";
        FC.textContent = "Eichel";
        FR.textContent = "Marner";
        DL.textContent = "S Theodore";
        DR.textContent = "Hanifin";
        G.textContent = "Schmid";

        FL3.textContent = "31 PTS";
        FC3.textContent = "41 PTS";
        FR3.textContent = "40 PTS";
        DL3.textContent = "20 PTS";
        DR3.textContent = "14 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/vegas.png";
    }
    // 31) WASHINGTON CAPITALS
    if (selectedPlayer == "31") {
        title.innerHTML += " #11"
        FL.textContent = "Ovechkin";
        FC.textContent = "D Strome";
        FR.textContent = "T Wilson";
        DL.textContent = "Carlson";
        DR.textContent = "Chychrun";
        G.textContent = "L Thompson";

        FL3.textContent = "34 PTS";
        FC3.textContent = "31 PTS";
        FR3.textContent = "40 PTS";
        DL3.textContent = "29 PTS";
        DR3.textContent = "30 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/washington.png";
    }
    // 32) WINNIPEG JETS
    if (selectedPlayer == "32") {
        title.innerHTML += " #11"
        FL.textContent = "K Connor";
        FC.textContent = "Scheifele";
        FR.textContent = "Vilardi";
        DL.textContent = "Morrissey";
        DR.textContent = "Stanley";
        G.textContent = "Hellebuyck";

        FL3.textContent = "45 PTS";
        FC3.textContent = "45 PTS";
        FR3.textContent = "33 PTS";
        DL3.textContent = "30 PTS";
        DR3.textContent = "13 PTS";
        G3.textContent = "BEST STATS";

        sidepic.src = "/hockey_img/logos/winnipeg.png";
    }
FL3.textContent = "";
FC3.textContent = "";
FR3.textContent = "";
DL3.textContent = "";
DR3.textContent = "";
G3.textContent = "";
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
