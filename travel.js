function typing() {
    console.log(typing)
}

function cancel() {
    console.log(cancel)
}

function search(homeInput) {
    fetch("travel.json")
        .then(res => {
            if (res.ok) return res.json();
        })
        .then(data => getData(data, homeInput)) //assigns func to data and input
        .catch(error => console.log("Something's wrong..."))
}


function getData(data, homeInput) {
    console.log(data[homeInput.toLowerCase()]) //logs what option you've picked
    for (let i = 0; i < data[homeInput.toLowerCase()].length; i++) {
        console.log(data[homeInput.toLowerCase()][i])
        
        // let el  = data[homeInput.toLowerCase()][i]
        // console.log(el, el.imageUrl)

        let rec = document.getElementById("rec") //gets recommendation div

        //creating top option
        let d1 = document.createElement("div") //creates div1
        d1.setAttribute("style", "background-color:white;")
        let image = document.createElement("img") //creates image
        image.setAttribute("width", "290px")
        image.setAttribute("height", "190px")
        image.setAttribute("src", data[homeInput.toLowerCase()][i]["imageUrl"])
        let d2 = document.createElement("div") //creates div2
        let header = document.createElement("h3") //creates header
        header.innerText = data[homeInput.toLowerCase()][i]["name"]
        let para = document.createElement("p") //creates paragraph
        para.innerHTML = data[homeInput.toLowerCase()][i]["description"]

        rec.appendChild(d1) //assigns div1 to reccomendation div
        d1.appendChild(image) //assigns image to div1
        d1.appendChild(d2) //assigns div2 to div1
        d2.appendChild(header) //assigns header to div2
        d2.appendChild(para) //assigns paragraph to div2
    }
}