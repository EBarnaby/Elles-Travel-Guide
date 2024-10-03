fetch("travel.json")
    .then(res => {
        if(res.ok) return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log("Error"))
/*if json is not there, error!*/

function search() {
console.log(search)
}

/*make button call function*/
/*create child for searchbar*/