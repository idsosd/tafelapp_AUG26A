let tafelinpObj = document.getElementById("inputTafel");
let tafeloutpObj = document.getElementById("outputTafel");

let oefentafelinpObj = document.getElementById("inputOefenTafel");
let oefentafeloutpObj = document.getElementById("outputOefenTafel");
let antwoefentafelwinpObj = document.getElementById("inputAntwOefenTafel");

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
function toonOpgave()
{
    let output = "";
    let getal = Math.floor(Math.random()*6) + 1;
    output = getal + " x " + oefentafelinpObj.value + " = ";
    oefentafeloutpObj.innerHTML = output;
}
function controleerAntw()
{
    let antw = antwoefentafelwinpObj.value;
    let berekend_antw = 
    //alert ("antwoord = " + antw);
}