function typing() {
    console.log(typing)
}

function cancel() {
    console.log(cancel)
}

function getData(data, homeInput) {
    console.log(data[homeInput.toLowerCase()]) //logs what option you've picked
    // for(let i = 0; i< data[homeInput.toLowerCase()].length; i++){
        
    // }

    let rec = document.getElementById("rec") //gets recommendation div
    let d1 = document.createElement("div") //creates div d1
    d1.setAttribute("style", "background-color:white;")
    let image = document.createElement("img") //creates image
    image.setAttribute("width", "400px")
    image.setAttribute("height", "300px")
    image.setAttribute("src", "https://images4.alphacoders.com/743/743533.jpg")

    let d2 = document.createElement("div") //creates div2
    let header = document.createElement("h3") //creates header
    header.innerText = "Sydney"
    let para = document.createElement("p") //creates paragraph
    para.innerHTML = "A vibrant city known for its iconic landmarks like<br> the Sydney Opera House and Sydney Harbour Bridge."

    rec.appendChild(d1) //assigns div1 to reccomendation div
    d1.appendChild(image) //assigns image to div1
    d1.appendChild(d2) //assigns div2 to div1
    d2.appendChild(header) //assigns header to div2
    d2.appendChild(para) //assigns paragraph to div2
}

function search(homeInput) {
    fetch("travel.json")
        .then(res => {
            if (res.ok) return res.json();
        })
        .then(data => getData(data, homeInput)) //assigns func to data and input
        .catch(error => console.log("Something's wrong..."))
}