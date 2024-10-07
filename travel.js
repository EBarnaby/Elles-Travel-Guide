fetch("travel.json")
    .then(res => {
        if(res.ok) return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log("Something's wrong..."))
/*gets json file, 
if file is not there, error!*/

const keys = Object.keys("travel.json")
/*gets the keys from json*/

// const obj = JSON.parse(keys)
// console.log(obj)

function typing() {
console.log(typing)
}

function search(){
      console.log(keys);
}

function cancel(){
    console.log(cancel)
}

/*html button, get elementbyid list of options
then link the options by returning the json*/