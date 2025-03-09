'use strict';
function displayGalaxy() {
    let galaxyName = document.getElementById('galaxyInput').value;
    //Displays text including the text the user entered
    if (galaxyName !== "") {
        document.getElementById("outputText").textContent = `Displaying pets from the ${galaxyName} Galaxy branch.`;
        //Shows hidden divs containing pet info
        const showElements = document.getElementsByClassName('pets');
        for (let i = 0; i < showElements.length; i++) {
            showElements[i].style.display = 'block';
        }
    }
}
