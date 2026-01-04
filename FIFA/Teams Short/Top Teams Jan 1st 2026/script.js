import { Everything } from "/FIFA/FIFAMaster 3.js";

// Position Elements - Team 1
const STL = document.querySelector('.STL');
const STL2 = document.querySelector('.STL2');
const STC = document.querySelector('.STC');
const STC2 = document.querySelector('.STC2');
const STR = document.querySelector('.STR');
const STR2 = document.querySelector('.STR2');
const LW = document.querySelector('.LW');
const LW2 = document.querySelector('.LW2');
const LF = document.querySelector('.LF');
const LF2 = document.querySelector('.LF2');
const AMLC = document.querySelector('.AMLC');
const AMLC2 = document.querySelector('.AMLC2');
const AMC = document.querySelector('.AMC');
const AMC2 = document.querySelector('.AMC2');
const AMRC = document.querySelector('.AMRC');
const AMRC2 = document.querySelector('.AMRC2');
const RF = document.querySelector('.RF');
const RF2 = document.querySelector('.RF2');
const RW = document.querySelector('.RW');
const RW2 = document.querySelector('.RW2');
const WL = document.querySelector('.WL');
const WL2 = document.querySelector('.WL2');
const LCM = document.querySelector('.LCM');
const LCM2 = document.querySelector('.LCM2');
const CM = document.querySelector('.CM');
const CM2 = document.querySelector('.CM2');
const RCM = document.querySelector('.RCM');
const RCM2 = document.querySelector('.RCM2');
const WR = document.querySelector('.WR');
const WR2 = document.querySelector('.WR2');
const DM = document.querySelector('.DM');
const DM2 = document.querySelector('.DM2');
const LB = document.querySelector('.LB');
const LB2 = document.querySelector('.LB2');
const LCB = document.querySelector('.LCB');
const LCB2 = document.querySelector('.LCB2');
const CB = document.querySelector('.CB');
const CB2 = document.querySelector('.CB2');
const RCB = document.querySelector('.RCB');
const RCB2 = document.querySelector('.RCB2');
const RB = document.querySelector('.RB');
const RB2 = document.querySelector('.RB2');
const GK = document.querySelector('.GK');
const GK2 = document.querySelector('.GK2');

// UI Elements
const teamSelector = document.querySelector(".teamSelector");
const sidepic = document.querySelector(".sidepic");
const title = document.querySelector(".title");
const message = document.querySelector(".message");

const names = document.querySelectorAll('.rectangle div');
names.forEach(n => {
    n.style.fontSize = "26px";
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTeam = localStorage.getItem("selectedTeam");
    if (savedTeam) {
        teamSelector.value = savedTeam;
        updatePlayerInfo();
    }
});

teamSelector.addEventListener("change", () => {
    localStorage.setItem("selectedTeam", teamSelector.value);
    updatePlayerInfo();
});

let selectedTeam = 0;

function Three_Mid() {
    if (CM.textContent !== "") {
        LCM.style.left = "21%";
        LCM2.style.left = "21%";
        RCM.style.left = "67%";
        RCM2.style.left = "67%";
        WL.style.top = "48%";
        WL2.style.top = "28%";
        WR.style.top = "48%";
        WR2.style.top = "28%";
    }
}

function Three_Def() {
    if (CB.textContent !== "") {
        LCB.style.left = "19%";
        LCB2.style.left = "19%";
        RCB.style.left = "69%";
        RCB2.style.left = "69%";
    }
}

function setPlayerImage(element, imgElement) {
    if (element.textContent !== "") {
        imgElement.src = "/football_img/players/" + element.textContent + ".webp";
        imgElement.style.border = '1px solid black';
    } else {
        imgElement.src = "";
        imgElement.style.border = 'none';
    }
}

function updatePlayerInfo() {

    document.querySelectorAll('img').forEach(img => {
        img.style.border = 'none';
    });

    // title.innerHTML = " FIFA<br>BEST PLAYERS";
    // title.innerHTML = "";
    document.querySelector("select").style.fontSize = "30px";
    sidepic.style.borderRadius = "10px";
    sidepic.style.border = "none";
    sidepic.style.width = "120px";
    sidepic.style.height = "120px";
    sidepic.style.bottom = "68%";
    sidepic.style.right = "740px";
    // sidepic.style.display = "none";
    selectedTeam = teamSelector.value;
    Everything();
    sidepic.src = "/football_img/logos/fifa.png";
    message.innerHTML = "⬇️ CLICK BELOW FOR FULL VIDEO"
    message.style.display = "none";

    
    if (selectedTeam == "1") {
        STC.textContent = "Haaland";

        LW.textContent = "Doku";
        RW.textContent = "Cherki";

        LCM.textContent = "Foden";
        CM.textContent = "Nico G";
        RCM.textContent = "Reijnders";

        LB.textContent = "O'Reilly";
        LCB.textContent = "Gvardiol";
        RCB.textContent = "R Dias";
        RB.textContent = "M Nunes";

        GK.textContent = "Donnarumma";

        sidepic.src = "/football_img/logos/man city.png";

        LCM.style.left = "22%";

        Three_Mid();
    }

    if (selectedTeam == "2") {
        STL.textContent = "Vini Jr";
        STR.textContent = "Mbappe";

        WL.textContent = "Bellingham";
        LCM.textContent = "Guler";
        RCM.textContent = "Tchouameni";
        WR.textContent = "Rodrygo";

        LB.textContent = "A Carreras";
        LCB.textContent = "Huijsen";
        RCB.textContent = "Rudiger";
        RB.textContent = "Valverde";

        GK.textContent = "Courtois";

        WL.style.left = "-4%";
        RCM.style.left = "51%";
        WR.style.left = "87%";
        LB.style.left = "-3%";

        sidepic.src = "/football_img/logos/real madrid.png";
        sidepic.style.width = "110px"
        sidepic.style.height = "140px"
        sidepic.style.bottom = "67%";
    }

    if (selectedTeam == "3") {
        STC.textContent = "O Dembele";
        LW.textContent = "Kvaratskhelia";
        RW.textContent = "D Doue";
        LCM.textContent = "F Ruiz";
        CM.textContent = "Vitinha";
        RCM.textContent = "J Neves";
        LB.textContent = "N Mendes";
        LCB.textContent = "Pacho";
        RCB.textContent = "Marquinhos";
        RB.textContent = "Hakimi";
        GK.textContent = "Chevalier";

        Three_Mid();

        LB.style.left = "-2%";
        sidepic.src = "/football_img/logos/psg.png";
    }

    if (selectedTeam == "4") {
        STC.textContent = "F Torres";

        LW.textContent = "Raphinha";
        AMC.textContent = "F Lopez";
        RW.textContent = "Yamal";

        LCM.textContent = "E Garcia";
        RCM.textContent = "Pedri";

        LB.textContent = "Balde";
        LCB.textContent = "G Martin";
        RCB.textContent = "Cubarsi";
        RB.textContent = "Kounde";

        GK.textContent = "Jo Garcia";

        sidepic.src = "/football_img/logos/barca.png";
    }

    if (selectedTeam == "5") {

        STC.textContent = "Kane";

        LW.textContent = "L Diaz";
        RW.textContent = "Olise";

        LCM.textContent = "A Pavlovic";
        AMC.textContent = "Gnabry";
        RCM.textContent = "Kimmich";

        LB.textContent = "A Davies";
        LCB.textContent = "J Tah";
        RCB.textContent = "Upamecano";
        RB.textContent = "Laimer";

        GK.textContent = "Neuer";

        sidepic.src = "/football_img/logos/bayern.png";
    }

    if (selectedTeam == "6") {

        STC.textContent = "Ekitike";

        LW.textContent = "Gakpo";
        AMC.textContent = "Wirtz";
        RW.textContent = "Salah";

        LCM.textContent = "Mac Allister";
        RCM.textContent = "Gravenberch";

        LB.textContent = "Kerkez";
        LCB.textContent = "Konate";
        RCB.textContent = "van Dijk";
        RB.textContent = "C Bradley";

        GK.textContent = "Alisson";

        RB.style.left = "85%";

        LCM.style.left = "23%";

        sidepic.src = "/football_img/logos/liverpool.png";
        sidepic.style.width = "100px"
    }

    if (selectedTeam == "7") {

        LW.textContent = "E Eze";
        STC.textContent = "Gyokeres";
        RW.textContent = "Saka";

        LCM.textContent = "Odegaard";
        CM.textContent = "Zubimendi";
        RCM.textContent = "D Rice";

        LB.textContent = "Calafiori";
        LCB.textContent = "Gabriel";
        RCB.textContent = "Saliba";
        RB.textContent = "Timber";

        GK.textContent = "D Raya";
        Three_Mid();
        LCM.style.left = "15%";
        CM.style.left = "40%";
        
        sidepic.src = "/football_img/logos/arsenal.png";
        sidepic.style.width = "100px"
    }

    if (selectedTeam == "8") {

        STR.textContent = "L Martinez";
        STL.textContent = "M Thuram";

        WL.textContent = "Dimarco";
        LCM.textContent = "Mkhita.";
        CM.textContent = "Calhanoglu";
        RCM.textContent = "Barella";
        WR.textContent = "Dumfries";

        LCB.textContent = "Bastoni";
        CB.textContent = "Acerbi";
        RCB.textContent = "Akanji";

        GK.textContent = "Sommer";
        Three_Def();
        sidepic.src = "/football_img/logos/inter.png";
        sidepic.style.right = "710px";
        STL.style.left = "29%";
        CM.style.left = "40%";

        Three_Mid();
    }

    if (selectedTeam == "9") {

        STC.textContent = "J Pedro";

        LW.textContent = "Garnacho";
        AMC.textContent = "Palmer";
        RW.textContent = "P Neto";

        LCM.textContent = "Caicedo";
        RCM.textContent = "Enzo";

        LB.textContent = "Cucurella";
        LCB.textContent = "Colwill";
        RCB.textContent = "Chalobah";
        RB.textContent = "R James";

        GK.textContent = "R Sanchez";

        sidepic.src = "/football_img/logos/chelsea.png";
    }

    if (selectedTeam == "10") {

        STC.textContent = "Vlahovic";

        AMLC.textContent = "Yildiz";
        AMRC.textContent = "F Conceicao";

        WL.textContent = "Cambiaso";
        LCM.textContent = "K Thuram";
        RCM.textContent = "Locatelli";
        WR.textContent = "J Mario";

        LCB.textContent = "L Kelly";
        CB.textContent = "Gatti";
        RCB.textContent = "Kalulu";

        GK.textContent = "Di Gregorio";

        Three_Def();

        sidepic.src = "/football_img/logos/juventus.png";
    }

    if (selectedTeam == "11") {

        // BFIFA — MANCHESTER UNITED (3-4-2-1)

        STC.textContent = "Sesko";

        AMLC.textContent = "Cunha";
        AMRC.textContent = "Mbeumo";

        WL.textContent = "D Dalot";
        LCM.textContent = "Casemiro";
        RCM.textContent = "Fernandes";
        WR.textContent = "A Diallo";

        LCB.textContent = "Shaw";
        CB.textContent = "de Ligt";
        RCB.textContent = "Yoro";

        GK.textContent = "Lammens";
        Three_Def();
        sidepic.src = "/football_img/logos/man utd.png";
    }

    if (selectedTeam == "12") {

        STL.textContent = "R Leao";
        STR.textContent = "Pulisic";

        WL.textContent = "Bartesaghi";
        LCM.textContent = "Rabiot";
        CM.textContent = "Modric";
        RCM.textContent = "Y Fofana";
        WR.textContent = "Saelema.";

        LCB.textContent = "S Pavlovic";
        CB.textContent = "Gabbia";
        RCB.textContent = "Tomori";

        GK.textContent = "Maignan";

        Three_Def();
        Three_Mid();
        WL.style.left = "-9%";
        LCB.style.left = "14%";


        sidepic.src = "/football_img/logos/milan.png";
        sidepic.style.width = "80px"
    }

    if (selectedTeam == "13") {

        STC.textContent = "Richarlison";

        LW.textContent = "B Johnson";
        AMC.textContent = "X Simons";
        RW.textContent = "Kudus";

        LCM.textContent = "P Sarr";
        RCM.textContent = "Palhinha";

        LB.textContent = "D Spence";
        LCB.textContent = "Van de Ven";
        RCB.textContent = "C Romero";
        RB.textContent = "P Porro";

        GK.textContent = "Vicario";

        sidepic.src = "/football_img/logos/tottenham.png";
        sidepic.style.width = "90px"
    }

    if (selectedTeam == "14") {

        STC.textContent = "Hojlund";

        LW.textContent = "D Neres";
        RW.textContent = "Politano";

        LCM.textContent = "McTominay";
        CM.textContent = "Lobotka";
        RCM.textContent = "Z Anguissa";

        LB.textContent = "Spinazzola";
        LCB.textContent = "Buongiorno";
        RCB.textContent = "Rrahmani";
        RB.textContent = "Di Lorenzo";

        GK.textContent = "V Milinkovic-S";
        LCM.style.left = "18%";
        RB.style.left = "85%";

        Three_Mid();

        LCM.style.left = "10%";
        LB.style.left = "-3%";
        LCB.style.left = "23%";

        sidepic.src = "/football_img/logos/napoli.png";
    }

    if (selectedTeam == "15") {

        STL.textContent = "J Alvarez";
        STR.textContent = "Sorloth";

        WL.textContent = "Baena";
        LCM.textContent = "Koke";
        RCM.textContent = "Barrios";
        WR.textContent = "Gi Simeone";

        LB.textContent = "Hancko";
        LCB.textContent = "J Gimenez";
        RCB.textContent = "Le Normand";
        RB.textContent = "M Llorente";

        GK.textContent = "Oblak";
        WR.style.left = "81%";
        RB.style.left = "82%";

        sidepic.src = "/football_img/logos/atletico.png";
    }

    if (selectedTeam == "18") {

        STC.textContent = "Dovbyk";

        AMLC.textContent = "Dybala";
        AMRC.textContent = "Soule";

        WL.textContent = "Wesley";
        LCM.textContent = "M Kone";
        RCM.textContent = "Cristante";
        WR.textContent = "Celik";

        LCB.textContent = "Hermoso";
        CB.textContent = "Ndicka";
        RCB.textContent = "G Mancini";

        GK.textContent = "Svilar";

        Three_Def();
        sidepic.src = "/football_img/logos/roma.png";
        sidepic.style.width = "100px"
        LCB.style.left = "16%";
    }

    if (selectedTeam == "19") {

        STC.textContent = "Osimhen";

        LW.textContent = "B Yilmaz";
        AMC.textContent = "Gundogan";
        RW.textContent = "Sane";

        LCM.textContent = "M Lemina";
        RCM.textContent = "Torreira";

        LB.textContent = "Jakobs";
        LCB.textContent = "Bardakci";
        RCB.textContent = "D Sanchez";
        RB.textContent = "Singo";

        GK.textContent = "Cakir";

        sidepic.src = "/football_img/logos/galatasaray.png";
    }

    if (selectedTeam == "20") {

        STC.textContent = "Guirassy";

        AMLC.textContent = "Brandt";
        AMRC.textContent = "Adeyemi";

        WL.textContent = "Svensson";
        LCM.textContent = "Nmecha";
        RCM.textContent = "Sabitzer";
        WR.textContent = "Ryerson";

        LCB.textContent = "Schlotterbeck";
        CB.textContent = "Anton";
        RCB.textContent = "Anselmino";

        GK.textContent = "Kobel";

        Three_Def();
        LCB.style.left = "11%";
        sidepic.src = "/football_img/logos/dortmund.png";
    }

    if (selectedTeam == "21") {

        STC.textContent = "Oyarzabal";

        LW.textContent = "N Williams";
        RW.textContent = "Yamal";

        LCM.textContent = "F Ruiz";
        CM.textContent = "Zubimendi";
        RCM.textContent = "Pedri";

        LB.textContent = "Cucurella";
        LCB.textContent = "Huijsen";
        RCB.textContent = "Le Normand";
        RB.textContent = "Carvajal";

        GK.textContent = "U Simon";
        CM.style.left = "40%";
        Three_Mid();
        sidepic.src = "/football_img/logos/spain.png";
        sidepic.style.borderRadius = "50%"
    }

    if (selectedTeam == "22") {

        STC.textContent = "Rodrygo";
        LW.textContent = "Vini Jr";
        RW.textContent = "Raphinha";

        LCM.textContent = "Paqueta";
        CM.textContent = "Casemiro";
        RCM.textContent = "B Guimaraes";

        LB.textContent = "Arana";
        LCB.textContent = "Gabriel M";
        RCB.textContent = "Marquinhos";
        RB.textContent = "Danilo";

        GK.textContent = "Alisson";
        Three_Mid();

        sidepic.src = "/football_img/logos/brazil.png";
        sidepic.style.borderRadius = "50%"
    }

    if (selectedTeam == "23") {

        STC.textContent = "Mbappe";

        LW.textContent  = "D Doue";
        AMC.textContent = "Olise";
        RW.textContent  = "O Dembele";
    
        LCM.textContent = "M Kone";
        RCM.textContent = "Tchouameni";
    
        LB.textContent  = "T Hernandez";
        LCB.textContent = "Saliba";
        RCB.textContent = "Upamecano";
        RB.textContent  = "Kounde";
    
        GK.textContent  = "Maignan";
        RW.style.left = "83%";
        LB.style.left = "-7%";
        sidepic.src = "/football_img/logos/france.png";
        sidepic.style.borderRadius = "50%"


    }

    if (selectedTeam == "24") {

        STC.textContent = "L Martinez";

        LW.textContent  = "T Almada";
        RW.textContent  = "Messi";
    
        LCM.textContent = "Mac Allister";
        CM.textContent  = "Enzo";
        RCM.textContent = "R De Paul"; // Box-to-Box
    
        LB.textContent  = "Tagliafico";
        LCB.textContent = "Otamendi";
        RCB.textContent = "C Romero";
        RB.textContent  = "Molina";
    
        GK.textContent  = "E Martinez";
        sidepic.src = "/football_img/logos/argentina.png";
        sidepic.style.borderRadius = "50%"
        Three_Mid();
        LCM.style.left = "10%";
    }

    if (selectedTeam == "25") {

        STC.textContent = "Woltemade";

        LW.textContent  = "Wirtz";
        AMC.textContent = "Gnabry";
        RW.textContent  = "Adeyemi";
    
        LCM.textContent = "A Pavlovic";
        RCM.textContent = "Goretzka";
    
        LB.textContent  = "Raum";
        LCB.textContent = "Schlotterbeck";
        RCB.textContent = "J Tah";
        RB.textContent  = "Kimmich";
    
        GK.textContent  = "Baumann";

        LCM.style.left = "26%";
        LCB.style.left = "18%";


        sidepic.src = "/football_img/logos/germany.png";
        sidepic.style.borderRadius = "50%"
    }

    if (selectedTeam == "26") {

        STC.textContent = "Kane";

        LW.textContent  = "Gordon";
        RW.textContent  = "Saka";
    
        LCM.textContent = "Bellingham";
        CM.textContent  = "Rice";
        RCM.textContent = "Rogers";
    
        LB.textContent  = "Lewis-S";
        LCB.textContent = "Guehi";
        RCB.textContent = "Konsa";
        RB.textContent  = "R James";
    
        GK.textContent  = "Pickford";
        Three_Mid();
        LCM.style.left = "12%";
        sidepic.src = "/football_img/logos/england.png";
        sidepic.style.borderRadius = "50%"
    }

    if (selectedTeam == "27") {

        STL.textContent = "Retegui";
        STR.textContent = "M Kean";
    
        WL.textContent  = "Zaccagni";
        LCM.textContent = "Tonali";
        RCM.textContent = "Barella";
        WR.textContent  = "Orsolini";
    
        LB.textContent  = "Dimarco";
        LCB.textContent = "Bastoni";
        RCB.textContent = "Buongiorno";
        RB.textContent  = "Di Lorenzo";
    
        GK.textContent  = "Donnarumma";
        RB.style.left = "82%";
        sidepic.src = "/football_img/logos/italy.png";
        sidepic.style.borderRadius = "50%"
    }

    if (selectedTeam == "28") {

        STC.textContent = "C Ronaldo";

        LW.textContent  = "R Leao";
        RW.textContent  = "P Neto";
    
        LCM.textContent = "B Silva";
        CM.textContent  = "Vitinha";
        RCM.textContent = "B Fernandes";
    
        LB.textContent  = "N Mendes";
        LCB.textContent = "G Inacio";
        RCB.textContent = "R Dias";
        RB.textContent  = "D Dalot";
    
        GK.textContent  = "D Costa";
        Three_Mid();
        LB.style.left = "-2%";
        sidepic.src = "/football_img/logos/portugal.png";
        sidepic.style.borderRadius = "50%"

    }

    if (selectedTeam == "29") {

        STC.textContent = "Depay";
        LW.textContent  = "Gakpo";
        AMC.textContent = "Reijnders";
        RW.textContent  = "Frimpong";
    
        LCM.textContent = "F De Jong";
        RCM.textContent = "Gravenberch";
    
        LB.textContent  = "van de Ven";
        LCB.textContent = "van Dijk";
        RCB.textContent = "J Timber";
        RB.textContent  = "Dumfries";
    
        GK.textContent  = "Verbruggen";

        sidepic.src = "/football_img/logos/netherlands.png";
        sidepic.style.borderRadius = "50%"
        LB.style.left = "-3%";
    }

    if (selectedTeam == "30") {

        STC.textContent = "Openda";

        LW.textContent  = "Doku";
        RW.textContent  = "Lukebakio";
    
        AMC.textContent = "De Ketelaere";
        LCM.textContent  = "A Onana";
        RCM.textContent = "Tielemans";
    
        LB.textContent  = "De Cuyper";
        LCB.textContent = "Theate";
        RCB.textContent = "Faes";
        RB.textContent  = "Castagne";
    
        GK.textContent  = "Courtois";

        LB.style.left = "-3%";
        RB.style.left = "86%";

        sidepic.src = "/football_img/logos/belgium.png";
        sidepic.style.borderRadius = "50%"
    }
    applyImages();
    // substitutes.innerHTML = substitutes.innerHTML.replace(/,/g, " • ");

}

function applyImages() {
    const pairMap = [
        [STL, STL2], [STC, STC2], [STR, STR2], [LW, LW2], [LF, LF2], [AMLC, AMLC2], [AMC, AMC2], [AMRC, AMRC2],
        [RF, RF2], [RW, RW2], [WL, WL2], [LCM, LCM2], [CM, CM2], [RCM, RCM2], [WR, WR2], [DM, DM2],
        [LB, LB2], [LCB, LCB2], [CB, CB2], [RCB, RCB2], [RB, RB2], [GK, GK2]
    ];
    pairMap.forEach(([t, img]) => {
        if (t.textContent.trim() !== "") {
            setPlayerImage(t, img);
        } else {
            img.src = "";
            img.style.border = "none";
        }
    });
}

const container = document.querySelector('.rectangle');
const xPositionDisplay = document.getElementById('x-position');

// Track mouse movement within the .short container
container.addEventListener('mousemove', (event) => {
    const containerRect = container.getBoundingClientRect();

    // Calculate the X-coordinate relative to the container
    const x = event.clientX - containerRect.left;

    // Display the X-coordinate
    xPositionDisplay.innerHTML = `left: ${x}px`;
});

// Clear the X display when the mouse leaves the container
container.addEventListener('mouseleave', () => {
    xPositionDisplay.innerHTML = '';
});

// STL.textContent = "";
// STC.textContent = "";
// STR.textContent = "";
// LW.textContent = "";
// LF.textContent = "";
// AMLC.textContent = "";
// AMC.textContent = "";
// AMRC.textContent = "";
// RF.textContent = "";
// RW.textContent = "";
// WL.textContent = "";
// LCM.textContent = "";
// CM.textContent = "";
// RCM.textContent = "";
// WR.textContent = "";
// DM.textContent = "";
// LB.textContent = "";
// LCB.textContent = "";
// CB.textContent = "";
// RCB.textContent = "";
// RB.textContent = "";
// GK.textContent = "";