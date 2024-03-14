let rolly = document.querySelector(".btn-dice");
let result = document.querySelector(".dice");
let ulist = document.querySelector(".container");

rolly.addEventListener("click", function () {
    result.classList.add("roll-animation");
    setTimeout(function () {
        result.classList.remove("roll-animation");
    }, 1000)
    callRandomly();

});


let historyList = [];
function callRandomly() {

    const rand = Math.floor(Math.random() * 5) + 1;
    const resul = changeDice(rand);
    console.log("CallRandomly: " + resul);
    historyList.push(rand);
    result.innerHTML = resul;



    updatehistory();
}

function changeDice(rand) {
    console.log("ChangeDice: " + rand);
    if (rand === 1) {
        return "&#9856;";
    }
    else if (rand === 2) {
        return "&#9857;";
    }
    else if (rand === 3) {
        return "&#9858;";
    }
    else if (rand === 4) {
        return "&#9859;";
    }
    else if (rand === 5) {
        return "&#9860;";
    }
    else {
        return " ";
    }

}

function updatehistory() {
    ulist.innerHTML = " ";
    console.log("update history, historyList: " + historyList)

    // for(let i=1; i<=historyList.length; i++){
    for (let i = 0; i < historyList.length; i++) {
        const lis = document.createElement("li");
        // lis.innerHTML = `Roll ${i} : <span> ${changeDice(historyList[i])}</span>`;
        lis.innerHTML = `Roll ${i + 1} : <span> ${changeDice(historyList[i])}</span>`;
        ulist.appendChild(lis);
    }


}






