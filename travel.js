function cancel() {
    document.getElementById("homeInput").value = "" //clears searchbar
    let rec = document.getElementById("rec")
    let oldRec = rec.childElementCount

    if (rec.childElementCount){
        for (let linda = 0; linda < oldRec; linda++){
           rec.removeChild(rec.children[0])
        }
    }
    document.getElementById("rightside").style.visibility = "hidden"
}

function style(imageUrl, name, description) {
    let rec = document.getElementById("rec")

    let d1 = document.createElement("div")
    d1.setAttribute("style", "background-color:white;")
    let image = document.createElement("img")
    image.setAttribute("width", "290px")
    image.setAttribute("height", "190px")
    image.setAttribute("src", imageUrl)
    let d2 = document.createElement("div")
    let header = document.createElement("h3")
    header.innerText = name
    let para = document.createElement("p")
    para.innerHTML = description

    rec.appendChild(d1)
    d1.appendChild(image)
    d1.appendChild(d2)
    d2.appendChild(header)
    d2.appendChild(para)
}

function getData(data, homeInput) {
    document.getElementById("rightside").style.visibility = "visible"
    for (let i = 0; i < data[homeInput.toLowerCase()].length; i++) { //if the input is within the data length

        if (homeInput.toLowerCase() == ["countries"]) { //if you select countries

            for (let bob = 0; bob < data[homeInput.toLowerCase()][i].cities.length; bob++) {
                style(data[homeInput.toLowerCase()][i]["cities"][bob]["imageUrl"], data[homeInput.toLowerCase()][i]["cities"][bob]["name"], data[homeInput.toLowerCase()][i]["cities"][bob]["description"])
            }
        } else {
            style(data[homeInput.toLowerCase()][i]["imageUrl"], data[homeInput.toLowerCase()][i]["name"], data[homeInput.toLowerCase()][i]["description"])
        }
    }
}

function search(homeInput) { //whatever you type in
    fetch("travel.json")
        .then(res => {
            if (res.ok) return res.json();
        })
        .then(data => getData(data, homeInput), cancel()) //assigns func to data and input
        .catch(error => console.error("Something's wrong...", error))
}