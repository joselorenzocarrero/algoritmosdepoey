function cargar(){
    const menu = [{familia:"DMAE",patologia:["DMAE exudativa"]},{familia:"Neurophtalmologie",patologia:["Anisocoria","defauts caampimetriques","diplopie"]},{familia:"Ophtalmologie pediatrique et strabisme",patologia:["Amblyopie"]}]
    fetch (menu)
     .then(x => x.text())
     .then(y => document.getElementById("txtHint").innerHTML = y);
}
 
