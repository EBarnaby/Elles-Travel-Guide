function typing() {
    console.log(typing)
} //knows you're typing

function getData(data, homeInput) {
    console.log(data[homeInput.toLowerCase()])
    for(){
        
    }



    let rec = document.getElementById("rec")
    console.log("HERE")
    let d1 = document.createElement("div")
    console.log("HERE1")
    let image = document.createElement("img")
    console.log("HERE2")
    image.setAttribute("width", "100px")
    image.setAttribute("src", "https://images4.alphacoders.com/743/743533.jpg")
    console.log("HERE3")
    d1.appendChild(image)
    console.log("HERE7")
    let d2 = document.createElement("div")
    console.log("div2222")
    let para = document.createElement("p")
    para.innerHTML = "Welcome to Australia"
    let header = document.createElement("h3")
    header.innerText = "Sydneyyyyy"
    d2.appendChild(header)
    d2.appendChild(para)
    d1.appendChild(d2)
    rec.appendChild(d1)
} //gets data and makes input lowercase to match the json

function search(homeInput) {
    fetch("travel.json")
        .then(res => {
            if (res.ok) return res.json();
        })
        .then(data => getData(data, homeInput)) //assigns func to data and input
        .catch(error => console.log("Something's wrong..."))
}

function cancel() {
    console.log(cancel)
}

/*link the options by returning the json*/

/* create html of boxes for dataaaaaa*/