fetch("travel.json")
    .then(res => {
        if(res.ok) return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log("Error"))
/*gets json file, 
if file is not there, error!*/

function typing() {
console.log(typing)
}

function search(){
    console.log(search)
}

function cancel(){
    console.log(cancel)
    /*resetssssss*/
}

/*make button call function*/
/*create child for searchbar*/