let ressources = 5;

function websiteVisits(response){
    document.querySelector("#VisitCounter").textContent = response.value;
}

function checkState(checkbox) {
    if (checkbox.checked) {
        ressources = 4;
    } else {
        ressources = 5;
    }
}

function add() {
    let lvls = "";
    let errorText = "";
    let alert = false;
    let items = 0;
    let lvlLevel = 0;
    let rankLvl = 0;
    let xp = 0;
    let ranksNumber;
    let superiorRank;
    let firstLvl = true;
    let CurrentLvl = parseInt(document.getElementById("currentlvl").value, 10);
    let CurrentXp = parseInt(document.getElementById("currentxp").value, 10);
    let ItemXp = parseInt(document.getElementById("itemxp").value, 10);
    let WantedLvl = parseInt(document.getElementById("wantedlvl").value, 10);
    CurrentLvl = CurrentLvl || 0;
    CurrentXp = CurrentXp || 0;
    ItemXp = ItemXp || 300;
    WantedLvl = WantedLvl || 10;
    ressources = ressources || 0;
    let ranks = Math.ceil((WantedLvl - CurrentLvl) / 10);

    //Tests d'erreur
    if(CurrentLvl >= WantedLvl){
        alert = true;
        errorText += "Erreur: Niveau actuel supérieur ou égal au niveau cible <br>";
    }
    if(ItemXp <= 0){
        alert = true;
        errorText += "Erreur: Nombre d'xp par craft négatif <br>";
    }
    if(CurrentXp < 0){
        alert = true;
        errorText += "Erreur: XP déjà accumulé inférieur à 0 <br>";
    }


    if(alert === false){
        for (ranksNumber = 0; ranksNumber < ranks; ranksNumber++) {
            lvls += "<table class=\"table\"> <thead> <tr> <th scope=\"col\">Du niveau </th> <th scope=\"col\">au niveau</th> <th scope=\"col\">XP nécessaire</th> <th scope=\"col\">ressources individuelles nécessaires</th> <th scope=\"col\">objets à fabriquer</th></tr> </thead>";
            lvls += "<tbody><tr>";
            if (CurrentLvl % 10 !== 0) {
                if (WantedLvl - CurrentLvl < 10) {
                    lvlLevel = WantedLvl;
                } else {
                    ranks++;
                }
                for (let x = CurrentLvl; x < CurrentLvl + 10; x++) {
                    if (x % 10 === 0) {
                        lvlLevel = x;
                        break;
                    }
                }
            } else {
                if (WantedLvl - CurrentLvl < 10) {
                    lvlLevel = WantedLvl;
                } else {
                    lvlLevel = CurrentLvl + 10;
                }
            }
            for (rankLvl = CurrentLvl; rankLvl < lvlLevel; rankLvl++) {
                if (firstLvl === true) {
                    xp += 150 * rankLvl + 75 - CurrentXp;
                    lvls += "<td>" + rankLvl + "</td><td>" + (rankLvl + 1) + "</td><td>" + ((150 * rankLvl + 75) - CurrentXp) + "</td><td>" + Math.ceil(xp / ItemXp) * ressources + "</td><td>" + Math.ceil(xp / ItemXp) + "</td></tr>";
                    firstLvl = false;
                } else {
                    xp = 150 * rankLvl + 75 + xp;
                    lvls += "<td>" + rankLvl + "</td><td>" + (rankLvl + 1) + "</td><td>" + (150 * rankLvl + 75) + "</td><td>" + Math.ceil(xp / ItemXp) * ressources + "</td><td>" + Math.ceil(xp / ItemXp) + "</td></tr>";
                }
            }
            lvls += "</tbody></table>";

            document.getElementById("demo").innerHTML = lvls;
            document.getElementById("demo").style.display = "block";
            document.getElementById("alert").style.display = "none";
            CurrentLvl = rankLvl;
            items = 0;
            errorText = "";
        }
    }else{
        document.getElementById("alert").style.display = "block";
        document.getElementById("demo").style.display = "none";
        document.getElementById("ErrorMessage").innerHTML = errorText;
    }
}

let text = document.lastModified;
document.getElementById("LastModificationDate").innerHTML = text;

