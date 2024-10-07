fetch("travel.json")
    .then(res => {
        if(res.ok) return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log("Something's wrong..."))
/*gets json file, if file is not there, error!*/

const keys = Object.keys("travel.json")
/*gets the keys from json*/
console.log(keys["countries"])

function typing() {
console.log(typing)
}

function search(homeInput){
      console.log(homeInput);
}
/*when press search, links options*/

function cancel(){
    console.log(cancel)
}

/*html button, get elementbyid list of options
then link the options by returning the json*/

/* {} is object [] is array*/