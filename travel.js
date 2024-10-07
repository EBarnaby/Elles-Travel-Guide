function typing() {
console.log(typing)
} //knows you're typing

function getData(data, homeInput){
    console.log(data[homeInput.toLowerCase()]) 
} //gets data and makes input lowercase to match the json

function search(homeInput){
    fetch("travel.json")
    .then(res => {
        if(res.ok) return res.json();
    })
    .then(data => getData(data, homeInput)) //assigns func to data and input
    .catch(error => console.log("Something's wrong..."))
}

function cancel(){
    console.log(cancel)
}

/*link the options by returning the json*/

/* create html of boxes for dataaaaaa*/