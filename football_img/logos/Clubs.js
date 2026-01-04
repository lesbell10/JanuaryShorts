import {
    four_two_three_one,
    four_three_three,
    four_three_three_false_nine,
    four_four_two,
    four_two_two_two,
    four_three_one_two,
    four_three_two_one,
    four_one_three_two,
    three_four_two_one,
    three_four_three,
    three_four_one_two,
    three_five_two,
} from '/Formations/Formations.js'

const yearSelector = document.querySelector(".yearSelector");
const sidepic = document.querySelector(".sidepic");
const manager = document.querySelector(".manager")
const substitutes = document.querySelector(".substitutes")

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    manager.textContent = "Manager: "
    substitutes.textContent = "Substitutes: "

    if (selectedYear == "0") {
        four_two_three_one("Alisson", "Alexander-Arnold", "Robertson", "R Dias", "van Dijk", "Rodri", "Salah", "De Bruyne", "Haaland", "Odegaard", "B Silva")
        sidepic.src = "/img/logos/english league.png";
        manager.textContent = ""
        substitutes.textContent += "Ederson, Saliba, Trippier, Rice, B Fernandes, Saka, Son";
    }

    if (selectedYear == "1") {
        four_two_three_one("Courtois", "Kounde", "Cancelo", "Militao", "Araujo", "F de Jong", "Valverde", "Bellingham", "Lewandowski", "Griezmann", "Vini Jr")
        sidepic.src = "/img/logos/spanish league.gif";
        manager.textContent = ""
        substitutes.textContent += "ter Stegen, Rudiger, Alaba, Kroos, Pedri, Raphinha, Rodrygo";
    }

    if (selectedYear == "2") {
        four_two_three_one("Maignan", "Di Lorenzo", "T Hernandez", "Bastoni", "Bremer", "Calhanoglu", "Kvaratskhelia", "Barella", "La Martinez", "Dybala", "R Leao")
        sidepic.src = "/img/logos/italian league.gif";
        manager.textContent = ""
        substitutes.textContent += "Szczesny, Tomori, Dimarco, Rabiot, L Alberto, Berardi, Osimhen";
    }

    if (selectedYear == "3") {
        four_two_three_one("Neuer", "Frimpong", "Grimaldo", "Min Jae", "de Ligt", "Goretzka", "Sane", "Kimmich", "Kane", "Wirtz", "Musiala")
        sidepic.src = "/img/logos/german league.gif";
        manager.textContent = ""
        substitutes.textContent += "Kobel, Hummels, Laimer, Xhaka, Brandt, Coman, Gnabry";
    }

    if (selectedYear == "4") {
        four_two_three_one("Donnarumma", "Hakimi", "L Hernandez", "Skriniar", "Marquinhos", "Ugarte", "O Dembele", "Vitinha", "Ben Yedder", "Asensio", "Mbappe")
        sidepic.src = "/img/logos/ligue 1.png";
        manager.textContent = ""
        substitutes.textContent += "K Navas, D Pereira, N Mendes, Y Fofana, Kondogbia, K Muani, Lacazette";
    }

    if (selectedYear == "5") {
        four_two_three_one("Rulli", "Geertruida", "Hancko", "Sutalo", "Trauner", "J Henderson", "Berghuis", "Veerman", "S Gimenez", "Pavlidis", "Lozano")
        sidepic.src = "/img/logos/dutch league.gif";
        manager.textContent = ""
        substitutes.textContent += "Unnerstall, Shouten, Dest, Clasie, van den Boomem, N Lang, L de Jong";
    }

    if (selectedYear == "6") {
        four_two_three_one("D Costa", "Aursnes", "N Santos", "K Pepe", "Otamendi", "Kokcu", "Di Maria", "P Goncalves", "Rafa", "R Horta", "J Mario")
        sidepic.src = "/img/logos/portugal league.gif";
        manager.textContent = ""
        substitutes.textContent += "Adan, Coates, A Bah, Florentino, Hjulmand, Edwards, Gyokeres";
    }

    if (selectedYear == "7") {
        four_two_three_one("Bounou", "Abdulhamid", "A Telles", "Laporte", "Koulibaly", "Kante", "Mahrez", "Milinkovic-Savic", "Benzema", "Neymar", "C Ronaldo")
        sidepic.src = "/img/logos/saudi league.webp";
        manager.textContent = ""
        substitutes.textContent += "E Mendy, Ibanez, Carrasco, Fabinho, R Neves, Otavio, Malcom";
    }

    if (selectedYear == "8") {
        four_two_three_one("Livakovic", "Aurier", "Kadioglu", "Bardakci", "Bonucci", "Fred", "Tadic", "Torreira", "Dzeko", "Ziyech", "Zaha")
        sidepic.src = "/img/logos/turkish league.jpg";
        manager.textContent = ""
        substitutes.textContent += "Muslera, D Sanchez, Meunier, Al Musrati, Szymanski, Mertens, Icardi";
    }

    if (selectedYear == "9") {
        four_two_three_one("Lloris", "Akapo", "Alba", "G Andrade", "Zimmerman", "Busquets", "Cucho", "T Almada", "L Suarez", "Messi", "Insigne")
        sidepic.src = "/img/logos/mls league.gif";
        manager.textContent = ""
        substitutes.textContent += "A Blake, Freire, Wagner, H Herrera, C Gil, Bouanga, Mukhtar";
    }
}