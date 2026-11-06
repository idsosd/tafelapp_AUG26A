//je wilt toegang hebben tot de verschillende objecten in de toon-tafel-app
let tafelinpObj = document.getElementById("inputTafel");
let tafeloutpObj = document.getElementById("outputTafel");
//je wilt toegang hebben tot de verschillende objecten in de tafel-oefenapp
let oefentafelinpObj = document.getElementById("inputOefenTafel");
let oefentafeloutpObj = document.getElementById("outputOefenTafel");
let antwoefentafelwinpObj = document.getElementById("inputAntwOefenTafel");
//het berekend antwoord moet beschikbaar zijn over de functies heen
let berekend_antw = 0;
//wordt getriggerd door de onclick-event onder de 'Toon de tafel'-knop
function toonTafel()
{
    let output = "";
    let uitkomst = 0;
    for (let teller = 1; teller < 11; teller++){
        uitkomst = teller * tafelinpObj.value;
        output += teller + " x " + tafelinpObj.value + " = " + uitkomst + "<br>";
    }
    tafeloutpObj.innerHTML = output;
}
//wordt getriggerd door de onclick-event onder de 'GO'-knop
function toonOpgave()
{
    //genereer een heel getal tussen 1 en 10
    let getal = Math.floor(Math.random()*10) + 1;
    //bereken het juiste antwoord en zet het in de globale variabele 'berekend_antw'
    berekend_antw = getal * oefentafelinpObj.value;
    //maak de tekst die in beeld moet komen
    let output = getal + " x " + oefentafelinpObj.value + " = ";
    //zet de output in de html
    oefentafeloutpObj.innerHTML = output;
}
//wordt getriggerd door de onclick-event onder de 'CHECK'-knop
function controleerAntw()
{
    if(antwoefentafelwinpObj.value == berekend_antw)
        alert ("antwoord is goed ");
    else
        alert ("antwoord is fout");
}